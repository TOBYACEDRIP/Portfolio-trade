/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — TheTobyAce
 * ─────────────────────────────────────────────────────────────────────────────
 *  Identity, SEO, navigation and contact details.
 *  Anything marked `PLACEHOLDER` still needs real information.
 *  Run `npm run placeholders` to list them.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  url: "https://thetobyace.com",
  domain: "thetobyace.com",
  name: "TheTobyAce",
  title: "TheTobyAce | Forex Trader & Technical Analyst",
  titleTemplate: "%s | TheTobyAce",
  description:
    "Explore the trading philosophy, technical analysis, market insights and TOBYACE Model of TheTobyAce. Learn about market structure, liquidity, price delivery and disciplined trading.",
  locale: "en_GB",
  keywords: [
    "TheTobyAce",
    "TOBYACE Model",
    "Forex trader",
    "technical analysis",
    "market structure",
    "liquidity",
    "market narrative",
    "price delivery",
    "trading psychology",
    "trading education",
  ],
  themeColor: "#F4F7FA",
} as const;

export const person = {
  brand: "TheTobyAce",
  /** Short name used in copy. */
  name: "Toby",
  /** PLACEHOLDER — full name for structured data, only if you want it public. */
  fullName: "",
  identity: ["Forex Trader", "Technical Analyst", "Market Structure", "Trading Psychology"],
  jobTitle: "Forex Trader & Technical Analyst",
  /**
   * REPLACE — demo portrait. Swap the file at /public/images/portrait.jpg for your
   * own photo (same filename, portrait orientation, ~1200×1500), or point this at
   * a different file. Set to null to show the "TA" monogram instead.
   */
  portrait: "/images/portrait.jpg" as string | null,
  portraitAlt: "Portrait of TheTobyAce",
} as const;

export type NavItem = { label: string; href: string; description: string };

export const navigation: NavItem[] = [
  { label: "Home", href: "/", description: "Start here." },
  { label: "TOBYACE Model", href: "/model", description: "Market Narrative and the four pillars of the framework." },
  { label: "Trading Library", href: "/library", description: "Curated video lessons by concept." },
  { label: "Market Insights", href: "/insights", description: "Chart breakdowns and market observations." },
  { label: "Experience", href: "/experience", description: "How the approach was developed." },
  { label: "Connect", href: "/connect", description: "Telegram, email and social platforms." },
];

/** Secondary links shown in the footer only. */
export const secondaryNavigation: NavItem[] = [
  { label: "Mentorship", href: "/mentorship", description: "The Liquidity Room and private one-to-one mentorship." },
];

export const contact = {
  email: "thetobyace@gmail.com",
} as const;

export const seoDefaults = {
  /** REPLACE — your X handle including "@" (used in X/Twitter share cards). */
  twitterHandle: "@thetobyace",
  /** Optional Google Search Console verification token. */
  googleVerification: "",
} as const;

export const riskDisclaimer =
  "Trading foreign exchange and leveraged products carries a high level of risk and may not be suitable for everyone. Content on this website is educational and is not financial advice or a recommendation to buy or sell any instrument. Market analysis describes directional expectations, not certainties. Past performance is not indicative of future results.";
