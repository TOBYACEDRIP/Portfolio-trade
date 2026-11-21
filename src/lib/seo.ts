import type { Metadata } from "next";
import { contact, person, seoDefaults, site } from "@/config/site";
import { liveProfiles } from "@/config/socials";

type PageMetaInput = {
  /** Page title — the template appends " | TheTobyAce". Omit for the home page. */
  title?: string;
  description: string;
  /** Path beginning with "/", used for the canonical URL. */
  path: string;
  /** Custom OG image path. Defaults to the route's generated opengraph-image. */
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

const handle = seoDefaults.twitterHandle || undefined;

/**
 * Consistent per-page metadata: canonical URL, Open Graph and X/Twitter cards.
 * OG images come from `opengraph-image.tsx` route files unless `image` is set.
 */
export function pageMetadata(input: PageMetaInput): Metadata {
  const fullTitle = input.title ? site.titleTemplate.replace("%s", input.title) : site.title;
  const images = input.image ? [{ url: input.image, width: 1200, height: 630, alt: fullTitle }] : undefined;

  return {
    title: input.title ? input.title : { absolute: site.title },
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url: input.path,
      siteName: site.name,
      locale: site.locale,
      type: input.type ?? "website",
      ...(images ? { images } : {}),
      ...(input.type === "article"
        ? {
            publishedTime: input.publishedTime,
            modifiedTime: input.modifiedTime ?? input.publishedTime,
            authors: [person.brand],
            tags: input.tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      ...(handle ? { creator: handle } : {}),
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}

/** schema.org Person — rendered once in the root layout. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: person.fullName || person.brand,
    alternateName: person.fullName ? person.brand : undefined,
    url: site.url,
    email: `mailto:${contact.email}`,
    ...(person.portrait ? { image: absoluteUrl(person.portrait) } : {}),
    jobTitle: person.jobTitle,
    description: site.description,
    knowsAbout: [
      "Forex trading",
      "Technical analysis",
      "Market structure",
      "Liquidity",
      "Fundamental analysis",
      "Risk management",
      "Trading psychology",
    ],
    ...(liveProfiles.length ? { sameAs: liveProfiles.map((s) => s.url) } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}/#person` },
    inLanguage: "en-GB",
  };
}

/** Safely serialise JSON-LD (escapes `<` so it can't break out of the script tag). */
export function jsonLdScript(data: unknown): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
