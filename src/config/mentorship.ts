/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  MENTORSHIP — two programmes, one philosophy
 * ─────────────────────────────────────────────────────────────────────────────
 *  1. Group Mentorship — The Liquidity Room
 *  2. Private One-to-One Mentorship
 *
 *  Rules this content follows: no guaranteed results, no testimonials, no
 *  student statistics, no fake scarcity, no signals. Prices shown here are the
 *  public, advertised prices only.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { mailto, telegramUsername } from "./socials";

export const telegramHref = telegramUsername ? `https://t.me/${telegramUsername}` : null;

export const mentorshipIntro = {
  eyebrow: "TOBYACE Mentorship",
  title: "Learn to read the market for yourself.",
  lede:
    "Two ways to study the TOBYACE Model™ with me directly — a structured group programme and a private, personalised one. Same philosophy. Different delivery and level of individual attention.",
  notSignals:
    "Neither programme is a signals service. The objective is to help you understand market behaviour, build your own analysis and execute with discipline.",
};

/** What both programmes teach — the shared foundation. */
export const sharedFoundation = [
  "Market Narrative",
  "Top-down directional analysis",
  "Market structure & liquidity",
  "Points of Interest",
  "Entry models & execution",
  "Risk management",
  "Trading psychology",
];

/* ── 1. GROUP — THE LIQUIDITY ROOM ────────────────────────────────────────── */

export const group = {
  id: "liquidity-room",
  kind: "Group Mentorship",
  name: "The Liquidity Room",
  positioning: "Structured trading education within a focused learning community.",
  price: { primary: "$75", secondary: "₦100,000", note: "Programme fee" },
  format: "8 live group classes on Zoom",
  summary:
    "A fixed, structured curriculum that takes you through the TOBYACE Model™ in order — taught live, with time for questions and discussion alongside other students.",
  features: [
    "8 live classes on Zoom",
    "Structured lessons covering the TOBYACE Model™",
    "Market structure and liquidity",
    "Higher-timeframe directional analysis",
    "Points of Interest",
    "Entry models and execution",
    "Risk management",
    "Trading psychology",
    "Access to the private student community",
    "Session recordings, where available",
    "Questions and open discussion in every class",
  ],
  idealFor: "Traders who want structured education, guided learning and interaction with other students.",
  cta: "Join The Liquidity Room",
  /** Class-by-class outline. Edit the order or wording to match how you teach. */
  classes: [
    { n: "01", title: "Foundations & the TOBYACE Model™", body: "How the framework fits together, and how Market Narrative guides every decision." },
    { n: "02", title: "Market Structure", body: "Swing structure, BOS, CHoCH and MSS — and telling a real shift from noise." },
    { n: "03", title: "Liquidity", body: "Buy-side and sell-side liquidity, sweeps, inducement and the draw on liquidity." },
    { n: "04", title: "Higher-Timeframe Direction", body: "Daily bias, H4 swings, dealing ranges, premium and discount." },
    { n: "05", title: "Points of Interest", body: "Order blocks, fair value gaps and breakers — and grading them by context." },
    { n: "06", title: "Entry Models & Execution", body: "Sweep, shift, displacement and refined entries, with stops and targets." },
    { n: "07", title: "Risk Management", body: "Position sizing, risk-to-reward and protecting capital through drawdowns." },
    { n: "08", title: "Trading Psychology & Review", body: "Discipline, patience and journaling — then bringing the full model together." },
  ],
  /** Where "Join" sends people. Telegram if configured, otherwise email. */
  joinEmail: mailto("Join The Liquidity Room"),
};

/* ── 2. PRIVATE ONE-TO-ONE ───────────────────────────────────────────────── */

export const privateMentorship = {
  id: "private",
  kind: "Private One-to-One Mentorship",
  name: "Private Mentorship",
  positioning:
    "An exclusive, personalised programme offering direct access to my analytical thinking, trading framework and individual guidance.",
  price: { primary: "$750", note: "Six-week programme" },
  duration: "6 weeks",
  format: "Weekly private Zoom sessions",
  summary:
    "Built around you — your existing knowledge, weaknesses, objectives and development needs — rather than a shared syllabus.",
  philosophy: [
    "The objective is not to give you trades to copy. It is to improve how you independently understand market behaviour, construct directional narratives, identify quality POIs, recognise confirmation and manage risk.",
    "By the end of the programme you should have a clearer, more structured approach to trading — and the reasoning to apply it on your own.",
  ],
  features: [
    "Six weeks of private mentorship",
    "Weekly private Zoom sessions",
    "Individual assessment of your knowledge and current approach",
    "Personalised trading model development",
    "Detailed technical analysis discussions",
    "Individual chart reviews",
    "Corrections to your analysis and directional reasoning",
    "Entry model and execution refinement",
    "Risk management and position-sizing discussions",
    "Trading psychology and accountability",
    "Direct Telegram communication during the programme",
    "Final progress and development review",
  ],
  weeks: [
    { n: "Week 1", title: "Assessment", body: "A detailed review of your current knowledge, process and charts, and agreed priorities for the programme." },
    { n: "Week 2", title: "Narrative & direction", body: "Correcting directional reasoning: where price is, what has happened and where it is drawing into." },
    { n: "Week 3", title: "POI selection", body: "Refining how you identify, grade and choose points of interest in context." },
    { n: "Week 4", title: "Execution", body: "Entry model, confirmation and trade management, using your own charts." },
    { n: "Week 5", title: "Risk & psychology", body: "Position sizing, risk rules, accountability and the habits behind consistent execution." },
    { n: "Week 6", title: "Consolidation & review", body: "Bringing your personalised model together, with a final progress and development review." },
  ],
  idealFor: [
    "You already have some understanding of Forex or ICT/SMC concepts.",
    "You need help developing a structured trading approach.",
    "You struggle with directional analysis or building a market narrative.",
    "You want corrections to your POI selection and execution.",
    "You want individual feedback rather than shared classroom instruction.",
    "You're prepared to study, practise and take responsibility for your development.",
  ],
  exclusivity:
    "To give every student proper attention, private mentorship is limited to a small number of active students at a time — typically two to three, subject to availability. Applications are reviewed individually.",
  cta: "Apply for Private Mentorship",
};

/* ── COMPARISON ──────────────────────────────────────────────────────────── */

export const comparison: { label: string; group: string; private: string }[] = [
  { label: "Learning environment", group: "Shared, collaborative classroom", private: "Private, one-to-one" },
  { label: "Format", group: "8 live group classes on Zoom", private: "Weekly private Zoom sessions over 6 weeks" },
  { label: "Curriculum", group: "Fixed, structured curriculum", private: "Personalised to your knowledge gaps and goals" },
  { label: "Schedule", group: "Scheduled group sessions", private: "Arranged individually" },
  { label: "Individual attention", group: "Questions and discussion in class", private: "Full attention in every session" },
  { label: "Feedback", group: "General guidance and Q&A", private: "Direct feedback on your own analysis and execution" },
  { label: "Chart reviews", group: "—", private: "Individual chart reviews" },
  { label: "Communication", group: "Private student community", private: "Direct Telegram access during the programme" },
  { label: "Enrolment", group: "Open to the group", private: "Limited — by application" },
  { label: "Price", group: "$75 / ₦100,000", private: "$750" },
  { label: "Best for", group: "Structured learning with other students", private: "Personalised instruction and focused feedback" },
];

/* ── FAQ ─────────────────────────────────────────────────────────────────── */

export const faqs: { q: string; a: string }[] = [
  {
    q: "Is this a signals service?",
    a: "No. Neither programme provides trades to copy. You learn the TOBYACE Model™ so you can build and judge your own analysis.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. Trading involves significant risk and no education can guarantee profits or consistency. What the programmes offer is structure, understanding and — in private mentorship — direct feedback. How you apply it is your responsibility.",
  },
  {
    q: "Which programme should I choose?",
    a: "Choose The Liquidity Room if you want a complete, structured curriculum and enjoy learning alongside others. Choose private mentorship if you already know the basics and want personalised instruction, chart reviews and direct feedback on your own reasoning. Both teach the same core philosophy.",
  },
  {
    q: "Does private mentorship mean better results?",
    a: "Not necessarily. The difference is the delivery: more individual attention, a programme tailored to you and direct feedback. It does not guarantee better trading performance.",
  },
  {
    q: "Do I need experience?",
    a: "The Liquidity Room starts from foundations, so it suits traders who are still building their understanding. Private mentorship works best if you already have some understanding of Forex or ICT/SMC concepts.",
  },
  {
    q: "How are sessions delivered?",
    a: "All sessions take place live on Zoom. The Liquidity Room runs as scheduled group classes; private sessions are arranged individually each week.",
  },
  {
    q: "Are classes recorded?",
    a: "Liquidity Room sessions are recorded where available, so you can revisit lessons.",
  },
  {
    q: "What happens after I apply or enquire?",
    a: "I'll reply on Telegram or email with the next steps, including dates and payment details. For private mentorship, I'll review your application first to make sure the programme is the right fit.",
  },
];

/* ── APPLICATION FORM (private) ──────────────────────────────────────────── */

export const applicationFields = [
  { id: "name", label: "Your name", type: "text", required: true, autoComplete: "name" },
  { id: "contact", label: "Telegram username or email", type: "text", required: true, autoComplete: "email" },
  {
    id: "experience",
    label: "How long have you been trading?",
    type: "select",
    required: true,
    options: ["Less than 6 months", "6–12 months", "1–2 years", "More than 2 years"],
  },
  { id: "knowledge", label: "Which concepts are you already familiar with?", type: "textarea", required: false, placeholder: "e.g. market structure, order blocks, FVGs, liquidity…" },
  { id: "struggle", label: "What do you struggle with most right now?", type: "textarea", required: true, placeholder: "e.g. directional bias, choosing POIs, entries, discipline…" },
  { id: "goals", label: "What do you want from the programme?", type: "textarea", required: false, placeholder: "" },
] as const;

export const applicationEmailSubject = "Private Mentorship Application";
