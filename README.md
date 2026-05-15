# TrueBridge site

Static Astro site.

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
