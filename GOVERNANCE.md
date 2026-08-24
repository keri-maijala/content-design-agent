# Governance

This document defines how the Content Design Agent is maintained, who owns what, and how decisions are made — including how to handle model changes over time.

---

## Ownership

| File | Owner | Notes |
|---|---|---|
| `guides/apple-guidelines.md` | Content Design | Curated from public Apple Style Guide |
| `guides/apple-terminology.md` | Content Design | A–Z dictionary from public Apple Style Guide |
| `guides/apple-homekit.md` | Content Design | Curated from public Apple HIG — HomeKit |
| `guides/apple-privacy.md` | Content Design | Curated from public Apple HIG — Privacy |
| `guides/apple-home-voice-tone.md` | Content Design + Marketing | Shared doc; see section-level ownership below |
| `index.html` | Content Design | App shell, system prompt, provider config |
| `Figma/Content Design Agent/ui.html` | Content Design | Figma plugin UI and system prompt |
| `prompts.js` | Content Design | Prompt variants and behavioral configuration |
| `DECISIONS.md` | Content Design | Decision log; anyone can propose, CD approves |
| `GOVERNANCE.md` | Content Design | This file |
| `PROJECT_STATE.md` | Content Design | Current build state; updated each session |
| `README.md` | Content Design | Public-facing; reflects current state of guides and app |

### Surface ownership

> **Note:** This table reflects provisional ownership for prototype/demo purposes. Update as teams and roles are confirmed.

| Surface | Owner | Notes |
|---|---|---|
| UI copy | UX Writing | Buttons, labels, alerts, error states, empty states, onboarding, notifications, tooltips, settings, permission strings |
| Marketing copy | Marketing | Webpage hero headlines, page headers, subheads, feature descriptions, product page copy |
| Privacy strings | Privacy | Permission dialogs, purpose strings, data disclosures |
| Developer-facing copy | Developer Relations | HomeKit setup, accessory naming, developer documentation references |

When the agent redirects out-of-scope requests, it should name the owning team from this table. Update the system prompt in `index.html` if ownership changes.

---

### Section-level ownership (apple-home-voice-tone.md)

`apple-home-voice-tone.md` is a shared document with two distinct sections owned by different teams:

- **Voice, tone, and UI guidance** — owned by Content Design. Covers principles, tone by moment, terminology, and the tone spectrum reference.
- **Marketing — Product value statements** — owned by Marketing. Covers per-product value propositions and emotional register for promotional contexts.

*Full section-level permissions model to be defined. See open items below.*

---

## Single source of truth for guidelines

The guide files in `/guides/` are the canonical source of truth for all content guidelines. Every surface that evaluates copy against Apple guidelines — currently the web agent (`index.html`) and the Figma plugin (`Figma/Content Design Agent/ui.html`) — must derive its rules from these files.

### Principle

The agent and the plugin must always work from the same sources. The point of the system is consistency across surfaces. A guideline that exists in `/guides/` but not in the plugin prompt is a gap. A rule in the plugin prompt that isn't in `/guides/` is unsourced and should be added to the guides or removed.

### What this means in practice

- When a new guide file is added to `/guides/`, the plugin system prompt must be updated before the guide is considered shipped.
- When a guideline is updated in a guide file, the plugin system prompt must be updated in the same commit or PR.
- The plugin system prompt is a distillation of the guide files — compressed for the constraints of a Figma plugin context — not an independent ruleset.
- Discrepancies between the plugin prompt and the guide files are bugs, not variations.

### Surfaces covered by this principle

| Surface | File | Pulls from |
|---|---|---|
| Web agent | `index.html` | `/guides/*.md` loaded at runtime via guide system |
| Figma plugin | `Figma/Content Design Agent/ui.html` | System prompt must reflect `/guides/*.md` |

If additional surfaces are added (e.g. a Slack bot, a VS Code extension), they join this table and the same principle applies.

---

## Model governance

### The problem
LLMs are not neutral tools. Every model has stylistic tendencies baked into its training. When the underlying model changes, output character shifts — even when the guide and prompts stay identical. At scale, this creates content drift: copy written at different points in time sounds like it came from different hands, even though the same system produced it.

### Principles
- **The guide is the source of truth, not the model.** Style consistency is maintained through the content system — the guides, the principles, the human review process — not by any particular model.
- **Model changes are content events, not just technical ones.** A model migration requires content review, not just a version number update.
- **Prompts are model-sensitive.** A prompt tuned for one model may produce subtly different results on another. Prompt variants should be maintained and versioned alongside model changes.
- **Human review is the consistency layer.** The human content designer is what survives model transitions. Document principles explicitly enough that a human can catch drift and correct it.

### How to migrate to a new model

1. **Build a benchmark set before migrating.** Assemble 20–30 fixed test inputs covering the full range of system behavior: lookups, explore prompts, critique requests, and edge cases. Run them on the current model and save outputs as a baseline.

2. **Run the benchmark on the new model.** Diff the outputs against the baseline. Look for character drift — not just accuracy, but tone, directness, how ambiguity is handled, how the guide is weighted.

3. **Recalibrate the system prompt.** Different models respond differently to instruction styles. Adjust the prompt as needed and document what changed and why in `DECISIONS.md`.

4. **Run models in parallel if possible.** Before fully committing, run both models on new work and have a human review the delta.

5. **Document the migration.** Record the model change, the benchmark results, what was adjusted, and what drift (if any) was observed in `DECISIONS.md`.

6. **Update `index.html`** to reflect the new model string.

### How to make the system resilient across model changes

The system is organized into four layers with different levels of model sensitivity:

| Layer | Contents | Model sensitivity |
|---|---|---|
| Guide files | `guides/*.md` | None — plain text, works with any model |
| System prompt | Inlined in `index.html` | High — tuned to model behavior; maintain variants |
| Evaluation criteria | Benchmark set | None — defined in human terms |
| Human review | Content designer judgment | None — the stable consistency layer |

True LLM-agnosticism is a process discipline, not a technical one. The tool supports multiple providers, but the system stays consistent because humans maintain the standard across model generations.

---

## Open items

- [ ] Define section-level permissions model for `apple-home-voice-tone.md` — who can edit which sections, what review process applies
- [ ] Establish benchmark set for model migration evaluation
- [ ] Define review cadence for guide content (when sources update, how changes are incorporated)
- [ ] Decide whether to expose model/provider selection publicly or lock to a single provider
- [ ] Sync Figma plugin system prompt with full `/guides/` source material (currently a subset)
