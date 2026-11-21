/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  MENTORSHIP — The Liquidity Room
 * ─────────────────────────────────────────────────────────────────────────────
 *  An extension of the educational identity, not a signals service.
 *  No testimonials, student numbers or performance figures — add them only if
 *  they are real and you have permission to publish them.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { mailto, telegramUsername } from "./socials";

export const mentorship = {
  name: "The Liquidity Room",
  tagline: "Structured trading education. Not signals.",
  lede:
    "The Liquidity Room is a structured trading education programme built around the TOBYACE Model™ — so you understand why a trade exists, not just where to click.",
  overview: [
    "The programme teaches the model in sequence: market narrative, structure, liquidity, POI logic, execution, risk and psychology. The aim is independent analysis — building your own narrative and defining your own risk.",
    "You won't receive signals or trades to copy, and no results are promised.",
  ],
  /** PLACEHOLDER — e.g. "Enquiries open". Leave "" to hide. */
  status: "",
};

export const curriculum = [
  { number: "01", title: "Market Narrative", topics: ["Where are we in price?", "What has happened?", "Where are we drawing into?", "Confirmation & invalidation"] },
  { number: "02", title: "Market Structure", topics: ["Swing structure", "BOS, CHoCH & MSS", "Internal vs external", "Dealing ranges"] },
  { number: "03", title: "Liquidity", topics: ["Buy-side & sell-side", "Equal highs & lows", "Sweeps & inducement", "Draw on liquidity"] },
  { number: "04", title: "POI Logic", topics: ["Order blocks", "Fair value gaps", "Breakers", "Grading POIs"] },
  { number: "05", title: "Execution", topics: ["Entry models", "Displacement & CISD", "Stops & targets", "Trade management"] },
  { number: "06", title: "Risk & Psychology", topics: ["Position sizing", "Drawdown rules", "Patience", "Review & journaling"] },
];

export const principles = [
  { title: "Understanding over imitation", body: "Every concept is taught with the reasoning behind it." },
  { title: "Process before outcomes", body: "Trades are judged on whether they followed the model, not whether they won." },
  { title: "Risk is the first lesson", body: "Sizing and invalidation come before entries." },
  { title: "Honest about uncertainty", body: "Losses are studied as carefully as wins. Nothing is guaranteed." },
];

export const audience = {
  forYou: [
    "You want to understand structure and liquidity properly, not memorise patterns.",
    "You're willing to journal, review and be patient while skills develop.",
    "You want a repeatable process you can apply independently.",
  ],
  notForYou: [
    "You're looking for signals or trades to copy.",
    "You expect guaranteed returns or a shortcut.",
    "You're trading money you can't afford to lose.",
  ],
};

export const mentorshipEnquiry = {
  telegram: telegramUsername ? `https://t.me/${telegramUsername}` : null,
  email: mailto("The Liquidity Room — Enquiry"),
};
