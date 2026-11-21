"use client";

import { motion } from "framer-motion";
import { Candles, Label } from "./Candles";
import { levels, makeScale, markers, story } from "./story";
import { useChartWidth } from "./useChartWidth";


/**
 * Animated hero illustration: the full liquidity story builds candle by candle,
 * then the analytical annotations draw in. Illustrative, not market data.
 */
export function HeroChart({ className = "" }: { className?: string }) {
  const { ref, width: W } = useChartWidth<HTMLDivElement>(560, 260, 640);
  const H = Math.round(W * 0.6);
  const s = makeScale(W, H, story.length, { x: 18, y: 30 });
  const after = 0.3 + story.length * 0.045;
  const fade = (d: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: after + d },
  });
  const fvgX = s.x(markers.fvg[0]) - s.bodyWidth;
  const sweepX = s.x(markers.sweep);
  const sweepY = s.y(levels.sweepLow);

  return (
    <div ref={ref}>
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-labelledby="hero-chart-title" focusable="false">
      <title id="hero-chart-title">
        Illustration: price sweeps sell-side liquidity, shifts structure, leaves a fair value gap and delivers into buy-side liquidity at the equal highs.
      </title>

      {/* FVG zone */}
      <motion.rect
        {...fade(0.1)}
        x={fvgX}
        y={s.y(levels.fvgTop)}
        width={W - fvgX - 18}
        height={s.y(levels.fvgBottom) - s.y(levels.fvgTop)}
        fill="#70C8F5"
        fillOpacity="0.16"
        rx="4"
      />

      {/* Buy-side liquidity */}
      <motion.line
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x1={s.x(markers.equalHighs[0])}
        x2={W - 18}
        y1={s.y(levels.equalHighs)}
        y2={s.y(levels.equalHighs)}
        stroke="#1c76b3"
        strokeWidth="1.2"
        strokeDasharray="5 6"
        className="motion-safe:animate-dash"
      />

      {/* MSS level */}
      <motion.line
        {...fade(0.25)}
        x1={s.x(markers.internalHigh)}
        x2={s.x(markers.mss) + 10}
        y1={s.y(levels.internalHigh)}
        y2={s.y(levels.internalHigh)}
        stroke="#101D36"
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />

      <Candles data={story} scale={s} delay={0.3} />

      {/* Annotations */}
      <motion.g {...fade(0)}>
        <Label x={s.x(1) - 4} y={s.y(levels.equalHighs) - 10} tone="sky">
          BUY-SIDE LIQUIDITY
        </Label>
      </motion.g>
      <motion.g {...fade(0.25)}>
        <Label x={s.x(markers.internalHigh) - 2} y={s.y(levels.internalHigh) - 8}>
          MSS
        </Label>
      </motion.g>
      <motion.g {...fade(0.1)}>
        <Label x={W - 22} y={s.y(levels.fvgBottom) + 16} anchor="end" tone="sky">
          FVG
        </Label>
      </motion.g>
      <motion.g {...fade(0.4)}>
        <circle cx={sweepX} cy={sweepY} r="5" fill="#e7833c" />
        <circle cx={sweepX} cy={sweepY} r="5" fill="none" stroke="#e7833c" className="origin-center motion-safe:animate-pulse-ring [transform-box:fill-box]" />
        <Label x={sweepX + 12} y={sweepY + 4} tone="peach">
          SSL SWEPT
        </Label>
      </motion.g>
    </svg>
    </div>
  );
}
