# Product architecture

## System boundaries

| Layer | Responsibility |
| --- | --- |
| Apps | Mobile-first personal and organization workspaces; admin and moderation surfaces. |
| API | Stable, versioned contracts; authentication; authorization; audit envelope. |
| Domain services | Opportunities, documents, eligibility assistance, location, messaging, notifications, verification. |
| Intelligence | Research/crawl pipeline, document extraction, retrieval, agent orchestration, browser tasks. |
| Trust foundation | Postgres records, encrypted file storage, OpenFGA authorization, OpenBao secrets, immutable audit events. |

## Data movement

Sources enter through a registry-governed research pipeline, are normalized, deduplicated, and reviewed according to trust policy. Matches are generated from user-controlled preferences and declared context. The API returns explanations with every match. Documents and email-derived facts stay compartmentalized, with consent grants and revocation paths.

## Deployment philosophy

Start as modular services sharing contracts and a Postgres backbone; split only where load, risk, or operational ownership justifies it. Workers are queue-driven and idempotent. No external upstream repository is vendored as a hidden runtime dependency.
