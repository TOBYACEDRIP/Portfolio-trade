/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  MENTORSHIP — The Liquidity Room
 * ─────────────────────────────────────────────────────────────────────────────
 *  Positioned as structured education, not a signals service.
 *  No testimonials, student results or performance figures are included —
 *  only add them if they are real and you have permission to publish them.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { contact } from "./site";
import { getSocial } from "./socials";

export const mentorship = {
  name: "The Liquidity Room",
  tagline: "Structured trading education. Not signals.",
  lede:
    "The Liquidity Room is where I teach the TOBYACE Method from first principles — so you understand why a trade exists, not just where to click.",
  overview: [
    "Most trading education either overwhelms people with concepts or hands them trades to copy. Neither builds a trader. The Liquidity Room is designed to do the opposite: a clear curriculum, taught in order, with live application so the theory turns into judgement.",
    "You won't receive signals or copy-trade alerts. You'll learn to build your own analysis, define your own risk and review your own decisions.",
  ],
  /** PLACEHOLDER — e.g. "Applications open", "Next intake: March". Leave "" to hide the badge. */
  status: "",
} as const;

export const teachingPhilosophy = [
  {
    title: "Understanding over imitation",
    body: "Every concept is taught with the reasoning behind it. If you can't explain why a POI is valid, you're not ready to trade it.",
  },
  {
    title: "Process before outcomes",
    body: "Individual trades are judged on whether they followed the plan, not on whether they won. That's how consistency is built.",
  },
  {
    title: "Risk is the first lesson",
    body: "Position sizing, invalidation and drawdown management come before entries — not after the first blown account.",
  },
  {
    title: "Honest about uncertainty",
    body: "No method wins every trade. We study losses as carefully as wins, and nobody is promised results.",
  },
];

export type CurriculumModule = {
  number: string;
  title: string;
  description: string;
  topics: string[];
};

export const curriculum: CurriculumModule[] = [
  {
    number: "01",
    title: "Foundations",
    description: "How the Forex market works and how to read a price chart without noise.",
    topics: ["Sessions & market hours", "Candles and timeframes", "Swing points", "Platform setup & journaling"],
  },
  {
    number: "02",
    title: "Market Structure",
    description: "Reading order flow through highs, lows and dealing ranges.",
    topics: ["Bullish & bearish structure", "Internal vs external structure", "Premium & discount", "Market Structure Shifts"],
  },
  {
    number: "03",
    title: "Liquidity",
    description: "Where resting orders sit and why price is drawn to them.",
    topics: ["Buy-side & sell-side liquidity", "Equal highs & lows", "Liquidity sweeps", "Draw on liquidity"],
  },
  {
    number: "04",
    title: "Points of Interest",
    description: "Identifying the areas where price has a structural reason to react.",
    topics: ["Order blocks", "Fair value gaps", "Breakers", "Grading POIs by context"],
  },
  {
    number: "05",
    title: "The Entry Model",
    description: "Waiting for confirmation before committing risk.",
    topics: ["Sweep → shift → displacement", "Change in State of Delivery", "Lower-timeframe refinement", "Entry, stop & target placement"],
  },
  {
    number: "06",
    title: "Risk & Trade Management",
    description: "Protecting capital so the process has time to work.",
    topics: ["Position sizing", "Risk per trade", "Managing open positions", "Drawdown & recovery rules"],
  },
  {
    number: "07",
    title: "Psychology & Review",
    description: "Building the habits that keep you executing the plan.",
    topics: ["Pre-session routine", "Journaling & review", "Handling losing streaks", "Prop firm rules & discipline"],
  },
];

/**
 * PLACEHOLDER — confirm the format of your classes. These describe a typical
 * structure; adjust the wording to match how The Liquidity Room actually runs.
 */
export const classStructure = [
  {
    title: "Structured lessons",
    body: "The curriculum is taught module by module, so each concept builds on the last.",
  },
  {
    title: "Live market sessions",
    body: "Analysis applied to the live market — building bias, marking POIs and waiting for the model.",
  },
  {
    title: "Review & Q&A",
    body: "Trades and journals are reviewed against the process, with time for questions.",
  },
  {
    title: "Community",
    body: "A focused space to discuss ideas with other students, without the noise of signal groups.",
  },
];

export const audience = {
  forYou: [
    "You want to understand market structure and liquidity properly, not just memorise patterns.",
    "You're willing to journal, review and be patient while skills develop.",
    "You want a repeatable process you can apply on your own.",
    "You're preparing for — or already trading — a prop firm challenge and want more discipline.",
  ],
  notForYou: [
    "You're looking for signals or trades to copy.",
    "You expect guaranteed returns or a fast way to make money.",
    "You're trading with money you can't afford to lose.",
  ],
};

const telegram = getSocial("telegram");

export const mentorshipEnquiry = {
  title: "Apply or ask a question",
  body: "Tell me a little about where you are with trading and what you're looking for. I'll reply with details on the next intake and whether it's a good fit.",
  telegram: telegram.href,
  email: `mailto:${contact.email}?subject=${encodeURIComponent("The Liquidity Room — Enquiry")}`,
};
