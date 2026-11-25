# TheTobyAce — thetobyace.com

The digital home of **TheTobyAce**: Forex trader, technical analyst and trading educator, and the author of the **TOBYACE Model™**.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS 4**, **Motion for React** (`framer-motion`) and **MDX**. Every page is statically generated.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm run placeholders` | Lists everything that still needs real information |

---

## Before launch: replace the demo content

The site ships with **demo content you can swap in VS Code**. Everything to change is marked `REPLACE` or `PLACEHOLDER`. Run `npm run placeholders` to list every spot.

| What | Where | How to replace |
| --- | --- | --- |
| Portrait photo | `public/images/portrait.jpg` | Overwrite the file with your photo, keeping the same name (portrait orientation, ~1200×1500) |
| Telegram username | `src/config/socials.ts` → `telegramUsername` | Demo: `thetobyace` |
| YouTube, X, Instagram, TikTok, LinkedIn | `src/config/socials.ts` → each `url` and `handle` | Demo: `thetobyace` on each platform |
| Trading Library lessons | `src/config/library.ts` → `videos` | Change each `url` to the real video link (they currently open the channel) |
| Lesson thumbnails | `public/images/library/*.jpg` | Overwrite with your own 1280×720 images, or use `youtubeId` for YouTube's thumbnail |
| X handle for share cards | `src/config/site.ts` → `seoDefaults.twitterHandle` | Demo: `@thetobyace` |
| Chart breakdowns | `src/content/insights/*.mdx` | Add your own (see below) |
| Milestones (optional) | `src/config/experience.ts` → `milestones` | The timeline section is hidden until you add some |
| Mentorship intake status (optional) | `src/config/mentorship.ts` → `status` | The badge is hidden until set |

Setting any social `url` to `null` hides that link and shows the card as "coming soon". Setting `portrait` to `null` shows the "TA" monogram instead of a photo.

Email is live: **thetobyace@gmail.com**.

The three starter articles in `src/content/insights` are educational drafts. Review them and edit to match your own views.

---

## Editing content

All copy and personal information lives in **`src/config/`**, separate from the UI.

```
src/config/
  site.ts         identity, SEO, navigation, email, risk disclaimer
  socials.ts      every social link and the Telegram username (one list)
  model.ts        TOBYACE Model™: Market Narrative + the four pillars
  library.ts      Trading Library categories and videos
  experience.ts   /experience editorial content and milestones
  mentorship.ts   The Liquidity Room
  insights.ts     Market Insights categories
```

### Replace the portrait

Overwrite `public/images/portrait.jpg` with your photo (same filename). Or add a new file and point `portrait` in `src/config/site.ts` at it. It's used on the homepage, the Experience page and in structured data.

### Add a social profile or Telegram

```ts
// src/config/socials.ts
export const telegramUsername = "yourusername";            // opens a direct chat: t.me/yourusername
{ platform: "youtube", url: "https://www.youtube.com/@yourhandle", handle: "@yourhandle", ... }
```

### Edit or add a Trading Library lesson

Each lesson is one object in `videos` in `src/config/library.ts`:

```ts
{
  title: "Order Blocks: what makes one valid",
  description: "What the lesson covers.",
  category: "points-of-interest",   // market-structure | liquidity | points-of-interest | execution | fundamentals | psychology | risk
  url: "https://www.youtube.com/watch?v=abc123XYZ",
  thumbnail: "/images/library/order-blocks.jpg",   // your own image, or…
  // youtubeId: "abc123XYZ",                       // …use YouTube's thumbnail instead
  duration: "8:42",                 // optional
  featured: true,                   // optional: shown first and on the homepage
}
```

### Add a market analysis (chart breakdown)

1. Put the annotated chart in `public/images/insights/`.
2. Create **one file**, `src/content/insights/eurusd-weekly-outlook.mdx`. The filename becomes the URL.

```mdx
---
title: "EURUSD — sweep of weekly lows into an H4 FVG"
description: "One or two sentences for SEO and social previews."
date: "2026-12-01"
type: "analysis"
category: "forex-analysis"     # forex-analysis | technical-analysis | market-structure | liquidity | fundamental-context | psychology
instrument: "EURUSD"
timeframe: "H4"
bias: "bullish"                # bullish | bearish | neutral — shown as an *expectation*
chart: "/images/insights/eurusd-h4.png"
chartAlt: "EURUSD H4 chart annotated with the sweep, MSS and FVG"
poi: "H4 fair value gap at 1.0820–1.0835"
narrative:
  where: "Daily bullish, price in discount of the H4 dealing range…"
  happened: "Sell-side liquidity below last week's low was taken…"
  draw: "Buy-side liquidity resting above the equal highs at…"
  confirmation: "M15 MSS with displacement away from the FVG…"
  invalidation: "A close below the sweep low at…"
tags: ["EURUSD", "Liquidity"]
---

Your written breakdown. `## Headings` build the table of contents.
```

The narrative is rendered as a structured panel with a clear "directional expectation, not a confirmed trade" notice. Analysis entries are featured first on the homepage, and reading time, the social image, sitemap entry and related posts are all generated automatically.

---

## Legal pages

`/terms`, `/refund-policy`, `/privacy` and `/risk-disclosure` are written in plain Markdown in `src/content/legal/`. Edit the text there and update the `updated:` date at the top. The refund policy is no-refunds (fees are non-refundable, except for sessions that can't be delivered). The governing-law clause is marked `REPLACE`. Have the documents reviewed by a qualified lawyer before relying on them.

## Project structure

```
src/
  app/                       routes: / /model /library /insights /experience /connect /mentorship
  components/
    charts/                  original chart illustrations: HeroChart, NarrativeExplorer,
                             ModelDiagram, PillarVisuals, PriceDivider (illustrative, not market data)
    connect/ConnectHub.tsx   Telegram + email + social platforms
    library/ insights/       video cards, filters, narrative panel, MDX typography
    layout/                  header (accessible mobile menu), footer, wordmark
    ui/                      primitives, BentoCard, TiltCard, Reveal, FilterBar…
  config/                    all content (see above)
  content/insights/          MDX articles and analyses
  lib/                       content loader, SEO helpers, OG image renderer
  assets/fonts/              Plus Jakarta Sans (SIL OFL), used for generated social images
```

## Design system

Defined in `src/app/globals.css` (`@theme`), available as Tailwind utilities:

| Token | Hex | Utility |
| --- | --- | --- |
| Cloud White (canvas) | `#F4F7FA` | `bg-canvas` |
| Pure White (cards) | `#FFFFFF` | `bg-surface`, `.surface` |
| Ice Blue | `#E5F3FC` | `bg-ice`, `.panel-ice` |
| Sky Blue (accent) | `#70C8F5` | `bg-sky` (fills); `text-sky-deep` for accessible text |
| Soft Orange | `#FFDAB8` | `bg-peach` (fills); `text-peach-ink` for accessible text |
| Midnight Navy | `#101D36` | `text-navy`, `.panel-navy` |

Type: **Plus Jakarta Sans** (headings), **Inter** (body), **JetBrains Mono** (technical labels).

Motion: entrance reveals, a pointer tilt on cards (mouse only), animated chart illustrations, route transitions and a self-drawing price divider. All of it respects `prefers-reduced-motion`.

## SEO

- Title *TheTobyAce | Forex Trader & Technical Analyst*, with page-specific titles and descriptions
- Canonical URLs, Open Graph and X cards, and generated social images for every page and article
- JSON-LD: `Person` and `WebSite` site-wide; `Article`/`AnalysisNewsArticle` and `BreadcrumbList` on insights
- `sitemap.xml`, `robots.txt`, web manifest and favicons, all generated

The domain is not connected yet; see Deployment.

## Deployment

1. Import the repository at **vercel.com** (Next.js is auto-detected).
2. Add the domains `thetobyace.com` and `www.thetobyace.com`; `www` redirects to the apex.
3. No environment variables are required.

Old routes redirect permanently: `/method` → `/model`, `/about` → `/experience`, `/work` → `/library`, `/contact` → `/connect`, `/blog` → `/insights`.

## Credits

Originally started from [Vighnesh-Gaddam/portfolio](https://github.com/Vighnesh-Gaddam/portfolio) (MIT); none of its UI remains. Platform icons from [Simple Icons](https://simpleicons.org) (CC0).
