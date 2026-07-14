/**
 * Specialty (area-of-focus) service pages rendered by `src/pages/services/[slug].astro`.
 *
 * Each entry becomes a static page at /services/<slug> with unique copy,
 * Service + FAQPage + BreadcrumbList JSON-LD, and internal links.
 * Add or edit entries here; no template changes needed.
 */

export interface SpecialtySection {
  title: string;
  body: string;
}

export interface SpecialtyFaq {
  q: string;
  a: string;
}

export interface Specialty {
  slug: string;
  /** Short label used in nav, footers, and link lists (e.g. "Anxiety"). */
  shortLabel: string;
  /** Full service name used in headings and JSON-LD (e.g. "Anxiety Therapy"). */
  name: string;
  /** schema.org Service `serviceType`. */
  serviceType: string;
  pageTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroIntro: string;
  signsHeading: string;
  signsIntro: string;
  signs: SpecialtySection[];
  bandHeading: string;
  bandBody: string;
  helpHeading: string;
  helpIntro: string;
  helps: SpecialtySection[];
  faqHeading: string;
  faqs: SpecialtyFaq[];
}

export const SPECIALTIES: Specialty[] = [
  {
    slug: "anxiety-therapy",
    shortLabel: "Anxiety",
    name: "Anxiety Therapy",
    serviceType: "Anxiety therapy",
    pageTitle: "Anxiety Therapy in North Carolina | TrueBridge",
    metaDescription:
      "Online anxiety therapy for adults in North Carolina. Support for worry, overthinking, panic, social anxiety, and avoidance, with licensed clinicians matched to your needs.",
    heroHeading: "Anxiety therapy for a mind that will not slow down.",
    heroIntro:
      "Therapy for adults across North Carolina who are tired of constant worry, overthinking, panic, and the pressure to stay in control of everything. Most sessions are online through secure telehealth.",
    signsHeading: "What anxiety can look like",
    signsIntro:
      "Anxiety is more than feeling nervous. It often shows up in the body, in sleep, in relationships, and in the decisions you avoid making.",
    signs: [
      {
        title: "Worry that will not switch off",
        body: "Replaying conversations, rehearsing worst-case scenarios, and struggling to be present because your mind is always a few steps ahead.",
      },
      {
        title: "Physical tension and restlessness",
        body: "Racing heart, tight chest, trouble sleeping, stomach discomfort, and a body that feels braced for something even on calm days.",
      },
      {
        title: "Avoidance and over-control",
        body: "Putting off conversations, decisions, or situations that feel risky, or trying to manage anxiety by controlling every detail around you.",
      },
      {
        title: "Panic and overwhelm",
        body: "Sudden waves of fear or dread, sometimes with a pounding heart or shortness of breath, that feel frightening and hard to explain.",
      },
    ],
    bandHeading: "Anxiety responds well to therapy.",
    bandBody:
      "Anxiety is one of the most common reasons adults seek therapy, and one of the most treatable. Working with a therapist can help you understand what drives your anxiety, calm your nervous system, and respond to worry without letting it run your decisions.",
    helpHeading: "What anxiety therapy can help you do",
    helpIntro:
      "Your therapist works with you at your pace, using evidence-informed approaches suited to how anxiety shows up in your life.",
    helps: [
      {
        title: "Understand your anxiety",
        body: "Learn what triggers your worry and panic, how avoidance keeps the cycle going, and what your anxiety is trying to protect you from.",
      },
      {
        title: "Calm your body's alarm system",
        body: "Build practical skills for slowing racing thoughts, easing physical tension, and getting through anxious moments without being swept away by them.",
      },
      {
        title: "Re-engage with your life",
        body: "Gradually approach the conversations, decisions, and situations you have been avoiding, so anxiety stops shrinking your world.",
      },
    ],
    faqHeading: "Anxiety therapy questions",
    faqs: [
      {
        q: "How do I know if my anxiety is bad enough for therapy?",
        a: "There is no threshold you need to meet. If worry, overthinking, panic, or avoidance is affecting your sleep, work, relationships, or sense of ease, therapy can help. Many clients start before things feel like a crisis, which often makes the work easier.",
      },
      {
        q: "What type of therapy is used for anxiety?",
        a: "Clinicians commonly draw on evidence-informed approaches such as cognitive behavioral therapy (CBT), acceptance-based approaches, and mindfulness and nervous system regulation skills. Your therapist tailors the approach to how anxiety shows up for you.",
      },
      {
        q: "Can anxiety therapy be done online?",
        a: "Yes. Most TrueBridge sessions take place through a secure telehealth platform, and online therapy for anxiety is well supported by research. Depending on scheduling and clinician availability, in-person sessions may sometimes be possible in the Cary and Raleigh area.",
      },
      {
        q: "How long does therapy for anxiety take?",
        a: "It varies with your goals and how long the patterns have been in place. Many clients notice early progress within the first several sessions, while deeper change in long-standing patterns takes longer. Your therapist will check in with you about progress along the way.",
      },
    ],
  },
  {
    slug: "depression-therapy",
    shortLabel: "Depression",
    name: "Depression Therapy",
    serviceType: "Depression therapy",
    pageTitle: "Depression Therapy in North Carolina | TrueBridge",
    metaDescription:
      "Online depression therapy for adults in North Carolina. Support for low mood, loss of motivation, emotional heaviness, and disconnection, with licensed clinicians matched to your needs.",
    heroHeading: "Depression therapy for when everything feels heavier than it should.",
    heroIntro:
      "Therapy for adults across North Carolina living with low mood, lost motivation, emotional numbness, and disconnection from the people and things that used to matter. Most sessions are online through secure telehealth.",
    signsHeading: "What depression can look like",
    signsIntro:
      "Depression is not always sadness. It often looks like exhaustion, irritability, going through the motions, or quietly withdrawing from your own life.",
    signs: [
      {
        title: "Low mood and heaviness",
        body: "A persistent flatness, sadness, or weight that does not lift with rest, distraction, or good news.",
      },
      {
        title: "Loss of motivation and interest",
        body: "Things that used to matter feel pointless or exhausting. Even small tasks like answering messages or making meals take real effort.",
      },
      {
        title: "Withdrawal and disconnection",
        body: "Pulling away from friends, family, and activities, and feeling distant from yourself even when you are around people.",
      },
      {
        title: "Harsh self-criticism",
        body: "An internal voice that says you are failing, falling behind, or a burden, which makes reaching out for support feel harder.",
      },
    ],
    bandHeading: "Depression is treatable, and you do not have to earn your way to help.",
    bandBody:
      "Many people wait, hoping the fog will lift on its own or believing they should push through. Therapy offers a steady place to be honest about how you are actually doing, understand what is underneath the heaviness, and rebuild momentum step by step.",
    helpHeading: "What depression therapy can help you do",
    helpIntro:
      "Your therapist meets you where you are, without expecting you to show up with energy or answers you do not have.",
    helps: [
      {
        title: "Understand what is underneath",
        body: "Explore how loss, stress, self-criticism, relationships, and life circumstances feed low mood, so the heaviness starts to make sense.",
      },
      {
        title: "Rebuild momentum gently",
        body: "Use small, realistic steps to re-engage with routines, people, and activities, without shame when energy is limited.",
      },
      {
        title: "Change the inner conversation",
        body: "Notice and soften the self-critical patterns that keep you stuck, and build a steadier, more workable relationship with yourself.",
      },
    ],
    faqHeading: "Depression therapy questions",
    faqs: [
      {
        q: "How is depression different from just feeling down?",
        a: "Everyone has low days. Depression tends to persist for weeks or longer and affects energy, sleep, appetite, concentration, and interest in things you normally care about. If the heaviness is lasting or interfering with daily life, therapy is a reasonable step, and you do not need a formal diagnosis to reach out.",
      },
      {
        q: "What if I don't have the energy for therapy?",
        a: "That is common with depression, and therapists understand it. Sessions are held online, which removes travel, and your therapist will pace the work around your actual capacity rather than expecting constant motivation.",
      },
      {
        q: "What approaches are used for depression?",
        a: "Clinicians commonly draw on evidence-informed approaches such as cognitive behavioral therapy (CBT), behavioral activation, and interpersonal and psychodynamic approaches, tailored to your situation and goals.",
      },
      {
        q: "What if I am having thoughts of hurting myself?",
        a: "This website and the therapy request process are not for emergencies. If you are in crisis or thinking about harming yourself, call or text 988 (Suicide and Crisis Lifeline), call 911, or go to the nearest emergency room. Once you are safe, therapy can be an important part of ongoing support.",
      },
    ],
  },
  {
    slug: "trauma-therapy",
    shortLabel: "Trauma & PTSD",
    name: "Trauma Therapy",
    serviceType: "Trauma therapy",
    pageTitle: "Trauma Therapy & PTSD Treatment in North Carolina | TrueBridge",
    metaDescription:
      "Online trauma therapy for adults in North Carolina. Support for PTSD, painful past experiences, triggers, and nervous system overwhelm, at a pace that feels safe.",
    heroHeading: "Trauma therapy that moves at a pace you can trust.",
    heroIntro:
      "Therapy for adults across North Carolina carrying painful experiences that still shape daily life through triggers, hypervigilance, numbness, or relationship patterns. Most sessions are online through secure telehealth.",
    signsHeading: "How trauma can keep showing up",
    signsIntro:
      "Trauma is not only about what happened. It is also about how your mind and body adapted, and how those adaptations continue long after the events themselves.",
    signs: [
      {
        title: "Triggers and intrusive memories",
        body: "Certain places, sounds, dates, or interactions bring back intense feelings or memories, sometimes without an obvious reason.",
      },
      {
        title: "A body on high alert",
        body: "Feeling jumpy, tense, or unsafe even in calm situations, with trouble sleeping or relaxing enough to feel at ease.",
      },
      {
        title: "Numbness and distance",
        body: "Feeling shut down, detached from your emotions, or like you are watching your life from the outside.",
      },
      {
        title: "Patterns in relationships and trust",
        body: "Difficulty trusting others, staying close, or setting boundaries, often shaped by earlier experiences you may not connect to the present.",
      },
    ],
    bandHeading: "Healing does not require reliving everything.",
    bandBody:
      "Effective trauma therapy is paced and collaborative. You and your therapist build safety and stability first, and you stay in control of what you share and when. The goal is for the past to stop intruding on the present, not to force you back through it.",
    helpHeading: "What trauma therapy can help you do",
    helpIntro:
      "Your therapist works with you to steady the nervous system, process what needs processing, and rebuild a sense of safety and choice.",
    helps: [
      {
        title: "Feel steadier in your body",
        body: "Learn grounding and regulation skills so triggers and waves of overwhelm become more manageable in daily life.",
      },
      {
        title: "Make sense of what happened",
        body: "Understand how past experiences shaped your beliefs, reactions, and relationships, with a therapist who can hold the story with you.",
      },
      {
        title: "Reclaim the present",
        body: "Reduce the grip of the past so you can be more present in relationships, work, and the parts of life that matter to you now.",
      },
    ],
    faqHeading: "Trauma therapy questions",
    faqs: [
      {
        q: "Do I have to talk about the details of what happened?",
        a: "No. You control the pace and depth of what you share. Many approaches to trauma therapy focus first on stability and present-day coping, and some do not require detailed retelling at all. Your therapist will follow your readiness, not push past it.",
      },
      {
        q: "Does it count as trauma if it wasn't one big event?",
        a: "Yes. Trauma can come from a single event or from ongoing experiences such as a difficult childhood, an unsafe relationship, medical experiences, or chronic stress. If past experiences are still affecting your present, that is enough reason to seek support.",
      },
      {
        q: "Can trauma therapy be done online?",
        a: "Yes. Many clients find online trauma therapy effective and appreciate being in their own space during sessions. Your therapist will also help you plan for grounding and support around sessions. Depending on scheduling and clinician availability, in-person sessions may sometimes be possible in the Cary and Raleigh area.",
      },
      {
        q: "What if I'm not sure my experience was \"bad enough\"?",
        a: "Comparing pain is rarely useful. If something from your past still affects your sleep, relationships, sense of safety, or how you see yourself, therapy can help, regardless of how it compares to anyone else's story.",
      },
    ],
  },
  {
    slug: "stress-burnout-therapy",
    shortLabel: "Stress & burnout",
    name: "Stress & Burnout Therapy",
    serviceType: "Stress and burnout therapy",
    pageTitle: "Stress & Burnout Therapy in North Carolina | TrueBridge",
    metaDescription:
      "Online therapy for stress and burnout for adults in North Carolina. Support for chronic pressure, work stress, caregiving strain, and emotional exhaustion.",
    heroHeading: "Therapy for stress and burnout, before running on empty becomes normal.",
    heroIntro:
      "Therapy for adults across North Carolina dealing with chronic pressure, work stress, caregiving strain, and the exhaustion of holding everything together. Most sessions are online through secure telehealth.",
    signsHeading: "What chronic stress and burnout can look like",
    signsIntro:
      "Burnout rarely arrives all at once. It builds through months of over-functioning, until rest stops helping and things that used to feel manageable no longer do.",
    signs: [
      {
        title: "Exhaustion that rest doesn't fix",
        body: "Feeling depleted even after weekends or time off, and waking up tired before the day has started.",
      },
      {
        title: "Irritability and a shorter fuse",
        body: "Snapping at people you care about, feeling resentful of demands, or noticing cynicism creep into work and home life.",
      },
      {
        title: "Trouble switching off",
        body: "Working or worrying at all hours, difficulty being present with family and friends, and guilt whenever you try to rest.",
      },
      {
        title: "Going through the motions",
        body: "Feeling detached from work or caregiving you once cared about, and wondering how long you can keep this pace.",
      },
    ],
    bandHeading: "Burnout is a signal, not a personal failure.",
    bandBody:
      "Chronic stress usually reflects real demands colliding with patterns like perfectionism, difficulty saying no, and tying self-worth to productivity. Therapy helps you address both sides: the load itself and the patterns that keep you carrying more than your share.",
    helpHeading: "What therapy for stress and burnout can help you do",
    helpIntro: "Your therapist helps you move from pushing through to making sustainable changes.",
    helps: [
      {
        title: "Understand your stress patterns",
        body: "Identify the demands, expectations, and internal rules such as never disappointing anyone that keep the pressure constant.",
      },
      {
        title: "Set boundaries that hold",
        body: "Practice saying no, delegating, and protecting time for recovery without being consumed by guilt.",
      },
      {
        title: "Recover your energy and presence",
        body: "Rebuild rest, connection, and meaning, so life is not organized entirely around getting through the week.",
      },
    ],
    faqHeading: "Stress and burnout therapy questions",
    faqs: [
      {
        q: "Is burnout the same as depression?",
        a: "They can look similar and sometimes overlap. Burnout is typically tied to chronic demands, such as work or caregiving, while depression tends to affect most areas of life. A therapist can help you understand what is going on and what kind of support fits, and therapy helps with both.",
      },
      {
        q: "Can therapy help if I can't change my job or caregiving situation?",
        a: "Yes. Even when demands cannot change immediately, therapy can help you change how you carry them: setting workable boundaries, letting go of unsustainable standards, recovering energy, and making clearer decisions about what happens next.",
      },
      {
        q: "I barely have time as it is. How does therapy fit?",
        a: "Sessions are held online, so there is no commute, and scheduling is part of the clinician-matching conversation. Many clients find that one protected hour a week makes the rest of the week more manageable, not less.",
      },
      {
        q: "How is this different from just talking to friends or taking a vacation?",
        a: "Support from friends and time off help, but they rarely change the underlying patterns. Therapy offers a consistent, confidential space with someone trained to help you understand why the pressure keeps rebuilding and what will actually shift it.",
      },
    ],
  },
  {
    slug: "grief-life-transitions-therapy",
    shortLabel: "Grief & life transitions",
    name: "Grief & Life Transitions Therapy",
    serviceType: "Grief and life transitions therapy",
    pageTitle: "Grief & Life Transitions Therapy in North Carolina | TrueBridge",
    metaDescription:
      "Online therapy for grief and life transitions for adults in North Carolina. Support after loss, and through divorce, career change, parenthood, moves, and new seasons of life.",
    heroHeading: "Therapy for grief and the seasons that change everything.",
    heroIntro:
      "Therapy for adults across North Carolina navigating loss, divorce, career change, parenthood, retirement, moves, and other transitions that reshape daily life and identity. Most sessions are online through secure telehealth.",
    signsHeading: "When grief and change are hard to carry",
    signsIntro:
      "Loss and major transitions affect more than mood. They can unsettle identity, routines, relationships, and your sense of what comes next.",
    signs: [
      {
        title: "Grief that comes in waves",
        body: "Sadness, longing, anger, guilt, or numbness after a death or loss, sometimes surfacing months later or at unexpected moments.",
      },
      {
        title: "Losses others may not see",
        body: "The end of a relationship, a miscarriage, estrangement, the loss of health, or a future you had planned on, grief that is real even when it goes unrecognized.",
      },
      {
        title: "Identity in transition",
        body: "Becoming a parent, ending a career, retiring, or moving can leave you unsure who you are now and what matters next.",
      },
      {
        title: "Feeling stuck between chapters",
        body: "The old life is gone, the new one has not taken shape, and everyone around you seems to expect you to have moved on already.",
      },
    ],
    bandHeading: "Grief does not follow a schedule, and therapy does not rush it.",
    bandBody:
      "There is no correct timeline for grief and no single right way to handle a major life change. Therapy offers steady, unhurried support, a place to feel what you actually feel, make sense of what has changed, and find your footing in what comes next.",
    helpHeading: "What grief and transition therapy can help you do",
    helpIntro: "Your therapist offers a consistent place to process, remember, and rebuild.",
    helps: [
      {
        title: "Make room for the grief",
        body: "Express what you are carrying, including the complicated parts like relief, anger, and guilt, without judgment or pressure to be over it.",
      },
      {
        title: "Navigate the practical and relational shifts",
        body: "Work through the changes in roles, relationships, and daily life that loss and transition bring.",
      },
      {
        title: "Rebuild meaning and direction",
        body: "Reconnect with your values and begin shaping the next chapter at a pace that respects what you have lost.",
      },
    ],
    faqHeading: "Grief and life transitions questions",
    faqs: [
      {
        q: "How long after a loss should I wait to start therapy?",
        a: "There is no required waiting period. Some people start soon after a loss, others months or years later when they notice grief still weighs on daily life. Whenever you come, therapy meets you where you are.",
      },
      {
        q: "Is my grief normal, or is something wrong with me?",
        a: "Grief varies widely, in intensity, duration, and how it shows up. Waves of emotion, numbness, and difficulty concentrating are all common. If grief feels stuck, overwhelming, or isolating, therapy can help you carry it, and that does not mean you are grieving wrong.",
      },
      {
        q: "Can therapy help with a change I chose, like a new job or becoming a parent?",
        a: "Yes. Even welcome changes involve loss, of routines, identity, and familiar ground, and it is common to struggle with a transition you wanted. Therapy can help you sort through the mixed feelings without minimizing either side.",
      },
      {
        q: "What if I mostly need support through a divorce or breakup?",
        a: "The end of a significant relationship is one of the most common reasons adults seek therapy. Individual therapy can help you grieve the relationship, manage the practical stress, and rebuild your sense of self and direction.",
      },
    ],
  },
];

export function getSpecialty(slug: string): Specialty | undefined {
  return SPECIALTIES.find((s) => s.slug === slug);
}
