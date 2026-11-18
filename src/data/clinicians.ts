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
   * Clinical focus areas. Not shown on the page, used only in the page's
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

/** Live clinician profiles shown on /clinicians and individual pages. */
export const CLINICIANS: Clinician[] = [
  {
    slug: "bridget-williams",
    name: "Bridget Williams",
    credentials: "Psy.D.",
    title: "Licensed Psychologist and Clinical Director",
    photo: "/images/clinicians/bridget-williams.jpg",
    specialties: [
      "Trauma",
      "Maternal mental wellness",
      "Women's mental health",
      "Identity concerns",
      "Stress and life transitions",
      "Caregiver support",
      "EMDR",
      "Perinatal and postpartum",
    ],
    seoTitle: "Bridget Williams, Psy.D. | Trauma & Maternal Wellness | TrueBridge",
    seoDescription:
      "Bridget Williams, Psy.D., licensed psychologist and Clinical Director, offers therapy for trauma, EMDR, and maternal mental wellness for adults across North Carolina.",
    blurb:
      "Bridget is TrueBridge's Clinical Director and a licensed psychologist who specializes in trauma, EMDR, and maternal mental wellness. She works with adults, especially women and moms, who are carrying a lot and want care that is thoughtful without being stiff.",
    bio: [
      "I am a licensed psychologist and Clinical Director at TrueBridge, and most of the people I work with are adults who have been holding a lot together for a long time with very little support. From the outside it can look like they are managing, even when they are tired, stretched thin, and not quite sure where they went in the process.",
      "I especially enjoy working with women and moms who were taught they could have it all and do it all, then found the cost of that showing up in their identity, their mental health, or a quieter sense that life no longer feels like their own. Trauma is a regular part of this work too, including experiences that still live in the body long after they were supposed to be over, along with pregnancy, postpartum, and the longer stretch of becoming a parent.",
      "In the beginning we take time to build trust, talk through what brought you in, and get clear on what actually matters to you. From there we look at the beliefs and patterns you have been living by, and whether they still fit, using Adlerian and constructivist ideas along with ACT, DBT skills, somatic work, and EMDR when trauma is part of the picture. I will support you, and I will also be honest with you, with room for humor when it helps the work feel more human.",
      "I do not see myself as the expert on your life. I bring training and clinical experience, and you bring the knowledge of your own story, and together we try to make the work useful in a way that holds up outside the room.",
      "I earned my Master of Science in Counseling Psychology and my Psy.D. from the APA-accredited Clinical Psychology program at Adler University. I trained as a generalist and later completed additional trauma training, including EMDR, because that is where so much of the work kept leading.",
      "Outside of therapy I am a distance runner, a mom, and an avid reader. I love time outdoors, adventures with my spouse and children, and cooking and baking at home, and I still believe a spontaneous dance party can change the temperature of a day.",
    ],
  },
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
    seoTitle: "Jade Spielman, LMFT | Grief, Relationships & Perinatal Therapy | TrueBridge",
    seoDescription:
      "Jade Spielman, LMFT, offers therapy for individuals and couples in North Carolina, including anxiety, relationship concerns, pregnancy loss, infertility, postpartum, and perimenopause.",
    blurb:
      "Jade is a licensed marriage and family therapist who started as a hospice grief counselor. She works with individuals and couples, and has particular depth around pregnancy loss, infertility, postpartum, and perimenopause.",
    bio: [
      "I started my career as a grief counselor in hospice, sitting with people at the end of life and with families who were losing someone they loved, and that work still shapes how I practice. Grief is not something you get over so much as something you learn to live with, including the love, the memory, and the way it changes who you are. From there I provided therapy in schools, then moved into private practice with individuals and couples.",
      "A lot of people come in for the everyday heavy things: anxiety, depression, stress, relationship conflict, parenting, identity questions, and stretches of adult life that feel harder than they expected. Alongside that, I have particular experience with infertility, miscarriage, pregnancy and infant loss, postpartum changes, grief, and the hormonal and identity shifts of perimenopause and menopause.",
      "This work is personal for me. I lost my mom when I was 18, and years later I went through a late second-trimester pregnancy loss, and those experiences are part of why I will not rush your pain or look for a silver lining. We go at your pace, and you do not have to be further along than you are.",
      "I am warm, down-to-earth, and collaborative, and I work from an attachment and family systems lens, looking at how earlier relationships shape the way you love, fight, and cope. I may also use CBT, mindfulness, or psychoeducation when they fit. With couples, I am less interested in deciding who is right and more interested in the pattern you keep landing in, and what each of you is protecting underneath it.",
      "I earned my master's in Marriage and Family Therapy from Kansas State University and am a Licensed Marriage and Family Therapist. If reaching out feels like a lot, you can start with one piece of the story and we will go from there.",
    ],
  },
  {
    slug: "kelly-freeman-driscoll",
    name: "Kelly Freeman Driscoll",
    credentials: "LCMHCA, NCC",
    title: "Licensed Clinical Mental Health Counselor Associate",
    photo: "/images/clinicians/kelly-freeman-driscoll.jpg",
    specialties: [
      "Anxiety",
      "Depression",
      "Relationship and marital concerns",
      "Couples therapy",
      "Parenting and family challenges",
      "Conflict resolution",
      "Trauma",
      "Grief and loss",
      "Substance use",
      "Life transitions",
      "Faith-based counseling",
    ],
    seoTitle: "Kelly Freeman Driscoll, LCMHCA, NCC | Relationships & Practical Therapy | TrueBridge",
    seoDescription:
      "Kelly Freeman Driscoll, LCMHCA, NCC, offers practical online therapy in North Carolina for anxiety, relationships, trauma, grief, and substance use, including faith-based counseling when clients want it.",
    blurb:
      "Kelly has more than 15 years of practical counseling experience with individuals and couples. She is warm and direct, and she offers Christian faith-based counseling when someone wants that included.",
    bio: [
      "I have spent more than 15 years in outpatient clinics, community programs, pediatric settings, and intensive in-home care with families. That mix taught me that therapy has to be useful on the messy weeks, not only when everyone is sitting still. I tend to be warm and practical, and I would rather name what is getting in the way than talk around it.",
      "I work with individuals and couples around anxiety, depression, relationship and marital concerns, parenting, trauma, grief, substance use, and other transitions. We usually start with whatever brought you in, get specific about what you want to change, and build from there in a way that can hold up on a regular weeknight, not just in session.",
      "This work is also personal for me. Substance use and generational trauma have been part of the landscape of my life, which does not make your story about mine. It means I know how hard it can be to ask for help, and I will not lecture you for needing it.",
      "With couples and parents, we get into the details that actually change the temperature at home: how you talk to each other, where the boundaries are, how to cool down in the middle of an argument, and how to repair afterward. I draw from CBT, mindfulness, behavioral strategies, and motivational interviewing, and we practice in the room so you have something to use the same week.",
      "Faith is an important part of who I am, personally and professionally, and I am glad to include Christian faith in therapy when that is what you want. If you would rather leave it out, or if faith is not part of your life, I will not bring it up, and you still get the same care.",
      "I earned my Master of Arts in Education in Clinical Mental Health Counseling from the University of North Carolina at Pembroke, and I am a National Certified Counselor and Licensed Clinical Mental Health Counselor Associate. My job is not to tell you how to live. It is to help you see what is happening, decide what matters, and make changes that still work when the week gets busy again.",
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
