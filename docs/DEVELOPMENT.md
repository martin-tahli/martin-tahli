# Portfolio development

This repository is both Martin's GitHub profile repository and the source of his static portfolio. The root `README.md` is intentionally a short public introduction. Technical documentation lives here rather than on the profile.

The visual system is **Precision Editorial — Warm Mono Hybrid**. Astro, TypeScript, MDX, and Tailwind form the static-first application. No React runtime is required.

## Local setup

Run from the repository root using the exact Node version in `.nvmrc`:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open Astro's printed address, including `/martin-tahli/`. Dependencies are exact-pinned. Commit lockfile changes only after resolving and reviewing them locally; do not bypass peer or engine errors.

## Structure

```text
config/site.mjs          Origin, base path, indexing, isolated fixture mode
src/content.config.ts   Validated project and note metadata
src/content/            Author-reviewed Markdown/MDX
src/data/profile.ts     Confirmed professional data and optional contact details
src/components/         Shared UI, diagrams, and MDX primitives
src/layouts/            Document metadata, navigation, and fonts
src/pages/              Static routes and content detail templates
src/styles/             Design tokens and responsive rules
src/utils/              URL boundaries, publication policy, and queries
scripts/                Local verification helpers
tests/                  Unit/browser tests and isolated synthetic fixtures
docs/                   Specifications, decisions, and verification records
reference/              Art-direction reference material
```

## Verification

```sh
npm test
npm run format
npx playwright install chromium
npm run verify
```

`verify` runs formatting, linting, Astro checks, unit tests, the static build, browser checks, then the isolated fixture build and its browser checks. Fixtures use `test-dist`, a separate cache, and disabled indexing. Never deploy that directory.

Also exercise the alternate root base on a POSIX shell:

```sh
SITE_BASE=/ npm run build
SITE_BASE=/ npm run test:e2e
```

Passing utility tests is not the same as a passing application build. Screenshots are review artifacts, not automatically approved baselines. Actual results and unresolved checks belong in [STATUS.md](STATUS.md).

## Content

Add projects and notes as MD/MDX, not page edits. Publication requires explicit `draft: false`; future-dated notes remain excluded. Project detail routes additionally require `caseStudyAvailable: true`. Empty published bodies and duplicate routes fail validation.

Private-source work can have a public case study, but source links require explicitly public visibility. Unknown employment, outcomes, skills, contact details, and PDF downloads remain absent. See [CONTENT.md](CONTENT.md) and [page specifications](pages/).

## Preview and deployment

The approved preview target is `https://martin-tahli.github.io/martin-tahli/`. This preserves the profile repository name; no rename or custom domain is needed. Indexing stays disabled while content and design are under review.

Routine commits and pull requests must not run Actions. The owner authorized a bounded connected verification exception to unblock the initial preview because the editing runtime cannot access npm. The temporary `ops/preview-check` branch is an explicit verification request, not an automatic development pipeline. Its workflow is removed before merging. The final Pages workflow is manual-only. See [DEPLOYMENT.md](DEPLOYMENT.md) and [decision 0002](decisions/0002-preview-publication.md).

## AI-assisted development

Specifications precede implementation. AI assistance does not make generated code or claims verified. Distinguish executed checks from intended checks. Human decisions control professional facts, visual acceptance, and publication scope.

Read [MASTER_PROMPT.md](../MASTER_PROMPT.md), [DESIGN.md](DESIGN.md), [COMPONENTS.md](COMPONENTS.md), [IMPLEMENTATION.md](IMPLEMENTATION.md), and the relevant page specification. [AGENTS.md](../AGENTS.md) records owner-approved operating constraints.

A license has not been selected. Do not add one without Martin's approval.
