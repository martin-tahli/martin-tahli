# Martin Tahli — Portfolio

An editorial, static-first portfolio for an **AI-Native Product & Systems Engineer**.

The site and this repository serve the same purpose: make the work, reasoning, constraints, and verification inspectable. The visual system is **Precision Editorial — Warm Mono Hybrid**.

**Status:** foundation in review. Not deployed or release-ready. GitHub Actions are paused. See [the verification record](docs/STATUS.md).

## Local development

Use the Node version in `.nvmrc`. The pinned lint tooling has a stricter runtime requirement than the application's broad Node engine range; `engine-strict` prevents an incompatible install.

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open the address printed by Astro, including `/martin-tahli/`. Dependencies are exact-pinned and the existing `package-lock.json` is preserved. Do not regenerate the lockfile in Actions or bypass peer dependency errors.

## Structure

```text
config/site.mjs          Build target, base path, indexing, isolated test mode
src/content.config.ts   Validated project and note metadata
src/content/            Real, author-reviewed Markdown/MDX only
src/data/profile.ts     Known personal facts and optional professional data
src/components/         Shared UI, editorial primitives, diagrams, MDX callouts
src/layouts/            HTML document, metadata, navigation, fonts
src/pages/              Static routes and content-driven detail templates
src/styles/             Primitive tokens, semantic text roles, responsive rules
src/utils/              URL boundaries, publication policy, content queries
scripts/                Local verification helpers; no remote execution
tests/                 Unit tests, browser tests, synthetic fixtures
docs/                   Approved specifications, decisions, content guide, status
reference/              Reference transfer notes; approved binary still pending
```

## Verification

Run the fast dependency-free checks with `npm test`. With dependencies installed, run:

```sh
npm run format
npx playwright install chromium
npm run verify
```

`verify` runs formatting, linting, Astro/TypeScript checks, unit tests, the normal static build, browser checks, then an isolated fixture build and its browser checks. The fixture build uses `test-dist` and a separate cache. It cannot enable indexing. Browser screenshots are review artifacts, not automatically approved visual baselines.

To test the alternate root deployment target on a POSIX shell:

```sh
SITE_BASE=/ npm run build
SITE_BASE=/ npm run test:e2e
```

Never equate passing utility tests with a passing application build. Current results and blocked checks belong in [docs/STATUS.md](docs/STATUS.md).

## Content model

Add a project or note as an MD/MDX entry; do not edit a page to add content. Publication fails closed unless `draft: false` is explicit. Future-dated notes are excluded. A project only receives a detail route when `caseStudyAvailable: true` is also set. Empty published bodies and duplicate routes fail validation.

A public case study may describe private-source work. Source links require explicitly public repository visibility. Unknown employers, outcomes, skills, contact information, and PDF downloads stay absent, not fabricated.

See [the authoring guide](docs/CONTENT.md) and the relevant [page specifications](docs/pages/).

## Deployment

The current repository is `martin-tahli/martin-tahli`; its default Pages project-site base is `/martin-tahli/`. A root site or custom domain is a separate release decision, not a reason to hard-code links or rename this repository.

No workflow is active. Indexing defaults to off. Read [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) before any release.

## AI-assisted development

Product intent and design constraints are written before implementation. AI can assist with implementation, research, and test design; that does not make generated code or claims verified. The review record distinguishes executed checks from proposed checks. Human approval controls content, visual acceptance, merging, and release.

## Specifications

Start with [MASTER_PROMPT.md](MASTER_PROMPT.md), then [DESIGN](docs/DESIGN.md), [COMPONENTS](docs/COMPONENTS.md), [IMPLEMENTATION](docs/IMPLEMENTATION.md), and only the relevant page spec. [AGENTS.md](AGENTS.md) records the owner-approved development constraints.

A license has not been selected. Do not add one without Martin's approval.
