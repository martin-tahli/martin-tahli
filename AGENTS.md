# Agent development contract

## GitHub Actions policy

Owner decision: 2026-09-18. Routine GitHub Actions remain paused during development.

- Prefer the local runtime for dependency installation, formatting, linting, type checks, builds, tests, and browser checks.
- Do not enable routine push, PR, or schedule triggers. Keep future workflow templates outside `.github/workflows/` until approved.
- Repository reads, feature branches, commits, and reviews do not require Actions.
- The owner subsequently requested an initial public Pages preview and authorized the required PR merge. The bounded connected release-check exception is recorded in `docs/decisions/0002-preview-publication.md`: `ops/preview-check` is an explicit verification request, never a development-loop trigger. Remove that temporary workflow before merging.
- Retain only manual Pages deployment after the initial requested publication. Re-enabling routine automatic CI requires explicit approval.
- Do not use Actions as a general remote shell, regenerate dependencies repeatedly there, or create self-committing bootstrap jobs.
- State a genuine local blocker and narrow purpose before an exceptional run. Group fixes before retrying; use read-only source permissions, timeouts, and short artifact retention.
- A missing capability does not make a check pass. Report unverified checks explicitly and do not weaken verification gates.

## Review and content integrity

- Work through feature branches and PRs. The initial preview merge/publication is authorized; future unrelated releases, renames, domains, and settings changes still require approval.
- Preserve Precision Editorial — Warm Mono Hybrid and the static-first architecture.
- Follow `MASTER_PROMPT.md`, `docs/DESIGN.md`, `docs/COMPONENTS.md`, `docs/IMPLEMENTATION.md`, the relevant page specification, then visual references.
- The root README is the public GitHub profile; setup and development instructions live in `docs/DEVELOPMENT.md`.
- Never invent professional facts, contacts, projects, technologies, outcomes, or metrics. Hide unknown content from production.
- Reference images guide composition, not factual content.
- Report what changed, what was actually checked, and what remains unresolved.
