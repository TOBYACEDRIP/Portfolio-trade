"use client";

type Option = { id: string; label: string; count: number };

/**
 * Accessible category filter — a group of toggle buttons (aria-pressed).
 * Categories with no items are hidden, except the currently active one.
 */
export function FilterBar({
  label,
  options,
  active,
  onChange,
  hideEmpty = false,
}: {
  label: string;
  options: Option[];
  active: string;
  onChange: (id: string) => void;
  hideEmpty?: boolean;
}) {
  return (
    <div role="group" aria-label={label} className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
      <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {options
          .filter((o) => !hideEmpty || o.count > 0 || o.id === active)
          .map((o) => {
            const pressed = o.id === active;
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={pressed}
                onClick={() => onChange(o.id)}
                className={`inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-sm transition-colors duration-300 ${
                  pressed
                    ? "border-gold/60 bg-gold/10 text-fg"
                    : "border-line text-muted hover:border-line-strong hover:text-fg"
                }`}
              >
                {o.label}
                <span className={`font-mono text-[0.6875rem] ${pressed ? "text-gold" : "text-subtle"}`}>{o.count}</span>
              </button>
            );
          })}
      </div>
    </div>
  );
}
