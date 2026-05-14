/**
 * Production site URL and brand name for SEO and shared config.
 *
 * Used by `astro.config.mjs` (`site`) and referenced from app code.
 * Update `public/robots.txt` and `public/sitemap.xml` when the domain changes.
 * `PUBLIC_PHONE_E164` / `PUBLIC_EMAIL` match the footer and are safe for JSON-LD.
 */
export const SITE_URL = "https://cccounseling.com" as const;
export const SITE_NAME = "CC Counseling" as const;

/** Public contact values (same as site footer). Used in JSON-LD where appropriate. */
export const PUBLIC_PHONE_E164 = "+19194571981" as const;
export const PUBLIC_EMAIL = "hello@cccounselingnc.com" as const;
