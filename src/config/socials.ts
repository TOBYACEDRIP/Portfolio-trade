/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SOCIAL LINKS — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 *  REPLACE — every profile below uses the demo handle "thetobyace". Change the
 *  `url` (and `handle`) of each platform to your real profile. Setting a `url`
 *  to null hides the link and shows that card as "coming soon".
 *
 *  Telegram: set `telegramUsername` (without "@") — the "Connect on Telegram"
 *  button opens a direct conversation at https://t.me/<username>.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { contact } from "./site";

export type SocialPlatform = "telegram" | "youtube" | "instagram" | "x" | "tiktok" | "linkedin" | "email";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  description: string;
  /** Full profile URL. `null` = not supplied yet (PLACEHOLDER). */
  url: string | null;
  /** Visible handle, e.g. "@thetobyace". Optional. */
  handle?: string;
};

/** REPLACE — your Telegram username without "@". */
export const telegramUsername = "thetobyace";

export const socials: SocialLink[] = [
  {
    platform: "telegram",
    label: "Telegram",
    description: "The most direct way to reach me — questions, enquiries and updates.",
    url: telegramUsername ? `https://t.me/${telegramUsername}` : null,
    handle: telegramUsername ? `@${telegramUsername}` : undefined,
  },
  {
    platform: "youtube",
    label: "YouTube",
    description: "Educational videos on structure, liquidity, execution and psychology.",
    url: "https://www.youtube.com/@thetobyace", // REPLACE
    handle: "@thetobyace",
  },
  {
    platform: "x",
    label: "X",
    description: "Market observations and chart notes as price develops.",
    url: "https://x.com/thetobyace", // REPLACE
    handle: "@thetobyace",
  },
  {
    platform: "instagram",
    label: "Instagram",
    description: "Short-form education and behind-the-charts content.",
    url: "https://www.instagram.com/thetobyace", // REPLACE
    handle: "@thetobyace",
  },
  {
    platform: "tiktok",
    label: "TikTok",
    description: "Concise breakdowns of individual trading concepts.",
    url: "https://www.tiktok.com/@thetobyace", // REPLACE
    handle: "@thetobyace",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    description: "Professional profile, collaborations and partnerships.",
    url: "https://www.linkedin.com/in/thetobyace", // REPLACE
    handle: "thetobyace",
  },
  {
    platform: "email",
    label: "Email",
    description: "Collaborations, partnerships and general enquiries.",
    url: `mailto:${contact.email}`,
    handle: contact.email,
  },
];

export function getSocial(platform: SocialPlatform): SocialLink {
  const link = socials.find((s) => s.platform === platform);
  if (!link) throw new Error(`Social platform "${platform}" is not configured`);
  return link;
}

/** Profiles with a confirmed URL, excluding email — used for JSON-LD `sameAs`. */
export const liveProfiles = socials.filter((s) => s.platform !== "email" && s.url);

export function mailto(subject?: string): string {
  return subject ? `mailto:${contact.email}?subject=${encodeURIComponent(subject)}` : `mailto:${contact.email}`;
}
