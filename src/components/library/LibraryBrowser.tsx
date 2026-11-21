"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { libraryCategories, videos, type LibraryCategoryId } from "@/config/library";
import { FilterBar } from "@/components/ui/FilterBar";
import { Reveal } from "@/components/ui/Reveal";
import { CategoryIcon } from "./CategoryIcon";
import { VideoCard } from "./VideoCard";

export function LibraryBrowser({ youtubeUrl }: { youtubeUrl: string | null }) {
  const [active, setActive] = useState<LibraryCategoryId | "all">("all");

  const options = [
    { id: "all", label: "All", count: videos.length },
    ...libraryCategories.map((c) => ({ id: c.id, label: c.label, count: videos.filter((v) => v.category === c.id).length })),
  ];
  const shown = active === "all" ? libraryCategories : libraryCategories.filter((c) => c.id === active);

  return (
    <div>
      <div className="sticky top-[4.75rem] z-20 -mx-4 bg-canvas/85 px-4 py-3 backdrop-blur sm:top-[5.25rem] sm:mx-0 sm:rounded-full sm:px-0">
        <FilterBar label="Filter lessons by category" options={options} active={active} onChange={(id) => setActive(id as LibraryCategoryId | "all")} />
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {active === "all" ? "all categories" : libraryCategories.find((c) => c.id === active)?.label}
      </p>

      <div className="mt-10 space-y-16">
        {shown.map((c) => {
          const items = [...videos.filter((v) => v.category === c.id)].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
          return (
            <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-40">
              <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-end">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-sky">
                    <CategoryIcon id={c.id} size={22} />
                  </span>
                  <div>
                    <h2 id={`${c.id}-title`} className="text-2xl font-extrabold text-navy sm:text-3xl">
                      {c.label}
                    </h2>
                    <p className="mt-1 text-navy-soft">{c.summary}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-1.5 lg:justify-end" aria-label={`${c.label} topics`}>
                  {c.topics.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-white px-3 py-1 text-xs text-navy-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {items.length > 0 ? (
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((v, i) => (
                    <Reveal as="li" key={v.title} delay={0.04 * (i % 3)}>
                      <VideoCard video={v} />
                    </Reveal>
                  ))}
                </ul>
              ) : (
                <Reveal className="mt-8 flex flex-col gap-4 rounded-[var(--radius-card)] border border-dashed border-line-strong bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-3 text-sm text-navy-soft">
                    <Clock size={16} className="shrink-0 text-sky-deep" aria-hidden="true" />
                    Lessons for {c.label.toLowerCase()} are being added to the library.
                  </p>
                  {youtubeUrl && (
                    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-sky-deep hover:text-navy">
                      Watch on YouTube →<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </Reveal>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
