# ADR 0002: React storefront will migrate from CRA to Vite

**Status:** Accepted (migration not started)  
**Date:** 2026-08-29

## Context

`frontend/` is Create React App (`react-scripts` 5). CRA is unmaintained and is a dependency-risk. The existing React UI and CSS should be preserved. Next.js or Hydrogen would introduce a substantially larger framework and architecture migration than is required to modernize this frontend.

## Decision

Keep the current React storefront and design for now. Replace CRA with **Vite + React** in a later phase. Do not rewrite the storefront in Next.js, Hydrogen, or Liquid at this stage.

UI components must stay separated from Shopify/data logic so a future redesign does not require rewriting commerce integration.

## Consequences

- Tooling change only after foundations; no CRA migration in this phase.
- SEO remains an SPA concern until a later prerender decision.

## Deferred

Exact Vite plugin set, prerender vs accept SPA SEO, and any future meta-framework. Hosting vendor for the static build.
