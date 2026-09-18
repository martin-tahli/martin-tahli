# IMPLEMENTATION.md — Agent Workflow

This file defines how an AI coding agent should use the portfolio specification without losing consistency.

## 1. Context loading

For a global architecture task, read:

1. `MASTER_PROMPT.md`
2. `docs/DESIGN.md`
3. `docs/COMPONENTS.md`
4. this file

For a single page, add only the relevant `docs/pages/*.md` file and its visual reference if available.

Do not load every page spec and then average them into one generic layout.

## 2. Build order

Recommended sequence:

1. Astro/TypeScript/Tailwind foundation
2. content collections and schemas
3. global tokens/fonts/grid
4. header/footer
5. reusable components
6. homepage
7. Work index
8. project case-study template
9. About
10. Notes index/article
11. CV
12. Contact/404
13. responsive pass
14. accessibility pass
15. performance/SEO pass
16. visual comparison against references

## 3. Page implementation loop

For each page:

1. Read the page spec.
2. Identify real content vs unknown content.
3. Build semantic structure first.
4. Apply global tokens and typography.
5. Implement desktop composition.
6. Deliberately recompose mobile.
7. Add diagrams/imagery only where justified.
8. Add subtle motion last.
9. Test keyboard and reduced motion.
10. Compare against the visual reference at representative viewport sizes.
11. Remove anything that looks generic, decorative or unsupported by real content.

## 4. Content safety

Never invent:

- work history
- companies
- clients
- metrics
- testimonials
- degrees
- dates
- technologies not confirmed
- project outcomes
- GitHub/public status

Unknown content must be hidden, stored as development-only fixtures or represented by safe internal placeholders that never leak to production.

## 5. Visual QA questions

Before marking a screen complete:

- Does it clearly belong to the Warm Mono Hybrid system?
- Is the warm paper/charcoal balance preserved?
- Is terracotta the dominant accent?
- Is cobalt rare and technical?
- Are there too many cards or pills?
- Is the hierarchy obvious from a quick scan?
- Does at least one visual element communicate systems/product thinking when appropriate?
- Is decorative imagery subordinate to real work?
- Is there any statue/classical portrait/generic AI art? If yes, remove it.
- Does mobile feel designed rather than compressed?

## 6. Reference-image QA

Generated design references may contain malformed text or fabricated demo content. Compare only:

- proportions
- section order
- visual density
- hierarchy
- color relationships
- typography roles
- image/diagram placement
- whitespace

Do not pixel-copy obvious generation errors.

## 7. Definition of done for a page

A page is not done until:

- semantic structure is correct
- no fabricated production content is visible
- desktop and mobile are intentional
- keyboard focus works
- reduced motion works
- image sizes are optimized
- hydration is minimal
- page metadata is present
- visual system matches `DESIGN.md`
- there are no obvious template/AI-portfolio clichés


## 8. Owner decisions — local-first development and initial preview (2026-09-18)

Routine automatic GitHub Actions remain paused. Run dependency installation, formatting, linting, type checks, tests, builds and browser checks locally wherever possible. Do not add push, pull-request, or schedule triggers. Unrun checks remain unverified.

Martin subsequently authorized an initial public Pages preview and the necessary PR merge. A bounded connected verification exception was used because the editing runtime cannot resolve npm/GitHub hosts. It has completed successfully; its temporary workflow is removed. The retained `pages.yml` is manual-only and requires successful release checks before deploying normal `dist` output. Do not recreate the operations-branch trigger for ordinary development. See `AGENTS.md`, `docs/decisions/0002-preview-publication.md`, and `docs/STATUS.md`.

The approved preview target is `https://martin-tahli.github.io/martin-tahli/`. Keep indexing disabled while the preview is under review. Test the site at `/martin-tahli/` as well as `/`; never hard-code the deployment prefix inside components. The root README is the short profile introduction; engineering setup instructions live in `docs/DEVELOPMENT.md`.
