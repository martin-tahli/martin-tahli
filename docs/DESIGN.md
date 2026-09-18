# DESIGN.md — Global Visual Source of Truth

## 1. Design name

**Precision Editorial — Warm Mono Hybrid**

This file is the canonical visual specification for the portfolio. Page-level documents can refine layout, but they must not create a separate design language.

---

## 2. Design intent

The portfolio must look like the work of someone who understands products, systems, engineering and people.

It should feel:

- premium, but not luxurious for its own sake
- technical, but not hacker/cyberpunk
- editorial, but not like a magazine template
- warm and human, but not lifestyle-oriented
- visually distinct, but not noisy
- contemporary, but durable enough to age well

The site should stand out primarily through **composition, hierarchy, typography, diagrams and real work**, not through effects.

The visual language should support the positioning: **AI-Native Product & Systems Engineer**.

---

## 3. Core aesthetic formula

Approximate mix:

- **45% editorial publication** — typography, whitespace, deliberate crops, asymmetry
- **30% premium technology product** — precision, clean states, interaction quality
- **20% engineering documentation** — grids, diagrams, mono labels, architecture thinking
- **5% personal character** — warm imagery, signature detail, selected annotations

Do not let any one ingredient dominate.

---

## 4. Color system

### 4.1 Core palette

| Token | Value | Role |
|---|---:|---|
| `--paper` | `#F7F4EE` | Primary page background |
| `--surface` | `#FFFDFC` | Elevated content/surfaces |
| `--sand` | `#E8DCCC` | Warm supporting surface |
| `--clay` | `#D5C2B1` | Secondary warm detail |
| `--charcoal` | `#1F1F1F` | Primary text / dark editorial area |
| `--stone` | `#6F7480` | Secondary text |
| `--border` | `#D8D2C8` | Rules, card edges, separators |
| `--terracotta` | `#B85B3C` | Primary brand/action accent |
| `--terracotta-hover` | `#9E4B31` | Primary hover/pressed |
| `--sage` | `#6B7F6B` | Status / human-centered supporting accent |
| `--cobalt` | `#2563EB` | Technical/data highlight |
| `--error` | `#B42318` | Error state |
| `--warning` | `#A15C00` | Warning state |

### 4.2 Usage ratio

Target visual ratio across a typical page:

- 70–80% warm paper / surface / sand
- 10–15% charcoal
- 5–8% terracotta / clay
- 2–4% sage
- 1–3% cobalt

Cobalt is intentionally rare. It should feel like a technical signal, not a second primary brand color.

### 4.3 Accent semantics

**Terracotta**
- primary buttons
- active editorial numbers
- selected small rules
- key links
- warm visual emphasis

**Cobalt**
- system/data nodes
- selected architecture lines
- technical highlights
- focus treatment where useful
- occasional active detail in diagrams

**Sage**
- live/available/status indicators
- subtle positive states
- human-centered annotations

**Charcoal**
- body/headings
- high-contrast editorial panels
- footer / visual punctuation

### 4.4 Never do

- no purple brand palette
- no neon blue-purple gradients
- no rainbow gradients
- no equal-weight use of all accents
- no pure black-on-pure-white default aesthetic
- no large cobalt backgrounds unless a future reference explicitly requires it

---

## 5. Typography

### 5.1 Font roles

Use:

- **Display serif:** Instrument Serif
- **Sans/UI/body:** Inter
- **Technical mono:** IBM Plex Mono

All should be self-hosted or loaded efficiently with only needed weights.

### 5.2 Role rules

**Instrument Serif**
- major page titles
- selected hero headline lines
- editorial callouts
- article title when appropriate
- never body copy

**Inter**
- navigation
- body text
- buttons
- cards
- forms
- project summaries
- most headings below display level

**IBM Plex Mono**
- eyebrow labels
- metadata
- dates
- section numbers
- diagram annotations
- code
- small technical labels

### 5.3 Suggested scale

Use `clamp()` and optical sizing rather than hard breakpoints wherever practical.

| Role | Desktop target | Mobile target |
|---|---:|---:|
| Hero display | 64–82 px | 42–54 px |
| Page title | 52–68 px | 38–48 px |
| Section title | 34–44 px | 28–34 px |
| Card title | 18–24 px | 18–22 px |
| Body large | 18–20 px | 17–18 px |
| Body | 16–18 px | 16 px |
| Small | 13–14 px | 13–14 px |
| Mono label | 11–13 px | 10–12 px |

Do not make every section title enormous.

### 5.4 Typography character

- display serif: intelligent and editorial, never ornate
- sans: neutral, crisp and contemporary
- mono: technical and sparse
- headings should have tight line-height
- long-form content should have generous line-height and 60–75 character measure
- small uppercase labels should use tracking, but avoid unreadably wide spacing

---

## 6. Grid and spacing

### 6.1 Container

Recommended maximum content width: **1280–1360 px**.

Desktop outer gutter: 32–56 px depending on viewport.

Tablet: 24–32 px.

Mobile: 18–22 px.

### 6.2 Grid

Desktop base: 12-column grid.

The design may intentionally span 5/7, 4/8, 7/5 or other asymmetric compositions.

Do not force every section into equal thirds.

### 6.3 Spacing rhythm

Use an 8 px base system, with editorial exceptions.

Suggested tokens:

- `4`
- `8`
- `12`
- `16`
- `24`
- `32`
- `48`
- `64`
- `88`
- `120`
- `160`

Large page sections should usually have 96–160 px vertical breathing room on desktop and 64–96 px on mobile.

---

## 7. Borders, radius and elevation

Borders are part of the identity.

- default border: 1 px warm gray
- section rules: 1 px
- selected editorial rule: 1–2 px terracotta
- cards: modest radius, usually 6–10 px
- buttons: 5–7 px radius
- tags: may be slightly more rounded but should not become oversized pills

Shadows should be extremely subtle or absent.

Use border, contrast and spacing before shadow.

---

## 8. Signature visual motifs

### 8.1 Numbered editorial sections

Use small section indexes such as:

`01.` `02.` `03.`

Typically mono or small sans, often terracotta.

### 8.2 Systems diagrams

These are a key differentiator.

Visual grammar:

- light technical grid when appropriate
- thin charcoal connector lines
- terracotta nodes/markers
- rare cobalt system/data emphasis
- short mono annotations
- whitespace around diagrams
- simple arrowheads

Diagrams should explain a process, architecture or decision flow.

Recurring conceptual framing:

`IDEAS → SYSTEMS → PEOPLE → IMPACT`

Do not generate fake complexity.

### 8.3 Warm editorial photography

The homepage may use a warm mountain/landscape composition as a temporary or brand-level hero image.

Meaning: scale, ambition, exploration, clarity.

Rules:

- warm or neutral grading
- strong negative space
- one clear human silhouette maximum when used
- avoid generic smiling-office stock photography
- avoid repeating mountain imagery on every page
- replace decorative images with real project material over time

### 8.4 Dark editorial areas

Charcoal sections may be used for:

- footer
- selected transition
- brief high-impact statement
- project media focus

They are punctuation, not the default canvas.

**No classical statues. No stoic busts. No unrelated portraits.**

The rejected statue quote panel must not return.

### 8.5 Signature/handwritten detail

A restrained handwritten signature or short annotation can appear in the hero/footer.

Maximum use: 1–2 locations per page.

---

## 9. Imagery hierarchy

Priority order:

1. Real project screenshot
2. Real diagram/architecture visual
3. Real product detail
4. Real code/performance visual if meaningful
5. Custom technical illustration
6. Brand-level warm editorial imagery
7. Abstract placeholder only if nothing else exists

Never fabricate screenshots or metrics.

---

## 10. Motion

Motion should make the system feel precise, not animated.

Default duration bands:

- micro hover: 120–180 ms
- component transition: 180–250 ms
- section reveal: 250–450 ms
- diagram path reveal: 400–800 ms

Recommended effects:

- underline slide
- arrow translate 3–5 px
- image crop scale 1.00 → 1.015
- subtle opacity/translate reveal
- diagram path drawing
- small node activation

Avoid:

- parallax-heavy pages
- cursor followers
- bouncing
- continuous glowing
- autoplay decorative loops
- scroll hijacking

Honor `prefers-reduced-motion` by disabling nonessential movement.

---

## 11. Responsive philosophy

Mobile is a separate composition using the same identity.

On mobile:

- simplify diagrams, do not merely shrink them
- keep hero headline strong but shorter
- turn 2-column editorial layouts into deliberate sequences
- reduce decorative annotations
- preserve section numbering
- allow edge-to-edge project imagery where useful
- maintain minimum 44 px interaction targets
- use a simple menu, not a cramped desktop nav

Tablet should preserve asymmetry where space allows.

---

## 12. Accessibility

- WCAG-conscious contrast
- obvious keyboard focus
- semantic landmarks
- reduced motion
- alt text support
- diagrams require text equivalents/captions
- never encode meaning using color alone
- visible link states
- readable body size on mobile

---

## 13. Generic-design rejection checklist

Before accepting any screen, ask:

- Does this look like a generic AI portfolio template?
- Is there unnecessary purple/neon/glass?
- Is everything trapped in a card?
- Are there too many rounded pills?
- Is a decorative image doing work a diagram or project screenshot should do?
- Does the page show systems/product thinking visually?
- Is there enough warm whitespace?
- Are accents restrained?
- Does the typography create hierarchy without shouting?
- Could this screen belong to anyone, or does it feel like Martin's system?

If the answer indicates generic output, revise before continuing.


## 14. Accessible semantic text roles — implementation refinement

The primitive palette is unchanged. On paper, small secondary text uses `--text-secondary: #5D626B`; small accent text uses `--text-accent: var(--terracotta-hover)`. The original stone and sage remain available for supporting visual details, not small body text on paper. Primary buttons retain terracotta with `#FFFDFC` text. These pairings are covered by automated contrast calculations; browser and manual visual review are separate requirements.
