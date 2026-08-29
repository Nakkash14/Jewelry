# ADR 0001: Shopify is the commerce system of record

**Status:** Accepted  
**Date:** 2026-08-29

## Context

This repository is a React UI prototype with an empty backend. Building custom catalog, inventory, cart, orders, and payments would be the majority of production risk.

## Decision

Shopify owns commerce-domain data and operations: products, collections, inventory, cart, checkout, payments, customers, orders, discounts, refunds, and fulfillment.

The React app is a custom storefront (Storefront API / Headless channel). We do not use Liquid or Hydrogen as the storefront.

## Consequences

- Staff merchandising and post-order work happen in Shopify Admin.
- We do not clone products, carts, payments, or orders into PostgreSQL.
- Leaving Shopify later would mean replacing the commerce engine, not just a library.

## Deferred

Shopify plan, merchant country, and payment-gateway eligibility must be validated before production configuration. Shopify Plus is not required for this decision.
