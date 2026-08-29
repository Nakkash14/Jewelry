# ADR 0004: Shopify commerce data vs PostgreSQL custom/auth data

**Status:** Accepted (database not implemented)  
**Date:** 2026-08-29

## Context

Custom appointments, reviews, and forms do not belong in Shopify’s product/order model. Copying commerce records into our database creates dual ledgers.

## Decision

- **Shopify** owns commerce-domain data (catalog, inventory, cart, checkout, orders, payments, customers as commerce identity).
- **PostgreSQL** (Prisma, later) owns custom application data plus necessary authentication, session, PKCE, and integration/idempotency state.
- Custom rows may store Shopify Global IDs as references only, not cloned product/order documents.

Customer Account tokens and PKCE verifiers are server-side (Node + Postgres), not a second password database and not `localStorage` tokens.

## Consequences

- No `Product`, `Inventory`, `Cart`, `Payment`, or `Order` tables “because ecommerce usually has them.”
- GraphQL Admin API and webhooks are not required for v1 unless a later feature needs them.
- Node + Postgres must exist before Customer Account OAuth, not after.

## Deferred

Postgres host, exact retention periods, email provider, whether customer accounts ship in the first public launch, and webhook/Admin API introduction.
