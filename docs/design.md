# Design system

## Character

Warm, confident, contemporary, and rooted—not stereotyped, ceremonial by default, bureaucratic, or cyberpunk. The interface should make consequential work feel calm and possible.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `ink-burgundy` | `#3B1020` | hero surfaces, focus moments |
| `forest` | `#173F32` | trusted progress, map/context |
| `earth-brown` | `#5A3828` | grounding surface |
| `rust` | `#B64A28` | action accent |
| `ochre` | `#C98B20` | highlights and status |
| `sun-yellow` | `#F3C64E` | sparing optimistic emphasis |
| `sand` | `#E8D9C0` | dark-mode text/soft panels |
| `clarity` | `#FAF7F1` | light forms/help mode |

Use layered burgundy→rust and forest→ochre gradients only to signal hierarchy or momentum. Preserve WCAG contrast; never convey status with color alone.

## Type and components

Use a strong contemporary grotesk for headings (for example, **Manrope** or **Sora**) and a highly legible text face (for example, **Inter**). Type scale: 12, 14, 16, 20, 24, 32, 40. Build tokens for color, spacing, radius, shadow, typography, and semantic states in `packages/design-tokens`.

Key components: opportunity card with provenance, Path milestone, verification badge, workspace switcher, location permission explainer, approval sheet, document tile, source citation, inbox insight, map marker cluster, and a restrained AI orb.

## Modes

Dark Autumn is the primary discovery and relationship mode. Light Clarity is used for help, intake, long forms, and document review. User preference always wins.
