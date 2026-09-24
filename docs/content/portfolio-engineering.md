# Portfolio engineering case-study editorial contract

Decision: 2026-09-24. Include the portfolio as supporting engineering work, not as a replacement for Findavia or evidence of a commercial AI product.

## Fit and placement

The source supports architecture, publication policy, constrained AI-assisted development, responsive iteration, accessibility checks, and delivery reliability. Those decisions fit the AI-Native Product & Systems Engineer positioning in `MASTER_PROMPT.md`. The existence of another website alone would not be a sufficient story.

Canonical content: `src/content/projects/portfolio-engineering.mdx`. Slug: `portfolio-engineering`. Use the existing collection, Work index, and case-study template. Set `featured: false`: Findavia stays the homepage's featured product and precedes this entry on Work. Do not hardcode new project data into either page or change the shared sorting rules.

The title is **Portfolio publishing system**. Status is `in-progress`, qualified visibly as a deployed, non-indexed preview. Public source visibility is confirmed by repository metadata. The live link points to the portfolio preview, not an unmerged case-study route.

## Reading structure

Keep five main sections: Overview, Decisions, Architecture, AI-assisted iteration, and Outcome. Aim for roughly 600 words excluding the diagram and optional notes. Keep ownership, preview status, factual-approval limits, and unsupported outcome boundaries visible.

Reuse `CaseStudyFlow.astro` for one captioned, semantic three-step architecture flow and `TechnicalDetail.astro` for three default-closed notes: publication/fixtures, CI failure/correction, and verification/evidence limits. Use the established text-led header fallback, not an invented screenshot or recursive homepage hero. No new dependencies, hydration, global styling, or publishing policy.

The page is not a recruiter audit. Do not publish the supplied questionnaire, signal scoring, internal ledger, or a long list of proposed visuals as the main narrative. Do not present AI tool use as a customer-facing AI feature.

## Source basis and edits

Primary source: Martin's uploaded `PORTFOLIO_ENGINEERING_CASE_STUDY.md`, headed **Project Evidence → Engineering Case Study**. It reports a review of `martin-tahli/martin-tahli` at `8ba3afc` on 2026-09-19. Preserve its terminology and evidence boundaries rather than filling gaps with invented history or metrics.

The implementation also inspected the live portfolio repository at the Findavia merge commit, `83b79be64e6795654b0ababda4dc27b6c9bb18bd`. That is the baseline of this feature branch and the pinned reference for public implementation links.

Source map:

- Overview and role: Project Snapshot, The problem, and Short Project Version.
- Publication decisions: The decisions that mattered, including explicit publication and synthetic-content isolation; checked against `src/content.config.ts` and `src/utils/content.ts`.
- Architecture: Architecture and static/native behavior; checked against the content queries, homepage query, and shared case-study components.
- AI iteration: How AI was used and the documented homepage audit/correction. Do not imply this change reran the historical human review.
- CI failure/correction: What did not work / what changed. Current delivery policy was inspected in `.github/workflows/pages.yml` and `AGENTS.md`; historical failures remain attributed to the supplied review.
- Outcome: reusable publishing capability. Findavia is a new repository observation after PR #8 was merged on 2026-09-24, not a claim in the older source snapshot.
- Evidence limits: Questions / Missing Evidence and Weak or unsupported signals. Keep unmeasured outcomes and precise authorship attribution absent.

Editorial corrections are deliberate. Build-time schemas constrain structure and publication; they cannot prove professional facts. The draft's stronger suggestion that code itself prevents all unsupported facts has been narrowed accordingly. Claims of empty production Work, seven routes, and 82 current unit tests are stale after Findavia and must not be repeated as present-tense results. No performance, conversion, hiring, adoption, or AI-speed metrics have been added.

## Branch and release boundary

Martin explicitly requested merging the existing Findavia work first. PR #8 was merged into `main` at `83b79be64e6795654b0ababda4dc27b6c9bb18bd`, superseding its earlier branch-only instruction. This new work starts from that merged baseline on `feat/portfolio-engineering-case-study`.

Keep the portfolio engineering PR separate and unmerged for review. `draft: false` makes the content testable in the branch's normal build; it does not merge the branch or authorize deployment. The existing workflow publishes only successful `main` builds. Indexing remains disabled. Do not delete the Findavia branch or change repository identity, runner policy, or deployment target.

## Verification and review

Add browser contracts for Work placement and homepage non-promotion, metadata and public-source links, the six section targets, default-closed and expanded details, axe scans, no-hydration output, keyboard operation, both supported base paths, 320px reflow, tablet/desktop layouts, 200% text with missing fonts, reduced motion, and operation without JavaScript. In the fixture build, verify that this production route is absent.

Retain actual desktop/mobile page and Work-placement captures in the existing per-target browser artifacts. Inspect the rendered results; capture alone is not visual acceptance. Keep current commands, executing runner, run conclusion, artifact references, and any limits in the PR rather than turning them into permanent marketing metrics. Do not mark unexecuted checks as passing or substitute portfolio checks for Findavia application validation.
