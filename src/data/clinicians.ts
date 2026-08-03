/**
 * Clinician profiles rendered on /clinicians.
 *
 * TO ADD A REAL CLINICIAN:
 * 1. Copy an entry from DRAFT_CLINICIANS (or create a new one) into CLINICIANS.
 * 2. Set `isPlaceholder: false` (or omit it) so the profile is included in
 *    Person JSON-LD for search engines.
 * 3. Add a headshot to /public/images/clinicians/ and set `photo`
 *    (e.g. "/images/clinicians/jane-doe.jpg"). Leave `photo` undefined to
 *    show an initials avatar instead.
 * 4. Remove any leftover sample/placeholder entries once real profiles exist.
 *
 * Profiles in DRAFT_CLINICIANS are kept ready in the repo but are not shown
 * on the site or included in structured data until moved into CLINICIANS.
 *
 * Placeholder entries (isPlaceholder: true) render with a "Sample profile"
 * badge and are excluded from structured data.
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
   * Also used as the clinician page meta description when seoDescription
   * is not set.
   */
  blurb: string;
  /**
   * Full bio paragraphs, shown on the clinician's individual page at
   * /clinicians/<slug>. This is the heart of the profile. Write it warm and
   * personal (who they are, how therapy with them feels, who they love
   * working with) rather than a list of credentials.
   */
  bio: string[];
  /** Optional <title> override for richer clinician-page SEO. */
  seoTitle?: string;
  /** Optional meta description override. Defaults to `blurb`. */
  seoDescription?: string;
  /** True for demo/sample entries; excluded from JSON-LD, badged on the page. */
  isPlaceholder?: boolean;
}

/**
 * Preview-only publish of Jade for clinician review on this branch.
 * Production `main` keeps her in DRAFT_CLINICIANS until she approves.
 */
/** Live clinician profiles shown on /clinicians and individual pages. */
export const CLINICIANS: Clinician[] = [
  {
    slug: "jade-spielman",
    name: "Jade Spielman",
    credentials: "LMFT",
    title: "Licensed Marriage and Family Therapist",
    photo: "/images/clinicians/jade-spielman.jpg",
    // Lead with high-volume presenting concerns, then niche specialties.
    specialties: [
      "Anxiety",
      "Depression",
      "Stress and life transitions",
      "Self-esteem",
      "Identity concerns",
      "Relationship concerns",
      "Couples therapy",
      "Parenting challenges",
      "Grief and loss",
      "Perinatal and infant loss",
      "Infertility",
      "Postpartum mental health",
      "Perimenopause and menopause",
      "Hormonal and identity shifts",
    ],
    seoTitle:
      "Jade Spielman, LMFT | Anxiety, Depression & Relationship Therapy | TrueBridge",
    seoDescription:
      "Jade Spielman, LMFT offers warm, collaborative therapy for anxiety, depression, stress, life transitions, and relationship concerns, with specialized expertise in pregnancy, postpartum, infertility, miscarriage, and infant loss. Telehealth across North Carolina.",
    blurb:
      "Jade works with individuals and couples facing everyday stressors, anxiety, depression, relationship concerns, career changes, and identity questions. She also brings specialized expertise supporting people through pregnancy, postpartum, infertility, miscarriage, infant loss, and parenting. Her style is warm, down-to-earth, and collaborative, shaped by lived experience.",
    // First-person bio drawn from Jade's practice site and her onboarding notes.
    // Pending Jade's final review and approval before production publish.
    bio: [
      "I work with individuals and couples facing many of life's everyday struggles: anxiety, depression, stress, career and life transitions, self-esteem, identity questions, relationship conflict, and parenting. Alongside that broader work, I have particular experience supporting people through pregnancy, postpartum transitions, infertility, miscarriage, pregnancy and infant loss, grief, and the hormonal and identity shifts of perimenopause and menopause.",
      "I began my career as a grief counselor in hospice care, supporting people at the end of their lives and families facing the heartbreak of losing someone they love. Sitting with people in those sacred, vulnerable moments shaped the heart of my work: healing is not about getting over it, but about honoring love, memory, identity, and the many ways grief reshapes us. From there I provided in-school therapy for children and families, then moved into private practice, where I worked with clients across the lifespan.",
      "This work is also deeply personal to me. I lost my mom when I was 18, and years later I endured the late second-trimester loss of my daughter, Selah. These losses are part of my story, and they shape the way I sit with others. I will not rush your pain or search for silver linings. I believe in walking alongside you, honoring your pace, your truth, and your lived experience.",
      "I believe therapy works best when you feel comfortable enough to be yourself. My style is warm, down-to-earth, and collaborative. Clients often tell me they appreciate a space where they do not feel judged or pressured to have it all figured out. I primarily work from an attachment and family systems perspective, helping you understand how relationships, life experiences, and the stories we carry shape the way we see ourselves and connect with others. I may also incorporate evidence-based approaches like Cognitive Behavioral Therapy (CBT), mindfulness, and psychoeducation, always tailored to your needs rather than a one-size-fits-all plan.",
      "In our sessions, you can expect me to be engaged, curious, and supportive. I will ask thoughtful questions, help you notice patterns, gently challenge beliefs that may be keeping you stuck, and offer practical tools you can use outside of therapy. My goal is not to fix you. It is to help you better understand yourself, strengthen your relationships, and feel more confident navigating whatever season of life you are in. We do meaningful work together, and there is also room for laughter, humor, and celebrating the small victories along the way.",
      "I earned my Master's degree in Marriage and Family Therapy from Kansas State University and am a Licensed Marriage and Family Therapist. Whether this is your first experience with therapy or you are returning after time away, I know reaching out can feel like a big step. If you are looking for a therapist who will honor your story and walk with you at your own pace, I would be honored to be part of your healing.",
    ],
  },
];

/**
 * Profiles drafted in the repo but not yet approved for public publish.
 * Move an entry into CLINICIANS when ready to go live.
 */
export const DRAFT_CLINICIANS: Clinician[] = [];

/** Profiles safe to expose in structured data (real clinicians only). */
export const PUBLISHED_CLINICIANS = CLINICIANS.filter((c) => !c.isPlaceholder);
