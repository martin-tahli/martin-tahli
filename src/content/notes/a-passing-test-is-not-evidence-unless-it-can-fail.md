---
title: A passing test is not evidence unless it can fail
slug: a-passing-test-is-not-evidence-unless-it-can-fail
description: A small negative-control experiment changed how I accept AI-assisted fixes and how I think about regression tests.
draft: false
date: 2026-09-30
category: Experiments
tags:
  - AI-assisted engineering
  - Regression testing
  - Verification
relatedProjects:
  - findavia
  - portfolio-engineering
---

A regression test that passes beside a fix is comforting.

It is not always strong evidence.

During an AI-assisted accessibility change in Findavia, I used a simple control that made the test more informative: remove the fix, observe the regression test fail, restore the fix, and observe it pass again.

That sequence sounds obvious. In practice, it catches a real problem in AI-assisted development: implementation and validation can become correlated.

## The failure mode

When the same implementation process produces both the code change and its test, several weak outcomes can still look green:

- the test can exercise the wrong path;
- the assertion can be too broad;
- the fixture can accidentally contain the desired state;
- the implementation can change behavior the test never observes;
- the test can pass before and after the fix.

A passing suite only tells me the current code satisfies the current tests.

For a regression test, I also want evidence that the test is sensitive to the regression.

## Use a negative control when the cost is reasonable

The experiment was:

1. start from the corrected implementation;
2. remove the relevant fix;
3. run the regression test;
4. confirm that it fails for the expected reason;
5. restore the fix;
6. rerun the test and confirm the pass.

The useful evidence is the transition.

**Broken behavior → test fails → corrected behavior → test passes**

That is stronger than only observing the final state.

It does not prove the whole feature is correct. It proves something narrower and valuable: the test is capable of detecting the specific failure it is supposed to guard against.

## Separate implementation from acceptance

This matters more as AI takes on a larger share of implementation work.

The implementation agent can be productive, fast, and still be wrong. Its confidence is not an acceptance criterion.

I try to keep acceptance grounded in observable boundaries:

- what behavior should change;
- what behavior must remain unchanged;
- what state should be written;
- what state must not be written;
- which account or role is allowed to act;
- which failure should the regression test detect.

The same principle appears in this portfolio's publishing system.

Synthetic projects and notes are useful for exercising templates, but they build separately from real professional content. The deployment pipeline rejects fixture markers from the public artifact. Testing the publishing machinery is intentionally separated from permission to publish factual claims.

## Not every test needs this treatment

A negative-control check has a cost.

I would not mechanically mutate every implementation just to prove every test can fail. The technique is most useful when:

- the regression was subtle;
- the test was added together with the fix;
- the affected boundary is security-, data-, or workflow-sensitive;
- a false sense of coverage would be expensive;
- the failure can be reproduced safely and cheaply.

For lower-risk behavior, ordinary unit and integration tests may be enough.

The point is not ritual. The point is to increase confidence where correlated implementation and validation are most dangerous.

## What I changed in my workflow

For important AI-assisted fixes, I now ask a different question.

Not:

> Does the test pass?

But:

> What evidence shows this test distinguishes the broken behavior from the corrected behavior?

Sometimes the answer is a negative control. Sometimes it is a cross-account denial, a database-state check, a fixture-isolation check, or an independent end-to-end observation.

The pattern is the same: design acceptance so it can disagree with the implementation.

That is what turns a green check from reassurance into evidence.
