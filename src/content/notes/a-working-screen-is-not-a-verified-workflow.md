---
title: A working screen is not a verified workflow
slug: a-working-screen-is-not-a-verified-workflow
description: What a booking inconsistency in Findavia changed about how I verify product behavior across interface, application logic, database constraints, and account authority.
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

A product can look correct while the system underneath it disagrees.

I hit that problem while building Findavia. The booking interface understood that a provider could have several members. A customer could choose a specific person, and the availability logic could show different employees as free at the same time.

The database did not initially enforce the same model.

## The mismatch was between two valid-looking layers

The availability picker was member-aware. The overlap check in the database was provider-aware.

That difference was enough to produce a broken workflow: two employees could both appear available, but the database could still reject the second booking because it treated the whole provider as one calendar.

Nothing about the individual screen made the bug obvious.

The interface was doing what it had been designed to do. The database constraint was also doing exactly what it had been told to do. The failure existed in the **relationship between the two**.

That changed the way I define "done."

## Verify the same concept at every layer

For a booking system, "availability" is not just a UI concern.

If the product says a booking belongs to a member, the same unit has to survive through:

1. the person the customer selects;
2. the application data sent with the booking;
3. the stored booking record;
4. the overlap rule that decides whether the booking is valid;
5. the calendar that later presents the work.

If one layer silently changes the unit from "member" to "provider," the system has two different definitions of the same real-world event.

The fix was not to special-case the interface. The enforcement model had to align with the product model so different employees could work in parallel while genuine conflicts still failed.

## Authority is part of the workflow too

A second Findavia issue reinforced the same lesson from another direction.

Lifecycle QA found that unresolved role lookup could mount provider-side code and that a profile-fetch path could create a provider record. Once provider ownership existed, it influenced later role resolution.

Again, a route-level check alone would not have been enough.

The correction made the repository read-only for that operation, made routing fail closed while authority was unresolved, and removed the direct client insert path. Verification then had to include cross-account denial and cleanup, not simply "the correct page opened."

This is why I now treat authorization as workflow state rather than a separate security checklist.

## My completion criteria became stricter

For important flows, I no longer accept visible behavior as the primary proof.

I want to know:

- which stable record was created or changed;
- which actor was allowed to do it;
- which database rule accepted or rejected it;
- whether another account is denied;
- whether cleanup returns the system to a known state;
- whether the same identifiers survive from interface to persistence.

That is more expensive than clicking through the happy path, but it catches a class of problems that interface-only testing cannot.

## The reusable lesson

The broader lesson is not specific to marketplaces.

Whenever a product workflow crosses several layers, each layer can be locally correct and the workflow can still be globally wrong.

The test target should therefore be the **contract between layers**.

A working screen is evidence that the screen works. It is not evidence that the workflow is correct.
