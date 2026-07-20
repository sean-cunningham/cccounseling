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
   * Short intro shown on the /clinicians list page (1-2 sentences).
   * The full bio lives on the clinician's own page.
   */
  blurb: string;
  /**
   * Full bio paragraphs, shown on the clinician's individual page at
   * /clinicians/<slug>. This is the heart of the profile. Write it warm and
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
    photo: "/images/clinicians/jade-spielman.jpg",
    specialties: [
      "Grief and loss",
      "Perinatal and infant loss",
      "Infertility",
      "Postpartum transitions",
      "Perimenopause and menopause",
      "Hormonal and identity shifts",
      "Relationship concerns",
    ],
    blurb:
      "Jade supports women through grief, perinatal and infant loss, infertility, postpartum transitions, and the hormonal and identity shifts that can leave us feeling unlike ourselves. Her work is warm, relational, and shaped by lived experience.",
    // First-person bio adapted from Jade's own site, following the practice's
    // profile guidelines. Pending Jade's review and approval before launch.
    bio: [
      "I work with women moving through seasons that change everything: the tender, disorienting months after becoming a mother, the grief of losing a pregnancy, an infant, or someone deeply loved, the long uncertainty of infertility, and the hormonal and identity shifts of perimenopause and menopause that can leave you feeling unlike yourself.",
      "I began my career as a grief counselor in hospice care, supporting people at the end of their lives and families facing the heartbreak of losing someone they love. Sitting with people in those sacred, vulnerable moments shaped the heart of my work: healing is not about getting over it, but about honoring love, memory, identity, and the many ways grief reshapes us. From there I provided in-school therapy for children and families, then moved into private practice, where I worked with clients across the lifespan.",
      "This work is also deeply personal to me. I lost my mom when I was 18, and years later I endured the late second-trimester loss of my daughter, Selah. These losses are part of my story, and they shape the way I sit with others. I will not rush your pain or search for silver linings. I believe in walking alongside you, honoring your pace, your truth, and your lived experience.",
      "In our sessions, you will find a calm, nurturing space where you do not have to be strong or hold everything together. We slow down, make room for what you are carrying, and begin the process of healing with compassion and intention. Grief deserves gentle attention, and healing begins when we can share our stories without judgment or pressure to move on.",
      "My approach is warm, relational, and evidence-informed, blending mindfulness with practical support and always centered on your unique needs and pace. I also work with couples navigating these seasons together, helping partners strengthen understanding and closeness through change and grief.",
      "I earned my Master's degree in Marriage and Family Therapy from Kansas State University and am a Licensed Marriage and Family Therapist. Whether this is your first experience with therapy or you are returning after time away, I know reaching out can feel like a big step. If you are looking for a therapist who will honor your story and walk with you at your own pace, I would be honored to be part of your healing.",
    ],
  },
];

/** Profiles safe to expose in structured data (real clinicians only). */
export const PUBLISHED_CLINICIANS = CLINICIANS.filter((c) => !c.isPlaceholder);
