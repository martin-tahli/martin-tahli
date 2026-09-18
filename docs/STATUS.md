# Preview verification status

Date: 2026-09-18. The owner authorized preview publication, merge, and now routine self-hosted Actions. Final professional content and visual acceptance remain separate decisions.

## Current deployment checkpoint

The owner-approved Actions policy was merged in PR #2. Every job now targets `self-hosted`; there is no hosted fallback. A workflow-context error from the initial change is corrected in PR #3. Application source and locked dependencies are unchanged from the verified preview.

[Self-hosted run 35355333153](https://github.com/martin-tahli/martin-tahli/actions/runs/35355333153) was accepted by `martin-tahli-ci-runner` (Linux/X64), using Node 22.23.2 and npm 10.9.8. Locked dependency installation, browser download, and the alternate root static build succeeded. Chromium could not start because the runner environment lacks `libnspr4.so`; the browser suite failed at launch and deployment did not run. This is not a successful browser verification. Other required OS libraries may also be missing; provision the complete Playwright Chromium dependency set, not just the first reported library.

The follow-up adds one browser startup preflight before the suites and runs formatting, lint, types, and unit contracts before browser setup. Its local dependency-free suite passes 82 tests; remote execution remains a separate check. The failure gate is not removed.

At the latest repository read GitHub Pages was still disabled. The preview is **not live**. Both runner provisioning and Pages activation must be completed before a full successful run can publish. Instructions are in `docs/DEPLOYMENT.md`; actual workflow results take precedence over this dated checkpoint.

## Implemented

The static Astro application includes Home, Work, Notes, About, CV, Contact, 404, and content-driven project/note templates. Unknown professional facts remain absent. Drafts, future notes, and synthetic fixtures are excluded from normal output. Indexing defaults to off.

The root README is the short profile introduction; setup and engineering documentation live in `docs/DEVELOPMENT.md`.

## Previously executed application verification

Verified source: `e388fcbbb2cfa7db12ebcb3043ccf03ca9588a32`.

[Connected verification run 35346861647](https://github.com/martin-tahli/martin-tahli/actions/runs/35346861647) completed successfully with Node 22.23.2 and npm 10.9.8.

- Locked installation, Prettier formatting, and ESLint passed.
- Astro check examined 40 files with zero diagnostic errors, warnings, or hints.
- All 72 unit tests passed at that revision.
- Normal project-prefix build passed. Desktop/mobile Chromium checks: 28 passed; two fixture-only tests intentionally skipped.
- Isolated fixture build passed. All 30 Chromium checks passed, including MDX rendering and publication/source-visibility boundaries.
- Alternate root-prefix build passed. Desktop/mobile Chromium checks: 28 passed; two fixture-only tests intentionally skipped.
- All eight enforced verification gates passed. The final formatter patch was empty.

These results are historical evidence for the application, not proof that the new runner or deployment has executed. Current run links and outcomes belong in the policy PR and workflow logs.

## Rendered visual review

Actual 1440px desktop and 390px mobile homepage screenshots from the successful run were inspected. Typography, warm-paper composition, terracotta actions, diagram placement, stacked mobile flow, and empty states rendered without observed clipping. Owner visual acceptance remains open. This is not a full browser, accessibility-conformance, or performance certification.

## Known warnings and remaining work

Production content-loader warnings reflect intentionally empty project/note collections. The isolated MDX fixture build emitted an upstream warning about `use astro:head-inject`; rendering and fixture tests passed. Keep that warning visible for later MDX/media testing.

Remaining release work includes approved project evidence, CV content/PDF, public contact details, original reference-image transfer, final visual acceptance, social preview imagery, privacy-conscious video support, broader browser testing, and print/performance review. No Lighthouse score or completed final release is claimed.
