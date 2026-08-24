# Decisions

A log of significant architectural, design, and governance decisions made during the build of the Content Design Agent. Entries are added when a decision is made — not retroactively cleaned up. Newest first.

---

## August 24, 2026

### Single source of truth for guidelines
**Decision:** All surfaces that evaluate copy against Apple guidelines — currently the web agent and the Figma plugin — must derive their rules from the same source: the guide files in `/guides/`.

**Rationale:** The agent and the plugin were built independently and had diverged. The plugin's system prompt was written by hand and covered only a subset of the guidelines in `/guides/`. This is a content consistency problem: a violation the agent catches should be caught by the plugin, and vice versa. The point of the system is consistency across surfaces.

**What this means:** The plugin system prompt is a distillation of the guide files, not an independent ruleset. When a guide file changes, both surfaces update. Discrepancies are bugs. Principle documented in `GOVERNANCE.md`.

---

## August 23, 2026

### Fuzzy keyword matching for guide loading
**Decision:** Added Levenshtein distance matching as a fallback for domain detection, so misspelled Home-related terms (e.g. "homkit", "homekti", "homepd") still trigger the correct guide load.

**Rationale:** Users typing quickly or on mobile will misspell product names. Hard-coded keyword matching would silently fail to load the right guide. Fuzzy matching makes the system resilient without surfacing the mechanism to the user.

**Thresholds:** Distance ≤ 1 for short keywords; ≤ 2 for longer terms. Tuned to avoid false positives on unrelated words.

### Multi-image upload
**Decision:** Support up to 5 images per message, multi-file selection in one pick, rendered as a grid in the chat bubble.

**Rationale:** Real-world use involves reviewing full flows, not single screens. Limiting to one image per message would require multiple round trips for the most common use case.

**Context detection:** The agent detects whether uploaded images represent a flow (sequential screens) or a comparison (variants) and responds accordingly. Flow order is confirmed with the user before analysis.

### Marketing boundary enforcement
**Decision:** The agent holds the line on marketing copy requests and redirects to the Marketing team. A JavaScript surface check fires before the API call — if a marketing signal is detected without an explicit surface declaration, the agent asks a clarifying question rather than proceeding.

**Rationale:** The agent's scope is UI copy (UX Writing) and related surfaces. Marketing copy has a different owner, different register, and different rules. Conflating the two would undermine both the agent's usefulness and the surface ownership model.

### Surface ownership in system prompt and GOVERNANCE.md
**Decision:** The agent knows which team owns each surface (UX Writing, Marketing, Privacy, Developer Relations) and names the owning team when redirecting out-of-scope requests.

**Rationale:** Redirecting without context is unhelpful. Naming the team makes the redirect actionable and models good cross-functional practice.

### Terminology correction
**Decision:** The agent flags misused Apple terms in user prompts before responding — e.g. "error message" → "alert," "click" → "tap," "login" → "sign in."

**Rationale:** If the user uses incorrect terminology in their request, any copy the agent generates may inherit those terms. Correcting at the prompt level is more reliable than correcting in the output.

### Screenshot chip opens file picker directly
**Decision:** The screenshot upload chip opens the file picker immediately on tap, rather than sending a message to the chat thread.

**Rationale:** The previous behavior (chip → message → file picker) added an unnecessary step and left a literal "Check screenshots for errors" message in the chat history before any images were attached. Direct file picker is faster and cleaner.

### Demo prompt chips updated
**Decision:** Prompt chips updated to: "What help does this agent offer?", "Brainstorm a headline", "Check screenshots for errors."

**Rationale:** Previous chips were generic. Updated chips reflect the agent's actual capabilities and map to the three main demo narratives: scope, creative assist, and screenshot review.

---

## Pre-August 23 (founding decisions)

### Silent guide loading — no user-facing guide picker
**Decision:** Guides load invisibly on boot and in response to contextual signals. There is no guide picker or guide management UI visible to the user.

**Rationale:** The intelligence of the system should be invisible. Guide selection is a content design decision, not a user decision. Exposing a picker would imply the user needs to manage the system — the opposite of the intended experience. "The intelligence is invisible to the user" is a deliberate architectural principle.

### Contextual Tier 2 guide loading
**Decision:** Home-related keywords in user messages trigger a silent load of `apple-home-voice-tone.md` as a second context layer, on top of the always-loaded base guides.

**Rationale:** Loading all guides for every query is wasteful and dilutes the context window. Loading guides contextually keeps the agent sharp on the topic at hand.

### Guide file ordering matters
**Decision:** Content that must be reliably surfaced in responses should appear early in its guide file. Apple Style Guide content appears first in `apple-guidelines.md`.

**Rationale:** LLMs weight earlier context more heavily. Critical reference material placed late in a large file may be underweighted or missed.

### Figma plugin as a separate surface
**Decision:** The Figma plugin is a distinct build (`Figma/Content Design Agent/`) with its own UI, API call, and system prompt — not a wrapper around the web agent.

**Rationale:** The Figma context requires fundamentally different interaction patterns: frame selection, node-level text extraction, in-canvas fix application, style preservation. A shared codebase would have required too many compromises. The plugin and agent share guidelines (by principle) but not code.

### Fragment-level fixes in Figma plugin
**Decision:** The plugin reports violations at the fragment level (the specific wrong word or phrase) rather than the full node text, and applies fixes back-to-front against the original text to avoid index drift.

**Rationale:** Full-node replacement is destructive and error-prone when a node has multiple violations or mixed formatting. Fragment-level targeting is more precise, supports per-character style preservation, and allows multiple independent fixes per node.

### Per-character style map capture and restore
**Decision:** Before applying any fix, the plugin captures a full per-character style map (font, size, fills, letter spacing, line height, text decoration) and restores it after text replacement.

**Rationale:** Figma loses mixed text formatting on character replacement. Without explicit style restoration, applying a fix to a node with bold or colored text would flatten all formatting to the node default.

### Single undo step via figma.commitUndo()
**Decision:** All fixes in a single Apply All operation are committed as one undo step.

**Rationale:** Multiple undo steps for a single intentional action is disruptive. One Cmd+Z undoes the entire Apply All, which matches user expectation.
