# Go Native

**Go Native is the mobile-first Indigenous opportunity network.** It brings work, training, funding, procurement, community services, and trusted guidance into one personal, AI-assisted path—without reducing people to a form or making identity decisions for them.

> The platform helps people research ancestry, status, membership, citizenship, and official processes. **Go Native never determines Indigenous identity, status, membership, citizenship, or eligibility.** Those decisions remain with the appropriate Nations, communities, governments, and program owners.

## Why this matters

Opportunity information is scattered across job boards, program sites, inboxes, community networks, maps, and PDFs. The work of finding a relevant opportunity is often harder than the application itself. Go Native turns that fragmentation into an understandable, privacy-respecting path: discover what matters, understand why it fits, organize evidence and next steps, and act with the user in control.

## What the platform connects

- **People:** employment, gigs, apprenticeships, education, scholarships, supports, mentors, events, services, and a living **My Path**.
- **Organizations:** verified community, Nation, business, employer, recruiter, education, government/funder, service-provider, and procurement-buyer workspaces.
- **Intelligence:** source-trusted discovery, location-aware matching, inbox-derived activity, document intelligence, explainable recommendations, and AI actions that require approval.
- **Networks:** respectful community profiles, messaging, maps, applications, funding, procurement, verification, and case management.

## Architecture at a glance

```text
Mobile / Web / Admin workspaces
        │
        ├── API + authorization (OpenFGA)
        ├── AI agent (approval-gated tools + memory)
        ├── Opportunity, eligibility, document, location, messaging services
        ├── Crawler / research / browser workers
        │
Postgres + encrypted document storage + OpenBao secrets + source registries
```

The repository is a monorepo with clear product boundaries, shared schemas, infrastructure definitions, source provenance, and contract tests. It is intentionally bootstrapped with interfaces and integration seams before production vendor selection.

## Workspaces

Personal · Business · Employer/Recruiter · Nation/Community · Education/Training · Government/Funder · Service Provider · Procurement Buyer.

Each workspace has role-aware navigation, permissions, verification posture, and a focused AI co-pilot. Switching workspaces changes context—not a person’s identity.

## Experience direction

Go Native is rich, grounded, and premium: a dark autumn palette of burgundy, beige, brown, forest green, rust, ochre, and yellow; a clear light mode for forms and help; purposeful gradients; animated navigation; an approachable AI orb; and gentle workspace transitions. See [the design system](docs/design.md) and [motion language](docs/motion.md).

## Start here

- [Product vision](docs/product-vision.md)
- [Product architecture](docs/product-architecture.md)
- [User flow](docs/user-flow.md)
- [AI behavior](docs/ai-behavior.md)
- [Privacy model](docs/privacy-model.md)
- [Integration plan](docs/repo-integration-plan.md)
- [Roadmap](docs/roadmap.md)

## Repository map

```text
apps/              user-facing web, Android, and admin experiences
services/          deployable API, intelligence, research, and workflow boundaries
packages/          shared contracts, rules, tools, tokens, and models
infrastructure/    database, authorization, and secrets configuration
data/              source, organization, and normalization registries
docs/              product decisions and operating specifications
tests/             contract, end-to-end, and security test suites
```

## Development posture

This is a foundation, not a claim that sensitive systems are ready. No production credentials, identity determination logic, automated eligibility decisions, or irreversible agent actions belong here. Every future integration must pass security, privacy, accessibility, provenance, and community-governance review.
