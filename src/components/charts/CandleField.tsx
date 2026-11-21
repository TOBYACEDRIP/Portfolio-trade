import { makeScale, story } from "./story";

/** Decorative static candle field used on dark CTA panels. */
export function CandleField({ className = "" }: { className?: string }) {
  const W = 520;
  const H = 300;
  const s = makeScale(W, H, story.length);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
      <line x1="0" x2={W} y1={s.y(78)} y2={s.y(78)} stroke="#70C8F5" strokeOpacity="0.5" strokeDasharray="4 6" />
      {story.map((c, i) => {
        const up = c.c >= c.o;
        const top = s.y(Math.max(c.o, c.c));
        const bottom = s.y(Math.min(c.o, c.c));
        return (
          <g key={i} opacity={0.35 + (i / story.length) * 0.65}>
            <line x1={s.x(i)} x2={s.x(i)} y1={s.y(c.h)} y2={s.y(c.l)} stroke={up ? "#70C8F5" : "#FFDAB8"} strokeWidth="1.2" />
            <rect
              x={s.x(i) - s.bodyWidth / 2}
              y={top}
              width={s.bodyWidth}
              height={Math.max(1.5, bottom - top)}
              rx="1.5"
              fill={up ? "#70C8F5" : "#FFDAB8"}
            />
          </g>
        );
      })}
    </svg>
  );
}
