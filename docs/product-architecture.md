# Product architecture

## Core model

Go Native separates authentication, personal context, organization context, and authoritative program data.

```text
Account
├── PersonalProfile
└── WorkspaceMembership(s)
     └── OrganizationWorkspace
          ├── OrganizationProfile
          ├── Opportunities
          ├── Team / roles
          ├── Applicants / responses
          └── Analytics / audit
```

A workspace changes authorization and operating context. It does not change a person's identity.

## System boundaries

| Layer | Responsibility |
| --- | --- |
| Apps | Login, onboarding, Home, Search, Benefits & Rights, Status Navigator, opportunity detail, Saved, Applications, Alerts, Personal Profile, Provider Dashboard, Admin. |
| API | Stable contracts, authentication, authorization, workspace context, audit envelope. |
| Opportunity domain | Opportunities, categories, matching, saves, applications, deadlines, provider publishing. |
| Benefits & Rights domain | Benefit/rule records, jurisdiction, claimant context, official links, evidence/freshness, non-deterministic guidance. |
| Status Navigator | Registration/card state machine, official links/forms, user-owned checklist/case timeline; never identity adjudication. |
| Organization domain | Organization profiles, verification, memberships, provider roles, publishing permissions. |
| Intelligence | Natural-language search, ranking, explanation, summarization, document extraction, research/crawl, assistant orchestration. |
| Trust foundation | Postgres, encrypted file storage, relationship authorization, secrets management, immutable audit events, source registry. |

## Discovery pipeline

```text
Official / approved source
→ retrieve
→ extract
→ normalize
→ deduplicate
→ classify
→ freshness check
→ review / verification
→ publish
→ match
→ explain
→ notify
```

No crawler result becomes an authoritative benefit or opportunity merely because extraction succeeded.

## Matching

Personalization may use user-provided location, goals, interests, skills, business stage, education/career context, saved items, searches, application activity, and categories viewed.

Matching should produce an explanation, not just a score.

Recommended labels:

- Strong Match
- Possible Match
- Review Eligibility

The app does not guarantee eligibility unless an authoritative rule is deterministic and the required user facts are explicitly known.

## Deployment philosophy

Start modular around a Postgres backbone and shared contracts. Split services only when load, risk, data sensitivity, or operational ownership requires it. Workers are queue-driven and idempotent. Sensitive domains—status, benefits, documents, provider verification—remain auditable and revocable.
