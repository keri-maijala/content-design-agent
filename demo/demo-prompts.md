# CDA Demo Prompts

## 1. Editorial rules — clarity and precision

**Prompt:** Is it OK to use "e.g." in UI copy? What about "etc."?

**Demonstrates:** Guideline lookup, direct rule application
**Watch for:** Should quote the guide, note both abbreviations, explain the "avoid Latin abbreviations" rule

---

## 2. Voice and tone — Home-specific

**Prompt:** I'm writing a feature callout for Apple Home: "HomePod's AI-powered automation engine makes your home smarter every day."

**Demonstrates:** Tier 2 contextual loading (Home keyword), voice principles applied to real copy
**Watch for:** Should flag "AI-powered," "engine," "smarter every day" — boastful, tech-forward; should rewrite toward user capability

---

## 3. Capitalization judgment call

**Prompt:** Should "log in" be two words or one? What about as a noun vs. a verb?

**Demonstrates:** Nuanced rule retrieval, noun/verb distinction
**Watch for:** Correct answer is verb = "log in" (two words), noun/adjective = "login" — should cite the guide's phrasal verb guidance

---

## 4. Structural range — multiple violations

**Prompt:** Review this UI string: "Click here to learn more about how this feature works and what it can do for you."

**Demonstrates:** Multiple simultaneous violations — "click here," "learn more," vague benefit framing
**Watch for:** Should flag each violation distinctly; should offer a rewrite; this is where "learn more" weakness may surface — the guide may not have explicit guidance on it

---

## 5. Privacy copy — tone calibration

**Prompt:** Write a privacy disclosure for a new Apple Home feature that uses on-device processing to detect motion patterns. Keep it under 30 words.

**Demonstrates:** Generative task with constraints, privacy tone principles applied
**Watch for:** Should be matter-of-fact, not alarming; no "we protect your data" hedging; should not over-explain

---

## 6. HomeKit terminology enforcement

**Prompt:** A developer wrote this copy: "Configure the service characteristics for your accessory in the HomeKit settings." What needs to change?

**Demonstrates:** HomeKit-specific terminology rules (don't use "service" or "characteristic" in UI)
**Watch for:** Should catch both terms, explain why, suggest rewrites using descriptive language

---

## 7. Relationship / conversation design

**Prompt:** I'm designing an onboarding flow for a new HomeKit accessory. What guidance does Apple have on how to sequence setup steps and what language to use?

**Demonstrates:** Synthesis across guides (HIG + HomeKit), conversational depth, system-level thinking
**Watch for:** Should pull from HomeKit HIG; look for whether it surfaces naming conventions, room assignment, pairing language — and where the guides are thin

---

## 8. Deliberate edge case — gap exposure

**Prompt:** What's the right way to write a "Learn more" link in Apple UI copy?

**Demonstrates:** Known weakness — the guides likely have little or nothing explicit on this
**Watch for:** Does it admit the gap? Does it over-invent? Ideal response: acknowledges limited guidance, offers what exists (active voice, avoid vague CTAs), doesn't fabricate a rule

---

## 9. Tone by moment — error state

**Prompt:** Write an error message for when a HomeKit accessory goes offline unexpectedly. The user was in the middle of setting up an automation.

**Demonstrates:** Tone calibration under friction, error state writing, Home voice applied
**Watch for:** Should be calm, direct, not alarming; should give the user a next step; no "Oops" or tech jargon

---

## 10. Image upload

**Prompt:** Upload a screenshot of any UI with copy violations, then ask: "Review the copy in this screen against Apple guidelines."

**Demonstrates:** Vision capability, multi-modal input
**Watch for:** Does it correctly identify text in the image? Does it apply the right rules? Does it handle ambiguity gracefully?

---

## 11. Typo / misspelling resilience

**Prompt:** What does Homekit say about naming accessories?

**Demonstrates:** Intent recognition over literal string matching
**Watch for:** Should answer correctly without lecturing about the spelling; uses correct form naturally in response

**Variant (more extreme):** What does homkit say about scenes?

---

## Notes

- Run #1 first (quick, clean baseline)
- #2 shows Tier 2 contextual loading working
- #4 and #8 surface "learn more" gap — watch how the agent handles it
- #11 confirms fuzzy matching is live
- End with #9 or #10 for a strong finish
