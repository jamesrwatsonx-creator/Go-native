# Base44 functional build specification

This document captures the current Go Native application wiring and visual guardrails.

## Freeze approved screens

The existing Login and Home visual designs are approved. Do not visually rebuild or regenerate their hero imagery, backgrounds, typography, cards, spacing, search UI, authentication layout, category section, or overall composition.

Functional work should connect existing components to data and actions rather than replacing them.

Permitted visual changes:

1. white global header
2. white bottom navigation
3. new screens/onboarding following the light Go Native system

## Global guardrail

No black/dark page-sized parent containers. White / warm-white surfaces are the default. Black/charcoal may be used for text, icons, selected chips, and small controls.

## Authentication and onboarding

Keep working authentication.

First-time user:

Sign in → choose Personal / Organization / Both → corresponding onboarding → personalized Home or Provider Dashboard

Returning user:

Sign in if required → restore context → Home or selected workspace

## Individual onboarding

White screens with progress indicator and subtle motion. Collect province/territory, optional Nation/community, goals, interest areas, current stage, optional deeper profile fields, and notification preferences.

## Organization onboarding

Create an Organization Workspace. Supported types include employers, recruiters, businesses, schools, training providers, scholarship/funding providers, Nations/community organizations, Friendship Centres, economic-development organizations, government programs, nonprofits/foundations, accelerators/incubators, service providers, and procurement buyers.

Collect only context-relevant fields.

## Header

White, full width, approximately 56–64 px plus safe area:

- hamburger left
- subtle wordmark/page context center
- notifications when appropriate
- avatar far right

Hamburger opens a white personalized drawer.

## Bottom navigation

White floating/sticky dock.

Individual: Home · Search · Saved · Alerts · Profile

Organization context may adapt to: Dashboard · Opportunities · Messages · Alerts · Profile

Forest green active state; muted gray inactive state; safe-area aware; never hide content.

## Search and matching

Support natural language plus filters. Interpret location, category, industry, education/career goal, business stage, eligibility, funding type, and deadline.

### Universal visibility rule

Personalization may rank and recommend, but it must never function as an access-control layer.

Every published opportunity must remain reachable through Search, Browse All, category pages, organization pages, or direct links regardless of the user's career, interests, location preferences, browsing history, saved items, or onboarding choices.

Requirements:

- explicit searches return relevant published results even when they fall outside the profile
- Browse All is not silently personalized
- profile interests may reorder results but never remove them
- visible user-selected filters can narrow results; hidden profile filters cannot
- clearing filters restores the complete published catalog
- direct links remain accessible regardless of profile
- likely eligibility mismatch may be labeled, not hidden
- recommendation/eligibility scores are annotations, not permissions

Match labels:

- Strong Match
- Possible Match
- Review Eligibility

Never guarantee eligibility when official determination is still required.

## Saved / Applications

Statuses: Saved · Preparing · Applied · Waiting · Accepted · Declined · Archived

Track deadline, date started/submitted, notes, documents needed, and next action. Reminder intervals: 30 / 14 / 7 / 3 / 1 day.

## Benefits & Rights

Add Benefits to navigation and search. Benefits use the same light surfaces, provenance, save/track mechanics, and AI explanation pattern as opportunities.

## Status Navigator

Add Status Navigator under Personal/Profile and Benefits. It is a guided official-process assistant, not an identity determination engine.

## Go Native Assistant

Assistant context can include profile, location, interests, current search, saved opportunities, current opportunity/benefit, application status, and active workspace.

## Motion

Use restrained 150–350 ms motion: fade/slide entrances, chip selection, button press, save animation, drawer slide, nav active state, assistant transition, and skeleton/shimmer loading. Respect reduced motion.

## Acceptance test

Do not call implementation complete unless approved Login remains visually intact; approved Home remains intact except header/nav; new screens remain light; onboarding persists; personalization affects content/ranking rather than Home layout; personal and organization contexts are separate; workspace role permissions work; search/save/application tracking works; Benefits & Rights and Status Navigator route to official sources; provider publishing supports review/verification; notifications deep-link correctly; and the Assistant respects privacy boundaries.
