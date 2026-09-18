# 0003 — Self-hosted verification and automatic preview deployment

Date: 2026-09-18. Status: accepted by Martin.

## Context

Martin provided local GitHub runners, explicitly removed the Actions pause, and requested merge and deployment. The existing static application and content boundaries remain unchanged. There is no reason to retain a manual-only restriction based on the previous runner-minute concern.

## Decision

Use one commit-pinned Actions pipeline with self-hosted jobs. Owner-controlled development-branch pushes and manual requests run full verification. Successful `main` runs publish the normal project-path build to GitHub Pages. Keep the existing profile README and preview URL. Keep indexing disabled.

Do not trigger these local machines from public pull requests or comments. Restrict the workflow to this repository and its owner/initiator; source permissions remain read-only and Pages/OIDC write permissions exist only in the dependent deployment job. Retain timeouts and short-lived artifacts. Do not automatically install host system packages or inspect host credentials.

## Consequences

Routine CI and preview deployment no longer require an exceptional local blocker or separate per-run approval. Feature branches get execution evidence before merge. An offline, unmatched, or unprovisioned runner is a real blocker, not a successful check; there is no silent hosted fallback.

Self-hosting moves compute and maintenance to the owner's infrastructure. It does not make untrusted code safe. Use dedicated isolated runners and review workflow/dependency changes. Outside contributions must be reviewed before entering an owner-controlled branch.

Pages must still be enabled by an account with the required administration capability. Merely adding a workflow or configuring runners does not activate the site. Report verification, merge, deployment, and public HTTP checks as distinct states.

## Supersedes

Replaces the Actions execution restrictions in decisions 0001/0002, `AGENTS.md`, `MASTER_PROMPT.md`, and the implementation/deployment guides. It does not approve fabricated professional content, indexing, a new design, or a custom domain.
