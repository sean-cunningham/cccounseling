# CloudFront 404 and canonical-slash runbook

This is a proposed production change only. Do not edit AWS resources, publish
edge functions, or deploy from this PR.

## What the marketing site currently does

Production (`truebridgetherapy.com`) is S3 + CloudFront. The deploy path is
`.github/workflows/deploy-prod.yml` plus `scripts/deploy-prod.mjs`: build Astro,
`aws s3 sync dist/ s3://truebridgetherapy.com --delete`, then invalidate `/*`.

There is no CloudFront, Terraform, or custom-error source in this repo. Live
behavior observed during the SEO audit:

- Missing public paths return **HTTP 403** instead of the branded 404 page.
- Slash and no-slash versions of the same page both return **200**.
- Astro is configured with `trailingSlash: "always"`. Sitemap and canonicals
  already use trailing slashes.

This site also depends on existing edge behavior that must stay in place:

- `www` to apex
- HTTP to HTTPS
- `index.html` handling for directory indexes
- Any legacy-route redirects already configured
- Intentional removed-page behavior (do not resurrect deleted URLs)

## Proposed missing-page handling

S3 REST origins commonly return 403 for objects that do not exist. Configure
CloudFront custom error responses so unknown marketing paths serve the already
built branded page:

| CloudFront received | Response page | HTTP status to viewer | Notes |
| --- | --- | --- | --- |
| 403 | `/404.html` | 404 | Covers missing keys on an S3 REST origin |
| 404 | `/404.html` | 404 | Covers a website-endpoint or already-mapped 404 |

Use a short error-caching TTL (for example 0–60 seconds) until the mapping is
verified, then raise it if useful.

Acceptance: a nonsense path such as `https://truebridgetherapy.com/this-page-does-not-exist/`
returns **HTTP 404** with the body of `/404.html` (the TrueBridge "Page not found"
layout). Do not leave viewers on a generic S3/CloudFront XML error.

## Proposed canonical trailing-slash redirects

Add a **viewer-request** CloudFront Function (preferred over Lambda@Edge for
this) that 301-redirects extensionless paths without a trailing slash:

1. Leave `/` unchanged.
2. Leave paths with a file extension unchanged (`/images/logo.png`,
   `/favicon.ico`, `/robots.txt`, `/llms.txt`, `/sitemap-index.xml`).
3. Leave paths that already end in `/` unchanged.
4. For other paths, return `301` to `{path}/` and **preserve the query string**.
5. Do not rewrite POST or non-GET/HEAD methods.
6. Do not collide with existing host redirects; keep this function on the
   already-canonical host after www/HTTPS have been resolved.

Example verification after a future AWS change (not part of this PR):

- `/insurance-rates?utm_source=test` -> `301` to `/insurance-rates/?utm_source=test`
- `/insurance-rates/` stays `200`
- `/images/home-hero.jpg` stays `200` with no redirect
- Existing www, HTTP, index.html, and legacy redirects still fire as they do today

## What not to change

- Do not change S3 sync, invalidation, or the manual `deploy` confirmation.
- Do not publish this mapping from the marketing repo.
- Do not add analytics, form-submission tracking, or field-value tracking.
- Do not modify ops/admin applications or their robots policies.
