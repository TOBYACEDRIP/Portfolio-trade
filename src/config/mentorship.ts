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
  price: { primary: "From $750", note: "Three private tiers" },
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

/* ── PRIVATE TIERS ───────────────────────────────────────────────────────── */

export type PrivateTier = {
  id: "standard" | "premium" | "elite";
  name: string;
  price: string;
  /** REPLACE with exact figures if you want them shown. */
  duration: string;
  positioning: string;
  summary: string;
  /** Label above `adds`, e.g. "Everything in Standard, plus". */
  addsLabel?: string;
  /** What this tier includes (Standard) or adds on top of the tier below. */
  adds: string[];
  badge?: string;
};

export const privateTiers: PrivateTier[] = [
  {
    id: "standard",
    name: "Standard 1-on-1 Mentorship",
    price: "$750",
    duration: "6 weeks",
    positioning: "Personalised six-week mentorship.",
    summary: "The complete private programme: a structured six weeks built around your knowledge gaps.",
    adds: [
      "Six weeks of private mentorship",
      "Weekly private Zoom sessions",
      "Individual assessment of your current approach",
      "Personalised chart reviews",
      "Entry model and execution refinement",
      "Risk management and psychology discussions",
      "Direct Telegram access during the programme",
      "Final progress review",
    ],
  },
  {
    id: "premium",
    name: "Premium Private Mentorship",
    price: "$1,200",
    duration: "8 weeks",
    positioning: "Deeper individual support and extended access.",
    summary: "Two extra weeks, more sessions and deeper reviews, with a written plan for your development.",
    addsLabel: "Everything in Standard, plus",
    adds: [
      "8 weeks instead of 6",
      "Additional private sessions beyond the weekly call",
      "Deeper trade reviews: entries, management and exits, trade by trade",
      "Tailored written development plan",
      "Review of your trading plan and journal",
      "Backtesting review and feedback",
      "Recordings of your private sessions",
      "Extended Telegram support after the programme ends",
    ],
  },
  {
    id: "elite",
    name: "Elite Extended Coaching",
    price: "$2,000",
    duration: "Longer than 8 weeks", // REPLACE with the exact length, e.g. "12 weeks"
    positioning: "High-touch, extended private coaching.",
    summary: "The longest and most intensive engagement, with ongoing reviews and priority access throughout.",
    addsLabel: "Everything in Premium, plus",
    badge: "Highest level of access",
    adds: [
      "Longer coaching engagement",
      "Intensive individual feedback on your analysis and execution",
      "Ongoing performance reviews of your journal and results",
      "Live market walkthroughs together during the sessions",
      "Prop firm challenge preparation and rule-based risk planning",
      "Priority scheduling and priority Telegram responses",
      "Follow-up check-ins after the programme ends",
    ],
  },
];

export const tierComparison: { label: string; standard: string; premium: string; elite: string }[] = [
  { label: "Duration", standard: privateTiers[0].duration, premium: privateTiers[1].duration, elite: privateTiers[2].duration },
  { label: "Private Zoom sessions", standard: "Weekly", premium: "Weekly + additional sessions", elite: "Extended schedule" },
  { label: "Reviews", standard: "Personalised chart reviews", premium: "Deeper trade-by-trade reviews", elite: "Intensive feedback + ongoing performance reviews" },
  { label: "Development plan", standard: "Personalised model development", premium: "Tailored written development plan", elite: "Tailored plan, reviewed throughout" },
  { label: "Journal & backtesting review", standard: "—", premium: "Included", elite: "Included" },
  { label: "Session recordings", standard: "—", premium: "Included", elite: "Included" },
  { label: "Live market walkthroughs", standard: "—", premium: "—", elite: "Included" },
  { label: "Prop firm preparation", standard: "—", premium: "—", elite: "Included" },
  { label: "Telegram access", standard: "During the programme", premium: "Extended after the programme", elite: "Priority responses" },
  { label: "Scheduling", standard: "Arranged weekly", premium: "Arranged weekly", elite: "Priority scheduling" },
  { label: "Price", standard: "$750", premium: "$1,200", elite: "$2,000" },
];

/* ── COMPARISON ──────────────────────────────────────────────────────────── */

export const comparison: { label: string; group: string; private: string }[] = [
  { label: "Learning environment", group: "Shared, collaborative classroom", private: "Private, one-to-one" },
  { label: "Format", group: "8 live group classes on Zoom", private: "Private Zoom sessions over 6 weeks or longer" },
  { label: "Curriculum", group: "Fixed, structured curriculum", private: "Personalised to your knowledge gaps and goals" },
  { label: "Schedule", group: "Scheduled group sessions", private: "Arranged individually" },
  { label: "Individual attention", group: "Questions and discussion in class", private: "Full attention in every session" },
  { label: "Feedback", group: "General guidance and Q&A", private: "Direct feedback on your own analysis and execution" },
  { label: "Chart reviews", group: "—", private: "Individual chart reviews" },
  { label: "Communication", group: "Private student community", private: "Direct Telegram access during the programme" },
  { label: "Enrolment", group: "Open to the group", private: "Limited — by application" },
  { label: "Price", group: "$75 / ₦100,000", private: "$750 · $1,200 · $2,000" },
  { label: "Best for", group: "Structured learning with other students", private: "Personalised instruction and focused feedback" },
];

/* ── FAQ ─────────────────────────────────────────────────────────────────── */

export const faqs: { q: string; a: string; link?: { href: string; label: string } }[] = [
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
    q: "What's the difference between the private tiers?",
    a: "All three teach the same model one-to-one. Standard ($750) is the complete six-week programme. Premium ($1,200) runs for eight weeks and adds more sessions, deeper trade reviews, a written development plan and extended support. Elite ($2,000) is the longest engagement, with intensive feedback, ongoing performance reviews and priority access.",
  },
  {
    q: "Which private tier should I choose?",
    a: "Choose based on how much time and support you want, not on the results you hope for. If you're unsure, apply and choose \"Not sure — advise me\". I'll recommend the tier that fits where you are.",
  },
  {
    q: "Does private mentorship mean better results?",
    a: "Not necessarily, and neither does a higher tier. The difference is the delivery: more time, individual attention and access. None of the programmes guarantees better trading performance.",
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
    q: "What is your refund policy?",
    a: "All mentorship fees are non-refundable once paid, for The Liquidity Room and every private tier. If you're unsure which programme suits you, ask before paying. The only exception is if we can't deliver sessions you've paid for.",
    link: { href: "/refund-policy", label: "Read the full Refund Policy" },
  },
  {
    q: "What happens after I apply or enquire?",
    a: "I'll reply on Telegram or email with the next steps, including dates and payment details. For private mentorship, I'll review your application first to make sure the programme is the right fit.",
  },
];

/* ── APPLICATION FORM (private) ──────────────────────────────────────────── */

export const applicationFields = [
  {
    id: "programme",
    label: "Which programme are you interested in?",
    type: "select",
    required: true,
    options: ["Standard 1-on-1 Mentorship ($750)", "Premium Private Mentorship ($1,200)", "Elite Extended Coaching ($2,000)", "Not sure — advise me"],
  },
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
