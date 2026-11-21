/**
 * Illustrative price story used by the chart graphics. This is NOT market
 * data — it is a hand-built sequence designed to demonstrate the TOBYACE Model:
 *
 *   0–3   equal highs form (buy-side liquidity ≈ 78)
 *   4–7   decline to a swing low (34)
 *   8–10  retracement to an internal high (52)
 *   11–13 sell-side liquidity swept below 34 (low 28), close back inside
 *   14–16 displacement up, MSS through 52, FVG left at 47–51
 *   17–19 retracement into the FVG (discount)          ← "now" for the explorer
 *   20–26 expansion into the equal highs (draw on liquidity)
 */

export type Candle = { o: number; h: number; l: number; c: number };

export const story: Candle[] = [
  { o: 70, h: 74, l: 66, c: 72 },
  { o: 72, h: 78, l: 70, c: 76 },
  { o: 76, h: 77.6, l: 71, c: 73 },
  { o: 73, h: 78, l: 69, c: 70 },
  { o: 70, h: 71, l: 60, c: 62 },
  { o: 62, h: 64, l: 54, c: 56 },
  { o: 56, h: 58, l: 46, c: 48 },
  { o: 48, h: 50, l: 34, c: 38 },
  { o: 38, h: 46, l: 36, c: 44 },
  { o: 44, h: 50, l: 42, c: 48 },
  { o: 48, h: 52, l: 45, c: 46 },
  { o: 46, h: 47, l: 39, c: 41 },
  { o: 41, h: 42, l: 35, c: 36 },
  { o: 36, h: 37, l: 28, c: 35 },
  { o: 35, h: 47, l: 34, c: 46 },
  { o: 46, h: 56, l: 45, c: 55 },
  { o: 55, h: 61, l: 51, c: 60 },
  { o: 60, h: 61, l: 54, c: 55 },
  { o: 55, h: 56, l: 49, c: 51 },
  { o: 51, h: 53, l: 48.5, c: 50.5 },
  { o: 50.5, h: 62, l: 50, c: 61 },
  { o: 61, h: 66, l: 59, c: 65 },
  { o: 65, h: 68, l: 62, c: 63 },
  { o: 63, h: 72, l: 62, c: 71 },
  { o: 71, h: 76, l: 69, c: 75 },
  { o: 75, h: 80, l: 73, c: 79 },
  { o: 79, h: 81, l: 74, c: 76 },
];

export const levels = {
  equalHighs: 78,
  swingLow: 34,
  sweepLow: 28,
  internalHigh: 52,
  fvgTop: 51,
  fvgBottom: 47,
  equilibrium: 53,
  rangeHigh: 78,
  rangeLow: 28,
};

export const markers = {
  equalHighs: [1, 3],
  sweep: 13,
  internalHigh: 10,
  mss: 16,
  fvg: [14, 16],
  now: 19,
};

/** Build x/y scales for an SVG of the given size. `flip` mirrors price for the bearish scenario. */
export function makeScale(width: number, height: number, count: number, pad = { x: 16, y: 18 }, flip = false) {
  const min = 24;
  const max = 84;
  const step = (width - pad.x * 2) / count;
  const x = (i: number) => pad.x + step * i + step / 2;
  const yRaw = (v: number) => pad.y + ((max - v) / (max - min)) * (height - pad.y * 2);
  const y = (v: number) => (flip ? height - yRaw(v) : yRaw(v));
  return { x, y, step, bodyWidth: Math.max(3, step * 0.56) };
}
