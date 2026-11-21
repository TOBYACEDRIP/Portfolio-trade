"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { insightCategories, getCategoryLabel } from "@/config/insights";
import type { InsightMeta } from "@/lib/insights";
import { formatDate } from "@/lib/format";
import { FilterBar } from "@/components/ui/FilterBar";

export function InsightList({ posts }: { posts: InsightMeta[] }) {
  const [active, setActive] = useState("all");

  const options = [
    { id: "all", label: "All", count: posts.length },
    ...insightCategories.map((c) => ({ id: c.id, label: c.label, count: posts.filter((p) => p.category === c.id).length })),
  ];
  const visible = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <FilterBar label="Filter articles by category" options={options} active={active} onChange={setActive} hideEmpty />
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "article" : "articles"}
      </p>

      {visible.length === 0 ? (
        <p className="mt-12 text-muted">No articles in this category yet.</p>
      ) : (
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {visible.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/insights/${post.slug}`}
                className="group grid gap-3 py-8 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:gap-10"
              >
                <div className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                  <time dateTime={post.date}>{formatDate(post.date, "short")}</time>
                  <p className="mt-2 text-gold">{getCategoryLabel(post.category)}</p>
                </div>
                <div>
                  <h3 className="font-display text-3xl leading-tight text-fg transition-colors group-hover:text-gold-soft sm:text-[2.1rem]">
                    {post.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{post.description}</p>
                  <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                    {post.readingTime} min read
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-10 w-10 items-center justify-center self-center rounded-full border border-line text-muted transition-all duration-300 group-hover:rotate-45 group-hover:border-gold/50 group-hover:text-gold md:flex"
                >
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
