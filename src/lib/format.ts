export function formatDate(iso: string, style: "long" | "short" = "long"): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    year: "numeric",
    month: style === "long" ? "long" : "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function isExternal(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

/** Heading slug — shared by the TOC extractor and the MDX h2/h3 renderers. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
