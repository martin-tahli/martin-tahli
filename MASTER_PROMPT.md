Create a new production-quality personal portfolio website repository for **Martin Tahli**.

The portfolio is intended primarily for:

- high-paying AI / software / product engineering roles
- remote international opportunities, including Europe, EMEA, worldwide, and US companies that can hire internationally
- freelance / consulting opportunities
- long-term personal branding

The website must feel like a serious long-term professional asset, not a temporary portfolio template.

## Core positioning

Primary positioning:

**AI-Native Product & Systems Engineer**

Supporting positioning:

**I design and build intelligent products, agentic systems, and software architectures — combining engineering, product thinking, automation, and human-centered design.**

The portfolio should communicate that Martin is not trying to compete with AI by manually writing every line of code.

Instead, his strength is using AI as leverage so he can focus on higher-level engineering work:

- architecture
- system design
- product decisions
- workflows
- user behavior
- UX psychology
- automation
- experimentation
- integration
- reliability
- iteration
- end-to-end product development

His background includes firmware/software engineering and increasingly complex AI-assisted products and systems.

Do not position him as:

- a prompt engineer
- an ML researcher
- a generic frontend developer
- a junior developer
- someone who merely uses ChatGPT

The positioning should instead suggest:

**systems thinker + product builder + engineer + AI-native operator**

Do not invent work history, clients, metrics, skills, testimonials, employers, or project outcomes.

Ambitious presentation is encouraged, but every factual claim must eventually be defensible.

---

# Repository

Current working repository:

`martin-tahli/martin-tahli`

Do not rename it without Martin's approval. The default Pages project-site base is `/martin-tahli/`. A root-site repository or custom domain remains a release decision.

The project should be designed for free deployment through **GitHub Pages**.

Approved preview deployment target (live status is recorded in `docs/STATUS.md`):

`https://martin-tahli.github.io/martin-tahli/`

It should remain easy to migrate later to a custom domain without redesigning the website.

---

# Technical stack

Preferred stack:

- Astro
- TypeScript
- Tailwind CSS
- MDX
- GitHub Pages
- GitHub Actions on owner-provided self-hosted runners for routine verification and deployment; see `AGENTS.md` and `docs/decisions/0003-self-hosted-ci.md`

React may be used only where interactive components genuinely benefit from it.

Avoid adding unnecessary frameworks or dependencies.

The site should remain:

- extremely fast
- static-first
- SEO friendly
- accessible
- responsive
- maintainable
- modular
- easy to expand

Use a content-driven architecture for:

- projects
- notes/articles
- experience
- skills
- case studies

A future project or article should be addable primarily through a Markdown/MDX file rather than requiring major frontend changes.

---


---

# Specification hierarchy

This repository should keep the design specification inside `docs/` so an AI coding agent can load only the level of context needed for the current task.

Required files:

- `docs/DESIGN.md` — global visual system and source of truth
- `docs/COMPONENTS.md` — reusable UI/component rules
- `docs/IMPLEMENTATION.md` — implementation workflow and visual QA contract
- `docs/REFERENCE_IMAGES.md` — how visual references should be interpreted
- `docs/pages/HOME.md`
- `docs/pages/WORK.md`
- `docs/pages/PROJECT_CASE_STUDY.md`
- `docs/pages/ABOUT.md`
- `docs/pages/NOTES.md`
- `docs/pages/NOTE_ARTICLE.md`
- `docs/pages/CV.md`
- `docs/pages/CONTACT.md`
- `docs/pages/404.md`

An agent implementing one page should read `MASTER_PROMPT.md`, `docs/DESIGN.md`, `docs/COMPONENTS.md`, then only that page's spec plus any relevant reference image.

# Main pages

Create the architecture for these routes:

`/`
Home

`/work`
Projects and case studies

`/work/[slug]`
Individual project case study

`/about`
Personal / professional background

`/notes`
Technical notes, experiments, architecture breakdowns and selected writing

`/notes/[slug]`
Individual note/article

`/cv`
Web version of CV

`/contact`
Contact options

Also support:

`/404`

Do not create unnecessary pages simply to make the website look larger.

---

# Homepage

The homepage should immediately communicate:

1. who Martin is
2. what kind of problems he solves
3. what makes him different
4. where to see evidence
5. how to contact him

Recommended structure:

### Hero

Large, confident headline:

**AI-Native Product & Systems Engineer**

Supporting text based around:

**I design and build intelligent products, agentic systems, and software architectures — combining engineering, product thinking, automation, and human-centered design.**

Primary actions:

- View Work
- Download CV
- Contact / Let's Talk

GitHub and LinkedIn can appear as secondary links.

Avoid clutter.

Do not place six CTA buttons in the hero.

---

### Selected Work

Initially create the component and structure using realistic placeholder projects.

Do not focus heavily on filling the projects yet.

Projects will be added later.

Each project card should eventually support:

- project name
- one-line description
- project type
- technologies
- status
- image / visual
- private/public indicator
- live project link
- case-study link
- GitHub link when public
- demo-video link when available
- featured flag

Private source code must not be treated as a weakness.

A private commercial/personal project may still have:

- architecture explanations
- screenshots
- demos
- live website
- technical discussion
- lessons learned

---

### Capabilities

Avoid generic percentage skill bars.

Do not write things like:

`Python — 85%`

Instead organize capabilities conceptually.

Possible groups:

#### Product & Systems

- system architecture
- product architecture
- APIs
- workflows
- integrations
- databases
- automation
- testing
- deployment

#### Applied AI

- LLM integration
- tool calling
- agents
- orchestration
- structured outputs
- retrieval
- model routing
- AI-assisted workflows
- evaluation concepts
- local models / inference experimentation

#### Engineering

- software engineering
- firmware background
- backend systems
- Linux
- Git
- CI/CD
- debugging
- performance thinking

#### Human-Centered Product Thinking

- UX reasoning
- behavioral thinking
- psychology-informed design
- friction reduction
- product flows
- user decision making

Only list specific technologies once they are confirmed.

---

### How I Build

Create a visually strong section representing Martin's working process.

Example:

**Problem**
↓
**Understand Users**
↓
**Define Product**
↓
**Design Architecture**
↓
**Build with AI Leverage**
↓
**Test**
↓
**Measure**
↓
**Iterate**

This section should visually communicate that AI is integrated into the engineering workflow, not used as a replacement for thinking.

Potential wording:

**AI handles more of the implementation. I focus more of my time on the decisions that determine whether the product actually works.**

This idea may be refined later.

---

### About preview

Short introduction.

Do not turn this into an autobiography.

Communicate:

- software/firmware engineering background
- broad systems thinking
- product-building focus
- interest in AI systems
- ability to work across technical and human/product layers
- international orientation

Link to full About page.

---

### Notes preview

Show only meaningful technical writing.

The website should NOT require Martin to constantly produce blog content.

The philosophy should be:

**Publish when there is something worth documenting.**

Possible categories:

- Architecture
- AI Systems
- Experiments
- Engineering
- Product
- Building in Public
- Lessons Learned

Do not create fake placeholder articles that look published.

Empty states should be polished.

---

### Contact section

Create a simple, strong contact section.

Eventually support:

- email
- LinkedIn
- GitHub
- WhatsApp if desired
- contact form later if appropriate

Avoid exposing unnecessary personal information.

---

# Work / Case Studies

Project case studies are one of the most important parts of this portfolio.

Do not structure them like generic portfolio cards.

Each case study should support:

## Overview

What was built?

## Problem

What problem existed?

## Context

Why was the system needed?

## Constraints

What made it difficult?

## My Role

What Martin personally handled.

## Product Decisions

Why specific workflows/features exist.

## Architecture

System architecture with diagrams where useful.

## AI / Automation

How AI or automation was used, where applicable.

## Technical Decisions

Important implementation choices.

## Challenges

Real problems encountered.

## Tradeoffs

Why one approach was chosen over another.

## Testing

How reliability was validated.

## Outcome

Only include real outcomes.

## Lessons

What was learned.

## Links

Possible links:

- live product
- GitHub
- documentation
- demo
- video

Support private repositories cleanly.

---

# Notes / Writing

Do NOT design this as a lifestyle blog.

The section should feel closer to:

**Engineering Notes**

or

**Field Notes**

or

**Notes**

Purpose:

Show how Martin thinks.

Useful note types:

- architecture breakdowns
- experiments
- technical discoveries
- postmortems
- product decisions
- AI workflows
- system design
- performance experiments
- implementation lessons

Articles should be easy to create through MDX.

Support:

- title
- description
- date
- category
- tags
- reading time
- optional hero visual
- code blocks
- diagrams
- tables
- callouts
- embedded video
- links to related projects

---

# CV

Create a web CV route designed specifically for recruiters.

Eventually include:

- short professional summary
- work experience
- selected projects
- skills
- education
- languages
- links
- contact

Also support a prominent:

**Download PDF**

button.

For now use structured placeholder data where information is unknown.

Do not invent employment information.

---

# Visual direction — LOCKED

The visual direction is now decided. Do **not** generate multiple theme proposals and do **not** reinterpret the site into a generic developer/AI portfolio.

The chosen system is:

## Precision Editorial — Warm Mono Hybrid

A warm, editorial, premium engineering aesthetic that combines:

- serious systems/product engineering
- modern editorial composition
- restrained technical diagrams
- warm human visual character
- high information clarity
- deliberate asymmetry
- subtle personality

The website should feel like a hybrid of:

- a premium technology product
- an engineering publication
- a high-end product studio
- a thoughtful personal brand

It should **not** feel like a SaaS landing-page template, a cyberpunk AI portfolio, or an art-direction exercise that overwhelms the work.

Use `docs/DESIGN.md` as the visual source of truth and the page-specific files in `docs/pages/` for composition rules.

The current visual reference is:

`reference/precision-editorial-warm-mono-reference.png`

The reference is directional, not literal. Recreate the design language, hierarchy, spacing, palette, proportions and mood. Do not copy accidental AI-image artifacts, fake content, illegible text or fabricated project details from the reference image.

## Character

The site should communicate:

- precise
- intelligent
- composed
- technical
- human
- ambitious
- premium
- trustworthy
- distinct without being loud

The design should gain character through typography, composition, systems diagrams, editorial image crops and small technical details — not through visual noise.

## Explicitly avoid

- purple/blue AI-neon aesthetics
- full-page cyberpunk themes
- Matrix/hacker styling
- starfields and planets
- generic glowing gradients
- glassmorphism as a primary visual language
- fake terminals
- robot/brain imagery
- classical/stoic statue imagery
- decorative quote panels with unrelated portrait/statue imagery
- animated blobs
- particle backgrounds
- excessive rounded cards
- Bento-grid spam
- dozens of badges
- stock-photo-heavy layouts
- decorative visuals that have no relationship to Martin, the work, systems, engineering or human outcomes

---

# Color system — LOCKED

The palette is warm and mostly neutral with two controlled accents.

Core tokens:

- Paper / page background: `#F7F4EE`
- Warm surface: `#FFFDFC`
- Sand: `#E8DCCC`
- Clay: `#D5C2B1`
- Charcoal / primary text: `#1F1F1F`
- Stone / secondary text: `#6F7480`
- Border: `#D8D2C8`
- Terracotta / primary accent: `#B85B3C`
- Terracotta hover: `#9E4B31`
- Sage / secondary accent and positive status: `#6B7F6B`
- Cobalt / technical highlight: `#2563EB`
- Error: `#B42318`
- Warning: `#A15C00`

Color hierarchy:

1. Warm paper and charcoal dominate the interface.
2. Terracotta is the primary brand/action accent.
3. Cobalt is used sparingly for technical diagrams, selected technical links, focus/detail moments and data/system emphasis.
4. Sage is used for status, subtle human-centered accents and restrained supporting detail.
5. Sand/clay create depth without defaulting to gray-on-white SaaS styling.

Do not distribute all accent colors equally. The page should remain visually calm.

Suggested visual ratio:

- 70–80% paper / warm neutrals
- 10–15% charcoal/dark editorial areas
- 5–8% terracotta/clay
- 2–4% sage
- 1–3% cobalt

Dark sections are allowed as editorial punctuation, not as the default page mode.

A full light/dark-theme toggle is not required for V1. If implemented later, it must be designed intentionally rather than auto-inverted.

---

# Typography — LOCKED DIRECTION

Typography is a major part of the identity.

Use three roles:

1. **Editorial display serif** for selected major headings and large statements.
2. **Clean modern sans-serif** for navigation, body copy, interfaces, project summaries and readable content.
3. **Technical monospace** used sparingly for labels, metadata, diagrams, code and system annotations.

Recommended open-source stack:

- Display: `Instrument Serif`
- Sans/UI: `Inter`
- Mono: `IBM Plex Mono`

If font availability or performance requires substitution, preserve the roles and visual contrast rather than silently collapsing everything into one generic sans-serif.

Rules:

- Headlines can mix serif and sans deliberately, but not randomly.
- Serif is for editorial emphasis, not every heading.
- Body text remains sans-serif for clarity.
- Mono is an accent, never the main body font.
- Use tight, confident display leading.
- Keep body line length around 60–75 characters.
- Avoid oversized headings in every section.
- Use small uppercase/mono eyebrow labels with generous tracking for technical hierarchy.

---

# Layout — LOCKED DIRECTION

The site is grid-driven but not rigid.

Use:

- generous whitespace
- thin warm-gray borders
- asymmetrical editorial compositions
- large image crops
- content that can sit directly on the page without cards
- occasional dark charcoal editorial bands
- technical diagrams on subtle paper/grid backgrounds
- clear vertical rhythm
- numbered sections such as `01`, `02`, `03`
- small side annotations and metadata where useful

Desktop should feel like a designed editorial spread rather than stacked SaaS sections.

Mobile must be recomposed, not merely shrunk.

Avoid:

- card containers around every block
- uniform 3-column grids everywhere
- identical section heights
- overly pill-shaped controls
- floating detached visual ornaments

---

# Signature visual language

The identity should be recognizable even when project screenshots are absent.

Use these recurring motifs:

### 1. Editorial numbering

Examples:

- `01. Selected Work`
- `02. How I Build`
- `03. Capabilities`

Numbers may use terracotta and/or monospace styling.

### 2. Technical systems diagrams

Use clean node/flow/architecture diagrams with:

- thin charcoal lines
- paper backgrounds
- light technical grids
- terracotta emphasis
- rare cobalt system/data nodes
- concise mono labels

A recurring conceptual line may be:

**Ideas → Systems → People → Real Impact**

Diagrams must communicate something. Do not add meaningless connected boxes merely for decoration.

### 3. Warm editorial imagery

When decorative imagery is used, prefer warm, grounded, natural or architectural imagery with strong composition.

The current reference uses mountain imagery as a metaphor for ambition, systems and scale. This is acceptable as a limited brand motif, especially in the homepage hero, but should not dominate every page.

Real project screenshots, diagrams and interface visuals should replace decorative imagery whenever available.

### 4. Dark editorial punctuation

Use charcoal sections selectively for contrast, footer areas, selected project transitions or high-impact statements.

Do **not** use classical statues or unrelated portraits in these sections.

The previously explored stoic/statue quote panel is explicitly rejected.

If a mid-page visual break is needed, use one of:

- a systems-flow diagram
- project architecture fragment
- data/decision map
- a cropped real project image
- an abstract technical composition derived from the site's grid and tokens

### 5. Handwritten/signature detail

A restrained handwritten `Martin Tahli` signature or annotation may appear as a small editorial detail in the hero/footer.

It must not become a decorative script theme.

---

# Animation

Animation is subtle and purposeful.

Good uses:

- 150–250 ms hover transitions
- light reveal of section dividers or diagram paths
- subtle movement in architecture/process diagrams
- image crop movement of only a few pixels
- link arrows moving a few pixels on hover
- active navigation underline movement
- small number counters only when backed by real data

Avoid:

- scroll hijacking
- continuous animation
- floating objects
- dramatic parallax
- bouncing UI
- cursor gimmicks
- heavy animation libraries without a strong reason

Respect `prefers-reduced-motion`.

---

# Imagery

Primary visual material should eventually come from:

- real project screenshots
- diagrams
- architecture visuals
- interface details
- code where it is genuinely useful
- demo videos
- technical illustrations

Temporary/decorative imagery must match the Warm Mono Hybrid language and should never be presented as real project work.

Do not fabricate product screenshots, clients, metrics or outcomes.

Do not use stock imagery merely to fill space.

# Project videos

Support embedded videos in the project system.

Videos will be added later.

Likely video format:

- short project demos
- technical walkthroughs
- screen recordings
- voiceover
- possibly on-camera introductions later

Do not store large video files directly in the GitHub repository.

Design around embeds from an external video platform.

---

# SEO

Build proper SEO from the beginning.

Include:

- semantic HTML
- page titles
- descriptions
- canonical URLs
- Open Graph
- Twitter/X cards
- sitemap
- robots.txt
- structured metadata where useful
- strong accessible heading hierarchy

Initial SEO themes:

- Martin Tahli
- AI Engineer
- AI Product Engineer
- AI Systems Engineer
- Applied AI
- Agentic Systems
- Software Engineer
- Product Engineer

Do not keyword-stuff.

---

# Accessibility

Target strong accessibility from the beginning.

Include:

- proper semantic structure
- keyboard navigation
- focus states
- contrast
- reduced motion
- alt text infrastructure
- accessible interactive elements
- responsive typography
- screen-reader consideration

---

# Performance

Performance is part of the portfolio quality.

Aim for excellent Lighthouse scores.

Avoid:

- heavy client-side JavaScript
- unnecessary libraries
- oversized images
- huge font payloads
- bloated animation packages

Use:

- optimized images
- static rendering
- lazy loading
- sensible font loading
- minimal hydration

---

# Responsive design

The website must look intentionally designed on:

- large desktop
- laptop
- tablet
- mobile

Do not treat mobile as a compressed desktop layout.

Mobile navigation and content hierarchy should be designed deliberately.

---

# Repository quality

The repository itself is part of the portfolio.

Keep it professional.

Create:

- clean folder structure
- README.md
- setup instructions
- deployment instructions
- contribution/development notes if useful
- linting
- formatting
- sensible TypeScript configuration
- clean Git history going forward
- documented self-hosted verification and automatic Pages deployment after successful checks on `main`

Suggested architecture:

```text
src/
  components/
  layouts/
  pages/
  content/
    projects/
    notes/
  data/
  styles/
  utils/

public/
  images/
  icons/
  documents/

```

Adjust if Astro best practices suggest a better structure.

---

# Content architecture

Create typed schemas for project and note content.

Project metadata should support fields such as:

```ts
title
slug
summary
description
featured
status
year
role
visibility
technologies
categories
heroImage
liveUrl
githubUrl
videoUrl
caseStudyAvailable

```

Notes should support:

```ts
title
slug
description
date
updated
category
tags
draft
heroImage
relatedProjects

```

Use the appropriate Astro content-collection approach.

---

# Placeholder handling

For anything unknown, create clean placeholders rather than inventing facts.

Examples:

`[LinkedIn URL]`

`[Contact Email]`

`[Professional Experience]`

`[Project Content]`

Do not expose ugly placeholder strings on the production homepage.

Unknown content should instead:

- be hidden
- have an elegant empty state
- or live only inside development data files

---

# Contact information still needed later

The site will eventually need:

- GitHub URL
- LinkedIn URL
- contact email
- WhatsApp decision
- professional photo decision

Do not block initial development on these.

---

# Profile photo

The final decision has not been made yet.

Design the website so it can work perfectly:

- without a portrait
- or with a professional portrait added later

Do not design the entire hero around a portrait.

---

# Tone of copy

Copy should be:

- confident
- concise
- intelligent
- technically credible
- human
- direct

Avoid:

- corporate buzzword soup
- exaggerated claims
- “passionate developer”
- “coding enthusiast”
- “innovative solutions”
- “cutting-edge technologies”
- “transforming ideas into reality”
- “leveraging the power of AI”
- generic motivational language

Every sentence should communicate something concrete.

---

# Initial development phases

Do NOT attempt to fully populate projects yet.

### Phase 1

Establish:

- repository
- Astro project
- architecture
- deployment after successful self-hosted verification
- design system
- typography
- responsive shell
- navigation
- footer
- content schemas

### Phase 2

Build:

- homepage
- About structure
- Work listing
- project template
- Notes listing
- article template
- CV structure
- Contact structure

### Phase 3

Polish:

- animation
- accessibility
- responsive behavior
- performance
- SEO
- metadata
- visual refinement

### Phase 4

Content later:

- real projects
- Findavia
- CV
- demo videos
- case studies
- technical writing
- real project screenshots

---

# Design implementation contract

The visual direction is already approved. Do **not** stop to generate three new design directions before implementation.

Use this hierarchy:

1. `MASTER_PROMPT.md` — product, positioning, architecture, technical constraints and global requirements.
2. `docs/DESIGN.md` — canonical visual system and global design rules.
3. `docs/COMPONENTS.md` — reusable component behavior and variants.
4. `docs/IMPLEMENTATION.md` — implementation order and QA contract.
5. `docs/pages/*.md` — page-specific structure, hierarchy and responsive behavior.
6. `docs/REFERENCE_IMAGES.md` and files in `reference/` — visual targets and screenshot references.
7. Content files / project data — real content only.

Conflict rules:

- Product/technical requirements in `MASTER_PROMPT.md` override visual convenience.
- Global visual rules in `docs/DESIGN.md` override accidental details in reference images.
- Page-specific specs may refine layout but should not invent a new design language.
- Reference images communicate mood/composition; do not reproduce their fake placeholder content or image-generation artifacts.

The goal is not simply to make the website “pretty”.

The final result should make a technically sophisticated recruiter, founder, engineering manager, or potential consulting client think:

**This person understands products, systems, engineering and AI at a level deeper than simply writing code.**
