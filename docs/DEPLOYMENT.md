# GitHub Pages preview

The owner authorized publication of the in-progress portfolio for visual review on 2026-09-18. The preview target is `https://martin-tahli.github.io/martin-tahli/`. This is not final content or visual acceptance.

## One-time account setup

In this repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. The connected editing tools do not expose this settings control. Do not paste a personal access token into chat or commit credentials to work around it.

After the publication PR is merged, open **Actions → Deploy portfolio preview → Run workflow**, select `main`, and run it. The workflow exists at `.github/workflows/pages.yml` and only accepts a manual trigger. Running it against a branch other than `main` skips publication.

## What a deployment does

The build job checks Pages configuration, installs the exact lockfile with the pinned Node runtime, and runs formatting, linting, Astro/TypeScript checks, unit tests, the normal static build, desktop/mobile browser checks, and isolated fixture checks. A failed gate prevents publication.

Only `dist` is uploaded, never `test-dist`. An additional artifact-content check rejects synthetic fixture markers. The upload is retained for one day. The separate deployment job has Pages-write and OpenID Connect permissions, but cannot write source code. The workflow has bounded timeouts and does not cancel a deployment midway when another manual run is requested.

The temporary initial verification workflow is removed before merge. Ordinary source pushes, PR updates, and schedules do not trigger Actions. See [decision 0002](decisions/0002-preview-publication.md).

## Configuration

`config/site.mjs` centralizes the target. Preview deployment explicitly sets:

- `SITE_ORIGIN`: `https://martin-tahli.github.io`
- `SITE_BASE`: `/martin-tahli/`
- `SITE_INDEXABLE`: `false`
- `PORTFOLIO_TEST_CONTENT`: `false`

The fixture script overrides only its child build/test processes and writes to a separate directory. It cannot replace the normal deployment artifact.

No custom domain, repository rename, or DNS change is included. A future root-site target is a separate decision; the existing URL helper supports root and project paths without component rewrites.

## Verify after publication

Open the homepage, Work, Notes, About, CV, and Contact. Check that CSS/fonts load, local links preserve `/martin-tahli/`, and a genuinely nonexistent address shows the generated 404 page. Review the homepage at desktop and mobile widths. A successful build does not by itself prove that the live hosting configuration is correct.

## Indexing and final release

Every preview page has `noindex, nofollow` metadata. The incomplete CV and 404 remain non-indexable independently. The generated subpath `robots.txt` is not the host-root robots policy; do not claim it blocks crawling for the whole host. Noindex is not access control: this preview is public.

Final release still needs approved project evidence, CV and contact content, visual acceptance, social preview assets, print/performance review, and a separate indexing decision. Do not invent completed checks or performance scores.

## Primary references

- Astro: https://docs.astro.build/en/guides/deploy/github/
- GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Pages configuration action: https://github.com/actions/configure-pages

Consulted 2026-09-18. Default automatic-trigger examples do not override the manual-only policy.
