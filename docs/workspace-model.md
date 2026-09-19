# Workspace model

A human account and an organization are different things.

## Core rule

```text
Account = authenticated human
Personal Profile = the person's optional personal context
Organization Workspace = an organization the person may represent
Membership = the person's role and permissions in that workspace
```

One account may have a Personal Profile and zero, one, or multiple Organization Workspaces.

Personal data does not become visible to an organization merely because the same account participates in both contexts.

## Workspace types

| Workspace | Primary intent |
| --- | --- |
| Personal | discovery, Benefits & Rights, Status Navigator, Saved, Applications, My Path |
| Business | business funding, procurement, services, team operations |
| Employer / Recruiter | jobs, candidate/applicant workflow, interviews |
| Education / Training | scholarships, programs, courses, certifications, learner support |
| Grant / Funding Provider | funding programs, applicant workflow, deadlines |
| Nation / Community | community programs, notices, referrals, governed services |
| Friendship Centre | services, programs, referrals, community support |
| Economic Development | business programs, financing, entrepreneurship, procurement |
| Government Program | public opportunities and program publishing |
| Foundation / Nonprofit | grants, services, scholarships, programs |
| Accelerator / Incubator | cohorts, applications, mentorship |
| Service Provider | referrals, appointments, case collaboration |
| Procurement Buyer | supplier discovery and sourcing |

## Membership roles

Recommended roles:

- Owner
- Admin
- Manager / Editor
- Reviewer
- Member

Authorization should use least privilege.

The organization—not an individual employee—owns organization listings, applications, team history, analytics, and audit records.

## Verification

Organization verification is separate from individual identity.

States:

- Unverified
- Verification Pending
- Verified
- Needs Review
- Suspended

Verification may validate domain control, public/legal registry evidence, designated representative confirmation, or community/Nation-specific authority where appropriate.

## Context switching

If a user belongs to multiple contexts, provide a clear switcher:

- Personal
- ABC Construction
- Community Foundation

The active context changes available navigation and permissions.

Individual bottom navigation can be:

Home · Search · Saved · Alerts · Profile

Organization context can adapt to:

Dashboard · Opportunities · Messages · Alerts · Profile

## Provider discovery

Personal profiles are private by default.

Future provider discovery requires explicit user opt-in, with visibility choices such as:

- Private
- Visible to matched verified organizations
- Visible to selected provider categories

No organization receives personal profile data solely because the person used Go Native.
