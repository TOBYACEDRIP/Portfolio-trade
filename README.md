# TheTobyAce — thetobyace.com

The personal website of Toby, known as **TheTobyAce**: Forex trader, trading educator and mentor, entrepreneur, content creator and software developer.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS 4**, **Framer Motion** and **MDX**.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build (every page is statically generated) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run placeholders` | Lists every placeholder that still needs real information |

---

## Before launch: replace the placeholders

Nothing on the site is invented. Where real information was missing, there is a clearly marked `PLACEHOLDER` in the config. Run `npm run placeholders` to list them all. The main ones:

| What | Where |
| --- | --- |
| Social profile URLs (currently assume the handle `thetobyace`). Set `verified: true` once confirmed | `src/config/socials.ts` |
| Email addresses | `src/config/site.ts` → `contact` |
| Professional portrait (a monogram shows until you add one) | `src/config/site.ts` → `person.portrait` |
| Location, full name (optional) | `src/config/site.ts` → `person` |
| X handle for Twitter cards | `src/config/site.ts` → `seoDefaults.twitterHandle` |
| Featured YouTube videos | `src/config/work.ts` → `featuredVideos` |
| Mentorship intake status and class format | `src/config/mentorship.ts` |
| Optional personal details in the About story | `src/config/about.ts` |

The three starter articles in `src/content/insights` are educational drafts written in the brand voice. Review them and edit them to match your own views before publishing.

---

## Editing content

All personal information and copy lives in **`src/config/`**, separate from the UI. You shouldn't need to touch a component to update the site.

```
src/config/
  site.ts        identity, SEO defaults, navigation, contact, risk disclaimer
  socials.ts     every social link on the site (one list)
  about.ts       /about story, philosophy, facts
  method.ts      /method: the TOBYACE Method™ framework and glossary
  work.ts        /work items and featured YouTube videos
  mentorship.ts  /mentorship: The Liquidity Room
  insights.ts    article categories
```

### Add a profile photo

1. Put the image in `public/images/`, e.g. `public/images/toby.jpg` (portrait orientation, at least 1200px tall).
2. Set `portrait: "/images/toby.jpg"` in `src/config/site.ts`.

It's used on the home page, the About page and in structured data, and is optimised automatically.

### Add an article

Create **one file** at `src/content/insights/my-article-slug.mdx`. The filename becomes the URL (`/insights/my-article-slug`).

```mdx
---
title: "Your Article Title"
description: "One or two sentences. Used for SEO and social previews."
date: "2026-12-01"
category: "market-structure"   # an id from src/config/insights.ts
tags: ["Liquidity", "Prop Firms"]
# updated: "2026-12-10"        # optional
# draft: true                  # optional: hidden in production builds
---

Your content in Markdown. `## Headings` build the table of contents automatically.

<Callout title="Key idea">Callouts are available in every article.</Callout>
```

Reading time, the article page, its Open Graph image, sitemap entry, related articles, previous/next links and the homepage "Featured trading content" card all update automatically.

Categories: `forex`, `market-structure`, `liquidity`, `psychology`, `prop-firms`, `entrepreneurship`, `personal-development`, `technology`. Add more in `src/config/insights.ts`.

### Add a piece of work

Add an object to `work` in `src/config/work.ts`:

```ts
{
  id: "gbpusd-breakdown",
  title: "GBPUSD — sweep into a daily FVG",
  description: "Full breakdown from weekly bias to execution.",
  category: "breakdowns",            // breakdowns | education | analysis | collaborations | projects
  href: "https://www.youtube.com/watch?v=…",
  image: "/images/work/gbpusd.jpg",  // optional: a designed cover is generated if omitted
  meta: "YouTube",
}
```

### Add a featured video

Add `{ youtubeId, title, category }` to `featuredVideos` in `src/config/work.ts`. The first one is shown on the homepage YouTube card, and all of them appear on `/work`.

---

## Project structure

```
src/
  app/                    routes (server components by default)
    page.tsx              Bento homepage
    about/ method/ work/ insights/ mentorship/ contact/
    insights/[slug]/      MDX article pages + per-article OG image
    opengraph-image.tsx   default social card (each section has its own)
    icon.tsx apple-icon.tsx manifest.ts icons/[size]/
    sitemap.ts robots.ts not-found.tsx error.tsx global-error.tsx loading.tsx
  components/
    layout/               SiteHeader (responsive, accessible mobile menu), SiteFooter
    ui/                   BentoCard, primitives, Reveal, FilterBar, Graphics, CtaBanner…
    insights/             MDX components, article list, reading progress
    work/                 filterable work grid
    icons/SocialIcon.tsx  platform marks (Simple Icons, CC0)
  config/                 all site content (see above)
  content/insights/       MDX articles
  lib/                    insights loader, SEO helpers, OG image renderer
  assets/fonts/           Instrument Serif (SIL OFL) for OG images
```

Client components are used only where interaction needs them: the header/mobile menu, entrance animations, filters, the copy-email button and the reading progress bar.

## Design system

Tokens are defined in `src/app/globals.css` (`@theme`) and available as Tailwind utilities:

| Token | Value | Utility |
| --- | --- | --- |
| Background | `#0B0B0B` | `bg-bg` |
| Surface | `#151515` | `bg-surface` |
| Card | `#1B1B1B` | `bg-card` |
| Accent (champagne gold) | `#C6A66B` | `text-gold`, `border-gold` |
| Primary text | `#F5F5F5` | `text-fg` |
| Secondary text | `#A0A0A0` | `text-muted` |

Type: **Instrument Serif** (display), **Inter** (body), **JetBrains Mono** (labels), all loaded with `next/font`.

## SEO

- Title: *TheTobyAce | Trader, Entrepreneur & Creator*. Each page uses the `%s | TheTobyAce` template.
- A canonical URL, Open Graph and X/Twitter card metadata on every page, built by `pageMetadata()` in `src/lib/seo.ts`.
- Generated Open Graph images for the site, each section and each article.
- JSON-LD: `Person` and `WebSite` site-wide; `Article` and `BreadcrumbList` on articles.
- `sitemap.xml` and `robots.txt` are generated from config and content.
- To verify with Google Search Console, set `seoDefaults.googleVerification`.

## Deployment

Designed for Vercel (Vercel Analytics and Speed Insights are included and only activate there).

1. Import the repository in Vercel.
2. Add the domains `thetobyace.com` and `www.thetobyace.com`. `www` redirects to the apex (`next.config.ts`).
3. Deploy. No environment variables are required.

Legacy routes from the original template (`/blog`, `/projects`) redirect permanently to `/insights` and `/work`.

## Credits

Originally based on [Vighnesh-Gaddam/portfolio](https://github.com/Vighnesh-Gaddam/portfolio) (MIT), and since redesigned and rebuilt. Platform icons from [Simple Icons](https://simpleicons.org) (CC0). Instrument Serif by Rodrigo Fuenzalida & Jordan Egstad (SIL Open Font License).
