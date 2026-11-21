"use client";

import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { narrativeSteps, type NarrativeStep } from "@/config/model";
import { Candles, Label } from "./Candles";
import { levels, makeScale, markers, story } from "./story";
import { useChartWidth } from "./useChartWidth";

const NOW = markers.now;

type Scenario = "bullish" | "bearish";

/**
 * Interactive Market Narrative: four questions, each revealing its own layer of
 * annotation on the same chart. Bullish and bearish scenarios mirror the chart.
 */
export function NarrativeExplorer({ compact = false, autoplay = false }: { compact?: boolean; autoplay?: boolean }) {
  const [active, setActive] = useState(0);
  const [scenario, setScenario] = useState<Scenario>("bullish");
  const [touched, setTouched] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  // Gentle autoplay on the homepage until the visitor interacts.
  useEffect(() => {
    if (!autoplay || touched || reduce || !inView) return;
    const t = setInterval(() => setActive((a) => (a + 1) % narrativeSteps.length), 4800);
    return () => clearInterval(t);
  }, [autoplay, touched, reduce, inView]);

  const select = useCallback((i: number) => {
    setTouched(true);
    setActive(i);
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (e.key in keys) {
      e.preventDefault();
      const next = (active + keys[e.key] + narrativeSteps.length) % narrativeSteps.length;
      select(next);
      tabRefs.current[next]?.focus();
    } else if (e.key === "Home" || e.key === "End") {
      e.preventDefault();
      const next = e.key === "Home" ? 0 : narrativeSteps.length - 1;
      select(next);
      tabRefs.current[next]?.focus();
    }
  };

  const step = narrativeSteps[active];

  return (
    <div ref={ref} className={`grid gap-5 ${compact ? "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]" : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"}`}>
      {/* Steps */}
      <div className="min-w-0">
        <div role="tablist" aria-label="Market Narrative questions" aria-orientation="vertical" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
          {narrativeSteps.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={onKeyDown}
                className={`relative min-w-[14rem] shrink-0 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 lg:min-w-0 lg:p-5 ${
                  selected ? "border-navy bg-navy text-white shadow-[var(--shadow-lift)]" : "border-line bg-white text-navy hover:border-sky-deep/30"
                }`}
              >
                <span className={`font-mono text-xs ${selected ? "text-sky" : "text-sky-deep"}`}>{s.number}</span>
                <span className="mt-1.5 block text-base font-bold leading-snug lg:text-lg">{s.question}</span>
                <span className={`mt-1 block text-sm ${selected ? "text-white/65" : "text-muted"}`}>{s.short}</span>
                {selected && autoplay && !touched && !reduce && (
                  <motion.span
                    key={`progress-${active}`}
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-sky"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: inView ? 1 : 0 }}
                    transition={{ duration: 4.8, ease: "linear" }}
                  />
                )}
              </button>
            );
          })}
        </div>
        {compact && (
          <Link href="/model#narrative" className="mt-5 hidden items-center gap-2 text-sm font-semibold text-sky-deep hover:text-navy lg:inline-flex">
            Explore the full Market Narrative <ArrowRight size={15} aria-hidden="true" />
          </Link>
        )}
      </div>

      {/* Chart + explanation */}
      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="surface min-w-0 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <p className="eyebrow">
            Illustration · <span className="text-navy">{step.short}</span>
          </p>
          <div role="group" aria-label="Scenario" className="flex rounded-full border border-line bg-canvas p-1">
            {(["bullish", "bearish"] as const).map((sc) => (
              <button
                key={sc}
                type="button"
                aria-pressed={scenario === sc}
                onClick={() => {
                  setTouched(true);
                  setScenario(sc);
                }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors ${
                  scenario === sc ? (sc === "bullish" ? "bg-sky text-navy" : "bg-peach text-[#7a3d10]") : "text-muted hover:text-navy"
                }`}
              >
                {sc}
              </button>
            ))}
          </div>
        </div>

        <NarrativeChart step={step} flip={scenario === "bearish"} />

        <div className="border-t border-line p-5 sm:p-6" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${step.id}-${scenario}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm font-semibold text-sky-deep">{step.purpose}</p>
              <p className="mt-2 text-sm leading-relaxed text-navy-soft sm:text-[0.95rem]">{step.body}</p>
              {!compact && (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Considerations">
                  {step.topics.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-canvas px-3 py-1 text-xs text-navy-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
          {compact && (
            <Link href="/model#narrative" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-deep hover:text-navy lg:hidden">
              Explore the full Market Narrative <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function NarrativeChart({ step, flip }: { step: NarrativeStep; flip: boolean }) {
  const { ref, width: W } = useChartWidth<HTMLDivElement>(640, 320, 720);
  const H = Math.round(Math.max(320, W * 0.6));
  const s = makeScale(W, H, story.length, { x: 20, y: 34 }, flip);
  const t = (bull: string, bear: string) => (flip ? bear : bull);
  /** Offset a label "above" a level in bullish terms; mirrored when bearish. */
  const off = (v: number, px: number) => s.y(v) + (flip ? -px : px) + (flip && px < 0 ? 8 : 0);
  const visible = story.slice(0, NOW + 1);
  const priceY = s.y(story[NOW].c);
  const right = W - 20;

  const show = (...ids: NarrativeStep["id"][]) => ids.includes(step.id);
  const layer = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4 },
  };

  const dim = (i: number) => {
    if (step.id === "happened") return i >= 7 && i <= 16 ? 1 : 0.3;
    if (step.id === "confirm") return i >= 13 ? 1 : 0.35;
    return 1;
  };

  return (
    <div ref={ref} className="relative bg-[linear-gradient(180deg,#ffffff,#f7fbfe)]">
      <div className="chart-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <svg viewBox={`0 0 ${W} ${H}`} className="relative block h-auto w-full" role="img" aria-label={`Annotated illustration for: ${step.question}`}>
        <AnimatePresence>
          {show("where") && (
            <motion.g key="where" {...layer}>
              <rect x={s.x(0) - 8} y={Math.min(s.y(levels.rangeHigh), s.y(levels.rangeLow))} width={right - s.x(0) + 8} height={Math.abs(s.y(levels.rangeLow) - s.y(levels.rangeHigh))} fill="#E5F3FC" fillOpacity="0.55" stroke="#1c76b3" strokeOpacity="0.25" rx="6" />
              {/* Premium is always the visually upper half of the range. */}
              <rect x={s.x(0) - 8} y={Math.min(s.y(levels.rangeHigh), s.y(levels.rangeLow))} width={right - s.x(0) + 8} height={s.y(levels.equilibrium) - Math.min(s.y(levels.rangeHigh), s.y(levels.rangeLow))} fill="#FFDAB8" fillOpacity="0.28" rx="6" />
              <line x1={s.x(0) - 8} x2={right} y1={s.y(levels.equilibrium)} y2={s.y(levels.equilibrium)} stroke="#101D36" strokeOpacity="0.35" strokeDasharray="3 5" />
              <Label x={right - 6} y={off(levels.equilibrium, -7)} anchor="end" tone="muted">EQUILIBRIUM</Label>
              <Label x={right - 6} y={Math.min(s.y(levels.rangeHigh), s.y(levels.rangeLow)) + 18} anchor="end" tone="peach">PREMIUM</Label>
              <Label x={right - 6} y={Math.max(s.y(levels.rangeHigh), s.y(levels.rangeLow)) - 10} anchor="end" tone="sky">DISCOUNT</Label>
              <Label x={s.x(0)} y={off(levels.rangeHigh, -9)} tone="muted">EXTERNAL RANGE LIQUIDITY</Label>
              <rect x={s.x(14) - 6} y={Math.min(s.y(levels.fvgTop), s.y(levels.fvgBottom))} width={s.x(NOW) - s.x(14) + 14} height={Math.abs(s.y(levels.fvgBottom) - s.y(levels.fvgTop))} fill="#70C8F5" fillOpacity="0.28" rx="3" />
            </motion.g>
          )}

          {show("happened") && (
            <motion.g key="happened" {...layer}>
              <line x1={s.x(7)} x2={s.x(14)} y1={s.y(levels.swingLow)} y2={s.y(levels.swingLow)} stroke="#e7833c" strokeDasharray="3 4" />
              <circle cx={s.x(markers.sweep)} cy={s.y(levels.sweepLow)} r="6" fill="none" stroke="#e7833c" strokeWidth="1.5" />
              <Label x={s.x(markers.sweep) + 12} y={off(levels.sweepLow, 14)} tone="peach">{t("SELL-SIDE LIQUIDITY TAKEN", "BUY-SIDE LIQUIDITY TAKEN")}</Label>
              <line x1={s.x(markers.internalHigh)} x2={s.x(markers.mss) + 8} y1={s.y(levels.internalHigh)} y2={s.y(levels.internalHigh)} stroke="#101D36" strokeWidth="1.3" />
              <Label x={s.x(markers.internalHigh)} y={off(levels.internalHigh, -8)}>MSS</Label>
              <rect x={s.x(14) - s.bodyWidth} y={Math.min(s.y(61), s.y(34))} width={s.x(16) - s.x(14) + s.bodyWidth * 2} height={Math.abs(s.y(34) - s.y(61))} fill="none" stroke="#1c76b3" strokeDasharray="4 4" rx="6" />
              <Label x={s.x(14) - s.bodyWidth - 6} y={off(58, 0)} anchor="end" tone="sky">DISPLACEMENT</Label>
            </motion.g>
          )}

          {show("draw") && (
            <motion.g key="draw" {...layer}>
              <line x1={s.x(1)} x2={right} y1={s.y(levels.equalHighs)} y2={s.y(levels.equalHighs)} stroke="#1c76b3" strokeWidth="1.4" strokeDasharray="5 6" className="motion-safe:animate-dash" />
              <Label x={s.x(1)} y={off(levels.equalHighs, -10)} tone="sky">{t("BUY-SIDE LIQUIDITY · EQUAL HIGHS", "SELL-SIDE LIQUIDITY · EQUAL LOWS")}</Label>
              <motion.path
                d={`M ${s.x(NOW) + 6} ${priceY} C ${s.x(NOW + 3)} ${priceY}, ${s.x(NOW + 3)} ${s.y(levels.equalHighs)}, ${right - 30} ${s.y(levels.equalHighs) + (flip ? -4 : 4)}`}
                fill="none"
                stroke="#101D36"
                strokeWidth="1.6"
                strokeDasharray="4 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
              <circle cx={right - 30} cy={s.y(levels.equalHighs)} r="4.5" fill="#101D36" />
              <Label x={s.x(NOW + 2)} y={off((story[NOW].c + levels.equalHighs) / 2, 4)}>DRAW ON LIQUIDITY</Label>
            </motion.g>
          )}

          {show("confirm") && (
            <motion.g key="confirm" {...layer}>
              <rect x={s.x(14) - 6} y={Math.min(s.y(levels.fvgTop), s.y(levels.fvgBottom))} width={right - s.x(14) + 6} height={Math.abs(s.y(levels.fvgBottom) - s.y(levels.fvgTop))} fill="#70C8F5" fillOpacity="0.32" rx="3" />
              <Label x={right - 4} y={off(levels.fvgBottom, 15)} anchor="end" tone="sky">ENTRY · FVG RETRACE</Label>
              <line x1={s.x(markers.internalHigh)} x2={s.x(markers.mss) + 8} y1={s.y(levels.internalHigh)} y2={s.y(levels.internalHigh)} stroke="#101D36" strokeWidth="1.3" />
              <Label x={s.x(markers.internalHigh)} y={off(levels.internalHigh, -8)}>✓ MSS</Label>
              <line x1={s.x(11)} x2={right} y1={s.y(levels.sweepLow - 1.5)} y2={s.y(levels.sweepLow - 1.5)} stroke="#e7833c" strokeWidth="1.4" />
              <Label x={right - 4} y={off(levels.sweepLow - 1.5, 15)} anchor="end" tone="peach">INVALIDATION · BEYOND THE SWEEP</Label>
              <line x1={s.x(1)} x2={right} y1={s.y(levels.equalHighs)} y2={s.y(levels.equalHighs)} stroke="#1c76b3" strokeOpacity="0.5" strokeDasharray="5 6" />
              <Label x={right - 4} y={off(levels.equalHighs, -9)} anchor="end" tone="sky">TARGET</Label>
            </motion.g>
          )}
        </AnimatePresence>

        <Candles key={flip ? "bear" : "bull"} data={visible} scale={s} flip={flip} stagger={0.02} dim={dim} />

        {/* Current price marker */}
        <line x1={s.x(NOW) + 8} x2={right} y1={priceY} y2={priceY} stroke="#101D36" strokeOpacity="0.5" strokeWidth="1" />
        <g>
          <circle cx={s.x(NOW)} cy={priceY} r="4" fill="#101D36" />
          <circle cx={s.x(NOW)} cy={priceY} r="4" fill="none" stroke="#101D36" className="origin-center motion-safe:animate-pulse-ring [transform-box:fill-box]" />
        </g>
        {show("where") && (
          <Label x={right - 6} y={priceY + (flip ? -8 : 16)} anchor="end">{t("PRICE · IN DISCOUNT", "PRICE · IN PREMIUM")}</Label>
        )}
      </svg>
    </div>
  );
}
