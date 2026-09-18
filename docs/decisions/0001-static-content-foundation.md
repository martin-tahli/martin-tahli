# 0001 — Static content foundation

Status: implemented for review. Date: 2026-09-18.

## Context

This portfolio must make evidence easy to inspect while preserving an editorial identity. Content is owner-authored, deployment is static, professional facts are incomplete, and Actions are paused.

## Decisions

Use Astro pages and build-time content collections. Keep interactive framework dependencies out until a real interaction requires them. Native details/summary provides the mobile menu; a small script adds Escape dismissal. The UI is usable without JavaScript.

Keep raw palette primitives in one token file. Use semantic text roles for small text that would otherwise miss contrast on paper. Tailwind is available through its Vite plugin; component-specific editorial composition stays in scoped CSS instead of duplicating long utility strings.

Centralize the origin/base boundary. Test the current project-site prefix and the future root case without changing component markup.

Fail closed on publication. Drafts do not receive public routes, future notes stay hidden, and source links require public visibility. Configure Astro to error on prerender conflicts rather than silently shadowing content. Do not infer publication permission from a file's mere existence.

Keep synthetic content outside the real content tree. Its build has a separate output directory and cache, and cannot enable indexing. Test the actual MDX templates using those fixtures rather than publishing fake projects to exercise the UI.

## Alternatives and consequences

A full client application would add runtime and hydration without solving a present need. A CMS would add another service before the owner-authored content workflow needs it. Both remain optional future decisions, not dependencies of the foundation.

Empty sections are intentional until evidence exists. This costs visual density in the first draft, but avoids misleading public claims. A diagram replaces unapproved hero imagery in the first implementation; its placement still needs visual acceptance.

The deployment configuration is ready for review, not activated. Limited local validation is not a substitute for installing the pinned toolchain and running the full suite before merge.
