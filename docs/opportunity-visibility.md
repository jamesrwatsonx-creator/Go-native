# Opportunity visibility and personalization policy

## Non-negotiable rule

**Personalization may rank, recommend, highlight, and explain opportunities. It must never make a grant, scholarship, job, training program, loan, benefit, or other legitimate opportunity invisible or inaccessible because of a user's profile, career, interests, location preferences, browsing history, or prior behavior.**

Go Native is a discovery layer, not a gatekeeper.

## Required behavior

### Global discovery remains complete

Every published opportunity remains accessible through at least one neutral path:

- global Search
- Browse / All Opportunities
- category pages
- direct link
- organization profile
- relevant filters

A user who searches explicitly for an opportunity or category should be able to see it even when it falls outside their stored interests.

### Personalization changes order, not existence

Profile data may:

- rank likely-relevant items higher
- create Recommended for You
- generate matching explanations
- suggest filters
- generate alerts
- surface local or timely opportunities

Profile data must not:

- delete unrelated categories from Search
- silently exclude results because the user selected a different career
- block access to a scholarship because the profile says business
- hide a grant because the user previously searched employment
- permanently persist filters without making them visible and removable
- treat a recommendation score as an access-control rule

### Eligibility is informational, not censorship

If published eligibility appears not to match the user's known context, the opportunity may still be shown.

Use clear labels such as:

- Strong Match
- Possible Match
- Review Eligibility
- Likely Not Eligible — Review Rules

The user should still be able to open the opportunity, read the source, understand the requirements, share it, or save it.

Only the authoritative program owner decides final eligibility.

### Browse mode must be non-personalized

Provide a clear **Browse All** or equivalent mode that is not personalized.

Browse All should support user-selected filters but should not silently apply profile-based exclusions.

### Search transparency

When personalization affects ordering, the UI should explain it where useful:

- “Ranked using your interests and location”
- “Showing all results; likely matches appear first”

Allow users to:

- clear personalization for the current search
- sort by newest, deadline, funding amount, distance, or relevance
- remove filters
- see why an item was recommended

## Provider rules

Providers may specify legitimate published eligibility criteria for their opportunities.

Go Native must not create additional hidden exclusion criteria from behavioral or inferred profile attributes.

## Data model implication

Recommendation and eligibility outputs are annotations on an Opportunity record, not visibility permissions.

Conceptually:

```text
Opportunity
├── published = true
├── globally discoverable = true
├── userMatch = optional
├── eligibilityExplanation = optional
└── rankingScore = optional
```

The recommendation engine should never function as an authorization layer.

## Acceptance tests

1. A user with Business interests can still search and view Nursing scholarships.
2. A user with Education interests can still browse Business grants.
3. A user in Ontario can view a national or another-province opportunity when intentionally searching/browsing it, with jurisdiction clearly labeled.
4. Changing onboarding interests changes recommendations, not catalog availability.
5. Clearing filters returns the complete published catalog.
6. Direct links to published opportunities remain accessible regardless of profile.
7. Provider eligibility criteria are visible and source-backed; no hidden AI-generated eligibility barrier is added.
