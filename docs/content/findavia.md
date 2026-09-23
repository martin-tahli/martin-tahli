# Findavia case-study editorial contract

Decision updated: 2026-09-23. Martin approved improving the existing Findavia branch with a shorter narrative, optional technical depth, and real product media. This supersedes the initial ten-section narrative and text-only project presentation.

## Placement and publication boundary

Canonical content: `src/content/projects/findavia.mdx`. Slug: `findavia`. Featured on Home, discoverable on Work, rendered by the shared `/work/[slug]` template. The current project-path route is `/martin-tahli/work/findavia/`; alternate-root deployment remains supported. Do not duplicate the project summary in page components.

Keep `feat/findavia-case-study` and PR #8 unmerged for Martin's review. This work does not authorize merging, enabling indexing, changing repository identity, or deploying to a new target.

## Reading structure

The main narrative covers Overview, Product decisions, Architecture, AI-assisted engineering, and Outcome. Keep it around 600 words, excluding the diagram and optional detail. It must answer what Findavia is, who it serves, what Martin owned, what decisions mattered, and what the documented outcome does and does not establish.

An Engineering detail section contains three native `TechnicalDetail.astro` disclosures: booking/account boundaries; AI-assisted verification; and integrations/release/evidence limits. Default closed, keyboard-operable, usable without JavaScript. The material remains in the static HTML. Do not hide important project-stage limitations inside a disclosure; they stay visible in Overview and Outcome.

The page uses the shared Warm Mono Hybrid layout, a media-led 5/7 opening when an image exists, one visible architecture diagram, and a second method diagram inside the AI detail. Image-less entries retain a text-led fallback. Mobile becomes a deliberate text-then-media sequence. No added hydration, dependencies, third-party embeds, or global style changes.

## Real media provenance

Asset: `src/assets/findavia/discovery.webp`.

- Source: the anonymous public homepage at `https://findavia.com/`.
- Capture: 2026-09-23 at 12:57:10 UTC, Chromium, 1440 by 960 viewport; HTTP 200.
- The full source screenshot was cropped to `(255, 118, 1185, 570)` and resized to 780 by 379 pixels. WebP, quality 65, 16,636 bytes.
- Git blob: `792c29d8bc37fc5a4cb08d530d8f5d6469d27891`.
- The crop shows actual Bulgarian public discovery copy, service and city fields, and service shortcuts. It is not a generated mockup. No UI elements or data were invented or composited.
- A separate anonymous 390 by 844 mobile capture was inspected but is not the production asset. The portfolio itself renders responsively; do not describe its mobile rendition of this crop as a native mobile-product screenshot.
- No authenticated pages, credentials, private customer data, bookings, or other state-changing actions were used. The temporary capture allowed only GET, HEAD, and OPTIONS. The one-time acquisition test is removed from the final tree; normal portfolio tests remain offline with respect to Findavia.
- Acquisition evidence: workflow run `35863659460`, artifact `10751780084`. The public page capture is visual evidence, not proof that booking, search, or authenticated workflows passed functional testing.

The caption identifies the capture date and crop. `liveUrl` now points to the observed public homepage. Home and Work consume the same real image through the existing content collection. Astro processes it locally; the portfolio does not hotlink the image or fetch Findavia at runtime.

## Source and claim boundaries

Engineering claims remain grounded in Martin's supplied **Findavia — Engineering Case Study** (`Pasted markdown.md`). The document reports a repository review; this portfolio change does not rerun or independently certify the Findavia application. Public media acquisition adds only the observed discovery surface, its URL, and its capture date.

The supplied source supports primary product-engineer/repository-maintainer responsibility, the shared solo/company provider model, committed member assignment, deferred monetization, the direct Flutter/Supabase architecture, the booking-concurrency and account-authority corrections, constrained AI assistance, and lifecycle QA and release gates.

The documented stage is production-deployed, with launch validation, provider seeding, and stranger testing ongoing and billing deferred. `status: live` means deployed, not commercially validated. This stage is from the source snapshot; capturing the current homepage does not independently refresh the product roadmap.

Do not invent a development timeline, hours, adoption, revenue, retention, quantified speed gains, customer interviews, personal acceptance/rejection of a particular AI proposal, current performance scores, or full current-release cross-browser validation. Those gaps cannot be filled by rewriting. AI here refers to the development workflow, not a customer-facing autonomous agent.

The source reports 1,123 local Flutter tests, 212 owned QA inventory keys, and 64 Playwright spec files. These are different measures, not coverage percentages. Keep them out of the public page until a dated report identifies commit, environment, exact commands, results, and limitations. Portfolio CI totals must never be presented as Findavia application test results.

Source visibility is private. Do not expose the private code link. No unverified project year, demo recording, customer feedback, or attributed AI-decision anecdote is added. Keep the internal recruiter audit and unanswered research questionnaire out of the public narrative.

## Source map

- Overview and responsibility: Project Snapshot, What I built, Short Project Version.
- Decisions: one provider model, member assignment, and deferred monetization.
- Architecture: the documented client/services/database trust boundary.
- AI example: the independently checked accessibility regression fix.
- Technical disclosures: member-calendar enforcement, the layered role-escalation correction, QA handoff evidence, integrations, and release gates.
- Outcome and limitations: Verification, Outcome, and Questions / Missing Evidence.

## Verification

Run the existing self-hosted pipeline without weakening its gates. Tests cover Home/Work image and link discovery, case metadata and privacy, image decoding, six section targets, collapsed and expanded accessibility, native keyboard disclosure behavior, all-detail reflow at narrow/tablet/desktop widths and enlarged text, reduced motion, no-JavaScript operation, and screenshot capture. Production checks intentionally skip the isolated synthetic-content build.

Retain separate root, project, and fixture reports. Inspect actual desktop/mobile main-story, expanded-detail, and homepage-placement screenshots. A captured image is not automatic visual approval; record observations and actual run results in the PR. No merge or deployment is part of this iteration.
