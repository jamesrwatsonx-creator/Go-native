# Go Native

**Go Native is a mobile-first Indigenous opportunity, benefits, rights, and action network for Canada.**

It gives people one place to discover opportunities, understand benefits and official processes, track applications and deadlines, and get plain-language AI assistance. It also gives verified employers, schools, funders, training providers, Nations/community organizations, service providers, and other organizations a trusted workspace to publish opportunities and connect with people who choose to be discoverable.

The product is designed around a simple question:

> **What can help me move forward right now, and what do I do next?**

Go Native is not an identity authority, legal decision-maker, or benefits adjudicator. Official eligibility, Indian Act registration, Nation/community membership, citizenship, hiring, admission, funding, and legal decisions remain with the appropriate governments, Nations, communities, courts, and program owners.

## What Go Native does

### Find opportunities in plain English

Users can search naturally:

- “I want to open a barbershop.”
- “I need money to start a trucking company.”
- “I want to become an electrician.”
- “Find Indigenous nursing scholarships in Ontario.”
- “Show me AI training near me.”

Go Native translates intent into location, opportunity type, industry, education/career goals, business stage, eligibility signals, funding type, and deadline filters.

The opportunity network includes:

- grants and business funding
- scholarships and bursaries
- training and certifications
- apprenticeships and trades
- employment and internships
- loans and financing
- mentorship
- accelerators and incubators
- community programs
- procurement and supplier opportunities

### Benefits & Rights Navigator

Go Native includes a **Benefits & Rights** layer that helps users understand programs, tax treatment, health coverage, education support, harvesting/treaty rights, justice resources, and other benefits that may apply based on the user's chosen context.

It never treats “Indigenous” as one legal category. Results can depend on factors such as:

- registered First Nations status or entitlement to registration
- Inuit land-claim beneficiary recognition
- Métis citizenship or program-specific eligibility
- Nation/community membership or citizenship
- treaty or land-claim beneficiary status
- province or territory
- reserve/on-reserve context
- age, family, student, employment, or business circumstances
- the exact rules of the program

Every benefit is designed to show:

**Available now · May qualify · Application required · Status required · Treaty/Nation-specific · Official confirmation needed**

See [Benefits & Rights](docs/benefits-rights.md).

### Status Navigator

Go Native helps a person navigate Indian Act registration/status-card processes without deciding identity or entitlement.

The flow handles:

- already registered + valid card
- registered + expired card
- registered + lost/stolen/damaged card
- registered + knows registration number but has no card
- needs Temporary Confirmation of Registration Document
- applying for a first secure status card
- unsure whether registered / wants official registration information
- pending registration or card application

The app routes users to the correct Indigenous Services Canada forms, instructions, trusted sources, and contact paths, while keeping a personal checklist/case timeline.

See [Status Navigator](docs/status-navigation.md).

### Save, apply, track, and get reminded

Users can:

- save opportunities
- mark Interested / Preparing / Applied / Waiting / Accepted / Declined / Archived
- track documents and next actions
- receive 30 / 14 / 7 / 3 / 1 day deadline reminders
- ask AI what is missing
- compare opportunities
- open official application links
- keep a personal application timeline

### Personal profiles + organization workspaces

Go Native separates **human identity** from **organizational roles**.

A single authenticated account can have:

- one Personal Profile
- zero, one, or many Organization Workspaces

Organization types include:

- Business
- Employer / Recruiter
- School / College / University
- Training Provider
- Scholarship Provider
- Grant / Funding Provider
- Nation / Community Organization
- Friendship Centre
- Economic Development Organization
- Government Program
- Foundation / Nonprofit
- Accelerator / Incubator
- Service Provider
- Procurement Buyer

One person can use Go Native personally and also manage multiple organizations without creating separate logins.

See [Workspace model](docs/workspace-model.md).

### Provider side

Verified/authorized organizations can eventually:

- create and manage public organization profiles
- publish grants, jobs, scholarships, training, programs, and other opportunities
- save drafts and submit opportunities for review
- manage applicants or responses
- communicate through permissioned workflows
- invite opted-in matched users
- add team members with roles
- view aggregate analytics
- maintain verified source and organization information

## Core user flow

**New individual**

Sign in → Individual onboarding → Personalized Home → Search / Browse / Ask AI → Opportunity → Save / Apply / Track → Reminders → New matches

**New provider**

Sign in → Create organization workspace → Provider onboarding → Verification where required → Dashboard → Create opportunity → Review / Publish → Manage applicants and outcomes

**Hybrid user**

One account → Personal profile + organization workspace(s) → switch context without switching identity.

## Product design

The approved product direction is **light-first and mobile-first**.

- Login and Home visuals are treated as locked source-of-truth screens.
- New screens use white / warm-white surfaces.
- Global header and bottom navigation are white.
- Forest green, deep teal, orange, copper, cream/sand, and muted gray carry the brand.
- Black is limited to text, icons, chips, or selected controls—not page-sized dark containers.
- Motion is restrained: 150–350 ms transitions, drawer slides, chip selection, save feedback, loading shimmer, and subtle navigation transitions.

See [Design system](docs/design.md) and [Base44 functional build specification](docs/base44-functional-spec.md).

## Trust model

Go Native is designed around five rules:

1. **Official authority stays official.** The app explains and routes; it does not declare identity, legal status, membership, benefit entitlement, admission, funding, or sentencing outcomes.
2. **Provenance is part of the product.** Benefits and opportunities carry source, publisher, retrieval date, verification/review state, and freshness.
3. **Personal data is private by default.** Provider discovery requires explicit user opt-in.
4. **AI prepares; the user approves.** External communication, submissions, sharing, and other consequential actions require explicit approval.
5. **Organizations own organization data.** Listings, team access, analytics, and organizational history belong to the workspace—not to a single employee account.

## Repository map

```text
apps/              web, Android, and admin surfaces
services/          API, AI, eligibility, discovery, research, workflow services
packages/          shared schemas, types, design tokens, rules, agent tools
infrastructure/    database, authorization, and secrets foundations
data/              source, organization, normalization, and benefit registries
docs/              product, design, trust, data, and workflow specifications
tests/             contract, end-to-end, and security suites
```

## Start here

- [Product vision](docs/product-vision.md)
- [Product architecture](docs/product-architecture.md)
- [User flow](docs/user-flow.md)
- [Workspace model](docs/workspace-model.md)
- [Benefits & Rights](docs/benefits-rights.md)
- [Status Navigator](docs/status-navigation.md)
- [Base44 functional build specification](docs/base44-functional-spec.md)
- [AI behavior](docs/ai-behavior.md)
- [Privacy model](docs/privacy-model.md)
- [Source trust policy](docs/source-trust-policy.md)
- [Roadmap](docs/roadmap.md)

## Development posture

This repository is the product and architecture source of truth. Some surfaces are specifications rather than production-complete implementations. Sensitive workflows require legal, privacy, accessibility, security, source-provenance, and Indigenous data-governance review before launch.
