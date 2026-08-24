// Content Design Agent — Figma Plugin
// Reads text nodes from the selected frame and sends them to the UI for evaluation.
// Receives fix instructions from the UI and applies them back to the canvas.

figma.showUI(__html__, { width: 340, height: 520, title: 'Content Design Agent' });

// ── Notify UI of current selection ──────────────────────────────────────────

function notifySelection() {
  const sel = figma.currentPage.selection;
  if (sel.length === 0) {
    figma.ui.postMessage({ type: 'selection-change', hasSelection: false });
  } else {
    figma.ui.postMessage({
      type: 'selection-change',
      hasSelection: true,
      name: sel[0].name
    });
  }
}
notifySelection();
figma.on('selectionchange', notifySelection);

// ── Collect all text nodes from selected frame ───────────────────────────────

function getTextNodes(node: SceneNode): { name: string; content: string; id: string }[] {
  const results: { name: string; content: string; id: string }[] = [];
  if (node.type === 'TEXT') {
    const content = node.characters.trim();
    if (content.length > 0) {
      results.push({ name: node.name, content, id: node.id });
    }
    return results;
  }
  if ('children' in node) {
    for (const child of node.children) {
      results.push(...getTextNodes(child));
    }
  }
  return results;
}

// ── Load all fonts used in a text node ──────────────────────────────────────

async function loadAllFonts(figmaNode: TextNode): Promise<void> {
  const seen = new Set<string>();
  for (let i = 0; i < figmaNode.characters.length; i++) {
    const fn = figmaNode.getRangeFontName(i, i + 1) as FontName;
    if (fn && 'family' in fn) {
      const key = fn.family + '::' + fn.style;
      if (!seen.has(key)) {
        seen.add(key);
        await figma.loadFontAsync(fn);
      }
    }
  }
}

// ── Capture full per-character style map ─────────────────────────────────────
// Returns an array of style objects, one per character.

interface CharStyle {
  fontName: FontName | PluginAPI['mixed'];
  fontSize: number | PluginAPI['mixed'];
  fills: Paint[] | PluginAPI['mixed'];
  letterSpacing: LetterSpacing | PluginAPI['mixed'];
  lineHeight: LineHeight | PluginAPI['mixed'];
  textDecoration: TextDecoration | PluginAPI['mixed'];
}

function captureStyles(figmaNode: TextNode): CharStyle[] {
  const len = figmaNode.characters.length;
  const styles: CharStyle[] = [];
  for (let i = 0; i < len; i++) {
    styles.push({
      fontName: figmaNode.getRangeFontName(i, i + 1),
      fontSize: figmaNode.getRangeFontSize(i, i + 1),
      fills: figmaNode.getRangeFills(i, i + 1),
      letterSpacing: figmaNode.getRangeLetterSpacing(i, i + 1),
      lineHeight: figmaNode.getRangeLineHeight(i, i + 1),
      textDecoration: figmaNode.getRangeTextDecoration(i, i + 1),
    });
  }
  return styles;
}

// ── Re-apply style map to a node after text replacement ──────────────────────
// styleMap: array of per-character styles from the original text
// replacements: { start, end, replacement } sorted by start
// Characters outside replaced ranges keep their original style;
// characters inside replaced ranges inherit the style of the first character of that range.

interface Replacement {
  start: number;
  end: number;
  replacement: string;
}

function applyStyleMap(figmaNode: TextNode, styleMap: CharStyle[], replacements: Replacement[]): void {
  const newLen = figmaNode.characters.length;
  const sorted = [...replacements].sort((a, b) => a.start - b.start);
  const newStyleMap: number[] = [];
  let origPos = 0;

  for (const rep of sorted) {
    while (origPos < rep.start) {
      newStyleMap.push(origPos);
      origPos++;
    }
    const sourceStyle = rep.start < styleMap.length ? rep.start : styleMap.length - 1;
    for (let i = 0; i < rep.replacement.length; i++) {
      newStyleMap.push(sourceStyle);
    }
    origPos = rep.end;
  }
  while (origPos < styleMap.length) {
    newStyleMap.push(origPos);
    origPos++;
  }

  let i = 0;
  while (i < newStyleMap.length && i < newLen) {
    const si = newStyleMap[i];
    const style = styleMap[si];
    if (!style) { i++; continue; }

    let j = i + 1;
    while (j < newStyleMap.length && j < newLen && newStyleMap[j] === si) j++;

    try { if (style.fontName && typeof style.fontName === 'object' && 'family' in style.fontName) figmaNode.setRangeFontName(i, j, style.fontName as FontName); } catch(e) {}
    try { if (typeof style.fontSize === 'number') figmaNode.setRangeFontSize(i, j, style.fontSize); } catch(e) {}
    try { if (Array.isArray(style.fills)) figmaNode.setRangeFills(i, j, style.fills as Paint[]); } catch(e) {}
    try { if (style.letterSpacing && typeof style.letterSpacing === 'object') figmaNode.setRangeLetterSpacing(i, j, style.letterSpacing as LetterSpacing); } catch(e) {}
    try { if (style.lineHeight && typeof style.lineHeight === 'object') figmaNode.setRangeLineHeight(i, j, style.lineHeight as LineHeight); } catch(e) {}
    try { if (style.textDecoration) figmaNode.setRangeTextDecoration(i, j, style.textDecoration as TextDecoration); } catch(e) {}

    i = j;
  }
}

// ── Find fragment in text, tolerating whitespace/newline/quote differences ───
// Returns { start, end } in the raw text, or null if not found.

function findFragment(text: string, fragment: string, hintIndex?: number | null): { start: number; end: number } | null {
  const normalize = (s: string) => s
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\n\r]/g, ' ');

  // Word boundary check: prevents matching "Home" inside "HomeHub"
  const isWordBoundaryMatch = (t: string, i: number, frag: string): boolean => {
    const before = i > 0 ? t[i - 1] : ' ';
    const after = i + frag.length < t.length ? t[i + frag.length] : ' ';
    const beforeOk = /[\s\W"']/.test(before);
    const afterOk = !/[a-zA-Z0-9]/.test(after);
    return beforeOk && afterOk;
  };

  // If model provided an index, validate it before trusting it
  if (hintIndex !== undefined && hintIndex !== null && hintIndex >= 0 && hintIndex + fragment.length <= text.length) {
    const slice = normalize(text.slice(hintIndex, hintIndex + fragment.length));
    if (slice === normalize(fragment) && isWordBoundaryMatch(text, hintIndex, fragment)) {
      return { start: hintIndex, end: hintIndex + fragment.length };
    }
    for (let delta = -5; delta <= 5; delta++) {
      if (delta === 0) continue;
      const i = hintIndex + delta;
      if (i < 0 || i + fragment.length > text.length) continue;
      if (normalize(text.slice(i, i + fragment.length)) === normalize(fragment) && isWordBoundaryMatch(text, i, fragment)) {
        return { start: i, end: i + fragment.length };
      }
    }
  }

  // Exact string search with word boundary check
  let searchFrom = 0;
  while (searchFrom < text.length) {
    const exact = text.indexOf(fragment, searchFrom);
    if (exact === -1) break;
    if (isWordBoundaryMatch(text, exact, fragment)) {
      return { start: exact, end: exact + fragment.length };
    }
    searchFrom = exact + 1;
  }

  // Normalized search (handles curly quotes, newlines — 1:1 char mapping)
  const normText = normalize(text);
  const normFrag = normalize(fragment);
  let normFrom = 0;
  while (normFrom < normText.length) {
    const normIdx = normText.indexOf(normFrag, normFrom);
    if (normIdx === -1) break;
    if (isWordBoundaryMatch(normText, normIdx, normFrag)) {
      return { start: normIdx, end: normIdx + normFrag.length };
    }
    normFrom = normIdx + 1;
  }

  return null;
}

// ── Apply fixes to text nodes ────────────────────────────────────────────────

interface Fix {
  index?: number;
  layerName: string;
  original: string;
  corrected: string;
  fragment?: string;
  fragment_index?: number | null;
  fragment_corrected?: string;
}

async function applyFixes(fixes: Fix[]): Promise<void> {
  const sel = figma.currentPage.selection;
  if (sel.length === 0) {
    figma.ui.postMessage({ type: 'fixes-applied', success: false, error: 'No frame selected.' });
    return;
  }

  const allTextNodes = getTextNodes(sel[0]);
  let appliedCount = 0;

  // Group fixes by node
  const fixesByNode = new Map<string, Fix[]>();
  for (const fix of fixes) {
    const node = (fix.index !== undefined && allTextNodes[fix.index])
      ? allTextNodes[fix.index]
      : allTextNodes.find(n => n.content === fix.original);
    if (!node) { continue; }
    if (!fixesByNode.has(node.id)) fixesByNode.set(node.id, []);
    fixesByNode.get(node.id)!.push(fix);
  }

  for (const [nodeId, nodeFixes] of fixesByNode) {
    const figmaNode = figma.getNodeById(nodeId) as TextNode;
    if (!figmaNode || figmaNode.type !== 'TEXT') { continue; }

    try {
      await loadAllFonts(figmaNode);
    } catch(e) {
      continue;
    }

    const styleMap = captureStyles(figmaNode);
    const originalText = figmaNode.characters;

    const replacements: Replacement[] = [];
    for (const fix of nodeFixes) {
      if (!fix.fragment || fix.fragment_corrected === undefined || fix.fragment_corrected === null) {
        continue;
      }
      const loc = findFragment(originalText, fix.fragment, fix.fragment_index);
      if (!loc) { continue; }

      const overlaps = replacements.some(r => loc.start < r.end && loc.end > r.start);
      if (overlaps) { continue; }

      replacements.push({ start: loc.start, end: loc.end, replacement: fix.fragment_corrected });
      appliedCount++;
    }

    if (replacements.length === 0) continue;

    // Build new string back-to-front to preserve indices
    replacements.sort((a, b) => b.start - a.start);
    let newText = originalText;
    for (const rep of replacements) {
      newText = newText.slice(0, rep.start) + rep.replacement + newText.slice(rep.end);
    }

    figmaNode.characters = newText;

    replacements.sort((a, b) => a.start - b.start);
    applyStyleMap(figmaNode, styleMap, replacements);
  }

  figma.commitUndo();
  figma.ui.postMessage({ type: 'fixes-applied', success: true, count: appliedCount });
}

// ── Message handler ──────────────────────────────────────────────────────────

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'get-text') {
    const sel = figma.currentPage.selection;
    if (sel.length === 0) {
      figma.ui.postMessage({ type: 'text-content', texts: [], nodes: [] });
      return;
    }
    const texts = getTextNodes(sel[0]);
    figma.ui.postMessage({
      type: 'text-content',
      texts: texts,
      nodes: texts.map(t => t.id)
    });
  }
  if (msg.type === 'apply-fixes') {
    await applyFixes(msg.fixes);
  }
  if (msg.type === 'save-key') {
    await figma.clientStorage.setAsync('anthropic-api-key', msg.key);
    figma.ui.postMessage({ type: 'key-saved' });
  }
  if (msg.type === 'load-key') {
    const key = await figma.clientStorage.getAsync('anthropic-api-key');
    figma.ui.postMessage({ type: 'key-loaded', key: key || '' });
  }
};
