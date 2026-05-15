import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "dist-coming-soon");
const logoSource = join(root, "public", "images", "logo.png");

const ROUTE_INDEX_PATHS = [
  "index.html",
  "services/index.html",
  "services/individual-therapy/index.html",
  "services/couples-therapy/index.html",
  "our-clinicians/index.html",
  "insurance-rates/index.html",
  "faq/index.html",
  "contact-get-started/index.html",
  "good-faith-estimate/index.html",
  "notice-of-privacy-practices/index.html",
  "website-privacy-policy/index.html",
  "terms-of-use/index.html",
  "404.html",
];

const hasLogo = existsSync(logoSource);

function buildHtml() {
  const brandMarkup = hasLogo
    ? `<img class="logo" src="/images/logo.png" width="280" height="140" alt="TrueBridge Therapy" decoding="async" />`
    : `<p class="wordmark">TrueBridge Therapy</p>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>TrueBridge Therapy | Coming Soon</title>
  <meta name="description" content="TrueBridge Therapy is preparing to launch online therapy services for adults and couples in North Carolina." />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href="https://truebridgetherapy.com" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html { -webkit-text-size-adjust: 100%; }
    body {
      margin: 0;
      min-height: 100dvh;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 1rem;
      line-height: 1.6;
      color: #1F2A30;
      background: #F5F8FA;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }
    main {
      width: 100%;
      max-width: 36rem;
      background: #FFFFFF;
      border: 1px solid #D0D8DD;
      border-radius: 1.25rem;
      padding: 2rem 1.75rem;
      box-shadow: 0 12px 32px rgba(31, 42, 48, 0.06);
      text-align: center;
    }
    .logo {
      display: block;
      max-width: min(100%, 220px);
      height: auto;
      margin: 0 auto 1.5rem;
    }
    .wordmark {
      margin: 0 0 1.5rem;
      font-size: 1.375rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: #1F2A30;
    }
    h1 {
      margin: 0 0 1rem;
      font-size: clamp(1.5rem, 4vw, 1.75rem);
      font-weight: 600;
      line-height: 1.25;
      letter-spacing: -0.02em;
      color: #1F2A30;
    }
    .lead {
      margin: 0 0 1.25rem;
      font-size: 1.0625rem;
      line-height: 1.65;
      color: #4F5F68;
    }
    .support {
      margin: 0 0 1.5rem;
      font-size: 0.9375rem;
      color: #4F5F68;
    }
    .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      color: #FFFFFF;
      background: #344C57;
      border-radius: 9999px;
      text-decoration: none;
      transition: background 0.2s ease;
    }
    .btn:hover { background: #4F6B78; }
    .btn:focus-visible {
      outline: 2px solid #344C57;
      outline-offset: 3px;
    }
    .footer {
      margin-top: 2rem;
      max-width: 36rem;
      text-align: center;
      font-size: 0.8125rem;
      line-height: 1.55;
      color: #4F5F68;
    }
    .footer p { margin: 0; }
  </style>
</head>
<body>
  <main>
    ${brandMarkup}
    <h1>TrueBridge Therapy is preparing to launch.</h1>
    <p class="lead">We&rsquo;re building a thoughtful online therapy practice for adults and couples in North Carolina. Services and clinician availability will be announced soon.</p>
    <p class="support">If you have questions before launch, you can contact us by email.</p>
    <p>
      <a class="btn" href="mailto:hello@truebridgetherapy.com">Email TrueBridge Therapy</a>
    </p>
  </main>
  <footer class="footer">
    <p>This website is not monitored for emergencies. If you are in immediate danger or experiencing a mental health crisis, call 988 or 911.</p>
  </footer>
</body>
</html>`;
}

console.log("▶ Building coming-soon static output...\n");

if (existsSync(outDir)) {
  rmSync(outDir, { recursive: true, force: true });
}
mkdirSync(outDir, { recursive: true });

if (hasLogo) {
  const logoDestDir = join(outDir, "images");
  mkdirSync(logoDestDir, { recursive: true });
  cpSync(logoSource, join(logoDestDir, "logo.png"));
  console.log("  • Copied logo from public/images/logo.png");
} else {
  console.log("  • No logo at public/images/logo.png — using text wordmark");
}

const html = buildHtml();

for (const relativePath of ROUTE_INDEX_PATHS) {
  const filePath = join(outDir, relativePath);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html, "utf8");
  console.log(`  • Wrote ${relativePath}`);
}

console.log(`\n✓ Coming-soon build complete: ${outDir}\n`);
