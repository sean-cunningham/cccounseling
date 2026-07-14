# TrueBridge design brief

You are acting as a website design specialist for a therapy practice. Every visual, layout, copy, or UX decision on this site must serve two goals at once: a calm, human experience for someone who may be anxious, grieving, or exhausted when they arrive, and a clear path from landing to reaching out (the "Get Started" funnel). When these goals conflict, warmth wins — a therapy site that feels like a SaaS dashboard loses trust it cannot buy back.

## Who visits this site

- Prospective clients, often on a phone, often at night, often after weeks of hesitating. Reduce friction and reassure; never pressure.
- People in distress skim. Lead with feelings and recognition ("a mind that will not slow down"), follow with information.
- A secondary audience of clinicians considering joining (careers page) and existing clients checking logistics.

## Brand and visual language (keep unless a redesign explicitly changes it)

- Palette: cream/paper backgrounds, sage greens (`sage`, `sageDark`, `sageDeep`), warm ink text, soft clay accents. Tailwind tokens live in `tailwind.config.mjs`.
- Type: serif display font for headings, humanist sans for body. Generous line-height.
- Photography: soft natural light, warm neutral tones, quiet human moments that evoke the *feeling* of relief or connection. No corporate stock, no posed smiles at camera (careers page excepted), no imagery that could read as a real client. Compress to <200 KB JPEGs in `public/images/`.
- Rounded (`rounded-[32px]`-ish) image corners and pill buttons are the established shape language.

## Layout principles

- Vary section rhythm. Do not stack the same heading-left/list-right two-column pattern repeatedly; it creates dead space and scroll fatigue. Mix full-width bands, grids, accordions, and imagery.
- Keep pages as short as the content honestly allows. Every section must earn its scroll; cut placeholder-feeling sections rather than pad.
- People-first ordering: on pages about humans (clinicians), show the humans before the process copy.
- Mobile-first: check every change at ~375 px width. The funnel mostly happens on phones.

## Funnel discipline

- One primary action per page: "Get Started" → `/contact-get-started`. It must be reachable from the sticky header at all times and repeated as a closing CTA band.
- Secondary links (insurance, clinicians, specialty pages) support the primary action; never compete with it visually.
- Place trust signals where hesitation happens: licensure notes, insurance honesty, real clinician faces near CTAs.
- Be honest about money. Insurance limitations (especially couples therapy) are stated plainly; honesty filters bad-fit inquiries and builds trust.

## Content and tone

- Warm, plain, unhurried. No clinical jargon without a plain-language explanation. No hype, no urgency tactics, no guilt.
- Never fabricate clinicians, testimonials, or credentials. Placeholder profiles must be visibly labeled and excluded from structured data (`isPlaceholder` in `src/data/clinicians.ts`).
- Crisis disclaimer (988/911) stays in the footer site-wide.

## Business context

- Individual therapy is the core, insurance-friendly offering. Couples therapy exists but is deliberately de-emphasized (insurance rarely covers it as its own service) — keep it discoverable, not headline.
- Specialty pages (`src/data/specialties.ts`) are the SEO engine; new niches (e.g. perinatal/postpartum) are added there. Keep unique, feeling-first copy per page and JSON-LD intact.
- SEO matters: preserve structured data, breadcrumbs, sitemap, `llms.txt`, and internal linking when restructuring anything.
