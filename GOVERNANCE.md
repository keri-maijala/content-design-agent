# Content Design Agent — Governance Model
**Author:** Keri Maijala
**Status:** Design document. Reflects intended system architecture for Apple Home content at scale.

---

## Why this document exists

Content systems fail not because teams can't write good guidelines, but because no one agrees on who owns what, how decisions get made, or what happens when two teams reach different conclusions about the same question.

This document defines the governance model for the Content Design Agent — how content authority is structured, who owns which layer, how decisions are documented, and how the agent surfaces conflicts rather than hiding them.

The model is designed for a team structure like Apple Services, where multiple product teams — Home, Fitness+, Apple Card, Health — operate with significant autonomy, but their content needs to add up to a coherent whole.

---

## Core principle

**Shared principles. Owned application.**

Every team works from the same foundational principles. No team rewrites the foundation. Each team owns how those principles apply to their specific surfaces, products, and audiences.

The agent enforces the foundation. It surfaces — but does not resolve — conflicts between layers.

---

## The four-layer model

### Layer 1 — Shared principles (Tier 1)
**Owner:** Content Systems lead
**Document:** `apple-guidelines.md`
**What it contains:** Platform rules, HIG conventions, privacy copy standards, HomeKit terminology, accessibility requirements, universal formatting and casing rules.
**Authority:** Highest. No surface-specific guide can override Tier 1. Conflicts are escalated, not resolved by the agent.
**Edit process:** Changes require review by the Systems lead. Major changes are socialized with affected teams before publishing.

---

### Layer 2 — Shared glossary
**Owner:** Contributed to by all teams. Arbitrated by Content Systems lead when teams disagree.
**Document:** `apple-glossary.md` *(to be created)*
**What it contains:** Canonical terminology across all Apple Services. Approved product names, feature names, action verbs, and terms that appear on the "never use" list. Every team contributes their domain's terminology. Every team must respect every other team's approved terms.
**Authority:** Second highest. Terminology decisions in the glossary override surface-specific preferences. If Marketing wants to call something a "feature" and Content Design has documented it as a "capability," the glossary is where that gets resolved — not in each team's own document.
**Edit process:** Teams propose additions and changes. Systems lead reviews for conflicts before publishing.

---

### Layer 3 — Surface decision logs (Tier 2)
**Owner:** The content designer or team closest to that product or surface.
**Documents:** `apple-home-voice-tone.md`, `apple-card-decisions.md`, `apple-fitness-decisions.md`, etc.
**What it contains:** Not a rules document — a decision log. Each entry documents a specific content decision: what was decided, why, what alternatives were considered, and an approved example. Decisions are dated so the system has a record of when something changed and why.
**Authority:** Third. Tier 2 decisions apply to their domain. They cannot override Tier 1 or the glossary. Where a Tier 2 decision is silent on something, Tier 1 applies.
**Edit process:** The owning team controls their document. They can add, revise, or deprecate decisions without approval from the Systems lead — but they must flag conflicts with Tier 1 or the glossary rather than silently overriding them.

**Decision log entry format:**
```
## [Decision title]
**Date:** [Month Year]
**Owner:** [Name or team]
**Decision:** [What was decided, in one sentence]
**Why:** [Reasoning — what problem this solves, what alternatives were considered]
**Applies to:** [Surface, product, or context]
**Example:** [Approved copy]
**Conflicts with:** [Any Tier 1 or glossary rule this touches — flag don't hide]
```

---

### Layer 4 — Annotations
**Owner:** Same as the Tier 2 document it annotates.
**Format:** Inline notes within Tier 2 documents, clearly marked.
**What it contains:** Surface-specific exceptions to shared principles. When a team needs to diverge from a Tier 1 principle for a legitimate reason, they document the exception here rather than rewriting the principle.
**Authority:** Lowest — and scoped. An annotation applies only to the surface it's attached to. It does not create a new general principle.
**Edit process:** Same as the Tier 2 document. The owning team controls their annotations.

**Annotation format:**
```
> **Surface exception [Marketing / Hero copy]:** Sentence fragments are
> permitted in hero headlines where they add rhythm and emphasis.
> This is an exception to the Tier 1 rule against fragments in copy.
> Approved by: [Name], [Date]
```

---

## How the agent uses this model

### On every request
The agent loads Tier 1 automatically. This is non-negotiable and invisible to the user — it's always there.

### On domain detection
When the agent detects that a question implies a specific product or surface — through keyword matching or a clarifying question — it loads the relevant Tier 2 decision log alongside Tier 1.

### On conflicts
When the loaded Tier 2 document contains a decision that conflicts with a Tier 1 rule, the agent:
1. Names the conflict explicitly — it does not pick a winner
2. Presents both positions clearly
3. Asks the designer to decide which applies in this context
4. Logs the conflict at the end of the response in this format:

```
CONFLICT FLAGGED: [Brief description] 
Tier 1 says: [Rule]
Tier 2 says: [Decision]
Needs resolution. Recommend surfacing to [Systems lead / team owner].
```

This conflict log is the agent's contribution to governance. It makes invisible tensions visible so the right people can resolve them in the source documents — not in individual conversations.

### What the agent never does
- Silently resolve a conflict between layers
- Override a Tier 1 rule based on a Tier 2 decision
- Invent rules that don't exist in any loaded document
- Make final calls on decisions that belong to a human

---

## Who owns what — summary

| Layer | Document | Owner | Can override |
|---|---|---|---|
| Tier 1 | apple-guidelines.md | Content Systems lead | Nothing |
| Glossary | apple-glossary.md | All teams / Systems arbitrates | Surface preferences |
| Tier 2 | [product]-decisions.md | Product content team | Nothing above it |
| Annotations | Inline in Tier 2 | Product content team | Their surface only |

---

## What this model is not

**It is not a content approval process.** Teams don't need permission to write copy — they need a shared framework for making decisions and surfacing conflicts.

**It is not a monolithic style guide.** A single document owned by one team creates a bottleneck and discourages adoption. This model distributes ownership while maintaining coherence.

**It is not a replacement for conversation.** When the agent flags a conflict, that's the beginning of a conversation between teams — not the end of it. The model creates the conditions for those conversations, not a mechanism for avoiding them.

---

## What needs to be built

**Exists now:**
- Tier 1: `apple-guidelines.md`
- One Tier 2 document: `apple-home-voice-tone.md`
- Keyword detection logic for loading Tier 2 docs
- Conflict flagging behavior in the agent prompt

**Needs to be built:**
- `apple-glossary.md` — shared terminology across all Apple Services
- Tier 2 decision logs for Apple Card, Fitness+, and Apple Health
- Marketing surface annotations in `apple-home-voice-tone.md`
- Persistent conflict log — currently conflicts surface in chat but disappear when the session ends. In a real system, this would write to a shared document or ticketing system.

**Longer term:**
- Automated conflict detection — agent proactively flags when a new Tier 2 entry conflicts with Tier 1, before it's published
- Version history visible to the agent — so it can reference when a decision was made and by whom
