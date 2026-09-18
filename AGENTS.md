# Agent development contract

## GitHub Actions and runner policy

Owner decision: 2026-09-18. Martin removed the development pause after providing self-hosted runners and authorized merging and deploying the portfolio preview. This supersedes the earlier paused-Actions and manual-only rules.

- Actions may run routinely for verification and deployment. No exceptional local blocker or per-run approval is required for the approved portfolio workflow.
- Route every job to `self-hosted`; do not silently fall back to GitHub-hosted runners. Inspect job results to confirm a runner actually accepted the work.
- `.github/workflows/pages.yml` verifies owner-controlled pushes to `main`, `feat/**`, `fix/**`, `chore/**`, and `docs/**`, and supports manual execution. Only successful `main` runs publish.
- Never execute external pull-request code on the local machines. Do not add `pull_request`, `pull_request_target`, issue/comment, or untrusted artifact execution triggers. Review external contributions before incorporating them into an owner-controlled branch.
- Keep the exact repository and owner/initiator checks, read-only source permissions, commit-pinned actions, disabled checkout credential persistence, timeouts, and short artifact retention.
- Treat self-hosted runners as dedicated, isolated build machines, not trusted personal workstations. Workflow conditions reduce exposure; they are not a security sandbox.
- Install locked project dependencies and the test browser only. Do not install host system packages with sudo, inspect local credentials, or modify the runner service. Missing prerequisites must be reported explicitly.
- Never publish `test-dist`, synthetic content, or a failed build. Preserve the full verification gates and disabled preview indexing.
- Do not regenerate dependencies repeatedly, create self-committing jobs, or represent an unrun check as passing.

## Review and content integrity

- Work through feature branches and PRs. The current runner-policy change, merge, and preview deployment are authorized. Unrelated changes, repository renames, custom domains, and final content/indexing approval remain separate decisions.
- Preserve Precision Editorial — Warm Mono Hybrid and the static-first architecture.
- Follow `MASTER_PROMPT.md`, `docs/DESIGN.md`, `docs/COMPONENTS.md`, `docs/IMPLEMENTATION.md`, the relevant page specification, then visual references.
- The root README is the public GitHub profile; setup and development instructions live in `docs/DEVELOPMENT.md`.
- Never invent professional facts, contacts, projects, technologies, outcomes, or metrics. Hide unknown content from production.
- Reference images guide composition, not factual content.
- Report what changed, what was actually checked, and what remains unresolved.
