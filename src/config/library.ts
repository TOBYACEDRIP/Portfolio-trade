/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  TRADING LIBRARY — curated YouTube lessons
 * ─────────────────────────────────────────────────────────────────────────────
 *  To add a video, add ONE object to `videos` below. Nothing else to edit.
 *
 *  {
 *    youtubeId: "abc123XYZ",          // from youtube.com/watch?v=abc123XYZ
 *    title: "Order Blocks — what makes one valid",
 *    description: "Short summary of what the video covers.",
 *    category: "points-of-interest",  // an id from libraryCategories
 *    duration: "8:42",                // optional
 *    featured: true,                  // optional — shown first and on the homepage
 *  }
 *
 *  PLACEHOLDER — no videos have been supplied yet, so each category currently
 *  shows its topic outline with a "videos coming soon" note.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const libraryCategories = [
  {
    id: "market-structure",
    label: "Market Structure",
    summary: "Reading order flow through swing highs, swing lows and shifts in delivery.",
    topics: ["Swing highs and lows", "Higher highs and lower lows", "Break of Structure", "Change of Character", "Market Structure Shift", "Internal and external structure"],
  },
  {
    id: "liquidity",
    label: "Liquidity",
    summary: "Where resting orders sit, and why price is drawn towards them.",
    topics: ["Buy-side liquidity", "Sell-side liquidity", "Equal highs", "Equal lows", "Liquidity sweeps", "Inducement", "Previous daily highs and lows", "Previous weekly highs and lows", "Draw on liquidity"],
  },
  {
    id: "points-of-interest",
    label: "Points of Interest",
    summary: "Identifying and grading the locations where price has a reason to react.",
    topics: ["Order Blocks", "Fair Value Gaps", "Breakers", "Mitigation", "POI selection", "POI quality"],
  },
  {
    id: "execution",
    label: "Trading Execution",
    summary: "Turning a confirmed narrative into a well-defined trade.",
    topics: ["Entry models", "Displacement", "CISD", "Confirmation", "Stop-loss placement", "Trade management"],
  },
  {
    id: "fundamentals",
    label: "Fundamental Analysis",
    summary: "The macro context that gives technical analysis its weight.",
    topics: ["Interest rates", "Central bank decisions", "Inflation", "Employment data", "Currency strength", "Economic releases", "Macroeconomic context"],
  },
  {
    id: "psychology",
    label: "Trading Psychology",
    summary: "Thinking in probabilities and executing with discipline.",
    topics: ["Probability", "Risk acceptance", "Emotional discipline", "Overtrading", "Patience", "Trading consistency", "Decision-making"],
  },
  {
    id: "risk",
    label: "Risk Management",
    summary: "Protecting capital so the process has time to work.",
    topics: ["Position sizing", "Risk-to-reward", "Drawdown management", "Trade frequency", "Capital preservation"],
  },
] as const;

export type LibraryCategoryId = (typeof libraryCategories)[number]["id"];

export type LibraryVideo = {
  youtubeId: string;
  title: string;
  description: string;
  category: LibraryCategoryId;
  duration?: string;
  featured?: boolean;
};

export const videos: LibraryVideo[] = [
  // Add real videos here — see the example at the top of this file.
];

export function getCategory(id: LibraryCategoryId) {
  return libraryCategories.find((c) => c.id === id)!;
}

export const youtubeThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const youtubeUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
