# REFERENCE_IMAGES.md — Visual Reference Contract

## Current approved reference

`reference/precision-editorial-warm-mono-reference.png`

Use it to understand:

- overall mood
- warm neutral palette
- terracotta accents
- sparse cobalt technical highlights
- typography contrast
- asymmetric editorial composition
- thin rules and restrained cards
- mountain/landscape hero treatment
- systems diagrams
- page density
- mobile/desktop relationship

## Important correction already made

The old dark quote panel containing a classical/stoic statue is rejected.

The approved replacement is a **light technical systems-flow visual**. Future implementations must not reintroduce statues, busts, classical portraiture or unrelated quote imagery.

## How to interpret reference images

Reference images are not exact screenshots of the future site. They are design targets.

Copy:

- hierarchy
- spacing relationships
- color relationships
- composition
- visual rhythm
- diagram language
- image treatment
- density

Do not copy:

- fake project names
- fake metrics
- fake employment history
- malformed/generated text
- arbitrary iconography
- visual artifacts
- impossible layouts caused by image generation

## Future reference naming

Use:

- `home-desktop-v1.png`
- `home-mobile-v1.png`
- `work-desktop-v1.png`
- `project-case-study-v1.png`
- `about-v1.png`
- `notes-index-v1.png`
- `note-article-v1.png`
- `cv-v1.png`
- `contact-v1.png`
- `components-v1.png`

Put these under `reference/`.

## Agent workflow with references

When implementing a page:

1. Read `MASTER_PROMPT.md`.
2. Read `docs/DESIGN.md`.
3. Read `docs/COMPONENTS.md`.
4. Read the page-specific spec.
5. Open the page-specific reference image if one exists.
6. Implement the structure using real/placeholder-safe content.
7. Compare the result visually at desktop and mobile sizes.
8. Fix hierarchy and spacing before polishing micro-animation.


## Repository transfer status

The supplied original board is stored at `reference/precision-editorial-warm-mono-reference.png`; `reference/README.md` records its original digest. Visual acceptance remains a separate owner decision based on the board and actual browser captures.
