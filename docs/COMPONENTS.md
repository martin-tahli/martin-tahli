# COMPONENTS.md — Reusable Interface Rules

Read `DESIGN.md` first.

This file defines reusable visual/behavioral components. Components should be composable and content-driven; do not create page-specific one-offs unless necessary.

---

## 1. Site header

### Desktop

- Warm paper or transparent-over-paper background.
- Name/wordmark left: `Martin Tahli`.
- Navigation right: Work, Notes, About, CV, Contact.
- Thin divider/rule where useful.
- Active route uses subtle underline or terracotta marker.
- Header height roughly 64–76 px.
- Sticky only if it remains calm and useful.

### Mobile

- Name left.
- Menu icon right.
- Drawer/full-screen menu should stay editorial and simple.
- No glassmorphic floating nav capsule.

---

## 2. Buttons

### Primary

- Terracotta fill.
- Warm-white text.
- Small arrow optional.
- Radius 5–7 px.
- No glow.

### Secondary

- Transparent or warm surface.
- Charcoal text.
- 1 px border.

### Ghost/text

- No container unless hover/focus requires it.
- Arrow can move 3–5 px on hover.

Button labels should be concrete: `View Work`, `Download CV`, `Contact`.

---

## 3. Links

- Inline links use underline or precise hover state.
- Important editorial links can use arrow notation: `View case study →`.
- Avoid vague `Learn more` when a specific label exists.

---

## 4. Section heading

Pattern:

- terracotta/mono section number
- optional small eyebrow
- strong heading
- concise supporting sentence

Example:

`02.`
`HOW I BUILD`
`From problem definition to measurable impact.`

Not every section needs the exact same treatment; preserve rhythm, not repetition.

---

## 5. Project card

Project cards should feel editorial, not SaaS tiles.

Required behavior:

- visual/image area gets priority
- project title is prominent
- one-line summary
- only a small number of useful tags
- optional year/status/private indicator
- clear case-study link
- no fake metrics

Variants:

- `featured-horizontal`
- `standard-vertical`
- `text-led`
- `private-project`

Use thin borders and minimal elevation.

---

## 6. Tags / metadata

Use tags only when they help scanning.

- compact
- low-contrast warm surface
- 1 px border when needed
- no badge cloud
- max 3–5 visible tags on cards
- additional tags can live on detail pages

Mono is appropriate for metadata labels, not necessarily tag text.

---

## 7. Technical/system diagram

Treat diagrams as first-class components.

Possible types:

- process flow
- architecture stack
- user/product/system loop
- pipeline
- decision map
- request/agent/tool/result flow

Rules:

- semantic SVG preferred
- accessible labels/caption
- responsive alternate layouts
- thin lines
- small grid background optional
- terracotta = emphasis
- cobalt = technical/data node
- sage = status/outcome
- diagram should remain understandable without animation

---

## 8. Editorial visual break

Purpose: interrupt long pages without adding irrelevant art.

Approved content:

- systems-flow visualization
- architecture fragment
- real project crop
- process timeline
- data/decision composition

Rejected content:

- classical statue
- unrelated portrait
- generic inspirational quote card
- decorative AI art

---

## 9. Capability block

Do not use percentage bars.

Use 3–4 conceptual groups with concise lists and short descriptions.

Potential groups:

- Product & Systems
- Applied AI
- Engineering
- Human-Centered Product Thinking

Can be arranged as columns with light rules rather than boxed cards.

---

## 10. Note/article card

- category/eyebrow
- title
- concise description
- date + reading time
- optional relation to a project
- no fake cover image required

Cards may be text-only; do not force thumbnails.

---

## 11. Metric / outcome block

Only show when backed by real data.

- large value
- compact explanation
- source/context in surrounding copy
- no vanity placeholder metrics in production

If real numbers are unavailable, remove the component rather than inventing them.

---

## 12. Footer

Can use charcoal background as one of the primary dark punctuation areas.

Include:

- Martin Tahli
- compact positioning line
- navigation
- GitHub/LinkedIn/email when known
- copyright
- optional restrained signature

No giant CTA wall.

---

## 13. Forms

For future contact form:

- warm surface inputs
- visible labels
- thin borders
- clear focus using terracotta + accessible outline
- error states explicit in text
- no floating-label gimmicks

---

## 14. Empty states

Empty states must look intentional.

Example for Notes:

- short line explaining notes are published selectively
- no fake article cards
- optional link to Work

---

## 15. Loading / hydration

Because the site is static-first, avoid loading skeletons unless a real dynamic component requires them.
