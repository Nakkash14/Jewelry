# ADR 0003: Shopify-hosted checkout, no custom Stripe checkout

**Status:** Accepted  
**Date:** 2026-08-29

## Context

Headless Storefront carts end at `checkoutUrl`. Shopify’s payment-completion APIs for custom in-app checkout were removed. A second Stripe stack would duplicate inventory, PCI, and order ledgers.

## Decision

Payment completion is **Shopify Checkout** via the cart `checkoutUrl`. Do not build a card form, Stripe Elements/Checkout, or any second commerce payment stack.

Checkout branding APIs that fully restyle hosted checkout require Shopify Plus, which this project does not assume.

## Consequences

- Buyers leave the React UI at pay; Shop Pay and Shopify fraud/PCI stay on Shopify.
- Thank-you/return pages on our domain must not invent order state.

## Deferred

Shipping, tax, returns, and live payment eligibility (country/plan). Gift cards and in-boutique draft orders remain Shopify Admin concerns.
