# Deployment — self-hosted checks and GitHub Pages

## Current policy

Martin authorized routine Actions, self-hosted execution, merge, and preview publication on 2026-09-18. The earlier paused-Actions/manual-only rules are superseded by [decision 0003](decisions/0003-self-hosted-ci.md).

`.github/workflows/pages.yml` is the single verification/publication pipeline. Owner-controlled pushes to `main`, `feat/**`, `fix/**`, `chore/**`, and `docs/**` run checks. A successful `main` run publishes automatically. `workflow_dispatch` supports deliberate retries; development branches never deploy. There are no pull-request or scheduled triggers.

## Runner requirements

Both jobs target the registered `self-hosted` label with no hosted fallback and no assumed custom labels. A runner must be online, assigned to this repository, and able to download the locked toolchain and test browser. Job metadata and logs are the evidence that work actually ran.

Provide a dedicated, isolated runner with a current GitHub runner service, Git, Bash, tar, and the operating-system libraries required by Playwright Chromium. Windows runners additionally need a working Bash installation such as Git Bash. `actions/setup-node` installs the exact version from `.nvmrc`. The workflow runs `npm ci` and `npx playwright install chromium`; it deliberately does not run `--with-deps`, sudo, or change host services. Provision missing operating-system dependencies separately on the runner host. Do not put personal credentials or unrelated workloads on the build machine.

No external pull-request event executes this pipeline. Exact repository and owner/initiator checks further restrict execution. This reduces exposure but does not isolate malicious dependencies or owner-approved code; repository/workflow review and runner isolation remain necessary.

## First-run prerequisite failure

The registered `martin-tahli-ci-runner` accepted the job, installed the locked dependencies, and built the static site. Chromium startup failed with `libnspr4.so` missing. See [run 35355333153](https://github.com/martin-tahli/martin-tahli/actions/runs/35355333153). A successful browser binary download does not install Linux shared-library dependencies.

Provision these dependencies once in the **same dedicated runner environment** where the workflow executes. From its repository checkout with the pinned Node toolchain and `npm ci` completed, run as the runner image/container's provisioning administrator:

```sh
npx playwright install-deps chromium
```

This command changes OS packages, so it belongs in controlled runner provisioning, not an application workflow with elevated host access. For a containerized runner, bake the setup into its image and recreate the runner; installing only on the outer host will not fix missing libraries inside the container. Do not assume the GitHub runner name is the Docker container name. See [Playwright browser prerequisites](https://playwright.dev/docs/browsers#install-system-dependencies).

After provisioning, the workflow downloads the version-matched browser and runs `node scripts/check-browser.mjs`. This opens and closes Chromium once before the complete suites, failing clearly when the runtime is still unusable. It does not bypass any test.

## One-time Pages activation

In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The connector used to maintain this repository exposes code/PR operations, not Pages administration. The default workflow token can publish to an enabled Pages site but is not a substitute for the initial activation permission. Do not paste a personal access token into chat or hard-code one into a workflow.

Once enabled, merge a verified change to `main` or use **Actions → Portfolio checks and Pages → Run workflow → main**. If a prior run passed verification but failed only at Pages configuration, use **Re-run failed jobs** after activation while the one-day Pages artifact is still available; otherwise run the workflow again.

## Target and verification

`config/site.mjs` remains the single build-configuration boundary:

- `SITE_ORIGIN`: `https://martin-tahli.github.io`
- `SITE_BASE`: `/martin-tahli/`
- `SITE_INDEXABLE`: `false`
- `PORTFOLIO_TEST_CONTENT`: `false`

The pipeline checks the alternate `/` target first. It then runs `npm run verify`, which checks formatting, lint, Astro/TypeScript, unit tests, the project-base static build, browser/accessibility tests, and isolated fixtures. This order leaves normal `dist` with `/martin-tahli/` URLs. It checks for the real index/404 files and rejects synthetic markers before uploading. Only `dist` is published; `test-dist` is never a deployment input.

Verification has read-only repository access. Only the separate deployment job receives `pages: write` and `id-token: write`. Checkout does not persist credentials. Per-branch concurrency avoids overlapping runs for one branch; jobs have explicit timeouts. Browser reports expire after three days and Pages artifacts after one day.

## Preview versus final release

Expected public URL: `https://martin-tahli.github.io/martin-tahli/`. Call it live only after the deployment succeeds and the public URL is checked. Validate main routes, assets, canonical paths, and a genuinely missing URL returning the custom 404; do not use an SPA fallback.

Keep `noindex` during review. A robots file at the project subpath is not a host-root crawling policy. Indexing, final content/visual acceptance, custom domains, and repository renaming are separate decisions. Do not invent projects, contact details, or performance scores to complete the preview.

## Primary references

- [Runner routing](https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job)
- [Self-hosted runner security](https://docs.github.com/en/actions/reference/security/secure-use)
- [Pages activation input contract](https://github.com/actions/configure-pages/blob/983d7736d9b0ae728b81ab479565c72886d7745b/action.yml)
- [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/)

Reviewed 2026-09-18.
