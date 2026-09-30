---
title: The booking bug that changed how I verify workflows
slug: verifying-a-booking-workflow
description: A Findavia booking inconsistency pushed me to trace important workflows from the interface all the way to database enforcement and account authority.
draft: false
date: 2026-09-30
category: Engineering
tags:
  - Verification
  - Data integrity
  - Product systems
relatedProjects:
  - findavia
---

One of the more useful Findavia bugs looked perfectly reasonable from the interface.

A provider could have several members. The booking screen let a customer choose a person, and the availability logic could show two different employees as free at the same time.

Then the second booking could be rejected.

The problem was further down the stack.

## Two layers were using different calendars

The availability code worked at member level. The database overlap check worked at provider level.

Both pieces were behaving according to their own rules. Those rules simply described the business differently.

From the customer's side, Anna and Ivan could both be free at 14:00. From the database's side, their company already had a booking at 14:00, so the next one conflicted.

The correction was to make enforcement use the same unit as the product: a confirmed booking belongs to a specific member, and different members can work in parallel while genuine overlaps for the same person still fail.

That bug made me much more suspicious of workflows that are verified one layer at a time.

## I started following the same concept through the system

For booking, I now care about the path of the actual booking identity and the person assigned to it.

I want to see the same meaning survive through the customer's selection, the request sent by the application, the stored record, the overlap rule, and the calendar that later renders the work.

If the meaning changes halfway through, a browser test can easily miss it because the page before the write and the page after the write may both look fine.

This also changed what I record during QA. Stable record IDs, the actor performing the action, the resulting database state, and cleanup became part of the evidence for important flows.

## A role-resolution issue made the pattern clearer

Later lifecycle QA found a different kind of mismatch.

While a role was still unresolved, provider-side code could mount, and one profile-fetch path could create a provider record. Once that ownership existed, it could influence later role resolution.

The useful fix had to cover more than routing. I made that repository operation read-only, kept routing closed while authority was unresolved, and removed the direct client insert path.

Then I checked the boundary with another account as well.

That was the moment the two issues connected for me. Booking correctness and account authority look like separate topics, but both fail when different parts of the system disagree about the same real-world fact.

## How I verify important flows now

For a high-value workflow, I usually work from a short trace rather than a long UI checklist.

I want to know:

- who performed the action;
- which stable record changed;
- what the application sent;
- which database rule accepted or rejected it;
- what another account is prevented from doing;
- what state is left behind after the test.

This takes longer than clicking through the happy path, so I reserve it for flows where the stored result or the authorization boundary really matters.

The payoff is that I can explain why the workflow is correct, not only show that the current screen looks right.
