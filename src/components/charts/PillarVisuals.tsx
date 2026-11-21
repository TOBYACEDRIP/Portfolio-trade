"use client";

import { motion } from "framer-motion";
import type { Pillar } from "@/config/model";

const draw = {
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 1.2, ease: "easeInOut" as const },
};
const pop = (delay: number) => ({
  initial: { opacity: 0, scale: 0.6 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.4, delay },
});

const mono = { fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.08em" };

/** Small explanatory line-art for each pillar. Illustrative only. */
export function PillarVisual({ id, className = "" }: { id: Pillar["id"]; className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={`h-auto w-full ${className}`} aria-hidden="true" focusable="false">
      {id === "top-down" && <TopDown />}
      {id === "poi" && <Poi />}
      {id === "entry" && <Entry />}
      {id === "refinements" && <Refinements />}
    </svg>
  );
}

function TopDown() {
  const frames = [
    { x: 6, y: 8, w: 188, h: 104, label: "D1" },
    { x: 92, y: 34, w: 92, h: 58, label: "H4" },
    { x: 128, y: 52, w: 46, h: 30, label: "M15" },
  ];
  return (
    <g>
      <motion.path {...draw} d="M12 96 L40 70 L58 82 L88 48 L108 62 L136 36 L150 50 L188 20" fill="none" stroke="#1c76b3" strokeWidth="1.6" />
      {frames.map((f, i) => (
        <motion.g key={f.label} {...pop(0.3 + i * 0.25)}>
          <rect x={f.x} y={f.y} width={f.w} height={f.h} rx="6" fill={i === 2 ? "#FFDAB8" : "#E5F3FC"} fillOpacity={i === 0 ? 0.35 : 0.55} stroke={i === 2 ? "#e7833c" : "#1c76b3"} strokeOpacity="0.5" strokeDasharray={i === 0 ? "0" : "3 3"} />
          <text x={f.x + 5} y={f.y + 11} fill="#101D36" {...mono}>
            {f.label}
          </text>
        </motion.g>
      ))}
    </g>
  );
}

function Poi() {
  return (
    <g>
      <motion.rect {...pop(0.2)} x="96" y="70" width="98" height="18" rx="3" fill="#70C8F5" fillOpacity="0.3" stroke="#1c76b3" strokeOpacity="0.5" />
      <text x="150" y="82" fill="#1c76b3" {...mono}>
        POI · OB + FVG
      </text>
      <motion.path {...draw} d="M8 30 L30 50 L44 40 L66 76 L82 64 L96 84 L112 30 L128 44 L148 20 L170 76 L190 60" fill="none" stroke="#101D36" strokeWidth="1.6" />
      <motion.circle {...pop(1.1)} cx="170" cy="76" r="4" fill="#e7833c" />
      <text x="8" y="112" fill="#55657f" {...mono}>
        DISCOUNT
      </text>
      <line x1="8" x2="192" y1="58" y2="58" stroke="#101D36" strokeOpacity="0.25" strokeDasharray="2 4" />
    </g>
  );
}

function Entry() {
  return (
    <g>
      <line x1="8" x2="192" y1="90" y2="90" stroke="#e7833c" strokeDasharray="3 4" />
      <text x="8" y="104" fill="#b85d1c" {...mono}>
        SSL
      </text>
      <line x1="96" x2="192" y1="52" y2="52" stroke="#101D36" strokeOpacity="0.5" />
      <text x="150" y="46" fill="#101D36" {...mono}>
        MSS
      </text>
      <motion.path {...draw} d="M8 40 L28 62 L44 52 L62 80 L78 70 L92 98 L110 62 L126 44 L140 30 L152 50 L168 44 L192 14" fill="none" stroke="#1c76b3" strokeWidth="1.8" />
      <motion.circle {...pop(0.9)} cx="92" cy="98" r="4" fill="#e7833c" />
      <motion.g {...pop(1.3)}>
        <circle cx="140" cy="30" r="8" fill="#70C8F5" />
        <path d="M136 30 l3 3 l5 -6" stroke="#101D36" strokeWidth="1.6" fill="none" />
      </motion.g>
    </g>
  );
}

function Refinements() {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((d) => (
        <motion.g key={d} {...pop(0.1 + d * 0.08)}>
          <rect x={10 + d * 24} y="12" width="20" height="26" rx="4" fill={d === 2 ? "#FFDAB8" : "#E5F3FC"} stroke={d === 2 ? "#e7833c" : "#1c76b3"} strokeOpacity="0.5" />
          <circle cx={20 + d * 24} cy="29" r="2.5" fill={d === 2 ? "#e7833c" : "#1c76b3"} />
        </motion.g>
      ))}
      <text x="134" y="28" fill="#101D36" {...mono}>
        CALENDAR
      </text>
      <motion.rect {...pop(0.5)} x="10" y="62" width="44" height="14" rx="4" fill="#FFDAB8" stroke="#e7833c" strokeOpacity="0.6" />
      <motion.rect {...pop(0.65)} x="54" y="62" width="132" height="14" rx="4" fill="#70C8F5" fillOpacity="0.55" stroke="#1c76b3" strokeOpacity="0.6" />
      <text x="14" y="90" fill="#b85d1c" {...mono}>
        1R RISK
      </text>
      <text x="186" y="90" textAnchor="end" fill="#1c76b3" {...mono}>
        3R OBJECTIVE
      </text>
      <motion.path {...draw} d="M10 108 C 50 108, 70 100, 100 104 S 160 96, 190 100" fill="none" stroke="#101D36" strokeOpacity="0.4" strokeWidth="1.2" />
    </g>
  );
}
