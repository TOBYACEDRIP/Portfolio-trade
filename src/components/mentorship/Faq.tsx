import { Plus } from "lucide-react";

/** Accessible FAQ using native <details>/<summary> — works without JavaScript. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-soft)]">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left font-bold text-navy transition-colors hover:text-sky-deep [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong transition-transform duration-300 group-open:rotate-45 group-open:border-navy group-open:bg-navy group-open:text-white">
              <Plus size={15} aria-hidden="true" />
            </span>
          </summary>
          <p className="px-6 pb-6 text-sm leading-relaxed text-navy-soft sm:max-w-3xl sm:text-base">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
