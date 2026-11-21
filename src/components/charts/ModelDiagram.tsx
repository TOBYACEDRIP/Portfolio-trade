"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { pillars } from "@/config/model";
import { PillarVisual } from "./PillarVisuals";

/**
 * The TOBYACE Model as one connected system: Market Narrative frames four
 * pillars that feed each other left to right. Selecting a pillar explains its
 * role in the chain.
 */
export function ModelDiagram() {
  const [active, setActive] = useState(0);
  const p = pillars[active];

  return (
    <div className="panel-navy overflow-hidden p-5 sm:p-8 lg:p-10">
      {/* Narrative frame */}
      <div className="relative rounded-[1.25rem] border border-dashed border-sky/40 p-4 pt-10 sm:p-6 sm:pt-8">
        <p className="absolute left-4 top-0 -translate-y-1/2 rounded-full bg-sky px-3.5 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-navy sm:left-6">
          Market Narrative · the reasoning layer
        </p>
        <p className="mb-5 hidden text-right text-sm italic text-white/60 md:block">“Where are we in price, and where are we likely drawing into?”</p>

        <ol className="grid gap-3 md:grid-cols-4" aria-label="The four pillars">
          {pillars.map((pl, i) => {
            const selected = i === active;
            return (
              <li key={pl.id} className="relative">
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`flex h-full w-full flex-col rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                    selected ? "border-sky bg-white text-navy shadow-[0_20px_40px_-20px_rgb(112_200_245/0.8)]" : "border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                  }`}
                >
                  <span className={`font-mono text-xs ${selected ? "text-sky-deep" : "text-sky"}`}>{pl.number}</span>
                  <span className="mt-2 text-lg font-bold leading-tight">{pl.title}</span>
                  <span className={`mt-3 inline-flex w-fit rounded-full px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] ${selected ? "bg-ice text-sky-deep" : "bg-white/10 text-white/70"}`}>
                    → {pl.output}
                  </span>
                </button>
                {i < pillars.length - 1 && (
                  <span aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden h-px w-3 bg-sky/60 md:block">
                    <span className="absolute -right-0.5 -top-[3px] h-[7px] w-[7px] rotate-45 border-r border-t border-sky/80" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-5 grid items-center gap-5 rounded-2xl bg-white/[0.05] p-5 md:grid-cols-[1fr_auto] sm:p-6" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={p.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-sky">{p.title}</p>
              <p className="mt-2 text-xl font-bold text-white sm:text-2xl">{p.role}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">{p.summary}</p>
            </motion.div>
          </AnimatePresence>
          <div className="hidden w-48 rounded-xl bg-white p-3 md:block">
            <PillarVisual id={p.id} />
          </div>
        </div>
      </div>
      <p className="mt-5 text-center text-sm text-white/60">
        Context establishes the hypothesis → POI Logic finds the location → the Entry Model confirms → Refinements improve selection, timing and risk.
      </p>
    </div>
  );
}
