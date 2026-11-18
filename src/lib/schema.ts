import {
  PUBLIC_EMAIL,
  PUBLIC_PHONE_E164,
  SITE_LEGAL_NAME,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/constants/site";
import type { Clinician } from "@/data/clinicians";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function personId(slug: string): string {
  return `${SITE_URL}/clinicians/${slug}/#person`;
}

export function personUrl(slug: string): string {
  return `${SITE_URL}/clinicians/${slug}/`;
}

export function webpageId(canonicalUrl: string): string {
  const url = canonicalUrl.endsWith("/") || canonicalUrl === SITE_URL ? canonicalUrl : `${canonicalUrl}/`;
  return `${url}#webpage`;
}

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: new URL(SITE_LOGO_PATH, SITE_URL).href,
    telephone: PUBLIC_PHONE_E164,
    email: PUBLIC_EMAIL,
    areaServed: { "@type": "State", name: "North Carolina" },
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_LEGAL_NAME,
    alternateName: SITE_NAME,
    publisher: { "@id": ORG_ID },
  };
}

export function personNode(clinician: Clinician) {
  return {
    "@type": "Person",
    "@id": personId(clinician.slug),
    name: `${clinician.name}, ${clinician.credentials}`,
    jobTitle: clinician.title,
    description: clinician.seoDescription ?? clinician.blurb,
    worksFor: { "@id": ORG_ID },
    knowsAbout: clinician.specialties,
    ...(clinician.photo ? { image: new URL(clinician.photo, SITE_URL).href } : {}),
    url: personUrl(clinician.slug),
  };
}

export function breadcrumbNode(
  canonicalUrl: string,
  items: { name: string; url: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serializeJsonLd(data: Record<string, unknown> | Record<string, unknown>[]): string {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : data["@context"]
      ? data
      : { "@context": "https://schema.org", ...data };
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}
