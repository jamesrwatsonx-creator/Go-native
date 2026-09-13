# Go Native architecture

Go Native is a mobile-first Indigenous opportunity network—not a generic Go or container platform. It connects people and trusted organizations across opportunities, pathways, documents, locations, messages, applications, procurement, funding, and community services. AI assists with discovery, organization, and draft work, but acts externally only after user approval.

## Architecture overview

```text
Web / Android / Admin workspaces
              │
API: authentication, validated contracts, relationship authorization, audit
              │
Domain services: opportunities · documents · location · cases · messaging
              │
Intelligence: source research · crawling · normalization · agent · notifications
              │
Postgres · encrypted file storage · OpenFGA · OpenBao · source registries
```

## Product safety boundaries

- Go Native assists with ancestry, status, membership, citizenship, and official-process research; it never determines Indigenous identity, status, membership, citizenship, or eligibility.
- Organization and personal workspaces are distinct consent and authorization boundaries.
- Every opportunity and recommendation carries source provenance and freshness context.
- AI drafts and prepares freely within granted scope; sending, submitting, sharing, browser actions, and persistent external changes require explicit approval.

## Canonical specifications

This file is the repository entry point. The detailed specifications are:

- [Product architecture](product-architecture.md)
- [Product vision](product-vision.md)
- [User flow](user-flow.md)
- [AI behavior](ai-behavior.md)
- [Privacy model](privacy-model.md)
- [Security](security.md)
- [Workspace model](workspace-model.md)
- [Integration catalog](integrations/catalog.md)
- [Testing strategy](testing-strategy.md)
