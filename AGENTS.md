# Agent development contract

## GitHub Actions policy

Owner decision: 2026-09-18. GitHub Actions are paused during active development.

- Use the local development environment for dependency installation, formatting, linting, type checking, builds, tests, and browser checks wherever possible.
- Do not create or enable workflows triggered by pushes, pull requests, schedules, or other automatic events during development.
- GitHub repository reads, branches, commits, and pull-request reviews may continue without Actions.
- Keep proposed CI/deployment workflow templates outside `.github/workflows/` until activation is authorized.
- Use Actions only when implementation is ready and a necessary verification or deployment step genuinely cannot be completed locally. State the blocker and the narrow purpose before running it.
- Do not use Actions as a remote development shell, repeatedly resolve dependencies there, or enable self-committing bootstrap jobs.
- A missing local capability is not evidence that a check passed. Report unverified checks explicitly; do not weaken gates or fabricate results.
- Re-enabling automatic CI requires Martin's explicit approval. Manual-only execution is the default for any necessary exception.

## Review and content integrity

- Work on a feature branch. Do not merge into `main`, publish the site, rename the repository, or change repository settings without approval.
- Preserve the approved Precision Editorial — Warm Mono Hybrid direction and static-first architecture.
- Follow the specification hierarchy: `MASTER_PROMPT.md`, `docs/DESIGN.md`, `docs/COMPONENTS.md`, `docs/IMPLEMENTATION.md`, the relevant page specification, then visual references.
- Approved written specifications now live in the repository. The original reference binary still needs transfer; see `reference/README.md`.
- Never invent professional facts, contact details, projects, outcomes, or metrics. Keep unknown content out of production.
- Reference images are composition guidance, not factual sources.
- Keep test content outside `src/content`; fixture builds must use `test-dist`, never `dist`.
- Report exactly what changed, what was checked, and what remains unresolved. Use `docs/STATUS.md` for the current verification record.
