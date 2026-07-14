/**
 * Clinician profiles rendered on /clinicians.
 *
 * TO ADD A REAL CLINICIAN:
 * 1. Copy the demo entry below and fill in real details.
 * 2. Set `isPlaceholder: false` (or remove the field) so the profile is
 *    included in the page's Person JSON-LD for search engines.
 * 3. Add a headshot to /public/images/clinicians/ and set `photo`
 *    (e.g. "/images/clinicians/jane-doe.jpg"). Leave `photo` undefined to
 *    show an initials avatar instead.
 * 4. Once at least one real profile exists, delete the demo entry.
 *
 * Placeholder entries render with a "Sample profile" badge and are excluded
 * from structured data so search engines never index a fictional clinician.
 */

export interface Clinician {
  /** Stable id used for anchors, e.g. /clinicians#jane-doe */
  slug: string;
  /** Full name without credentials, e.g. "Jane Doe" */
  name: string;
  /** Credential letters shown after the name, e.g. "LCMHC" */
  credentials: string;
  /** License / role line, e.g. "Licensed Clinical Mental Health Counselor" */
  title: string;
  /** Optional headshot path under /public. Falls back to an initials avatar. */
  photo?: string;
  /** Services offered, e.g. ["Individual therapy", "Couples therapy"] */
  services: string[];
  /** Clinical focus areas shown as tags */
  specialties: string[];
  /** Short bio paragraphs */
  bio: string[];
  acceptingClients: boolean;
  /** True for demo/sample entries; excluded from JSON-LD, badged on the page. */
  isPlaceholder?: boolean;
}

export const CLINICIANS: Clinician[] = [
  {
    slug: "sample-clinician",
    name: "Clinician Name",
    credentials: "LCMHC",
    title: "Licensed Clinical Mental Health Counselor",
    services: ["Individual therapy", "Couples therapy"],
    specialties: ["Anxiety", "Depression", "Trauma & PTSD", "Life transitions"],
    bio: [
      "This is a sample profile showing how clinician bios will appear as our team grows. Each profile will describe the clinician's background, therapy style, and the clients they most often support.",
      "Real profiles will include licensure details, focus areas, and current availability so you can get a sense of fit before reaching out.",
    ],
    acceptingClients: true,
    isPlaceholder: true,
  },
];

/** Profiles safe to expose in structured data (real clinicians only). */
export const PUBLISHED_CLINICIANS = CLINICIANS.filter((c) => !c.isPlaceholder);
