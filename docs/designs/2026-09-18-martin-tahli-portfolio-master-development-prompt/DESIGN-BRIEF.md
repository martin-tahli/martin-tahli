# Design brief — homepage foundation

**Date:** 2026-09-18  
**Design system:** Precision Editorial — Warm Mono Hybrid  
**Authority:** This brief resolves the visual/spatial questions for the work-1.1 homepage iteration. Later planning should consume it rather than invent a competing direction.

## Project form

A static-first professional portfolio homepage. It is an editorial introduction and evidence index, not a product dashboard, campaign landing page, résumé dump, or decorative AI showcase.

## Audience and intended impression

Primary audiences are technically sophisticated recruiters, founders, engineering managers, and consulting clients. Within 5–10 seconds, the page should convey that Martin combines product judgment, systems engineering, AI-assisted building, automation, reliability, and human-centered reasoning.

The intended impression is precise, credible, technically deep, warm, and calm.

## Devices and input

| Context                      | Required experience                                                                           |
| ---------------------------- | --------------------------------------------------------------------------------------------- |
| Wide desktop/laptop, pointer | Asymmetric hero, complete navigation, clear copy-first scan, visual diagram alongside copy    |
| Tablet, pointer/touch        | Intentional transition from split to sequence; no cramped intermediate state                  |
| Mobile 320–430px, touch      | Name/menu header; copy, actions, note, then simplified diagram; no horizontal overflow        |
| Keyboard                     | Visible focus, skip link, reachable navigation/actions, Escape dismissal with focus return    |
| Screen reader                | One H1, named landmarks/navigation, meaningful link labels, diagram title/description/caption |
| Reduced motion               | No essential state or meaning depends on transition or movement                               |
| No JavaScript                | Core navigation, Work, and Contact remain usable                                              |
| Zoomed/enlarged text         | Content reflows without clipping, overlap, hidden controls, or lost reading order             |

## Primary flow

1. Read the wordmark and role statement.
2. Read one concise sentence explaining what Martin builds and how disciplines combine.
3. Choose `View Work` for evidence or `Contact` for direct follow-up.
4. Read the systems diagram as a model of Martin’s approach.
5. Continue into Selected Work.

Navigation supports direct entry to Work, Notes, About, CV, and Contact without competing with the hero.

## Reference contract

Primary reference: `reference/precision-editorial-warm-mono-reference.png`.

Use it for:

- warm neutral balance;
- display/body/mono contrast;
- hero scale and negative space;
- asymmetric editorial composition;
- thin-rule and technical-diagram language;
- deliberate desktop/mobile relationship.

Do not use it for factual copy, metrics, project names, employment, generated imagery, or pixel-exact layout. The board is not a publishable hero asset.

## Visual resolution

### Global tokens and typography

- Keep the approved palette unchanged: paper/surface/sand dominate, charcoal is the primary text/dark punctuation, terracotta is the primary action accent, and sage/cobalt are rare semantic signals.
- Small secondary text uses the approved semantic secondary role; small accent text uses the darker terracotta role needed for contrast.
- Instrument Serif is reserved for the hero display and other selected editorial moments.
- Inter carries navigation, body, buttons, and interface text.
- IBM Plex Mono carries the eyebrow, figure label, step numbers, and short technical annotations.
- Preserve generous responsive gutters and section spacing; prefer rules and contrast over shadow.

### Desktop header

- One calm horizontal band, roughly 64–76px high.
- `Martin Tahli` sits left with a restrained terracotta full stop.
- Work, Notes, About, CV, and Contact sit right with comfortable spacing.
- The active route uses a subtle terracotta underline/marker plus current-page semantics.
- No sticky treatment is required for this iteration.

### Mobile header and menu state

- Keep name left and a text-labelled Menu control right; the control target is at least 44px.
- Open state appears as a plain full-width warm-paper navigation region below the header rule.
- Links are comfortably spaced, remain in ordinary reading order, and retain clear focus/current states.
- The menu does not become a glass capsule, modal spectacle, or icon-only ambiguity.
- Escape dismissal returns focus to the control. Without JavaScript, the native menu remains operable.

### Desktop hero

The systems-diagram direction is selected for this iteration; its rendered composition still requires owner visual acceptance against the reference.

- Preserve a 5/7-like asymmetric relationship: role/copy/actions at left, systems visual at right.
- Copy is vertically composed as one deliberate stack: eyebrow, role statement, concise explanation, primary/secondary actions, then optional short human note.
- The role statement is the first visual anchor. The diagram is substantial but secondary in reading priority.
- Keep the terracotta primary action and outlined secondary action. Do not show Download CV until the PDF exists.
- The right side is a warm sand editorial field containing the systems visual with breathing room and thin structural lines.
- The diagram must be labelled as a systems perspective and captioned as an approach loop so it cannot be mistaken for project evidence.

### Mobile hero

- Sequence: eyebrow → H1 → positioning copy → actions → optional short note → systems visual.
- Preserve strong serif scale without forcing desktop line breaks.
- Actions may be two-up at comfortable widths and stack when the labels or touch targets would become cramped.
- The warm visual region may extend to the viewport edges after the copy block to create a deliberate change of density.
- Replace the desktop SVG with the current readable four-step sequence: Ideas, Systems, People, Impact.
- Do not require the full hero to fit in one viewport; role, explanation, and next action take priority over an arbitrary fold.

### Transition to Selected Work

- The end of the diagram and the start of Selected Work need a clear density change and sufficient breathing room.
- Do not add a second systems-flow visual later on the homepage while the diagram occupies the hero.

## Content and states

| State                      | Required presentation                                             |
| -------------------------- | ----------------------------------------------------------------- |
| Default verified state     | Approved positioning, View Work, Contact, systems diagram         |
| CV PDF absent              | Contact replaces Download CV; no disabled or placeholder download |
| Featured projects absent   | Honest evidence-oriented empty state; no fake cards or metrics    |
| Mobile menu closed         | Name and clear Menu control                                       |
| Mobile menu open           | Full navigation list on paper, visible focus/current state        |
| Font delayed/failed        | Legible fallbacks, stable order, no clipped copy/actions          |
| JavaScript failed/disabled | Native navigation remains usable                                  |
| Reduced motion             | Transitions removed without loss of state clarity                 |
| Narrow/zoomed              | Single reading sequence, usable controls, no horizontal overflow  |

## Accessibility requirements

- One meaningful H1 and semantic header/nav/main structure.
- A skip link that visibly focuses and lands on main content.
- Visible focus with sufficient contrast on paper, sand, surface, and terracotta controls.
- Minimum practical 44px control targets.
- Active navigation and diagram meaning do not rely on color alone.
- The diagram includes accessible title/description and a visible caption; mobile exposes the same conceptual sequence as text.
- Hover motion is subtle and nonessential; reduced-motion preferences remove it.
- Reading order remains logical independent of the desktop two-column arrangement.

## Preserve / reconsider / remove

### Preserve

- Locked palette and three-font role system.
- Wordmark/navigation structure.
- Copy-first hero and existing verified positioning.
- View Work primary and Contact secondary.
- Systems diagram as the hero visual.
- Desktop asymmetry and mobile text-first sequence.
- Native, minimal-JavaScript menu behavior.

### Reconsider during implementation

- Diagram framing so it reads as one editorial composition rather than a nested card.
- Tablet breakpoint and vertical rhythm.
- Whether the short human note earns its mobile height.
- Open-menu behavior under zoom and long link labels.
- Font fallback behavior and first-paint stability.

### Remove or exclude

- Any plan to use/crop the reference board as production imagery.
- A duplicated mid-page systems-flow visual.
- Unsupported CV, project, metric, employer, outcome, or testimonial content.
- Decorative AI motifs, gradients, glow, glass, pills, card-grid treatment, statues, fake terminals, or ornamental animation.

## Success criteria

- Desktop and mobile clearly belong to the same design system while using different compositions.
- Role, build focus, differentiator, evidence route, and contact route are discoverable within a fast scan.
- The diagram strengthens systems thinking without displacing the positioning or masquerading as proof.
- Header and hero remain usable with keyboard, touch, reduced motion, zoom, delayed fonts, and no JavaScript.
- Representative desktop, tablet, and mobile captures support comparison against the reference; font fallback, zoomed open-menu, and text-enlargement states receive live-browser checks.
- Martin approves the rendered header/hero composition; choosing the systems diagram does not pre-approve its execution.
- The result is visually closer to the reference in hierarchy, warmth, spacing, and confidence without copying its generated content or requiring its landscape image.
