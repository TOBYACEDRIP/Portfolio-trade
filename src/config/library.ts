/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  TRADING LIBRARY — curated YouTube lessons
 * ─────────────────────────────────────────────────────────────────────────────
 *  Each lesson is ONE object in `videos` below. To edit a lesson:
 *
 *    url        — REPLACE with the YouTube video link (currently your channel)
 *    thumbnail  — REPLACE the image file in /public/images/library/ (1280×720),
 *                 or delete this line and add `youtubeId` to use YouTube's own thumbnail
 *    title / description / duration — edit freely
 *
 *  To add more lessons, copy any entry and change it. Either form works:
 *
 *    { url: "https://www.youtube.com/watch?v=abc123", youtubeId: "abc123", ... }
 *    { url: "https://www.youtube.com/watch?v=abc123", thumbnail: "/images/library/my-image.jpg", ... }
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { getSocial } from "./socials";

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
  title: string;
  description: string;
  category: LibraryCategoryId;
  /** Where the card links to — a YouTube video (or channel) URL. */
  url: string;
  /** Image in /public, e.g. "/images/library/liquidity.jpg". */
  thumbnail?: string;
  /** YouTube video ID — used for the thumbnail when `thumbnail` isn't set. */
  youtubeId?: string;
  duration?: string;
  featured?: boolean;
};

/** REPLACE — demo lessons link to the YouTube channel until real video links are added. */
const channel = getSocial("youtube").url ?? "https://www.youtube.com";

export const videos: LibraryVideo[] = [
  {
    title: "Understanding Market Structure",
    description: "Swing highs and lows, breaks of structure and how to tell a real shift from noise.",
    category: "market-structure",
    url: channel, // REPLACE with the video link
    thumbnail: "/images/library/market-structure.jpg", // REPLACE the image file
    featured: true,
  },
  {
    title: "Liquidity Explained",
    description: "Buy-side and sell-side liquidity, sweeps, inducement and the draw on liquidity.",
    category: "liquidity",
    url: channel, // REPLACE
    thumbnail: "/images/library/liquidity.jpg", // REPLACE
    featured: true,
  },
  {
    title: "Selecting Points of Interest",
    description: "Order blocks, fair value gaps and breakers — and how to grade them by context.",
    category: "points-of-interest",
    url: channel, // REPLACE
    thumbnail: "/images/library/points-of-interest.jpg", // REPLACE
    featured: true,
  },
  {
    title: "The Entry Model, Step by Step",
    description: "From liquidity sweep to market structure shift, displacement and a refined entry.",
    category: "execution",
    url: channel, // REPLACE
    thumbnail: "/images/library/execution.jpg", // REPLACE
  },
  {
    title: "Fundamentals for Technical Traders",
    description: "Interest rates, central banks and economic releases as context for the technical model.",
    category: "fundamentals",
    url: channel, // REPLACE
    thumbnail: "/images/library/fundamentals.jpg", // REPLACE
  },
  {
    title: "Trading Psychology Essentials",
    description: "Thinking in probabilities, accepting risk and avoiding overtrading.",
    category: "psychology",
    url: channel, // REPLACE
    thumbnail: "/images/library/psychology.jpg", // REPLACE
  },
  {
    title: "Risk Management Basics",
    description: "Position sizing, risk-to-reward and protecting capital through drawdowns.",
    category: "risk",
    url: channel, // REPLACE
    thumbnail: "/images/library/risk.jpg", // REPLACE
  },
];

export function getCategory(id: LibraryCategoryId) {
  return libraryCategories.find((c) => c.id === id)!;
}

export const youtubeThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
