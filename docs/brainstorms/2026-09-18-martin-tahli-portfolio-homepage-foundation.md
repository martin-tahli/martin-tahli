# Homepage foundation brainstorm

**Work item:** work-1.1  
**Date:** 2026-09-18  
**Status:** Requirements settled for planning

## Source context

This brainstorm narrows the portfolio master direction to one coherent homepage-foundation outcome. Authority remains, in order: `MASTER_PROMPT.md`, `docs/DESIGN.md`, `docs/COMPONENTS.md`, `docs/IMPLEMENTATION.md`, `docs/pages/HOME.md`, `docs/REFERENCE_IMAGES.md`, the approved reference board, then the current implementation.

The locked design direction is **Precision Editorial — Warm Mono Hybrid**. The approved reference is art direction, not a source of facts or publishable imagery.

## Problem and goal

The current homepage has the correct positioning, palette, typography families, asymmetric hero, primary actions, and systems diagram, but the foundation needs to be treated as one deliberate first impression rather than a collection of individually correct elements.

The goal is that a technically sophisticated visitor can determine within 5–10 seconds:

1. Martin is an **AI-Native Product & Systems Engineer**.
2. He builds intelligent products, agentic systems, automation, and software architectures.
3. His differentiator is the combination of engineering, product judgment, systems thinking, AI leverage, and human-centered reasoning.
4. `View Work` is the route to evidence.
5. `Contact` is immediately available.

The experience must remain credible when project evidence or a CV PDF is not yet available. It must not imply that a conceptual diagram is completed-work evidence.

## Actors

- Recruiters and engineering managers scanning role, level, evidence, and contact path.
- Founders and consulting clients assessing product judgment and end-to-end ownership.
- Technical reviewers looking for architecture, tradeoffs, reliability, and disciplined AI use.
- Mobile, keyboard, screen-reader, zoomed-text, reduced-motion, and no-JavaScript visitors.

## Requirements

### First-impression hierarchy

- The reading path is: identity/role → concise build-and-differentiation statement → `View Work` → `Contact` → explanatory systems visual.
- Essential positioning remains understandable without reading technical labels or interpreting the diagram.
- `View Work` remains the only primary action. `Contact` is secondary while no verified CV PDF exists.
- The hero must not publish metrics, employers, outcomes, testimonials, availability promises, or other unverified facts.
- Keep the supporting line “Engineering depth. A human perspective.” only if, at 390px, both hero actions remain visible within the initial hero copy block; otherwise remove the note rather than compressing the primary content.

### Visual direction

- Warm paper and neutral surfaces dominate; charcoal carries text; terracotta is the primary accent; sage and cobalt remain sparse semantic signals.
- Instrument Serif carries the editorial display moment, Inter carries body and interface text, and IBM Plex Mono is limited to technical labels and annotations.
- The desktop hero uses a deliberate asymmetric text/visual relationship with generous negative space, thin warm rules, modest radii, and little or no shadow.
- The design must not introduce purple/neon AI styling, glass, glow, bento/card spam, fake terminals, stock AI imagery, statues, or decorative quote blocks.
- The reference board governs mood, hierarchy, proportions, warmth, and responsive relationship only. Its generated content and imagery are not production assets.

### Header

- Desktop presents `Martin Tahli` at the left and concise primary navigation at the right.
- Mobile presents the name and one clear menu control; the expanded state is a simple editorial link list on warm paper, not a floating capsule or effect-heavy drawer.
- Current-route indication, visible focus, and practical touch targets remain clear without relying on color alone.
- Opening and dismissing the mobile menu must not leave visitors disoriented; identity and a clear route onward remain recoverable. Escape dismissal returns focus to the menu control.
- Navigation remains usable if client JavaScript fails or is disabled.
- The CV route remains in navigation and presents an honest contact-oriented state when no PDF or verified experience is available.

### Hero visual

- The **Ideas → Systems → People → Impact** diagram is carried forward as the intentional hero visual for this iteration, selected during this brainstorm over an abstract placeholder or a deferred visual decision. This selects the direction, not the rendered composition; owner visual acceptance remains pending.
- The diagram explains Martin’s approach; it must be visibly and semantically distinct from project evidence.
- Its caption/text equivalent communicates that problems and constraints become systems, people use them, and evidence feeds the next decision.
- The hero must not repeat the same diagram again as a separate mid-page visual break.
- The visual area keeps a stable editorial role so a future approved asset can be evaluated later without changing the hero’s meaning or reading order.

### Responsive composition

- Desktop preserves the asymmetric editorial split and lets the diagram carry visual weight without overpowering the positioning.
- Between the desktop split and mobile sequence, the hero recomposes deliberately; the 48–60rem range must not look cramped or like desktop was merely collapsed.
- Mobile deliberately sequences headline, supporting copy, actions, short supporting note, then the visual.
- The systems diagram becomes a readable step sequence on narrow screens rather than a miniaturized desktop SVG.
- Primary actions may sit side by side only when both remain comfortably legible and at least 44px high; otherwise they stack.
- The page must reflow without horizontal scrolling at 320px and under text enlargement. The hero is not required to fit an arbitrary single viewport if doing so would reduce legibility.

### Accessibility and resilient states

- One clear page heading, semantic landmarks, a working skip link, visible keyboard focus, and understandable navigation labels are required.
- Diagram meaning must remain available through a title/description and visible caption; meaning is not encoded by color alone.
- Nonessential motion is removed under reduced-motion preferences.
- Font failure must preserve reading order, legibility, and reachable actions even if exact line breaks change.
- If a CV PDF is absent, no download action appears; `Contact` remains the secondary action.
- If verified project content is absent, the destination may explain what evidence belongs there, but it must not display fabricated cards or claims.
- If JavaScript is unavailable, core navigation and contact/work routes remain usable.

## Primary user-visible flows

### Fast desktop scan

1. Visitor sees Martin’s name and role.
2. Supporting text explains what he builds and how he works.
3. Visitor chooses `View Work` for evidence or `Contact` for a direct next step.
4. The diagram reinforces the approach without being mistaken for a case study.

### Mobile scan and navigation

1. Visitor sees the name and menu control.
2. Hero copy and actions arrive before the explanatory visual.
3. Opening the menu reveals a plain, complete navigation list.
4. Escape dismisses the menu for keyboard users and returns focus to the menu control; ordinary links still work without JavaScript.

### Missing-content behavior

- No CV PDF: show `Contact`, not a dead or placeholder download.
- No published projects: keep the work route honest and useful without fake evidence.
- No approved standalone hero image: retain the selected systems diagram; do not crop or publish the reference board.

## Options and decision

1. **Keep the systems diagram — selected.** It is factual, accessible, technically distinctive, and already aligned with the approved visual grammar.
2. **Use a quiet warm abstract field — not selected.** It would preserve mood but communicate less about Martin’s approach.
3. **Defer the visual decision — not selected.** It would leave the central composition intentionally unresolved despite a credible existing visual.

The reference’s warm landscape remains a compositional influence, not a current asset requirement.

## Non-goals

- Implementing or reviewing code in this brainstorm.
- Redesigning sections below the hero beyond preserving a clean transition into Selected Work.
- Changing unrelated pages, navigation destinations, content models, or deployment behavior.
- Creating project evidence, a CV, metrics, testimonials, or professional facts.
- Adding a new image, animation system, dependency, CMS, or hydrated component.
- Reopening the locked visual direction.

## Risks and mitigations

- **Diagram reads as proof:** label and caption it as an approach model, and keep `View Work` as the evidence route.
- **Technical visual overwhelms the human/product message:** preserve copy-first hierarchy and warm negative space.
- **Sparse content makes confident CTAs feel misleading:** destinations must be honest about absent evidence and never fabricate it.
- **Webfont or JavaScript failure damages the first impression:** preserve semantic order, legibility, and native navigation behavior.
- **Mobile becomes a compressed desktop:** use the explicit copy → actions → simplified sequence order.
- **Future hero imagery causes a redesign:** retain the hero visual’s semantic role and composition boundary without requiring asset interchangeability to be pixel-identical.

## Acceptance examples

- At desktop width, a visitor can identify Martin’s role, read the positioning statement, and find Work and Contact before interpreting the diagram.
- At a representative 768–960px tablet width, the hero has an intentional intermediate composition with no cramped split or needlessly long collapsed stack.
- At 390px and 320px, the headline remains readable, actions remain usable, and the diagram appears as a vertical sequence with no horizontal overflow.
- A keyboard visitor can skip to main content, open the mobile menu, follow every navigation route, and dismiss the open menu with Escape, returning focus to the menu control.
- With reduced motion enabled, no essential state change depends on animation.
- With client JavaScript disabled, navigation still exposes working links.
- With fonts delayed or unavailable, no copy or action overlaps, clips, or becomes unreachable.
- With no CV PDF or verified project entries, the homepage exposes no placeholder download, fabricated project, fake metric, or unsupported claim.
- The diagram’s visible caption and accessible description explain the loop without requiring color perception.
- Verification produces representative desktop, tablet, and mobile captures and records the accessibility/resilience checks. Font failure, text zoom, and the zoomed open-menu state require manual live-browser checks; existing automated checks cover semantics, axe rules, skip-link focus, Escape/focus return, no-JavaScript navigation, 320px reflow, reduced motion, and verified-content gating.
- Final visual acceptance requires Martin to approve the rendered header/hero composition against the reference; selecting the systems-diagram direction does not pre-approve its execution.

## Open questions

None block planning. Rendered visual acceptance remains a later gate, not an unresolved direction. A separately supplied, approved hero image may be evaluated in a future iteration; it is not required for this one.

## wo:divergent-analysis

- **Inversion and adversary — `openai-codex/gpt-6-astra`:** merged the copy-first reading path, explicit separation of approach from evidence, honest Work destination, and recoverable mobile-menu orientation.
- **3am operator — `anthropic/claude-opus-5`:** merged font-failure resilience, verified-content-absent states, future visual reversibility, and no-JavaScript navigation. Rejected exact fallback line-count matching as unnecessarily brittle.
- **Remove the load-bearing assumption — `zai/glm-5.3`:** retained the useful challenge that accessibility text can be visible and well designed. Rejected making the diagram primary, forcing the whole thesis into one viewport, duplicate visible renderings, and proof markers for unavailable evidence because they weaken the approved scan order or imply unsupported proof.
