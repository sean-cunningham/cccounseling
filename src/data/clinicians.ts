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
  /**
   * Clinical focus areas. Not shown on the page — used only in the page's
   * Person JSON-LD (`knowsAbout`) so search engines understand each
   * clinician's specialties.
   */
  specialties: string[];
  /**
   * Bio paragraphs. This is the heart of the profile — write it warm and
   * personal (who they are, how therapy with them feels, who they love
   * working with) rather than a list of credentials.
   */
  bio: string[];
  /** True for demo/sample entries; excluded from JSON-LD, badged on the page. */
  isPlaceholder?: boolean;
}

export const CLINICIANS: Clinician[] = [
  {
    slug: "jade-spielman",
    name: "Jade Spielman",
    credentials: "LMFT",
    title: "Licensed Marriage and Family Therapist",
    // TODO: add headshot to /public/images/clinicians/jade-spielman.jpg and
    // replace this adapted bio with Jade's final copy when it arrives.
    specialties: [
      "Grief and loss",
      "Perinatal and infant loss",
      "Infertility",
      "Postpartum transitions",
      "Hormonal and identity shifts",
      "Relationship concerns",
    ],
    bio: [
      "Jade specializes in supporting women through grief, perinatal and infant loss, infertility, and postpartum transitions — as well as the hormonal and identity shifts that can leave us feeling unlike ourselves.",
      "As a licensed marriage and family therapist, she brings a warm, relational lens to individual work, holding space for the losses and changes that so often go unseen while helping you find your footing in what comes next.",
    ],
  },
];

/** Profiles safe to expose in structured data (real clinicians only). */
export const PUBLISHED_CLINICIANS = CLINICIANS.filter((c) => !c.isPlaceholder);
