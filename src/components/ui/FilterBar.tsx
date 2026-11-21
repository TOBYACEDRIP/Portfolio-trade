"use client";

import { motion } from "framer-motion";
import { useId } from "react";

type Option = { id: string; label: string; count: number };

/** Accessible category filter — toggle buttons with an animated active pill. */
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
  const layoutId = useId();
  return (
    <div role="group" aria-label={label} className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      <div className="flex w-max gap-1.5 rounded-full border border-line bg-white p-1.5 shadow-[var(--shadow-soft)] sm:w-auto sm:flex-wrap sm:rounded-[1.25rem]">
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
                className={`relative inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors duration-300 ${
                  pressed ? "text-white" : "text-navy-soft hover:text-navy"
                }`}
              >
                {pressed && (
                  <motion.span
                    layoutId={layoutId}
                    className="absolute inset-0 rounded-full bg-navy"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative">{o.label}</span>
                <span className={`relative font-mono text-[0.6875rem] ${pressed ? "text-sky" : "text-muted"}`}>{o.count}</span>
              </button>
            );
          })}
      </div>
    </div>
  );
}
