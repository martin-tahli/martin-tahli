# Content authoring

## Projects

Create `src/content/projects/<slug>.mdx` (or `.md`). Begin as a draft. Use a lowercase, hyphenated slug that is unique across the collection.

Required metadata: `title`, `slug`, `summary`, `description`. `draft` defaults to `true`; `featured` and `caseStudyAvailable` default to `false`.

Optional metadata: `status` (`in-progress`, `live`, `archived`), `year`, `role`, `visibility` (`public`, `private`), `technologies`, `categories`, `heroImage`, `heroAlt`, `heroCaption`, `liveUrl`, `githubUrl`, and `videoUrl`.

An image is a local asset resolved through Astro's image schema; its path is relative to the content file. Supply meaningful `heroAlt`. Project screenshots must be real and approved for publication. `githubUrl` requires `visibility: public`. A private-source case study can still have approved diagrams and explanations.

Write only meaningful sections from the case-study specification: Overview, Problem, Context, Constraints, My Role, Product Decisions, Architecture, AI / Automation, Technical Decisions, Challenges, Tradeoffs, Testing, Outcome, Lessons, Links. The table of contents is derived from actual H2 headings. Do not create empty headings to fill a template.

Set `draft: false` only after reviewing factual claims and publication permissions. Set `caseStudyAvailable: true` only when the body is ready. Featured entries appear on Home; other published entries remain discoverable on Work.

## Notes

Create `src/content/notes/<slug>.mdx` (or `.md`). Required metadata: `title`, `slug`, `description`, `date`, and `category`. Use an ISO date. Optional fields: `updated`, `tags`, image metadata, and `relatedProjects` (project slugs).

Categories are Architecture, AI Systems, Experiments, Engineering, Product, Building in Public, and Lessons Learned. `draft` defaults to `true`. Future-dated notes are omitted from lists and routes. Related-project links are rendered only when the project is published and has a case study; unavailable references are omitted.

Reading time is an approximate prose-word estimate, not a measured reading duration. Dates render in UTC to avoid timezone-dependent date shifts.

## Editorial callouts

MDX may import `src/components/content/Callout.astro` using the correct relative path. Supported kinds: Decision, Tradeoff, Failure mode, Observation, Result. Use it for a concrete decision or observation, not motivational copy.

Code blocks and tables use the shared reading styles. Local images are processed by Astro. Demo URLs currently render as external links; a privacy-conscious embed component is still a later task. Do not add raw third-party embeds or large video files as a shortcut.

## Professional data

Edit `src/data/profile.ts`. Optional values are absent until known. Never use bracket placeholders in production data. A CV PDF path must point to a real file under `public/documents/`. The CV download appears only when a PDF is configured. Experience, education, languages, and capabilities render only when populated with verified content.

## Publication checklist

Confirm personal contribution, dates, technologies, outcomes, and source visibility. Remove private information, credentials, third-party confidential material, and unsupported metrics. Test links and image captions. Run local verification. Review the rendered page before publishing.

Synthetic examples belong in `tests/fixtures`, not in production collections. `PORTFOLIO_TEST_CONTENT=true` builds to `test-dist` only. Never upload that directory as a site artifact.

## Approved case-study decisions

Findavia uses the existing featured-project collection and detail template. Its [editorial contract](content/findavia.md) records the approved framing, source basis, delivery limitations, and intentionally omitted evidence. Follow that contract when extending the case study rather than reopening settled positioning decisions.

`src/components/content/CaseStudyFlow.astro` renders a three-step, text-based diagram without hydration. Supply a unique `id`, a factual `caption`, and three `steps`, each with `label`, `title`, `detail`, and optional `technical` emphasis. The narrow layout is stacked; the wide layout follows the available container width. Do not label diagrams as screenshots or invent flows to fill space.
