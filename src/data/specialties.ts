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
  /** Hero photo path under /public (3:4 portrait orientation). */
  heroImage: string;
  heroImageAlt: string;
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
      "Online anxiety therapy for adults in North Carolina. Support for worry, overthinking, restlessness, trouble sleeping, panic, social anxiety, and avoidance, with licensed clinicians matched to your needs.",
    heroHeading: "Anxiety therapy for a mind that will not slow down.",
    heroIntro:
      "Therapy for adults across North Carolina who are tired of constant worry, overthinking, restlessness, sleepless nights, panic, and the pressure to stay in control of everything. Most sessions are online through secure telehealth.",
    heroImage: "/images/anxiety-therapy-hero.jpg",
    heroImageAlt:
      "A woman stands by a bright window holding a warm mug with both hands, eyes closed, taking a slow, calming breath.",
    signsHeading: "What anxiety can look like",
    signsIntro:
      "Anxiety is more than feeling nervous. It often shows up in the body, in sleep, in relationships, and in the decisions you avoid making.",
    signs: [
      {
        title: "Overthinking and worry that will not switch off",
        body: "Replaying conversations, rehearsing worst-case scenarios, and struggling to be present because your mind is always a few steps ahead.",
      },
      {
        title: "Restlessness and a body that will not settle",
        body: "Racing heart, tight chest, fidgety energy, stomach discomfort, and a sense of being braced for something even on calm days.",
      },
      {
        title: "Trouble sleeping because of anxious thoughts",
        body: "Lying awake replaying the day or worrying about tomorrow, waking up already tense, and feeling exhausted before the day begins.",
      },
      {
        title: "Avoidance, over-control, and panic",
        body: "Putting off conversations, decisions, or situations that feel risky, trying to control every detail, or facing sudden waves of fear that feel hard to explain.",
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
    heroImage: "/images/depression-therapy-hero.jpg",
    heroImageAlt:
      "A man gently opens linen curtains as warm morning light fills a quiet, calm room.",
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
    bandHeading: "Depression is treatable, and you do not have to face it alone.",
    bandBody:
      "Many people wait, hoping the fog will lift on its own or believing they should push through. Therapy offers a steady place to be honest about how you are actually doing, understand what is underneath the heaviness, and rebuild momentum step by step.",
    helpHeading: "What depression therapy can help you do",
    helpIntro:
      "Your therapist meets you where you are, without expecting you to show up with energy or answers you do not have.",
    helps: [
      {
        title: "Understand what is underneath",
        body: "Explore how loss, stress, self-criticism, relationships, life circumstances, and earlier experiences contribute to feelings of depression over time, so the heaviness starts to make sense.",
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
        a: "If you are in crisis or thinking about harming yourself, call or text 988 (Suicide and Crisis Lifeline), call 911, or go to the nearest emergency room. Once you are safe, therapy can be an important part of ongoing support. Please note that this website and the therapy request process are not crisis services.",
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
      "Therapy for adults across North Carolina carrying painful experiences that still shape daily life through triggers, feeling on high alert, numbness, avoidance, or relationship patterns. Most sessions are online through secure telehealth.",
    heroImage: "/images/trauma-therapy-hero.jpg",
    heroImageAlt:
      "A woman wrapped in a soft knit blanket sits in an armchair by a window, looking out with a calm, grounded expression.",
    signsHeading: "How trauma can keep showing up",
    signsIntro:
      "Trauma is not only about what happened. It is also about how your mind and body adapted, and how those adaptations continue long after the events themselves.",
    signs: [
      {
        title: "Triggers and intrusive memories",
        body: "Certain places, sounds, dates, or interactions bring back intense feelings or memories, sometimes without an obvious reason.",
      },
      {
        title: "On high alert",
        body: "An easy startle response, scanning for threats or harm, feeling tense or unsafe even in calm situations, and trouble sleeping or relaxing enough to feel at ease.",
      },
      {
        title: "Avoiding reminders of what happened",
        body: "Steering clear of triggers, places, people, conversations, or reminders of the event, even when that avoidance starts to shrink daily life.",
      },
      {
        title: "Numbness, distance, and trust",
        body: "Feeling shut down or detached from your emotions, or finding it hard to trust others, stay close, or set boundaries shaped by earlier experiences.",
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
    heroImage: "/images/stress-burnout-therapy-hero.jpg",
    heroImageAlt:
      "A man rests on a porch step with his eyes closed and a closed laptop beside him, shoulders relaxed among green trees.",
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
    slug: "perinatal-postpartum-therapy",
    shortLabel: "Perinatal & postpartum",
    name: "Perinatal & Postpartum Therapy",
    serviceType: "Perinatal and postpartum therapy",
    pageTitle: "Perinatal & Postpartum Therapy in North Carolina | TrueBridge",
    metaDescription:
      "Online therapy for women in North Carolina navigating pregnancy, trying to conceive, infertility, postpartum anxiety and depression, early parenting, loss, and the physical, emotional, and identity shifts of this season.",
    heroHeading: "Therapy for the seasons of womanhood no one prepares you for.",
    heroIntro:
      "Support for women across North Carolina moving through pregnancy, trying to conceive, infertility, loss, postpartum changes, and the physical, emotional, and identity shifts that can leave you feeling unlike yourself. Most sessions are online through secure telehealth.",
    heroImage: "/images/perinatal-postpartum-therapy-hero.jpg",
    heroImageAlt:
      "A woman sits on a window seat in soft light with a hand resting gently over her heart, looking out the window with a tender, hopeful expression.",
    signsHeading: "What this season can hold",
    signsIntro:
      "These experiences are common, deeply personal, and often invisible to the people around you. You do not have to carry them quietly to be strong.",
    signs: [
      {
        title: "Postpartum anxiety, depression, and rage",
        body: "Feeling anxious, flat, tearful, irritable, or unlike yourself after birth, including thoughts and feelings that are hard to say out loud.",
      },
      {
        title: "Infertility and trying to conceive",
        body: "The monthly cycle of hope and grief, the strain on your relationship and identity, and the exhaustion of decisions no one else can see.",
      },
      {
        title: "Pregnancy, early parenting, and feeling unlike yourself",
        body: "Support for pregnancy health and wellness, the early stages of parenting, and the physical, emotional, and identity shifts of the perinatal and postpartum periods that can leave you wondering where you went.",
      },
      {
        title: "Grief after loss",
        body: "Space for miscarriage, stillbirth, infant loss, and other reproductive losses, held gently and without a timeline, whether the loss was recent or years ago.",
      },
    ],
    bandHeading: "You are not failing. You are carrying something enormous.",
    bandBody:
      "So much of this is endured silently, in bathrooms and waiting rooms and the middle of the night. Therapy offers a place where the whole story is welcome: the joy and the fear, the grief and the guilt, the anger and the love, all at once.",
    helpHeading: "What this therapy can help you do",
    helpIntro:
      "Our clinicians who focus on women's mental health work gently and specifically with these seasons of life.",
    helps: [
      {
        title: "Steady the postpartum and early parenting season",
        body: "Build real support for mood, sleep, overwhelm, and the early stages of parenting, with care for both what is changing in your body and what is happening in your life.",
      },
      {
        title: "Come back to yourself",
        body: "Work through the physical, emotional, and identity shifts of pregnancy, infertility, postpartum, and early motherhood, and reconnect with who you are now.",
      },
      {
        title: "Grieve without a timeline",
        body: "Make room for loss that others may not recognize, at your own pace, with someone who understands perinatal grief specifically.",
      },
    ],
    faqHeading: "Perinatal and postpartum therapy questions",
    faqs: [
      {
        q: "Do I need a diagnosis of postpartum depression to start?",
        a: "No. You do not need a diagnosis, and you do not need to be in crisis. If this season feels heavier, lonelier, or more confusing than you expected, that is reason enough to reach out.",
      },
      {
        q: "Can I start therapy while pregnant or while trying to conceive?",
        a: "Yes. Many women begin therapy during pregnancy, while navigating infertility, in the early stages of parenting, or while deciding what comes next. Support before a crisis often makes the hardest moments more bearable.",
      },
      {
        q: "Is this kind of therapy covered by insurance?",
        a: "Individual therapy for concerns like postpartum depression, anxiety, and grief is generally eligible for insurance coverage where your clinician is in-network. We help you verify your benefits and understand expected costs before your first session.",
      },
      {
        q: "My loss was early, or a long time ago. Does it still count?",
        a: "Yes. Grief after miscarriage and other perinatal losses does not follow a schedule and is not measured by how far along you were. If it still weighs on you, it deserves care, whether it happened last month or years ago.",
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
      "Online therapy for grief and for life transitions for adults in North Carolina. Support after loss, and separate support through divorce, career change, parenthood, moves, and new seasons of life.",
    heroHeading: "Therapy for grief, and for the seasons that change everything.",
    heroIntro:
      "Therapy for adults across North Carolina who need support after a loss, or who are navigating a major life transition such as divorce, career change, parenthood, retirement, or a move. These are different reasons to come to therapy, and both are welcome here. Most sessions are online through secure telehealth.",
    heroImage: "/images/grief-life-transitions-therapy-hero.jpg",
    heroImageAlt:
      "An older woman walks slowly along a quiet tree-lined path in soft golden light, looking peacefully toward the trees.",
    signsHeading: "Two common reasons people reach out",
    signsIntro:
      "Grief after loss and the strain of a major life transition can look different. Both can unsettle identity, routines, relationships, and your sense of what comes next.",
    signs: [
      {
        title: "Grief after a death or loss",
        body: "Sadness, longing, anger, guilt, or numbness after someone dies, sometimes surfacing months later or at unexpected moments.",
      },
      {
        title: "Losses others may not see",
        body: "The end of a relationship, estrangement, the loss of health, or a future you had planned on. Grief that is real even when it goes unrecognized.",
      },
      {
        title: "Life transitions and identity shifts",
        body: "Becoming a parent, changing careers, retiring, relocating, or stepping into a new chapter can leave you unsure who you are now and what matters next.",
      },
      {
        title: "Feeling stuck between chapters",
        body: "The old life is gone, the new one has not taken shape, and everyone around you seems to expect you to have adjusted already.",
      },
    ],
    bandHeading: "Grief and life transitions both deserve unhurried care.",
    bandBody:
      "There is no correct timeline for grief, and no single right way to handle a major life change. Therapy offers steady support either way: a place to feel what you actually feel, make sense of what has changed, and find your footing in what comes next.",
    helpHeading: "What therapy can help you do",
    helpIntro:
      "Whether you are grieving a loss or navigating a transition, your therapist offers a consistent place to process and rebuild.",
    helps: [
      {
        title: "Make room for grief",
        body: "Express what you are carrying after a loss, including the complicated parts like relief, anger, and guilt, without judgment or pressure to be over it.",
      },
      {
        title: "Navigate a life transition",
        body: "Work through the practical, relational, and identity shifts that come with divorce, career change, parenthood, relocation, and other new seasons.",
      },
      {
        title: "Rebuild meaning and direction",
        body: "Reconnect with your values and begin shaping the next chapter at a pace that respects what has changed.",
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
        a: "Yes. Life transitions are a distinct reason people seek therapy, even when the change was wanted. Welcome changes still involve loss of routines, identity, and familiar ground. Therapy can help you sort through the mixed feelings without minimizing either side.",
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
