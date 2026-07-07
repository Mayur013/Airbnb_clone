---
name: airbnb-listing-patterns
description: Reference patterns for reproducing Airbnb listing-page UI (gallery grid, photo tour, lightbox) with matching layout, motion, and accessibility behavior. Use whenever adding or modifying a gallery/overlay component in this project.
---

# Airbnb Listing UI Patterns

This skill documents the interaction and motion contracts this clone must
uphold, so any new component stays consistent with the rest of the app.

## Gallery grid
- Layout: CSS grid, 4 columns x 2 rows. First tile spans 2x2 (large hero),
  remaining four tiles are 1x1.
- Gap: 8px (`gap-2`), outer corners rounded (`rounded-xl` on the container,
  `overflow-hidden` to clip tile corners).
- Hover: image scales to 1.05 over 300ms ease-out; a subtle black 10%
  overlay fades in over the same duration.
- "Show all photos" pill is absolutely positioned bottom-right with a grid
  icon, white background, and elevated shadow that increases on hover.

## Photo Tour (full-screen overlay)
- Opens as a full-viewport white overlay (`fixed inset-0 z-50`) with a
  sticky top bar containing a close button and a horizontally scrollable
  thumbnail strip.
- Body is a single scrollable column grouping photos by room, each section
  showing: room label (small caps), photo title (h3), subtitle, then the
  large image.
- Clicking a thumbnail in the top strip smooth-scrolls the matching section
  into view; clicking a large image opens the Lightbox at that photo.
- Opening should scroll directly to the section matching the tile that was
  clicked on the listing page (pass `initialIndex` through).

## Lightbox (single photo viewer)
- Full-screen, near-black background (`bg-black/95`), image centered and
  constrained to `max-h-[80vh]`.
- Circular white prev/next buttons on either side; index counter
  (`n / total`) centered at the top; close button top-left.
- Keyboard: ArrowLeft/ArrowRight navigate and wrap around; Escape closes
  back to the Photo Tour (not the whole overlay stack at once).
- Entry animation: fade the backdrop in (~200ms) and scale the image in
  from 0.96 → 1 (~250ms, cubic-bezier ease-out). Keep it snappy — never
  exceed ~300ms or it will feel sluggish compared to the reference.

## Accessibility contract (non-negotiable)
- All overlays: `role="dialog"`, `aria-modal="true"`, `aria-label`
  describing the current content, and focus moved to the close button on
  mount.
- All icon-only buttons carry `aria-label`.
- Visible focus ring (`focus-ring` utility) on every interactive element —
  never remove the default outline without providing a replacement.

## Color & type tokens
Use only tokens defined in `tailwind.config.ts`:
- `hof` (#222222) — primary text
- `foggy` (#717171) — secondary text
- `rausch` (#FF385C) — brand/CTA accent
- `babu` (#00A699) — success/promo accent (e.g. discount banner icon)
