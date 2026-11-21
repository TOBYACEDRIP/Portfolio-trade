import type { Metadata } from "next";
import { person, seoDefaults, site } from "@/config/site";
import { socialProfiles } from "@/config/socials";

type PageMetaInput = {
  /** Page title — the site template appends " | TheTobyAce". Omit for the home page. */
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

/**
 * Builds consistent metadata for every page: canonical URL, Open Graph and
 * X/Twitter cards. Open Graph images come from `opengraph-image.tsx` files,
 * which Next.js wires in automatically, so they're only set here when a page
 * provides a custom one.
 */
export function pageMetadata(input: PageMetaInput): Metadata {
  const title = input.title ?? site.title;
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
      ...(images && { images }),
      ...(input.type === "article" && {
        publishedTime: input.publishedTime,
        modifiedTime: input.modifiedTime ?? input.publishedTime,
        authors: [person.brand],
        tags: input.tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: title === site.title ? site.title : fullTitle,
      description: input.description,
      creator: seoDefaults.twitterHandle,
      ...(images && { images: images.map((i) => i.url) }),
    },
  };
}

/** schema.org Person — rendered once in the root layout. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: person.fullName || person.name,
    alternateName: person.brand,
    url: site.url,
    ...(person.portrait && { image: absoluteUrl(person.portrait) }),
    jobTitle: person.roles[0],
    description: site.description,
    knowsAbout: [
      "Forex trading",
      "Market structure",
      "Liquidity",
      "Trading psychology",
      "Risk management",
      "Entrepreneurship",
      "Software development",
    ],
    hasOccupation: person.roles.map((name) => ({ "@type": "Occupation", name })),
    sameAs: socialProfiles.map((s) => s.href),
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

/** Safely serialise JSON-LD (escapes `<` to prevent breaking out of the script tag). */
export function jsonLdScript(data: unknown): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
