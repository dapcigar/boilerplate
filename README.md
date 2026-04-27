# Premium SaaS Boilerplate (Next.js App Router)

A production-oriented SaaS foundation built with domain-driven modular architecture.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Auth.js (NextAuth)
- Stripe Billing
- Docker / Docker Compose
- Vitest

## Project Structure

```text
src/
├── app/                        # Next.js routes (App Router)
├── modules/                    # Domain modules
│   ├── auth/
│   ├── organizations/
│   ├── billing/
│   ├── users/
│   ├── notifications/
│   └── audit/
├── shared/                     # Shared UI + utilities
├── infrastructure/             # Integrations (DB, auth, stripe)
├── prisma/                     # App-level prisma notes/abstractions
├── config/                     # Env and feature flags
└── tests/                      # Unit tests
```

Each module follows:

```text
modules/<module>/
├── domain/          # Business rules only
├── application/     # Use-cases/services
├── infrastructure/  # Persistence/adapters
├── api/             # Controllers for route handlers
├── components/      # Module UI
└── types/           # Type contracts
```

## Core Features

- **Auth Module**: credentials login, server session checks, middleware protection, RBAC policy utility.
- **Organizations Module**: multi-tenant memberships, org switcher, scoped active organization via secure cookie.
- **Billing Module**: Free/Pro plans, Stripe checkout session endpoint, webhook synchronization.
- **Users Module**: profile settings API and ownership policy.
- **Notifications Module**: event-ready scaffold with placeholder hooks.
- **Audit Module**: action tracking infrastructure and service.

## Setup

1. Copy env:
   ```bash
   cp .env.example .env
   ```
2. Install + migrate + seed + run:
   ```bash
   npm run setup
   ```

Seed login:
- `owner@example.com`
- `password123`

## Manual Commands

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Docker

```bash
docker compose up --build
```

## Feature Flags

`src/config/features.ts` controls module toggles:
- billing
- teams
- notifications
- audit

## Extending Modules

1. Create a new folder in `src/modules/<module-name>`.
2. Implement pure business rules in `domain/`.
3. Add use-cases in `application/`.
4. Add DB/external adapters in `infrastructure/`.
5. Expose route-facing logic in `api/`.
6. Keep UI in `components/` and wire with App Router pages.

## API Response Standard

All route handlers should return:

```json
{
  "success": true,
  "data": {}
}
```

or

```json
{
  "success": false,
  "error": "message"
}
```

using `src/shared/lib/api.ts`.
