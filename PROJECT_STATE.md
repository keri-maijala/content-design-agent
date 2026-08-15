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
├── index.html                   ← Full app. Contains inlined prompts as authoritative fallback.
├── prompts.js                   ← Reasoning layer. Edit this for prompt changes.
├── SYSTEM_PROMPTS.md            ← Documents prompt architecture. STALE — needs updating.
├── PROJECT_STATE.md             ← This file.
├── DECISIONS.md                 ← Key architectural decisions and rationale.
├── GOVERNANCE.md                ← Two-tier governance model documentation.
├── README.md                    ← Deployment instructions.
└── guides/
    ├── apple-guidelines.md      ← Tier 1: HIG + HomeKit + Privacy combined. Auto-loads.
    ├── apple-home-voice-tone.md ← Tier 2: Home voice, tone, AND marketing annotations. Auto-loads.
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
- Does not ask about product or surface already established in the conversation
- Leads responses with corrected copy first, reasoning after
- Signals when shifting into marketing register: "Shifting to marketing register — applying HomePod mini conventions"
- Scales response length to question complexity
- No markdown tables in responses
- Reference links appear only when they add genuine value
- Keyword detection loads Tier 2 docs when Home product signals are detected
- Ambiguous keyword detection asks clarifying question before loading Tier 2
- Marketing surface requests ask which product if not already established in conversation

**Guides**
- apple-guidelines.md: HIG + HomeKit + Privacy (Tier 1)
- apple-home-voice-tone.md: UI voice/tone + marketing surface annotations for all Home products (Tier 2)
  - Marketing section covers: hero headlines, subheads, feature descriptions, vocabulary by product
  - Annotation format follows GOVERNANCE.md spec

**Governance model (documented, partially built)**
- GOVERNANCE.md defines four-layer model: Tier 1, shared glossary, Tier 2 decision logs, annotations
- Tier 1 exists and loads
- One Tier 2 document exists (Home voice and tone)
- Keyword detection built and working
- Conflict flagging in prompt — surfaces conflicts between layers, does not resolve them silently

**UI**
- iOS-style chat bubbles — gray received, blue sent (#007aff), CSS pseudo-element tails
- 2-inch margins on both sides of the chat
- 24px gap between conversation turns
- HIG-compliant visual design — system font, Apple blue, warm grays
- Settings panel for LLM provider and API key (Anthropic, OpenAI, Gemini, Mistral)
- Guide pill in topbar shows active guide with green pulsing dot
- Screenshot upload always visible in input bar
- API key persists via sessionStorage within a tab session

**Deployment**
- GitHub Pages at keri-maijala.github.io/content-design-agent
- Edit prompts.js directly in GitHub browser — changes live in ~1 minute
- index.html contains inlined prompts as authoritative fallback
- IMPORTANT: after editing prompts.js on GitHub, a new index.html must also be generated with the synced inline block, OR Claude can do this in a new session

---

## What's next

**High priority**
- Demo sequence — 3-4 prepared questions showing lookup, explore, critique, and collaborative loop
- SYSTEM_PROMPTS.md update — currently documents old four-mode architecture, needs rewrite for auto-mode + two-tier model

**Medium priority**
- apple-glossary.md — shared terminology across all Apple Services (defined in GOVERNANCE.md, not yet created)
- Tier 2 decision logs: apple-card-decisions.md, apple-fitness-decisions.md, apple-health-decisions.md
- Persistent conflict log — currently conflicts surface in chat but disappear when session ends

**Low priority / future**
- Figma skill (SKILL.md + FIGMA_SETUP.md) not yet added to GitHub repo
- Bubble tail shape — CSS pseudo-element approach works but shape is approximate

---

## Known issues

- SYSTEM_PROMPTS.md is stale — reflects old four-mode architecture
- prompts.js edits on GitHub must be manually synced into index.html inline block (Claude can do this)
- No persistent conflict logging — flagged conflicts disappear when session ends
- Bubble tail shape is functional but not pixel-perfect

---

## Key decisions (summary — see DECISIONS.md for full rationale)

- LLM-agnostic: provider switching via settings panel
- Prompts as content: prompts.js is a separate editable content layer
- Two-tier guide architecture: Tier 1 always loads, Tier 2 loads on domain detection
- Governance model: shared principles → glossary → decision logs → annotations (see GOVERNANCE.md)
- Human in the loop: agent offers options for subjective questions, never makes final calls
- Clarifying question only when context genuinely missing — never about something already established
- Marketing surfaces explicitly in scope: agent signals register shift, not a gap
- Corrected copy leads every response (except marketing where register signal comes first)
- No tables in responses

---

## Prompt architecture (current)

prompts.js contains:
- HOME_KEYWORDS_CLEAR — triggers automatic Tier 2 load (handles word-order variations)
- HOME_KEYWORDS_AMBIGUOUS — triggers clarifying question
- detectDomain() — keyword detection function
- BASE_PROMPT — always active, core behavior
- AUTO_PROMPT — inferred mode behavior: clarify → identify type → respond → reference link
- buildSystemPrompt() — assembles base + guide + optional Tier 2 + AUTO_PROMPT

---

## How to start a new session

Paste this into a new Claude conversation:

"I'm continuing work on my Content Design Agent portfolio project. Here's the current state: [paste this file]. Live site: https://keri-maijala.github.io/content-design-agent. Repo: github.com/keri-maijala/content-design-agent. I edit prompts.js directly on GitHub. Today I'd like to work on: [what you want to do]. Here are the relevant files: [paste prompts.js and/or index.html as needed]."

---

## Portfolio framing

For a Home role: "Here's how I'd give a content team a shared tool grounded in our guidelines — covering both UI copy and marketing surfaces, with governance built into the architecture."

For a Systems role: "Here's how I'd structure a content system that scales across products, keeps humans in the decision loop, distributes ownership across teams, and makes governance decisions visible rather than hidden."

The through-line: I build systems that help people make better decisions together, not systems that make decisions for them.
