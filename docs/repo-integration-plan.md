# Repository integration plan

## Rule: integrate deliberately

External projects are evaluated, pinned, licensed, security-reviewed, and introduced behind local interfaces. Prefer maintained libraries/packages; adapt patterns only where they serve Go Native; vendor source only with a written rationale, license review, update owner, and removal plan. Do not copy whole repositories into this codebase.

## Phases

1. **Foundation:** TypeScript contracts, Postgres migrations, OpenFGA model, secrets policy, source registry, design tokens, test harness.
2. **Trustworthy discovery:** Crawl/research adapters, normalization, opportunity model, provenance, review queue.
3. **Personal path:** matching explanations, maps, documents, notifications, approval-gated agent.
4. **Organization workflows:** verification, publishing, applications, cases, procurement, moderated messaging.
5. **Scale:** Android native experience, browser workers, advanced retrieval/memory, observability, red-team testing.

Each integration gets an adapter in the relevant service, a contract test, privacy notes, a feature flag, and a dependency decision in the catalog.
