# Current UI audit — homepage foundation

**Date:** 2026-09-18  
**Scope:** Global tokens/typography as used on `/`, SiteHeader, homepage hero, responsive composition, and accessibility.

## Evidence inspected

- Approved source hierarchy through `docs/pages/HOME.md` and `docs/REFERENCE_IMAGES.md`.
- `reference/precision-editorial-warm-mono-reference.png` (SHA-256 `ec179cedaa6f18cf5f5f9d81dfd228f4dcfdd901f1c852bf8bfe398faf3e0165`).
- Current homepage/header/token source.
- Existing desktop and mobile browser captures produced on 2026-09-18:
  - `test-results/site-capture-homepage-for--073e1-ithout-approving-a-baseline-desktop-chromium/home-review.png`
  - `test-results/site-capture-homepage-for--073e1-ithout-approving-a-baseline-mobile-chromium/home-review.png`
- Existing browser and accessibility checks in `tests/e2e/site.spec.ts`.

A fresh live inspection was not performed during this brainstorm because the dedicated Brave CDP endpoint at `127.0.0.1:9222` was unavailable. The audit therefore records source and existing-capture evidence, not new visual acceptance.

## Current composition

### Tokens and typography

- The approved core palette is represented as CSS variables, including semantic secondary/accent text roles.
- Instrument Serif, Inter Variable, and IBM Plex Mono are locally packaged and assigned to display, body/UI, and technical roles.
- Content width, responsive gutter, section spacing, modest radius, and header-height tokens establish the warm editorial foundation.
- Focus uses cobalt as a rare technical/accessibility signal.

### Header

- Desktop: wordmark left, five concise links right, thin bottom rule, terracotta current-route marker.
- Mobile: wordmark left, `Menu` plus a `+` mark right, with a full-width warm-paper link panel below the header.
- The native details/summary control provides a no-JavaScript baseline; a small script adds Escape dismissal and focus return.

### Hero

- Desktop: a 5/7 text/visual split, strong serif role statement, concise positioning copy, terracotta primary action, bordered secondary action, and a sand-backed systems diagram.
- Mobile: text and actions precede an edge-to-edge warm visual region; the desktop SVG becomes a four-step vertical sequence.
- Missing CV data correctly substitutes Contact. Missing featured work renders an honest empty state below the hero.

## Alignment with the approved direction

### Preserve

- Warm paper, sand, charcoal, and terracotta balance.
- Serif/sans/mono role separation.
- Clear `AI-NATIVE` eyebrow and large editorial role statement.
- Asymmetric desktop hero and generous spacing.
- Thin rules, restrained radius, no shadow, no visual-effect clichés.
- Honest content behavior: no fake CV, projects, metrics, or outcomes.
- Accessible systems diagram with a visible caption and narrow-screen alternate presentation.
- Primary `View Work` / secondary `Contact` hierarchy.
- Skip link, visible focus, semantic main/heading structure, reduced-motion rule, and 44px-class controls.

### Reconsider

- The diagram is visually card-like inside a large sand field. It should read as one composed explanatory visual, not a dashboard tile or project proof.
- The desktop diagram and headline compete for attention more than the photographic reference hero. Copy must remain the first scan target.
- The supporting “Engineering depth. A human perspective.” note adds character but also lengthens the mobile first impression; retain only if it does not push the actions out of a practical initial scan.
- The 60rem single-column switch produces a long stacked hero on tablet. The transition should remain deliberate rather than feeling like desktop simply collapsed.
- The mobile menu’s open, zoomed, and long-content states are not shown in the available captures and need later browser verification.
- Font-failure behavior is not represented in the existing captures; hierarchy and action reachability should survive fallback metrics even when line breaks differ.

### Remove or avoid

- Do not introduce a second copy of the hero systems diagram as the homepage’s later visual break.
- Do not crop or publish the generated reference board as hero imagery.
- Do not add unsupported proof markers, metrics, project cards, or a CV action.
- Do not force the mobile thesis into one viewport at the cost of readable type or touch targets.

## Reference relationship

The current implementation already matches the reference family through typography contrast, warm neutrals, restrained terracotta, thin lines, asymmetry, and editorial whitespace. Its intentional difference is the hero visual: the reference board uses warm landscape imagery, while the current homepage uses the approved systems diagram because no standalone publishable hero image exists.

That difference is now settled for this iteration. Fidelity should be judged by proportion, warmth, hierarchy, negative space, and responsive recomposition—not by reproducing the reference image.

## Accessibility and resilience observations

- Existing automated coverage checks semantic landmarks, one H1, metadata, overflow, axe WCAG A/AA rules, skip-link focus, Escape menu dismissal, no-JavaScript navigation, 320px reflow, and reduced motion.
- The SVG has a title and description, and the narrow layout replaces it with readable text rather than shrinking it.
- The current active route uses both color and a border marker.
- Remaining manual checks for a later implementation/verification stage: visible focus against every hero/header surface, menu behavior at text zoom, reading order with CSS/graphics unavailable, and touch comfort at narrow widths.

## Audit conclusion

The foundation is directionally strong and already avoids the major generic-portfolio failures. The next implementation should refine hierarchy and responsive behavior rather than replace the concept: keep the systems diagram, make its explanatory status unmistakable, protect the copy-first scan, and verify open-menu/font-failure/zoom states in a live browser.
