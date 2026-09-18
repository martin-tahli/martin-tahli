# Preview verification status

Date: 2026-09-18. The owner authorized an initial public preview and the required merge. Final professional content and visual acceptance remain separate decisions.

## Implemented

The static Astro application includes Home, Work, Notes, About, CV, Contact, 404, and content-driven project/note templates. Unknown professional facts remain absent. Drafts, future notes, and synthetic fixtures are excluded from normal output. Indexing defaults to off.

The root README is the short profile introduction; setup and engineering documentation live in `docs/DEVELOPMENT.md`.

## Executed verification

Verified source: `e388fcbbb2cfa7db12ebcb3043ccf03ca9588a32`.

[Connected verification run 35346861647](https://github.com/martin-tahli/martin-tahli/actions/runs/35346861647) completed successfully with Node 22.23.2 and npm 10.9.8. The connected runner was necessary because the editing runtime cannot resolve npm/GitHub hosts. Routine development Actions remain paused.

- Locked installation, Prettier formatting, and ESLint passed.
- Astro check examined 40 files with zero diagnostic errors, warnings, or hints.
- All 72 unit tests passed.
- Normal project-prefix build passed. Desktop/mobile Chromium checks: 28 passed; two fixture-only tests intentionally skipped.
- Isolated fixture build passed. All 30 Chromium checks passed, including MDX rendering and publication/source-visibility boundaries.
- Alternate root-prefix build passed. Desktop/mobile Chromium checks: 28 passed; two fixture-only tests intentionally skipped.
- All eight enforced verification gates passed. The final formatter patch was empty.

The browser suite checked the six main routes for semantics, metadata, asset/request errors, horizontal overflow, and the configured Axe accessibility rules. It also checked keyboard navigation, no-JavaScript navigation, 320px reflow, reduced motion, and content exclusion. Passing these checks is not a claim of complete accessibility conformance or coverage of every browser.

The final cleanup changes only documentation, removes the temporary verification workflow, and tightens the workflow-policy unit test. Application source is unchanged from the verified commit. The 72 unit tests were rerun locally after cleanup; the pinned build and browser results above remain anchored to the verified source.

## Rendered visual review

Actual 1440px desktop and 390px mobile homepage screenshots from the successful run were inspected. Typography, warm-paper composition, terracotta actions, diagram placement, stacked mobile flow, and empty states render coherently without observed clipping. This is a preview review, not Martin's final visual acceptance. Screenshots were captured from the normal root-prefix build; the same application also passed the project-prefix browser checks.

## Known warnings and remaining work

Production content-loader warnings reflect intentionally empty project/note collections. The isolated MDX fixture build emitted an upstream bundler warning about the `use astro:head-inject` directive; rendering and fixture tests passed. Keep that warning visible for future MDX/media testing rather than suppressing it.

The temporary connected-verification workflow is removed. Only manual Pages deployment remains. Pages account setup and the first manual deployment still need completion; no live-hosting success is claimed. Follow `docs/DEPLOYMENT.md` and verify the public URL after deployment.

Remaining release work includes approved project evidence, CV content/PDF, public contact details, original reference-image transfer, final visual acceptance, social preview imagery, privacy-conscious video support, broader browser testing, and print/performance review. No Lighthouse score or completed final release is claimed.
