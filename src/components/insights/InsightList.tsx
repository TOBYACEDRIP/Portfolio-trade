"use client";

import { useState } from "react";
import { insightCategories } from "@/config/insights";
import type { InsightMeta } from "@/lib/insights";
import { FilterBar } from "@/components/ui/FilterBar";
import { InsightCard } from "./InsightCard";

export function InsightList({ posts }: { posts: InsightMeta[] }) {
  const [active, setActive] = useState("all");
  const options = [
    { id: "all", label: "All", count: posts.length },
    ...insightCategories.map((c) => ({ id: c.id, label: c.label, count: posts.filter((p) => p.category === c.id).length })),
  ];
  const visible = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <FilterBar label="Filter insights by category" options={options} active={active} onChange={setActive} hideEmpty />
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "entry" : "entries"}
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <li key={post.slug}>
            <InsightCard post={post} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
