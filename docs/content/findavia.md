# Findavia case-study editorial contract

Decision recorded: 2026-09-23. Martin approved adapting the supplied Findavia engineering case study into the portfolio on a separate branch.

## Placement

The canonical content is `src/content/projects/findavia.mdx`. Its slug is `findavia`, it is featured, and it uses the existing `/work/[slug]` template. The normal content collection adds it to Home and Work automatically; do not duplicate its summary in page components. On the current project-path deployment, the route is `/martin-tahli/work/findavia/`. Root deployment remains supported by the existing path utilities.

This content approval does not authorize merging this branch, changing indexing, renaming the repository, or deploying to a new target.

## Editorial direction

Lead with the product and Martin's responsibility. Demonstrate product decisions, architecture, failures and corrections, AI-assisted verification, and delivery limits. Findavia supports the AI-native engineering position through its development workflow; do not recast it as a customer-facing agentic or AI-powered product.

Keep the public page in the existing Warm Mono Hybrid reading layout. It uses shared callouts, generated section navigation, and two text-based system diagrams. The diagrams describe source-supported flows, not product screenshots. No new dependencies, hydration, external embeds, or global style changes are required.

Home and Work intentionally use the existing text-led project variant until approved real media are available. Do not manufacture screenshots to fill the image slot.

## Source and claim boundaries

The source is the user-supplied **Findavia — Engineering Case Study** (`Pasted markdown.md` in the portfolio conversation). That document reports a repository review; this portfolio change does not rerun or independently certify the Findavia application.

The source supports the primary product engineer / repository maintainer role; direct booking, quote-to-booking, package core and multi-member operations; Flutter and Supabase architecture; the booking-concurrency and role-boundary corrections; constrained AI-assisted development; and lifecycle QA and release gates.

The stated delivery stage is production-deployed with launch validation, provider seeding, and stranger testing ongoing, with billing deferred. `status: live` means deployed, not commercially validated. Preserve the explicit distinction in the overview and outcome.

The source does not establish a delivery timeline, development hours, user adoption, revenue, retention, speed gains, current performance scores, complete current-release cross-browser validation, or precise human/AI authorship percentages. Do not infer them from commit dates, configuration thresholds, or tool availability.

The source review reports 1,123 local Flutter tests, 212 owned QA inventory keys, and 64 Playwright spec files. These are different measures, not percentages of coverage. They are intentionally omitted from the public page until a dated report identifies the commit, environment, exact commands, results, and limitations. Do not relabel them as current checks performed by this portfolio change.

Source visibility was confirmed as private through repository metadata. Do not expose a source-code link. Project dates, live/demo URLs, product images, and videos remain absent rather than guessed.

## Source map

- Overview and role: Project Snapshot, What I built, and Short Project Version.
- Product decisions: The decisions that mattered, including one provider model, committed member assignment, and deferred monetization.
- Architecture diagram: Architecture and the proposed trust-boundary visual. It omits optional integration branches rather than inventing connections.
- Product diagram: The problem and What I built. It is a conceptual product flow, not a claim that every actor follows one mandatory sequence.
- AI-assisted engineering: How AI was used and the independently checked accessibility fix.
- Challenges: the member-level availability conflict and layered role-escalation correction.
- Testing and outcome: Verification, Outcome, and the explicit Questions / Missing Evidence limitations.

The internal recruiter audit and unanswered research questions are not published as case-study sections.

## Verification

`tests/e2e/findavia.spec.ts` checks Home/Work discovery, the generated detail route, metadata, private-source handling, diagram semantics, working section targets, keyboard navigation, accessibility, reflow, reduced motion, no-JavaScript reading, and screenshots for review. It skips the isolated fixture build because that collection must not include production projects.

Run the repository's existing `npm run verify` and alternate-root verification. Do not weaken the workflow or self-hosted runner checks to accommodate this content. A screenshot capture is evidence for review, not automatic visual approval. Record actual execution results in the branch/PR handoff.

Before adding further claims, obtain a dated validation report and approved media. Update this contract when those facts are confirmed instead of leaving contradictory alternatives in the page.
