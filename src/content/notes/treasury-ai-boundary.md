---
title: Where I drew the AI boundary in Treasury
slug: treasury-ai-boundary
description: How I split financial calculation, data quality, authorization, and AI interpretation inside Treasury.
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

I wanted Treasury to answer useful questions through an AI client: what I own, how income is developing, what debt is outstanding, or what a hypothetical buy or sell would do to the portfolio.

The tricky part was deciding how much responsibility to give the AI layer.

I kept that layer fairly small.

Treasury already has code for broker ingestion, currency handling, reconciliation, portfolio calculations, and scenario analysis. I expose the results of those services through MCP and let the AI handle the conversational part.

## Data quality comes first

Broker data is messy in ordinary ways.

A source can be stale. Cost basis can be missing. An exchange rate may not be available yet. The same cash balance can appear in more than one representation. A sync can partly succeed.

Treasury keeps those states visible instead of flattening them into a clean-looking answer.

The MCP responses carry source and freshness information and distinguish states such as partial data or unavailable sources. That gives the client enough context to qualify an answer when the underlying data is incomplete.

I prefer doing this in the application because the application knows how the data was collected. Once that context has been discarded, a model cannot reliably reconstruct it from a number.

## Scenario calculations stay in the service layer

The what-if tool accepts proposed buys and sells, which sounds close to an action surface. Internally it is just a calculation.

The service works from current holdings and computes things such as allocation changes, projected income effects, benchmark assumptions, and goal impact. It returns the result without placing a trade or saving the proposal as portfolio state.

That split gives me a useful property: I can test the financial calculation with controlled inputs and expected outputs, then let the AI explain the returned scenario in plain language.

The model does not need to reproduce the portfolio math from scratch each time someone asks a question.

## I also kept the tool surface narrow

The reviewed Treasury snapshot exposes nine MCP tools. They cover status, portfolio briefing, holdings, instrument detail, income, goals, debt, cash flow, and proposed-action analysis.

Those tools sit behind OAuth. The resource server checks the signed token against the configured issuer, audience, allowed subject, and project role before the request reaches the tool logic.

This is deliberately different from giving an AI client general database access.

The client gets named operations with known response shapes. The application decides which fields are exposed and which operations exist. If I change the internal schema later, I have an interface I can preserve rather than an AI client coupled directly to storage.

## Why I like this split

It keeps each part of the system doing the work it is easiest to verify.

Treasury owns the data, the calculations, and the authorization rules. The AI client gets a structured, read-only view and turns it into a useful conversation.

That still leaves plenty of room for model reasoning. It can compare holdings, explain a scenario, summarize income, or help explore a decision.

I just do not need the model to become a second implementation of the financial system in order to get those benefits.
