---
title: How I check whether a regression test is doing its job
slug: checking-a-regression-test
description: A small check I use when a fix and its regression test are created together, especially in AI-assisted work.
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

While working on an accessibility fix in Findavia, I had the usual reassuring result: the change was in place and the new regression test was green.

I still wanted to know whether the test would have caught the original problem.

So I removed the fix.

The test failed. I restored the fix, ran it again, and it passed.

It was a small check, but I have kept using the idea since then.

## Why I bothered

A test written next to a fix can be wrong in surprisingly boring ways.

It might hit a nearby code path instead of the one that changed. The assertion might be too loose. A fixture might already contain the state the test expects. Sometimes the test would have passed before the fix existed.

None of those cases are exotic, and AI-assisted implementation makes them easier to miss because code and test generation can happen in the same pass.

When I care about a regression, I want to see the test react to the regression itself.

## The check I ran

For this Findavia change, the sequence was simple:

1. keep the new regression test;
2. remove the accessibility fix;
3. run the test and check the failure;
4. restore the fix;
5. run the same test again.

That gave me two useful observations instead of one. I saw the test fail against the broken behavior and pass against the corrected behavior.

I am not trying to prove the whole feature with this. I am checking something narrower: whether this particular test can actually detect the problem it was added for.

## Where I use it

I do not run this exercise for every small unit test. It is most useful when the failure is subtle or the boundary matters enough that a weak test would give me false confidence.

I reach for it more often around:

- permissions and account boundaries;
- stored financial or booking data;
- workflow regressions that cross several layers;
- fixes where the test was created in the same implementation pass;
- bugs that are cheap to reproduce safely.

Other checks can serve the same purpose. In Findavia, a cross-account denial or a database-state check can tell me more than another UI assertion. In this portfolio, fixture content is built separately and the publish job checks that none of it leaked into the real artifact.

The common thread is that I want acceptance to have a chance to disagree with the implementation.

## What changed in my workflow

I used to treat the final green test as the interesting event. Now I pay more attention to how I got there.

For a regression that matters, I try to answer a concrete question: what would I expect to observe if the bug came back?

If I can reproduce that failure cheaply, I usually do it once before I trust the new test.

That extra step has been useful with AI-assisted work because it gives me an independent observation instead of another generated assertion sitting beside generated code.
