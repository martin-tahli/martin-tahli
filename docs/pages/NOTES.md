# NOTES.md — `/notes`

## Goal

Present technical writing as selective engineering notes, not a content-marketing blog.

---

## 1. Header

Preferred title: `Engineering Notes` or simply `Notes`.

Support copy: short statement that notes document useful experiments, architecture decisions and lessons when they are worth publishing.

---

## 2. Categories

Potential categories:

- Architecture
- AI Systems
- Experiments
- Engineering
- Product
- Building in Public
- Lessons Learned

Only render categories that have content.

---

## 3. Listing

Text-led rows/cards with:

- category
- title
- description
- date
- reading time
- tags, sparingly

Hero images are optional.

Prefer a publication/index feel over a card gallery.

---

## 4. Empty state

If no notes exist:

- explain that writing is published selectively
- link to Work
- do not create fake drafts in production

---

## 5. Responsive

Keep excellent scanability on mobile; metadata can wrap under title.

---

## Approved refinement — evidence-led notes (2026-09-30)

The first production notes establish an evidence-led editorial standard:

- start from a real experiment, architecture decision, failure, or verification lesson already supported by project evidence
- extract one reusable engineering idea rather than repeating an entire case study
- link to the related project so readers can move from the lesson to deeper evidence
- prefer concise 3–7 minute pieces over generic long-form thought leadership
- keep the index text-led; a note does not need a decorative hero image
- publish selectively and do not create filler to maintain a cadence
- distinguish a documented observation from a broader lesson or personal working principle

Notes should deepen the evidence already present in Work, not manufacture a second parallel portfolio.

---

## Approved refinement — human engineering voice (2026-09-30)

Notes should read like Martin explaining a real piece of work to another engineer.

Writing rules:

- open with the concrete incident, decision, or observation; establish what actually happened before extracting a principle
- use first person where Martin made a decision, ran a check, found a bug, or changed his workflow
- let technical specifics carry the authority instead of manufacturing punchy slogans
- vary sentence and section rhythm; a note should not read like a sequence of generated claims followed by generated lessons
- use lists and tables when they genuinely clarify information, not simply to make prose look structured
- end with the practical consequence or current working habit when one exists

Avoid recurring AI-writing patterns:

- titles or conclusions built around `X is not Y`, `not X, but Y`, or equivalent forced contrasts
- one-sentence paragraph chains used for dramatic emphasis
- repeated phrases such as `the point is`, `the broader lesson`, `this matters because`, or `the pattern is the same`
- staged rhetorical questions whose answer is immediately supplied by the article
- slogan-like bold lines inserted mainly to sound quotable
- mechanically symmetrical sections where every topic ends in a maxim

The target voice is specific, reflective, technical, and conversational enough to sound written by the person who did the work.

