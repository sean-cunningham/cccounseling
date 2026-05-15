import { spawnSync } from "node:child_process";

const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID?.trim();

if (!distributionId) {
  console.error("Missing CLOUDFRONT_DISTRIBUTION_ID environment variable.");
  console.error("PowerShell example:");
  console.error('$env:CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"; npm run deploy:coming-soon');
  console.error("macOS/Linux example:");
  console.error('CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID" npm run deploy:coming-soon');
  process.exit(1);
}

function runStep(label, command) {
  console.log(`\n▶ ${label}...\n`);
  const result = spawnSync(command, {
    stdio: "inherit",
    shell: true,
  });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

runStep("Building coming-soon static files", "node scripts/build-coming-soon.mjs");
runStep(
  "Syncing dist-coming-soon/ to S3",
  "aws s3 sync dist-coming-soon/ s3://truebridgetherapy.com --delete",
);
runStep(
  "Invalidating CloudFront",
  `aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`,
);

console.log("\n✓ Coming-soon production deploy completed.\n");
