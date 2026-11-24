import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Legal pages live in /src/content/legal as .mdx files. The filename is the
 * URL: terms.mdx → /terms. Edit the text there; no code changes needed.
 */

const DIR = path.join(process.cwd(), "src", "content", "legal");

export const legalPages = [
  { slug: "terms", label: "Terms of Service" },
  { slug: "refund-policy", label: "Refund Policy" },
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "risk-disclosure", label: "Risk Disclosure" },
] as const;

export type LegalSlug = (typeof legalPages)[number]["slug"];

export function getLegalPage(slug: string) {
  if (!legalPages.some((p) => p.slug === slug)) return null;
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { content, data } = matter(fs.readFileSync(file, "utf8"));
  const toISO = (v: unknown) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v));
  return {
    slug: slug as LegalSlug,
    title: String(data.title),
    description: String(data.description),
    updated: toISO(data.updated),
    content,
  };
}
