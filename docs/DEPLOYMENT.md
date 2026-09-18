# Deployment — inactive

GitHub Actions remain paused. There are no runnable files under `.github/workflows/`. Commits and pull requests are for source control and review, not remote build execution.

## Target configuration

`config/site.mjs` is the single configuration boundary. Defaults:

- `SITE_ORIGIN`: `https://martin-tahli.github.io`
- `SITE_BASE`: `/martin-tahli/`
- `SITE_INDEXABLE`: false
- `PORTFOLIO_TEST_CONTENT`: false

Supply overrides as process environment variables when running commands. This config does not promise automatic `.env` loading. Never put secrets in these variables.

Every internal navigation or public-asset link goes through the same base-path helper. Canonical URLs use the configured origin and actual route pathname. The favicon, navigation, content links, and sitemap therefore need verification at both the project prefix and `/`.

No custom domain, repository rename, Pages activation, or DNS change has been made. The original preferred root URL requires an explicit release decision.

## Release gates

1. Approve the real contact details, CV, projects, and all public claims.
2. Import the original reference image and finish desktop/mobile visual review.
3. Use the pinned Node runtime; run `npm ci`, formatting, linting, Astro checks, unit tests, static builds, and browser checks. Test both base paths and fixture isolation.
4. Review keyboard behavior, reduced motion, contrast, print layout, real images, and browser console errors. Run performance measurement; do not invent Lighthouse scores.
5. Confirm the final hosting target and social preview assets. Explicitly enable indexing only for an approved public release.
6. Obtain merge/publication approval. Only then introduce the smallest necessary manual-only deployment workflow if the required release step cannot be done locally. Automatic triggers require separate approval.

Deploy `dist`, never `test-dist`. Preserve the generated `404.html` and validate a genuinely nonexistent URL on the hosting provider. Do not use SPA fallback tricks for this static site.

## Robots and indexing

Meta robots defaults to `noindex, nofollow` on every page. The incomplete CV and 404 stay non-indexable independently. A robots endpoint and sitemap are generated, but a robots file served under a project subpath is not the host-root robots policy. Do not claim subpath robots.txt blocks crawling for the whole host. There is no live release in this milestone.

## Primary references consulted

- Astro GitHub Pages guide: https://docs.astro.build/en/guides/deploy/github/
- Astro content collections: https://docs.astro.build/en/guides/content-collections/
- Tailwind Astro integration: https://tailwindcss.com/docs/installation/framework-guides/astro
- Astro ESLint plugin: https://ota-meshi.github.io/eslint-plugin-astro/user-guide/

Consulted 2026-09-18. The default automatic deployment example does not override Martin's paused-Actions decision.
