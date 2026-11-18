# TrueBridge site

Static Astro site.

## Dev / prod workflow

Production (`truebridgetherapy.com`) is served from AWS S3 + CloudFront and **only changes when someone deliberately deploys**. Merging to `main` does not touch production. There is no hosted PR preview: review the branch locally (`npm run dev` or `npm run build` then `npm run preview`) or from screenshots on the PR.

The flow:

1. Work on a feature branch, open a PR, and review locally or from PR screenshots.
2. Merge to `main` after review. That still does not publish truebridgetherapy.com.
3. When ready, deploy `main` to production either:
   - **From GitHub (recommended):** Actions tab → "Deploy production (manual)" → Run workflow → type `deploy`. This always builds committed `main`. Requires the AWS secrets listed in `.github/workflows/deploy-prod.yml` to be configured once.
   - **Locally:** `npm run deploy:prod` (see "Production deploy to AWS" below). Make sure your checkout is on an up-to-date `main` with no local edits, since this ships whatever is on your machine.

## SEO (sitemap & robots)

- **Domain:** `astro.config.mjs` sets `site: "https://truebridgetherapy.com"` and includes `@astrojs/sitemap`, which writes `sitemap-index.xml` (and shards like `sitemap-0.xml`) into `dist/` on `npm run build`.
- **robots.txt:** `public/robots.txt` is copied to `dist/robots.txt` and references `https://truebridgetherapy.com/sitemap-index.xml`.

## Preview `noindex` (`PUBLIC_NOINDEX`)

`BaseLayout.astro` emits `<meta name="robots" content="noindex, nofollow">` when:

1. A page passes the `noindex` prop (e.g. 404), or
2. **`PUBLIC_NOINDEX=true`** at build time (any host), or
3. The build still runs on Vercel (detected via `VERCEL=1` or `VERCEL_ENV`). Vercel is **not** the review host. That guard only keeps leftover `*.vercel.app` deploys out of search if a GitHub integration still fires.

Local and AWS builds stay indexable unless `PUBLIC_NOINDEX=true` or the page itself is marked `noindex`.

See `.env.example`.

## Production deploy to AWS

The `deploy:prod` script builds the Astro site, syncs `dist/` to `s3://truebridgetherapy.com` (with `--delete` so removed files are removed from the bucket), and creates a CloudFront cache invalidation for `/*`.

**Prerequisites**

- [AWS CLI](https://aws.amazon.com/cli/) installed and configured (credentials and default region as needed for your account).
- An S3 bucket named `truebridgetherapy.com` and a CloudFront distribution in front of it must already exist in your AWS account.

**Environment variable**

Set `CLOUDFRONT_DISTRIBUTION_ID` to your distribution’s ID (do not commit real IDs or credentials). You can copy `.env.example` to a local `.env` file for documentation only; the deploy script reads **`CLOUDFRONT_DISTRIBUTION_ID` from the process environment**, not from `.env` files automatically.

**PowerShell**

```powershell
$env:CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"; npm run deploy:prod
```

**macOS / Linux**

```bash
CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID" npm run deploy:prod
```

Replace `YOUR_DISTRIBUTION_ID` with your real CloudFront distribution ID when you run deploy locally or in CI. Do not commit real AWS credentials, access keys, secrets, or distribution IDs to the repository.

## Temporary Coming Soon Production Deploy

Use this when **truebridgetherapy.com** should show a simple “Coming Soon” page on AWS production while the full Astro site is reviewed locally.

The `deploy:coming-soon` script:

1. Builds static files into `dist-coming-soon/` (not the main `dist/` Astro output).
2. Syncs `dist-coming-soon/` to `s3://truebridgetherapy.com` with `--delete`, so old production files are removed from the bucket.
3. Creates a CloudFront invalidation for `/*`.

This does **not** change the full Astro site source. Known route paths (for example `/services`, `/faq`, `/contact-get-started`) each get the same coming-soon `index.html` so direct URLs do not serve old full-site content.

**PowerShell**

```powershell
$env:CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"; npm run deploy:coming-soon
```

**macOS / Linux**

```bash
CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID" npm run deploy:coming-soon
```

To build the coming-soon output locally without deploying:

```bash
npm run build:coming-soon
```

When you are ready to launch the full site on production, use `npm run deploy:prod` instead (after reviewing locally).

## Google Tag Manager

The marketing site loads the **Google Tag Manager** container from `BaseLayout.astro` (`PUBLIC_GTM_CONTAINER_ID`, default `GTM-5GTPR59L`). Google Analytics, Google Ads conversions, and related tags are configured inside Tag Manager, not hardcoded on the site. Production builds also read the ID from committed `.env.production` (and the AWS deploy workflow sets it explicitly). Site click helpers push generic events to `dataLayer` for GTM triggers.

Generic events (no form fields or message text) are sent via document-level click delegation for `tel:`, `mailto:`, and links to `/contact-get-started`. The contact page iframe (hosted on admin.truebridgetherapy.com) posts `intake_form_submitted` to the parent on success; the parent pushes `intake_form_submit` to `dataLayer` for GTM/Ads conversion triggers. For other embeds, use helpers from `src/lib/analytics.ts`. Do not inject tracking tags inside third-party widget iframes.

In **GA4 → Admin → Data streams → Enhanced measurement**, turn **off** “Form interactions” (and any other auto tracking you don’t want) so submitted data is not collected by GA.
