/**
 * Insight categories. An article's frontmatter `category` must match one of
 * these ids. Add a new category here and it appears in the filter automatically
 * (empty categories are hidden).
 */
export const insightCategories = [
  { id: "forex", label: "Forex Trading" },
  { id: "market-structure", label: "Market Structure" },
  { id: "liquidity", label: "Liquidity" },
  { id: "psychology", label: "Trading Psychology" },
  { id: "prop-firms", label: "Prop Firms" },
  { id: "entrepreneurship", label: "Entrepreneurship" },
  { id: "personal-development", label: "Personal Development" },
  { id: "technology", label: "Technology" },
] as const;

export type InsightCategoryId = (typeof insightCategories)[number]["id"];

export function getCategoryLabel(id: string): string {
  return insightCategories.find((c) => c.id === id)?.label ?? id;
}
