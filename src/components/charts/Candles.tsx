"use client";

import { motion } from "framer-motion";
import type { Candle } from "./story";

type Scale = { x: (i: number) => number; y: (v: number) => number; bodyWidth: number };

export const UP = { body: "#70C8F5", wick: "#2a8acb" };
export const DOWN = { body: "#FFDAB8", wick: "#e7833c" };

/**
 * Renders a candle series. Colour follows the visual direction, so a mirrored
 * (bearish) scenario still shows rising candles in blue and falling in orange.
 */
export function Candles({
  data,
  scale,
  flip = false,
  animate = true,
  delay = 0,
  stagger = 0.045,
  dim,
  from = 0,
}: {
  data: Candle[];
  scale: Scale;
  flip?: boolean;
  animate?: boolean;
  delay?: number;
  stagger?: number;
  /** Return an opacity (0–1) per candle index to de-emphasise some candles. */
  dim?: (i: number) => number;
  /** Index offset when rendering a slice of the series. */
  from?: number;
}) {
  return (
    <g>
      {data.map((c, k) => {
        const i = from + k;
        const rising = c.c >= c.o !== flip;
        const col = rising ? UP : DOWN;
        const yA = scale.y(c.o);
        const yB = scale.y(c.c);
        const top = Math.min(yA, yB);
        const h = Math.max(1.5, Math.abs(yA - yB));
        return (
          <motion.g
            key={i}
            initial={animate ? { opacity: 0, y: 10 } : false}
            animate={{ opacity: dim ? dim(i) : 1, y: 0 }}
            transition={{ duration: 0.45, delay: animate ? delay + k * stagger : 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <line x1={scale.x(i)} x2={scale.x(i)} y1={scale.y(c.h)} y2={scale.y(c.l)} stroke={col.wick} strokeWidth="1.3" strokeLinecap="round" />
            <rect x={scale.x(i) - scale.bodyWidth / 2} y={top} width={scale.bodyWidth} height={h} rx="1.6" fill={col.body} stroke={col.wick} strokeWidth="0.9" />
          </motion.g>
        );
      })}
    </g>
  );
}

/** Text with a white halo so annotations stay legible over candles. */
export function Label({
  x,
  y,
  children,
  anchor = "start",
  tone = "navy",
  size = 10,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
  tone?: "navy" | "sky" | "peach" | "muted";
  size?: number;
}) {
  const fills = { navy: "#101D36", sky: "#1c76b3", peach: "#b85d1c", muted: "#55657f" };
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontFamily="var(--font-mono)"
      fontSize={size}
      letterSpacing="0.08em"
      fill={fills[tone]}
      stroke="#ffffff"
      strokeWidth="4"
      strokeLinejoin="round"
      paintOrder="stroke"
    >
      {children}
    </text>
  );
}
