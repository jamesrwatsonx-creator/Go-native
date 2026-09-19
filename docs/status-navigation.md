# Status Navigator

## Purpose

The Status Navigator helps users understand and complete official Indian Act registration/status-card processes.

It does not determine whether someone is Indigenous, registered, entitled to registration, a member/citizen of a Nation, or eligible for a benefit. Indigenous Services Canada and other appropriate authorities retain those decisions.

## Important distinction

**Registration under the Indian Act and the status card are not the same thing.**

A person's registration does not need to be renewed; a Secure Certificate of Indian Status card does.

Official source:
https://www.sac-isc.gc.ca/eng/1100100032380/1572461388012

## Entry states

Ask:

**What best describes your situation?**

### A. I am registered and my card is valid

Actions:

- explain common uses
- open Benefits & Rights
- allow a renewal reminder before expiry
- avoid storing card images/numbers unless there is a defined secure need and explicit consent

### B. I am registered but my card is expired

Explain:

- registration itself does not expire
- the card should be renewed
- an expired card can create practical problems with service providers
- route to official renewal instructions

Official renewal:
https://www.sac-isc.gc.ca/eng/1695840367366/1695840394948

### C. My card was lost, stolen, or damaged

Route to:

- report/cancel where required
- replacement instructions
- Temporary Confirmation of Registration Document option

Official replacement:
https://www.sac-isc.gc.ca/eng/1695840983601/1695841067623

### D. I know my registration number but do not have a card

Do not treat the number as sufficient proof inside Go Native.

Route to:

- secure status card application
- Temporary Confirmation of Registration Document if appropriate
- First Nation / regional office / trusted-source help

### E. I need temporary proof

A Temporary Confirmation of Registration Document (TCRD) is official proof for an already-registered person and can provide access to programs/services that accept proof of registration.

Official source:
https://www.sac-isc.gc.ca/eng/1551364517335/1572460866709

### F. I need my first secure status card

Use the official card workflow for already-registered people.

Forms:
https://www.sac-isc.gc.ca/eng/1462806841047/1572461062751

### G. I am not sure whether I am registered / I want to apply for registration

Go Native must not predict entitlement.

Provide:

- official information
- correct application form
- document checklist
- trusted-source finder
- personal case timeline
- contact routes

Official information/forms:
https://www.sac-isc.gc.ca/eng/1462806841047/1572461062751
https://www.sac-isc.gc.ca/eng/1584384814016/1584385025986

### H. My application is pending

Unless an official status API/integration is available and authorized, do not present a fake “live government status check.”

Instead provide a user-owned tracker:

- submitted date
- submission method
- reference/case number if the user chooses to store it securely
- documents submitted
- requested follow-up
- next follow-up date
- official contact link
- personal notes

If an official integration is added later, label the source and timestamp of any returned status.

## Trusted-source help

ISC-designated trusted sources can help with registration/card applications and may reduce guarantor friction in some circumstances.

Official finder:
https://www.sac-isc.gc.ca/eng/1672857022307/1698255176737

## Case model

A StatusCase is a workflow record, not proof of legal status.

Recommended fields:

- userId
- selfReportedState
- currentStep
- checklist items
- official links
- submittedAt
- followUpAt
- user notes
- document references
- createdAt
- updatedAt

Sensitive identifiers should be minimized, encrypted when retained, hidden from logs/analytics, and never visible to organization workspaces without explicit user authorization.

## Assistant behavior

The Assistant may say:

- “Here is the official form for your situation.”
- “Your registration and your card are different things.”
- “If you are already registered, you can request temporary confirmation.”
- “Here are the documents the official instructions request.”

It must not say:

- “You definitely qualify for Status.”
- “You are not Indigenous.”
- “Your registration has been approved” unless that fact comes from an authorized official source.
- “This benefit is guaranteed” based solely on a self-reported category.
