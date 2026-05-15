import { execFileSync } from "node:child_process";

const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID?.trim();

if (!distributionId) {
  console.error("Missing CLOUDFRONT_DISTRIBUTION_ID environment variable.");
  console.error("PowerShell example:");
  console.error('$env:CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"; npm run deploy:prod');
  console.error("macOS/Linux example:");
  console.error('CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID" npm run deploy:prod');
  process.exit(1);
}

const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";

function runStep(label, file, args) {
  console.log(`\n▶ ${label}...\n`);
  execFileSync(file, args, { stdio: "inherit" });
}

runStep("Building the site", npmCmd, ["run", "build"]);
runStep("Syncing dist/ to S3", "aws", ["s3", "sync", "dist/", "s3://truebridgetherapy.com", "--delete"]);
runStep("Creating CloudFront invalidation", "aws", [
  "cloudfront",
  "create-invalidation",
  "--distribution-id",
  distributionId,
  "--paths",
  "/*",
]);

console.log("\n✓ Production deploy steps completed.\n");
