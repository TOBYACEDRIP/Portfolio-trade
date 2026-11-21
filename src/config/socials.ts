/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SOCIAL LINKS — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 *  No usernames or URLs are invented. A platform with `url: null` is shown as
 *  "Link coming soon" (not clickable) until its real profile URL is added here.
 *
 *  Telegram: set `telegramUsername` (without "@") — the CTA then opens a direct
 *  conversation at https://t.me/<username>.
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

/** PLACEHOLDER — your Telegram username without "@", e.g. "thetobyace". */
export const telegramUsername = "";

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
    url: null, // PLACEHOLDER — e.g. "https://www.youtube.com/@yourhandle"
  },
  {
    platform: "x",
    label: "X",
    description: "Market observations and chart notes as price develops.",
    url: null, // PLACEHOLDER
  },
  {
    platform: "instagram",
    label: "Instagram",
    description: "Short-form education and behind-the-charts content.",
    url: null, // PLACEHOLDER
  },
  {
    platform: "tiktok",
    label: "TikTok",
    description: "Concise breakdowns of individual trading concepts.",
    url: null, // PLACEHOLDER
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    description: "Professional profile, collaborations and partnerships.",
    url: null, // PLACEHOLDER
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
