# Redmint Sanctuary Experience

Brief

Build a premium, aesthetic marketing website for Redmint, a Traditional Chinese Medicine (TCM) wellness sanctuary and botanical skincare/herbal brand based in San Francisco. The current site is a generic Shopify theme; the goal is a distinctive, editorial, spa-grade experience that feels like a luxury wellness retreat — not a template.

Brand essence: Ancient TCM wisdom fused with modern wellness science. Services span holistic care (acupuncture, massage, facials) and modern wellness tech (LED light therapy, sound meditation pods, PEMF mats), alongside a botanical skincare and herbal supplement product line and an in-house herbal bar.

Tone: Calm, precise, quietly confident. Never new-age-vague, never clinical-cold. Think "a doctor who is also a poet."

Design System (follow exactly — do not substitute a generic palette)

Concept: Ink-wash painting + the Chinese seal-stamp (chop) tradition. The negative space principle from Chinese ink painting (liu bai — "leaving white") governs the whole layout: emptiness is a design element, not wasted space.

Color tokens:

--ink-jade: #132118 — near-black deep jade green, primary dark background

--celadon: #9FB49A — muted sage green, secondary/supporting color

--gold-foil: #C6A15B — accent for CTAs, hairlines, dividers (echoes the brand's existing gold foil logo)

--rice-paper: #F6F1E7 — warm ivory, primary light-section background

--seal-vermilion: #B23A2E — sparing accent color, used ONLY as a stamp/mark motif (see Signature Element below), never as a general UI color

Typography:

Display face: a high-contrast serif with brush-like stroke terminals (e.g. a Canela/Reckless/GT Sectra-style face) — used sparingly, large scale, headlines only

Body face: clean humanist sans-serif for all body copy and UI (e.g. a Söhne/General Sans-style face)

Accent/eyebrow face: a thin-weight, wide-tracked caps face — used for small labels

Layout concept:

Asymmetric grid, generous negative space

Section labels ("eyebrows") run vertically along the left margin of sections, echoing vertical calligraphy scrolls — not horizontal badges

Alternate full-bleed image panels with quiet, text-only panels — avoid symmetric card grids as a default

Signature element (the one memorable thing on this page): A small red seal-stamp (chop) mark — a solid vermilion square/circle, roughly the size and placement of a traditional artist's chop — appears once per major section, positioned like a signature next to section headlines. On scroll, section transitions use a subtle ink-diffusion effect (like ink dropped in water, spreading softly) rather than a slide or fade. Respect prefers-reduced-motion — fall back to a simple crossfade.

Restraint rule: The seal-stamp and ink-diffusion transition are the ONE bold move. Everything else — spacing, type, color usage — stays quiet and disciplined around it.

Pages & Sections

1. Home

Full-bleed hero: large brush-serif headline on the "ancient wisdom, modern wellness" theme, muted jade background, gold hairline CTA buttons ("Explore Services" / "Shop Skincare")

"Wellness Sanctuaries" section — SF location, bespoke services, photography-led

"Botanical Skincare" — herbal ingredient focus, results-driven positioning

"Herbal Wellness" — supplement line, centuries-old herbal tradition framing

"Holistic Care" — preventative + restorative healing framing, links to Services

Location strip: San Francisco, daily hours, map/CTA to Locations page

Email signup footer band

2. Services (with sub-pages/anchors)

Two groupings, presented as distinct tracks:

Holistic Wellness: Acupuncture, Massage Therapy, Skincare Facials

Modern Wellness: LED Full-Body Light Therapy, Sound Meditation Pod, PEMF Frequency Mat

Each service gets a short description, benefits, and a "Book" CTA

3. Shop / Products

Two product lines: Botanical Skincare, Herbal Supplements

Product grid with ingredient-forward photography and short potency/benefit copy per item

4. Herbal Bar

Custom herbal formulation concept — explain the in-person consultation + blending experience

5. Membership

Membership tiers/benefits for recurring wellness visits

6. About / Our Story + About TCM

Brand origin story

Educational section on TCM philosophy — treat this as a chance for elegant editorial typography (pull-quotes, generous line-height)

7. Locations

San Francisco sanctuary — address, hours (daily 9am–9pm), photography of the space

8. Gift Cards, Contact, Careers

Simple, clean utility pages consistent with the design system but lower visual intensity

Technical requirements

Fully responsive down to mobile — vertical eyebrow labels should gracefully become horizontal on small screens

Visible keyboard focus states throughout

Fast image loading (lazy-load below-the-fold imagery)

Structure content so it's easy to later connect to Shopify for cart/checkout functionality

What to avoid

Do not default to a cream-background + terracotta-accent look

Do not default to a near-black + neon-accent look

Do not use numbered (01/02/03) section markers unless representing a true sequential process

Do not use generic symmetric 3-column card grids as the primary layout device

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://shopredmint.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ce638c30-71a8-4893-af09-5cd1e393aa5d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
