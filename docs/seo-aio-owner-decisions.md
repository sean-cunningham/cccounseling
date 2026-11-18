# SEO/AIO owner decisions

Recorded while implementing the TrueBridge SEO/AIO backlog. Nothing below
invents a reviewer, review date, citation, or approval.

## Exceptions kept from earlier owner review

The audit text asked for 90-minute evaluations. Visible rates, FAQ copy, and
`src/data/fees.ts` keep the already approved schedule:

- Phone consultation: no charge
- Individual evaluation: 60 minutes, $225
- Individual therapy: 50 minutes, $175
- Couples evaluation: 60 minutes, $275
- Couples therapy: 50 minutes, $225

The audit also asked for named links from specialty pages to clinician
profiles. Conversion review asked not to imply that only certain clinicians
do a kind of work. Specialty pages therefore link to `/clinicians/` as a
group, plus explicit related-specialty URLs. No inferred qualifications,
treatments, or availability promises were added.

## Research and comparative claims to review

Do not treat this list as an approval. FAQ questions and answers were left
in sync; copy was not rewritten here.

1. `/approaches/`: "TrueBridge clinicians draw on well-researched approaches."
2. Anxiety FAQ: "online therapy for anxiety is well supported by research."
3. Trauma FAQ: "Many clients find online trauma therapy effective..."
4. `/services/`: "evidence-informed approaches aimed at real symptom relief
   and meaningful change."
5. Stress FAQ: "How is this different from just talking to friends or taking
   a vacation?" and the answer that friends and time off "rarely change the
   underlying patterns."
6. Draft blog `how-online-therapy-works-north-carolina.md`: comparative
   effectiveness of online vs in-office care. Still noindex and unpublished.

## Blog preview policy

Existing drafts:

- `src/content/blog/how-online-therapy-works-north-carolina.md`
- `src/content/blog/does-insurance-cover-online-therapy-north-carolina.md`

Current behavior (unchanged):

- Pages build and are reachable by direct URL
- `noindex, nofollow` on blog templates
- `Disallow: /blog/` in `public/robots.txt`
- Sitemap filter excludes `/blog`
- Not linked from header, footer, or other marketing navigation

Choose one:

1. **Preview-only draft builds.** Keep the URLs off production or behind
   auth so crawlers never fetch the drafts.
2. **Publicly reachable review pages** where crawlers can read `noindex`
   (the current production-shaped behavior).

Do not silently make drafts indexable, add them to navigation, or add them
to the sitemap. Drafts still need editorial/clinical approval, removal of
em dashes and internal residue, and an approved author/review process
before publication.

## Optional pages not published

Do not add city, insurer, extra service, About, or public blog pages from
this backlog. Possible later opportunities, all needing owner copy approval:

- City/service landing pages only if TrueBridge actually offers in-person
  care there (Cary/Raleigh is the current public in-person claim)
- An About page that restates public practice facts without inventing a
  street address
- Publishing the two draft articles after clinical review
- Additional insurer pages: do **not** create these. Public insurance
  language stays Aetna-only

## Schema notes

JSON-LD syntax is validated in the static build. That is separate from
Google rich-result eligibility. Organization schema does not invent an
address, LocalBusiness type, ratings, hours, sameAs profiles, or insurance
properties.
