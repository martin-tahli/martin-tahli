---
title: The AI should not become the accounting engine
slug: the-ai-should-not-become-the-accounting-engine
description: How I separated deterministic financial calculation, data reliability, and authorization from AI interpretation while building Treasury.
draft: false
date: 2026-09-30
category: AI Systems
tags:
  - MCP
  - Financial systems
  - System boundaries
relatedProjects:
  - treasury
---

Adding an AI interface to financial software creates an easy architectural mistake: letting the model become responsible for facts the application should already know.

I deliberately avoided that in Treasury.

The system ingests brokerage and manually tracked wealth data, normalizes it, reconciles conflicting representations, computes derived views, and only then exposes a bounded interface to an AI client.

The model can interpret the result. It does not become the accounting engine.

## Reliability has to exist before explanation

Financial inputs are not equally trustworthy at every moment.

A source can be missing, stale, partially synchronized, or unavailable. An exchange rate can be absent. Cost basis can be incomplete. A broker reference can be duplicated. The same cash position can appear in more than one source structure.

If those states are collapsed into a single number, an AI client cannot recover the lost context later.

Treasury therefore treats reliability information as part of the product data. The MCP responses distinguish states such as no data, stale data, partial data, and unavailable sources, and carry source-freshness information with the payload.

That makes uncertainty explicit before any natural-language interpretation happens.

## Deterministic work stays in application code

Treasury also has a what-if surface for proposed buys and sells.

The important design decision is where the calculation happens.

| Responsibility | Application | AI client |
| --- | --- | --- |
| Ingest broker data | Yes | No |
| Normalize currencies and holdings | Yes | No |
| Reconcile duplicated or inconsistent state | Yes | No |
| Calculate proposed allocation and income effects | Yes | No |
| Explain the returned scenario | Structured result | Yes |
| Execute a trade | No | No |

The scenario service computes allocation drift, income effects, projections, and goal impact from current application state. The proposed actions are not persisted and no trade is executed.

That boundary is useful for more than safety. It makes the system testable.

A deterministic function can be given controlled inputs and checked against an expected result. If the model were responsible for performing the financial calculation in free-form reasoning, the accounting behavior would be harder to constrain, reproduce, and debug.

## Access is a product boundary, not an AI feature

The MCP surface is intentionally smaller than the database.

The reviewed Treasury implementation exposes nine tools for defined portfolio questions and scenario analysis. Access is OAuth-protected, with signed JWT verification against configured issuer, audience, allowed subject, and project-role claims.

Verification failure denies access.

That architecture answers a question I think matters for AI-enabled products:

**What is the minimum reliable surface the model actually needs?**

The answer is rarely "everything."

A bounded tool surface lets the application decide which concepts exist, which fields leave the system, and which operations are possible.

## The same rule applies outside finance

Finance makes the cost of ambiguity obvious, but the pattern is general.

When an AI feature sits on top of an operational system:

- deterministic state should remain deterministic;
- domain calculations should live where they can be tested;
- uncertainty should be represented structurally;
- authorization should be enforced before the model sees data;
- the AI should receive the smallest interface needed for its job.

The model is useful for interpretation, synthesis, and interaction.

It should not be asked to recreate the system's source of truth.
