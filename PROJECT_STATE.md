# Content Design Agent — Project State
**Last updated:** August 16, 2026
**Repo:** github.com/keri-maijala/content-design-agent
**Live URL:** https://keri-maijala.github.io/content-design-agent

---

## What this project is

A standalone, LLM-agnostic content design agent built as a portfolio piece demonstrating systems thinking for Apple Home-focused content design roles. It loads style guides, answers content questions, looks up specific rules, brainstorms copy options, and critiques screenshots — all grounded in the loaded guide content.

The agent is framed as a demonstration of how Keri thinks about content systems at scale, not a replication of Apple's internal tooling.

---

## Current file structure

```
content-design-agent/
├── index.html                   ← Full app. Contains inlined prompts as authoritative fallback.
├── prompts.js                   ← Reasoning layer. Edit this for prompt changes.
├── SYSTEM_PROMPTS.md            ← Documents prompt architecture. STALE — needs updating.
├── PROJECT_STATE.md             ← This file.
├── DECISIONS.md                 ← Key architectural decisions and rationale.
├── GOVERNANCE.md                ← Two-tier governance model documentation.
├── README.md                    ← Deployment instructions.
└── guides/
    ├── apple-guidelines.md      ← Tier 1: HIG + HomeKit + Privacy combined. Auto-loads.
    │                               NEW: Formatting section added (link labels, alert headers,
    │                               body copy capitalization).
    ├── apple-home-voice-tone.md ← Tier 2: Home voice, tone, AND marketing annotations. Auto-loads.
    │                               NEW: "Home Hub" added to Always Use / Never Use tables.
    ├── apple-hig.md             ← Source file. Not loaded by agent directly.
    ├── apple-homekit.md         ← Source file. Not loaded by agent directly.
    └── apple-privacy.md        ← Source file. Not loaded by agent directly.

Figma plugin (local only, not in repo yet):
~/Desktop/content-design-agent/Figma/Content Design Agent/
├── manifest.json
├── code.ts                      ← Plugin logic. Reads text nodes, applies fixes.
├── code.js                      ← Compiled output.
├── ui.html                      ← Plugin UI. Native Figma aesthetic.
├── package.json
└── tsconfig.json
```

---

## What's working

**Browser agent**
- Loads apple-guidelines.md + apple-home-voice-tone.md simultaneously on startup
- Infers question type (lookup / explore / critique) without mode switching
- Screenshot upload and critique working — tested against Home Hub error message screenshot
- All five issues in the critique screenshot are now caught:
  1. "You're" → "Your" (typo)
  2. "HomeHub" → "Home Hub" (two words)
  3. Alert header casing → title case
  4. "AppleTV" → "Apple TV" (two words)
  5. "Learn more >" → "Learn More" (title case, no arrow)
- Demo sequence locked (see below)

**Guide updates (committed to GitHub)**
- apple-guidelines.md: new Formatting section covering link label casing, alert/notification header casing, "home" capitalization in body copy
- apple-home-voice-tone.md: "Home Hub" added to Always Use and Never Use terminology tables

**Demo sequence (locked)**
1. Lookup — "What's the Apple Home guideline for how to write an automation trigger name?"
2. Explore — "I'm writing a push notification for when a Home sensor detects motion while the user is away. What should I consider?"
3. Critique — upload Home Hub screenshot, ask "Can you critique this error message?"
4. Collaborative loop — "I need a hero headline for HomePod mini. Something that leads with the sound experience. Give me a few directions."

**Figma plugin (working, apply bug in progress)**
- Plugin scaffolded and running locally in Figma Desktop
- UI: native Figma aesthetic — Inter font, Figma gray palette, tight and functional
- Scans selected frame, reads all text nodes, sends to Anthropic API
- Returns error cards with before/after and rule citations
- Dismiss button on each card (fades card, removes from apply queue)
- Apply button writes corrections back to Figma canvas
- KNOWN BUG: Apply only works on the last/simplest node. Complex nodes (multiple issues in one text node) are not being written back correctly. Root cause: index-based matching not landing. Debug logging added to code.ts — need to read console output to diagnose.

---

## What's next

**High priority**
- Fix Figma plugin apply bug — need to read console output (Plugins → Development → Show/Hide Console) after hitting Apply to see what nodes and fixes look like. The debug logs are in place.
- Add plugin to GitHub repo once apply is working

**Medium priority**
- SYSTEM_PROMPTS.md update — currently documents old four-mode architecture, needs rewrite for auto-mode + two-tier model
- apple-glossary.md — shared terminology across all Apple Services

**Low priority / future**
- Tier 2 decision logs: apple-card-decisions.md, apple-fitness-decisions.md, apple-health-decisions.md
- Persistent conflict log

---

## Known issues

- **Figma plugin apply bug**: Apply writes to canvas but only the simplest/last node. Index matching in code.ts not working as expected. Debug logs are in place — next step is reading the console output to see what's landing.
- SYSTEM_PROMPTS.md is stale
- prompts.js edits on GitHub must be manually synced into index.html inline block

---

## Figma plugin — how it works

**Architecture**
- Standalone Figma plugin (Option A — native, self-contained)
- Plugin reads text nodes from selected frame via Figma plugin API
- Sends node list to Anthropic API (claude-sonnet-4-6) with Apple Home guidelines embedded in system prompt
- Returns JSON with issues: index, layer, original, corrected, rule, severity
- Dismiss button nulls out a fix from the pending queue
- Apply sends active fixes back to code.ts, which matches by index and writes to canvas

**File locations**
- Local: ~/Desktop/content-design-agent/Figma/Content Design Agent/
- Not yet in GitHub repo

**To run**
1. Open Figma Desktop
2. Right-click canvas → Plugins → Development → Content Design Agent
3. Enter Anthropic API key, hit Save
4. Select a frame, hit Scan

**To rebuild after edits**
```
cd ~/Desktop/content-design-agent/Figma/Content\ Design\ Agent
npm run build
```

---

## Prompt architecture (current)

prompts.js contains:
- HOME_KEYWORDS_CLEAR — triggers automatic Tier 2 load
- HOME_KEYWORDS_AMBIGUOUS — triggers clarifying question
- detectDomain() — keyword detection function
- BASE_PROMPT — always active, core behavior
- AUTO_PROMPT — inferred mode behavior
- buildSystemPrompt() — assembles base + guide + optional Tier 2 + AUTO_PROMPT

---

## How to start a new session

Paste this into a new Claude conversation:

"I'm continuing work on my Content Design Agent portfolio project. Here's the current state: [paste this file]. Live site: https://keri-maijala.github.io/content-design-agent. Repo: github.com/keri-maijala/content-design-agent. Figma plugin is local at ~/Desktop/content-design-agent/Figma/Content Design Agent/. Today I'd like to work on: [what you want to do]. Here are the relevant files: [paste code.ts and/or ui.html as needed]."

---

## Portfolio framing

For a Home role: "Here's how I'd give a content team a shared tool grounded in our guidelines — covering both UI copy and marketing surfaces, with governance built into the architecture."

For a Systems role: "Here's how I'd structure a content system that scales across products, keeps humans in the decision loop, distributes ownership across teams, and makes governance decisions visible rather than hidden."

The through-line: I build systems that help people make better decisions together, not systems that make decisions for them.
