# Content Design Agent — Project State
**Last updated:** August 2026
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
├── index.html                   ← Full app. Rarely needs editing.
├── prompts.js                   ← Reasoning layer. Edit this for prompt changes.
├── SYSTEM_PROMPTS.md            ← Documents prompt architecture and reasoning.
├── PROJECT_STATE.md             ← This file.
├── DECISIONS.md                 ← Key architectural decisions and rationale.
├── README.md                    ← Deployment instructions.
└── guides/
    ├── apple-guidelines.md      ← Tier 1: HIG + HomeKit + Privacy combined. Auto-loads.
    ├── apple-home-voice-tone.md ← Tier 2: Home product voice and tone. Also auto-loads.
    ├── apple-hig.md             ← Source file. Not loaded by agent directly.
    ├── apple-homekit.md         ← Source file. Not loaded by agent directly.
    └── apple-privacy.md         ← Source file. Not loaded by agent directly.
```

---

## What's working

**Agent behavior**
- Loads apple-guidelines.md + apple-home-voice-tone.md simultaneously on startup
- Infers question type (lookup / explore / critique) without mode switching
- Asks one clarifying question only when context is genuinely missing
- Leads responses with corrected copy first, reasoning after
- Scales response length to question complexity
- No markdown tables in responses
- Reference links appear only when they add genuine value

**UI**
- iOS-style chat bubbles — gray received, blue sent, with tails
- 2-inch margins on both sides of the chat
- 24px gap between conversation turns
- HIG-compliant visual design — system font, Apple blue (#007aff), warm grays
- Settings panel for LLM provider and API key (Anthropic, OpenAI, Gemini, Mistral)
- Guide pill in topbar shows active guide with green pulsing dot
- Screenshot upload always visible in input bar
- API key persists via sessionStorage within a tab session

**Deployment**
- GitHub Pages at keri-maijala.github.io/content-design-agent
- Edit prompts.js directly in GitHub browser — changes live in ~1 minute
- index.html contains inlined prompts as authoritative fallback

---

## What's next

**Governance — two-tier document loading (not yet built)**
- Architecture: keyword detection + clarifying question triggers Tier 2 doc loading
- Detection logic needs to be built into the agent
- Conflict logging: surface in chat as formatted message user can copy
- Future Tier 2 docs needed: apple-card.md, apple-fitness.md, apple-health.md

**SYSTEM_PROMPTS.md**
- Needs updating to reflect auto-mode architecture (mode switching was removed)

**Demo sequence**
- 3-4 prepared questions showing lookup, explore, critique, and collaborative loop

**Figma skill**
- SKILL.md and FIGMA_SETUP.md exist but not yet added to GitHub repo

**GOVERNANCE.md**
- Two-tier model needs to be documented as a portfolio artifact before building

---

## Known issues

- Bubble tail shape is close but not perfect
- SYSTEM_PROMPTS.md is stale — reflects old four-mode architecture
- prompts.js edits on GitHub must be manually synced into index.html inline block
- No persistent conflict logging — flagged conflicts disappear when session ends

---

## Key decisions

- LLM-agnostic: provider switching via settings panel
- Prompts as content: prompts.js is a separate editable content layer
- Separate guide ownership: individual .md files maintained separately, combined for agent use
- Human in the loop: agent offers options for subjective questions, never makes final calls
- Ask first: clarifying question only when context is genuinely missing
- Corrected copy leads: answer before reasoning, always
- No tables in responses: banned from all agent output

---

## How to start a new session

Paste this into a new Claude conversation:

"I'm continuing work on my Content Design Agent portfolio project. Here's the current state: [paste this file]. Live site: https://keri-maijala.github.io/content-design-agent. Repo: github.com/keri-maijala/content-design-agent. I edit prompts.js directly on GitHub. Today I'd like to work on: [what you want to do]. Here are the relevant files: [paste file contents]."

---

## Portfolio framing

For a Home role: "Here's how I'd give a content team a shared tool grounded in our guidelines."

For a Systems role: "Here's how I'd structure a content system that scales across products, keeps humans in the decision loop, and makes governance decisions visible."

The through-line: I build systems that help people make better decisions together, not systems that make decisions for them.
