/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SOCIAL LINKS — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every social icon, card and footer link on the site reads from this list.
 *  To change a profile URL, change it here — nowhere else.
 *
 *  `verified: false` marks a PLACEHOLDER handle that has not been confirmed.
 *  Set it to `true` once the URL is correct. Unverified links still work, they
 *  just point to the assumed handle "thetobyace" on each platform.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { contact } from "./site";

export type SocialPlatform =
  | "x"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "telegram"
  | "linkedin"
  | "email";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  handle: string;
  href: string;
  /** What people will find there — shown on the contact page and social cards. */
  description: string;
  verified: boolean;
};

export const socials: SocialLink[] = [
  {
    platform: "youtube",
    label: "YouTube",
    handle: "@thetobyace",
    href: "https://www.youtube.com/@thetobyace", // PLACEHOLDER
    description: "Trade breakdowns, market analysis and long-form lessons.",
    verified: false,
  },
  {
    platform: "x",
    label: "X",
    handle: "@thetobyace",
    href: "https://x.com/thetobyace", // PLACEHOLDER
    description: "Market thoughts, charts and short commentary.",
    verified: false,
  },
  {
    platform: "instagram",
    label: "Instagram",
    handle: "@thetobyace",
    href: "https://www.instagram.com/thetobyace", // PLACEHOLDER
    description: "Behind the scenes, lifestyle and short-form education.",
    verified: false,
  },
  {
    platform: "tiktok",
    label: "TikTok",
    handle: "@thetobyace",
    href: "https://www.tiktok.com/@thetobyace", // PLACEHOLDER
    description: "Short-form trading concepts and clips.",
    verified: false,
  },
  {
    platform: "telegram",
    label: "Telegram",
    handle: "@thetobyace",
    href: "https://t.me/thetobyace", // PLACEHOLDER
    description: "Direct line for mentorship enquiries and community updates.",
    verified: false,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    handle: "thetobyace",
    href: "https://www.linkedin.com/in/thetobyace", // PLACEHOLDER
    description: "Professional profile, business and partnerships.",
    verified: false,
  },
  {
    platform: "email",
    label: "Email",
    handle: contact.email,
    href: `mailto:${contact.email}`,
    description: "Business, collaboration and press enquiries.",
    verified: false,
  },
];

export function getSocial(platform: SocialPlatform): SocialLink {
  const link = socials.find((s) => s.platform === platform);
  if (!link) throw new Error(`Social platform "${platform}" is not configured`);
  return link;
}

/** Profiles only (no email) — used for structured data `sameAs`. */
export const socialProfiles = socials.filter((s) => s.platform !== "email");
