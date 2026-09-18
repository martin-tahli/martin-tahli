# 0002 — Profile README and public preview

Date: 2026-09-18. Owner decision: simplify the GitHub profile README, enable GitHub Pages for visual review, and merge the required PR when needed.

## Decision

- Keep `martin-tahli/martin-tahli` as the profile and portfolio-source repository.
- Use the root README for a short introduction and portfolio link. Move setup and engineering documentation to `docs/DEVELOPMENT.md`.
- Publish the in-progress static preview at `https://martin-tahli.github.io/martin-tahli/`. This is not approval of final copy, project claims, CV facts, or visual acceptance.
- Keep indexing disabled. Publish only the normal `dist` output; synthetic fixtures never belong in that artifact.
- Preserve the paused automatic-development-CI policy. A temporary, explicitly requested `ops/preview-check` branch may run connected release verification because the current editing runtime cannot resolve npm or GitHub hosts. This exception is for the initial publication checkpoint, not a remote development shell. It has read-only source permissions, a timeout, and no self-committing steps. Remove the temporary workflow before merging.
- The retained Pages workflow is manual-only. Any initial deployment trigger must be bounded and removed after that requested release; routine pushes, PRs, and schedules remain inactive.

## Verification and control

Do not call unrun checks successful. Collect all independent failures in one verification run, require every gate before calling it verified, and group fixes before a deliberate retry. Keep review artifacts briefly rather than using Actions storage indefinitely.

The connected GitHub tools can change files and merge PRs, but do not expose the Pages settings control or manual workflow dispatch. The account owner must select GitHub Actions as the Pages publishing source. Never request an access token in chat or attempt to print workflow credentials.

The initial preview request authorizes merge and publication for review. It does not authorize repository renaming, a custom domain, a license selection, indexing activation, or recurring automatic CI.
