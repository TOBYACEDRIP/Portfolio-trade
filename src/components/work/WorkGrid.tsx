"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { workCategories, type WorkCategory, type WorkItem } from "@/config/work";
import { SmartLink } from "@/components/ui/SmartLink";
import { CoverArt } from "@/components/ui/Graphics";
import { FilterBar } from "@/components/ui/FilterBar";

const labelFor = (id: WorkCategory) => workCategories.find((c) => c.id === id)?.label ?? id;

export function WorkGrid({ items, contactHref }: { items: WorkItem[]; contactHref: string }) {
  const [active, setActive] = useState<WorkCategory | "all">("all");

  const options = useMemo(
    () => [
      { id: "all", label: "All", count: items.length },
      ...workCategories.map((c) => ({ id: c.id, label: c.label, count: items.filter((i) => i.category === c.id).length })),
    ],
    [items],
  );

  const visible = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <FilterBar label="Filter work by category" options={options} active={active} onChange={(id) => setActive(id as WorkCategory | "all")} />

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "item" : "items"}
      </p>

      {visible.length === 0 ? (
        <div className="surface mt-10 flex flex-col items-start gap-4 p-10">
          <p className="eyebrow text-gold!">{active !== "all" ? labelFor(active) : "Work"}</p>
          <p className="max-w-lg font-display text-3xl text-fg">Nothing published here yet.</p>
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            {active === "collaborations"
              ? "Selected collaborations will be listed here. If you'd like to work together, get in touch."
              : "New work in this category is on the way."}
          </p>
          <SmartLink href={contactHref} className="mt-2 inline-flex items-center gap-1.5 text-sm text-fg underline decoration-line-strong underline-offset-4 hover:decoration-gold">
            Start a conversation
          </SmartLink>
        </div>
      ) : (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <li key={item.id}>
              <SmartLink
                href={item.href}
                className="surface group flex h-full flex-col overflow-hidden transition-[border-color,transform] duration-500 hover:border-line-strong motion-safe:hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <CoverArt id={item.id} label={item.meta ?? labelFor(item.category)} />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="eyebrow">{labelFor(item.category)}</p>
                    {item.meta && <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-subtle">{item.meta}</p>}
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-fg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm text-fg/80 transition-colors group-hover:text-gold-soft" aria-hidden="true">
                    View <ArrowUpRight size={14} />
                  </span>
                </div>
              </SmartLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
