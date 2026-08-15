# Content Design Agent — Key Decisions
**Project:** Content Design Agent (CDA)
**Author:** Keri Maijala

This document records significant architectural and design decisions made during the development of the CDA portfolio project. It exists so decisions can be revisited with context, and so collaborators and stakeholders understand not just what was built but why.

---

## Decision 1: Prompts as a separate content layer

**Decision:** System prompts live in prompts.js, separate from application code in index.html.

**Why:** Prompts are content decisions, not code decisions. A content designer should be able to read, edit, and version them without touching application logic. Mixing prompts into the app code creates a maintenance burden and obscures the reasoning behind the agent's behavior.

**Tradeoff:** When the app is opened directly from a desktop (not served), the external script can't load. The solution is an inlined fallback in index.html. This means prompt edits must be synced to both files — a known friction point until the app is always served.

**Portfolio relevance:** Demonstrates separation of concerns as a content systems principle. The same logic applies at scale — content and code should have different owners and different edit cycles.

---

## Decision 2: Mode inference over explicit mode switching

**Decision:** The agent infers question type (lookup, explore, critique) from the question itself rather than requiring the user to select a mode before asking.

**Why:** Asking a user to categorize their own question before asking it is friction. It also assumes users know which mode applies to their question — which they often don't. The agent is better positioned to make that determination.

**What was removed:** A sidebar with four mode buttons (Q&A, Style lookup, Brainstorm, Screenshot critique). These were replaced with universal suggestion chips and an AUTO_PROMPT that handles all behaviors.

**Tradeoff:** Mode inference requires the prompt to be well-calibrated. Early versions asked clarifying questions reflexively rather than only when genuinely needed. This required several iterations to fix.

**Portfolio relevance:** Shows judgment about when to reduce UI complexity in favor of embedded intelligence — a key content systems design decision.

---

## Decision 3: Two-tier guide architecture

**Decision:** Style guides are organized in two tiers. Tier 1 (apple-guidelines.md) is the foundation that loads always. Tier 2 documents (apple-home-voice-tone.md and future service-specific guides) are domain-specific and loaded when the agent detects relevant context.

**Why:** At scale, a single monolithic style guide creates ownership problems. The person responsible for Apple Card copy shouldn't have to coordinate with the person responsible for HomePod copy every time either wants to update something. Separate files mean separate ownership, separate versioning, separate review cycles.

**The governance model:** Each Tier 2 document is owned by the content designer or team closest to that product. The systems leader (the role this portfolio targets) owns the Tier 1 document and the standards that govern how Tier 2 documents are created and maintained.

**What's built vs. designed:** Tier 1 and one Tier 2 document (Home voice and tone) are built. The detection and loading logic for additional Tier 2 documents is designed but not yet implemented.

**Portfolio relevance:** This is the core systems thinking demonstration — separate ownership, unified consumption, governance visible in the architecture.

---

## Decision 4: Clarifying questions only when context is genuinely missing

**Decision:** The agent asks one clarifying question only when it cannot give a precise answer without more information. If surface, product, or scenario is clear from the question, it answers directly.

**Why:** Reflexive clarifying questions — asking for context even when it's already present — are patronizing and break the conversational flow. They signal that the agent isn't actually reading what was written.

**The sequence:** Context missing → ask one question, stop completely → receive answer → respond with corrected copy first, reasoning after. Context present → answer directly.

**Portfolio relevance:** Reflects the value that the agent should serve the designer, not create overhead for them. Also demonstrates prompt precision — getting this behavior right required multiple iterations.

---

## Decision 5: Corrected copy leads every response

**Decision:** When giving a correction or suggestion, the corrected copy always appears first. Reasoning follows.

**Why:** A designer asking "how does this look?" wants to know what it should be. Leading with a list of problems buries the answer and makes the designer read through critique before getting to the thing they need. Corrected copy first respects the designer's time and mirrors how a good editor actually gives feedback.

**What this required:** Explicit instruction in the prompt with a correct example and an incorrect example side by side. Abstract instructions like "lead with the answer" were insufficient — the model defaulted to its training pattern of problem-first until shown specifically what not to do.

---

## Decision 6: Human in the loop as a design principle

**Decision:** The agent never makes final calls on subjective questions. It offers options, names tradeoffs, and invites the designer into the decision.

**Why:** This reflects Keri's core value as a content designer: keep humans in the loop, show the decisions that were made, build human judgment into the process. An agent that confidently gives one answer on a subjective question is doing something that looks helpful but actually removes the human from a decision they should be making.

**How it manifests:**
- Binary questions (documented rules) get one direct answer
- Subjective questions (voice, tone, intent) get 2-3 options with reasoning
- The agent always ends with a question that moves the decision forward
- Conflicts between guides are named, not silently resolved

**Portfolio relevance:** This is the philosophical foundation of the entire project, and it's encoded directly into the agent's behavior. A hiring manager who demos the agent should be able to see these values in action, not just read about them.

---

## Decision 7: No markdown tables in responses

**Decision:** Markdown tables are banned from all agent responses.

**Why:** In a chat interface, markdown tables render as raw characters — pipes, dashes, and misaligned text. Early critique responses used tables to organize issues, which made them unreadable in practice.

**The fix:** Plain prose for all responses. Issues are named and described in sentences, not rows. This also aligns with the conversational register the agent should maintain — this is a dialogue, not a report.

---

## Decision 8: LLM-agnostic provider architecture

**Decision:** The agent supports multiple LLM providers (Anthropic, OpenAI, Google Gemini, Mistral) via a settings panel. No provider is hardcoded.

**Why:** Different teams and organizations have different API relationships. A tool that only works with one provider is less useful as a demonstration of systems thinking and less adoptable by a real team.

**How it works:** Each provider has a config object with its endpoint, header format, request body builder, and response parser. Switching providers means changing the config, not the application logic. This is the adapter pattern applied to LLM provider switching.

**Portfolio relevance:** Demonstrates that the agent is designed as infrastructure, not a one-off tool.

---

## Decision 9: Visual design follows Apple HIG

**Decision:** The agent's UI follows Apple Human Interface Guidelines for a macOS/iOS context — system font stack, HIG blue (#007aff) as the key color, warm neutral grays, translucent surfaces, continuous-curve border radii.

**Why:** The agent is a portfolio piece targeting Apple roles. Its visual design should demonstrate that the designer understands and can apply the HIG, not just reference it.

**What this means in practice:**
- System font stack renders San Francisco on Apple devices — no external font needed
- #007aff is Apple's documented interactive blue — not a generic accent color
- Chat bubbles match iOS Messages conventions — the most recognizable Apple UI pattern
- Translucent topbar and input bar use backdrop-filter, consistent with Apple's depth system

**Constraint:** The agent looks like something an external developer built using the HIG — not like an Apple internal tool. This distinction is intentional and defensible.

---

## Decisions still open

**Conflict logging persistence:** When the agent detects a conflict between Tier 1 and Tier 2 guides, it should log that conflict somewhere persistent. Currently conflicts surface in chat but disappear when the session ends. The right solution in a real system is a shared document or ticketing system. For the demo, a formatted chat message the user can copy is the interim approach.

**Guide detection for Tier 2 loading:** The keyword detection + clarifying question model is designed but not yet implemented. Open question: what keywords trigger which documents, and what happens when a question could belong to multiple domains?

**SYSTEM_PROMPTS.md update:** This document currently reflects the old four-mode architecture. It needs to be updated to document the auto-mode approach and the two-tier guide loading model.
