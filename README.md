# TrueBridge site

Static Astro site.

## SEO (sitemap & robots)

- **Domain:** `astro.config.mjs` sets `site: "https://truebridgetherapy.com"` and includes `@astrojs/sitemap`, which writes `sitemap-index.xml` (and shards like `sitemap-0.xml`) into `dist/` on `npm run build`.
- **robots.txt:** `public/robots.txt` is copied to `dist/robots.txt` and references `https://truebridgetherapy.com/sitemap-index.xml`.

## Preview `noindex` (PUBLIC_NOINDEX & Vercel)

`BaseLayout.astro` emits `<meta name="robots" content="noindex, nofollow">` when:

1. A page passes the `noindex` prop (e.g. 404), or  
2. **`PUBLIC_NOINDEX=true`** at build time (any host), or  
3. The build runs **on Vercel** (`VERCEL=1`) and **`PUBLIC_NOINDEX` is not explicitly `false`**.

So the full marketing site on **Vercel** (preview *and* production Vercel deploys, e.g. `*.vercel.app`) stays **noindex** by default while **`truebridgetherapy.com`** may still show the S3 coming-soon page. **AWS / local** builds are unaffected (no `VERCEL` env) and stay indexable unless you set `PUBLIC_NOINDEX=true`.

To **allow indexing** on a Vercel deployment (unusual), set **`PUBLIC_NOINDEX=false`** in that project’s Vercel environment variables.

| Build | Typical `PUBLIC_NOINDEX` | Result |
|-------|--------------------------|--------|
| **Local / AWS CI** (`npm run build` / `deploy:prod`) | `false` or unset | Indexable (except pages with `noindex` prop) |
| **Vercel** | unset | **noindex** (default) |
| **Vercel** | `false` | Indexable on that deploy |
| **Any host** | `true` | **noindex** |

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

Use this when **truebridgetherapy.com** should show a simple “Coming Soon” page on AWS production while the full Astro site stays available on Vercel for review.

The `deploy:coming-soon` script:

1. Builds static files into `dist-coming-soon/` (not the main `dist/` Astro output).
2. Syncs `dist-coming-soon/` to `s3://truebridgetherapy.com` with `--delete`, so old production files are removed from the bucket.
3. Creates a CloudFront invalidation for `/*`.

This does **not** change the full Astro site source or Vercel deployment. Known route paths (for example `/services`, `/faq`, `/contact-get-started`) each get the same coming-soon `index.html` so direct URLs do not serve old full-site content.

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

When you are ready to launch the full site on production, use `npm run deploy:prod` instead (after reviewing on Vercel).

## Google Analytics 4

The marketing site loads the **gtag.js** snippet from `BaseLayout.astro` when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set at **build time** (not Google Tag Manager). Copy `.env.example` to `.env` locally or set the variable in your host (e.g. Vercel).

Generic events (no form fields or message text) are sent via document-level click delegation for `tel:`, `mailto:`, and links to `/contact-get-started`. For future embeds, use `gaContactWidgetOpened()` / `gaScheduleWidgetOpened()` from `src/lib/analytics.ts` from your own code — **do not** inject GA inside third-party widget iframes.

In **GA4 → Admin → Data streams → Enhanced measurement**, turn **off** “Form interactions” (and any other auto tracking you don’t want) so submitted data is not collected by GA.
