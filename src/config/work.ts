/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  WORK & FEATURED CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Add an item to `work` and it appears on /work (and on the homepage when
 *  `featured: true`). Add a YouTube video ID to `featuredVideos` and it appears
 *  on the homepage YouTube card and the /work page.
 *
 *  Images: put files in /public/images/work and reference them as
 *  "/images/work/my-file.jpg". When `image` is omitted a designed typographic
 *  cover is generated automatically — no stock imagery needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { getSocial } from "./socials";

export const workCategories = [
  { id: "breakdowns", label: "Trading Breakdowns" },
  { id: "education", label: "Education & Videos" },
  { id: "analysis", label: "Market Analysis" },
  { id: "collaborations", label: "Collaborations" },
  { id: "projects", label: "Projects" },
] as const;

export type WorkCategory = (typeof workCategories)[number]["id"];

export type WorkItem = {
  id: string;
  title: string;
  description: string;
  category: WorkCategory;
  /** Internal path ("/method") or external URL ("https://…"). */
  href: string;
  /** Optional image in /public, e.g. "/images/work/eurusd-breakdown.jpg". */
  image?: string;
  imageAlt?: string;
  /** Optional short label such as "YouTube", "Article", "Case study". */
  meta?: string;
  featured?: boolean;
};

const youtube = getSocial("youtube");
const x = getSocial("x");

export const work: WorkItem[] = [
  {
    id: "the-tobyace-method",
    title: "The TOBYACE Method™",
    description:
      "The complete framework behind my analysis — top-down bias, POI logic, a confirmation-based entry model and the refinements that protect capital.",
    category: "education",
    href: "/method",
    meta: "Framework",
    featured: true,
  },
  {
    id: "youtube-breakdowns",
    title: "Trade breakdowns on YouTube",
    description:
      "Full walkthroughs of setups from higher-timeframe context down to execution — including the trades that didn't work.",
    category: "breakdowns",
    href: youtube.href,
    meta: "YouTube",
    featured: true,
  },
  {
    id: "market-structure-article",
    title: "Market structure, explained properly",
    description:
      "A written guide to reading swing structure, dealing ranges and the difference between a real shift and noise.",
    category: "analysis",
    href: "/insights/market-structure-explained",
    meta: "Article",
  },
  {
    id: "liquidity-article",
    title: "Liquidity: why price goes where it goes",
    description:
      "How resting orders shape price delivery, and how to use liquidity to frame both entries and targets.",
    category: "analysis",
    href: "/insights/understanding-liquidity",
    meta: "Article",
  },
  {
    id: "market-commentary",
    title: "Market commentary on X",
    description: "Shorter chart notes and thoughts on the market as it develops.",
    category: "analysis",
    href: x.href,
    meta: "X",
  },
  {
    id: "the-liquidity-room",
    title: "The Liquidity Room",
    description:
      "Structured trading education built around the TOBYACE Method — a curriculum, not a signals service.",
    category: "education",
    href: "/mentorship",
    meta: "Mentorship",
    featured: true,
  },
  {
    id: "thetobyace-com",
    title: "thetobyace.com",
    description:
      "This website — designed as a home for my writing, education and work. Built with Next.js, TypeScript and MDX.",
    category: "projects",
    href: "/",
    meta: "Web",
  },
  // ── Collaborations ──────────────────────────────────────────────
  // No collaborations are listed yet. Add real ones like this:
  // {
  //   id: "brand-x-collab",
  //   title: "Collaboration with Brand X",
  //   description: "What you made together and why it mattered.",
  //   category: "collaborations",
  //   href: "https://…",
  //   image: "/images/work/brand-x.jpg",
  //   meta: "Partnership",
  // },
];

export type FeaturedVideo = {
  /** The ID from a YouTube URL: youtube.com/watch?v=<ID> */
  youtubeId: string;
  title: string;
  category: WorkCategory;
  description?: string;
};

/**
 * PLACEHOLDER — add real YouTube videos here. While the list is empty the site
 * shows a link to the channel instead of individual videos.
 *
 * Example:
 * { youtubeId: "dQw4w9WgXcQ", title: "GBPUSD breakdown — sweep into a daily FVG", category: "breakdowns" }
 */
export const featuredVideos: FeaturedVideo[] = [];
