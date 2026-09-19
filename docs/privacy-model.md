# Privacy model

Privacy is contextual control: users choose what enters Go Native, which context can access it, and when it leaves.

## Personal vs organization context

- A Personal Profile is private by default.
- Organization Workspaces do not inherit personal data just because the same Account belongs to both.
- Workspace access is relationship- and role-based.
- Switching context changes authorization, not identity.

## Provider discoverability

Future provider discovery is opt-in only.

Visibility options should include:

- Private
- Visible to matched verified organizations
- Visible to selected provider categories

No employer, school, funder, recruiter, or other provider receives personal profile information merely because the person used Go Native.

## Sensitive workflows

Status/registration numbers, status-card images, legal documents, health-related documents, and other sensitive records should be collected only when there is a defined product need and explicit consent.

When retained:

- encrypt at rest
- minimize the fields stored
- keep secrets and raw identifiers out of logs/analytics
- use short-lived access URLs
- audit access
- support deletion/retention controls where legally permitted

A StatusCase is a workflow record, not proof of registration.

## Integrations

Email, calendar, document, or other connected-account access is opt-in, purpose-limited, revocable, and never required for basic matching.

## Analytics

Default to aggregate/de-identified reporting. Do not sell personal data.

Support export, correction, deletion, consent history, and retention policies subject to lawful obligations.

Community governance, data residency, Indigenous data sovereignty, and applicable privacy-law requirements are deployment decisions, not afterthoughts. Obtain legal, security, privacy, accessibility, and community review before launch.
