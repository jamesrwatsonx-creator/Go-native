# Design system

## Current product direction

Go Native is **light-first, mobile-first, calm, and premium**.

The current approved Login and Home screens are source-of-truth visuals. Functional work should wire existing components rather than regenerate those screens.

## Surface rules

Default page surface:

- white or warm white

Brand accents:

- forest green
- deep teal
- warm orange
- copper
- cream / sand
- muted gray

Black / charcoal is appropriate for:

- text
- icons
- selected chips
- small high-contrast controls

Black / dark surfaces are not appropriate for:

- full page backgrounds
- large parent containers
- form wrappers
- dashboard backgrounds
- navigation backgrounds

## Global navigation

### Header

Authenticated screens use a white header approximately 56–64 px plus safe area:

- hamburger menu left
- subtle Go Native wordmark or page context center
- notification indicator when useful
- profile avatar right
- subtle divider/shadow

### Bottom navigation

White floating/sticky dock with soft shadow:

Personal: Home · Search · Saved · Alerts · Profile

Organization context may adapt to: Dashboard · Opportunities · Messages · Alerts · Profile

Active state: forest green.
Inactive: muted gray/charcoal.

## Components

Use:

- large touch targets
- rounded cards
- rounded chips
- soft shadows
- light tinted category cards
- readable typography
- progressive disclosure
- clear source/provenance treatment

Key product components include:

- opportunity card
- benefit card
- status checklist
- verification badge
- workspace switcher
- source citation
- application tracker
- deadline indicator
- notification item
- assistant panel
- organization profile card

## Motion

Target 150–350 ms for most interactions:

- fade + slight slide entrances
- chip selection
- button press
- save/bookmark confirmation
- drawer slide
- bottom-nav active transition
- smooth expand/collapse
- workspace context transition
- skeleton/shimmer loading

Avoid constant motion, large bounce, or excessive glow. Respect reduced-motion preferences.

## Accessibility

Meet WCAG contrast, support dynamic text, large touch targets, keyboard/focus navigation where applicable, reduced motion, and accessible alternatives to maps/visual-only status.
