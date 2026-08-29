# Jewelry

Custom storefront for a boutique jewelry business. Implementation is incremental on the `development` branch.

## Architecture (foundations)

Shopify is the **commerce system of record** (products, collections, inventory, cart, checkout, payments, customers, orders). This repository is a **React storefront** plus a **small Node.js API** for appointments, reviews, contact, newsletter, and secure Shopify customer-session handling. Commerce checkout is **Shopify-hosted**. There is no custom Stripe checkout and no Liquid/Hydrogen/Next.js storefront.

| Path | Role today |
|---|---|
| `frontend/` | Create React App jewelry UI (Vite migration is planned, not done yet) |
| `backend/` | Placeholder Node package only — no server implementation yet |
| `docs/adr/` | Architecture decision records |

PostgreSQL will hold custom application data and auth/integration state only. It is not set up in this phase.

## Branch workflow

- Do product work on `development`.
- `main` receives verified releases only (pull requests), not ad-hoc local pushes.
- Do not treat `main` as a working branch.

## Current local prerequisites

- **Node.js 24 LTS** (this repository pins major version 24 in `.nvmrc`). Local reference version: v24.19.0.
- npm (comes with Node).

The frontend is still Create React App. The backend cannot be started. Shopify, database, and Vite tooling are not part of this phase.

## Secrets policy

- Never commit `.env`, tokens, passwords, or private keys.
- Track only `*.env.example` files (names, comments, placeholders).
- `VITE_*` values are **browser-safe** and will be inlined into the client bundle. Public Storefront tokens belong there; Admin tokens, Customer Account client secrets, database URLs, and private Storefront tokens do **not**.
- Server secrets live only in `backend/.env` (and later in GitHub Environment secrets).

## Incremental implementation

Foundations (this phase) only establish ignore rules, Node pinning, env templates, and ADRs. Create React App, Shopify integration, database, and backend behavior are later phases.
