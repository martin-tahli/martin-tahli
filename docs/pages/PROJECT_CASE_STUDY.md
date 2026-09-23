# PROJECT_CASE_STUDY.md — `/work/[slug]`

## Goal

This is the highest-value page type for technical recruiters, engineering managers and consulting prospects.

It should demonstrate **judgment**, not just output.

---

## 1. Case-study header

Include:

- back link to Work
- project title
- concise one-line description
- status / visibility where useful
- role
- year
- live/demo/GitHub links when available
- hero visual, architecture image or real screenshot

Do not include fake metrics or outcomes.

---

## 2. Desktop reading layout

Preferred composition:

- narrow/sticky left table of contents when screen size permits
- main reading column
- optional right-side metadata/annotation zone for selected sections

Suggested TOC:

- Overview
- Problem
- Context
- Constraints
- My Role
- Product Decisions
- Architecture
- AI / Automation
- Technical Decisions
- Challenges
- Tradeoffs
- Testing
- Outcome
- Lessons
- Links

Only render sections with meaningful content. These are supported topics, not a mandatory list of separate headings; consolidate them when that improves the main story.

---

## 3. Overview

Fast scan block answering:

- what is it?
- who/what is it for?
- what did Martin do?
- current status?

Use a diagram or screenshot next to/under it.

---

## 4. Architecture visuals

Use diagrams generously where they clarify real decisions.

Design:

- paper/grid background
- thin charcoal paths
- terracotta emphasis
- cobalt technical node(s)
- mono labels

Architecture diagram should be understandable without animation.

---

## 5. Decision sections

Product Decisions, Technical Decisions and Tradeoffs should visually stand out using:

- numbered decisions
- concise statement
- why
- alternative considered
- consequence

Avoid giant prose walls.

---

## 6. AI / Automation

Be concrete:

- where AI enters the system
- what tools/models/processes are involved if safe to disclose
- where human judgment/checkpoints remain
- what is deterministic vs probabilistic
- how failure is handled

Do not imply AI autonomy where none exists.

---

## 7. Testing / reliability

Support:

- test strategy
- E2E/unit/integration where applicable
- evaluation approach
- observability
- failure modes
- performance data if real

This section is a strong credibility signal.

---

## 8. Outcome

Only real outcomes.

If no quantified metrics exist, use factual outcomes such as:

- shipped capability
- workflow achieved
- architecture established
- current stage
- lessons learned

Do not fabricate percentage improvements.

---

## 9. Media

Allow:

- screenshots
- diagrams
- embedded demo video
- code excerpt
- before/after flows where truthful

Use captions.

---

## 10. End navigation

- next project
- previous project when useful
- back to Work
- contact CTA kept subtle

---

## Mobile

- collapse TOC into horizontal/expandable section nav
- diagrams may switch to stacked versions
- tables become cards/definition lists only where necessary
- preserve technical depth

---

## Approved refinement — product-first reading (2026-09-23)

Findavia establishes a shorter main narrative with optional technical depth. Keep the product, responsibility, decisions, architectural boundary, concrete AI example, outcome, and material limitations visible. Put longer debugging, integration, and verification notes in native expandable details under one Engineering detail heading. Do not turn the page back into an internal repository audit.

Use the reusable `content/TechnicalDetail.astro` component with a unique `id`, short `index`, and descriptive `title`. It uses semantic `details` and `summary`, defaults closed, and needs no client JavaScript. Verify keyboard opening/closing, expanded content accessibility, and reflow. Do not hide important qualifications or the only account of Martin's role inside it.

When approved real media exist, the shared case header may use a 5/7 text/media split at desktop widths. Mobile reads title, summary, metadata, then image. Without media it remains text-led. Images must be local, optimized, meaningfully described, and labelled with their capture context. A crop must not fabricate or misrepresent UI. The project collection supplies the same evidence to Home and Work rather than duplicating content.
