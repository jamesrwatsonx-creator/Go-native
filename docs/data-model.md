# Data model

## Identity and context

### Account

Authentication identity only: provider identifiers, email, created date, last login.

### PersonalProfile

User-owned context for personalization:

- name / photo
- province/territory
- optional Nation/community
- goals
- career/business/education interests
- skills
- current stage
- preferred opportunity types
- visibility controls

### Organization

Organization-owned record:

- name
- type
- logo
- public description
- website
- province/territory
- regions served
- contacts
- verification state
- public profile slug

### Membership

Relationship between Account and Organization:

- role
- status
- joined date
- permissions derived from relationship policy

## Opportunity domain

### Opportunity

Recommended fields:

- id
- organizationId
- title
- type
- province/territory
- eligible locations
- funding amount or benefit
- deadline
- description
- eligibility
- application URL
- source URL
- contacts
- category/tags
- documents required
- verified/featured
- publication status
- created/updated/expiry dates
- AI summary
- last verified date
- provenance

### SavedOpportunity

- userId
- opportunityId
- status: Saved / Preparing / Applied / Waiting / Accepted / Declined / Archived
- created/updated dates

### Application

- userId
- opportunityId
- status
- date started
- date submitted
- notes
- documents needed
- next action

## Benefits & Rights domain

### BenefitRule

- id
- title
- category
- jurisdiction
- claimantClass
- provinceTerritory
- Nation/treaty/landClaimScope when relevant
- reserveContext when relevant
- eligibilitySummary
- applicationRequired
- officialUrl
- publisher
- effectiveDate
- retrievedAt
- lastVerifiedAt
- trustTier
- reviewState
- caveats

### BenefitMatch

A user-specific explanation object, not an entitlement decision:

- benefitRuleId
- userId
- matchState: available_now / may_qualify / review_required / not_enough_information
- reasons
- missingFacts
- officialConfirmationRequired

## Status Navigator domain

### StatusCase

- userId
- selfReportedState
- registrationNumberStored only if explicitly needed and secured
- cardState
- currentStep
- checklist
- officialLinks
- userNotes
- startedAt
- updatedAt

Do not treat a StatusCase as proof of registration.

## Shared workflow entities

- Notification
- SearchHistory
- Match
- PathItem
- Document
- Case
- Conversation
- ConsentGrant
- AgentRun
- Approval
- Verification
- Source
- AuditEvent

Every externally derived record stores source URL/identifier, publisher, retrieval time, normalization version, and review state. Sensitive personal attributes and document content remain partitioned from general discovery records.
