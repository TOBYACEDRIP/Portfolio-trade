import { ImageResponse } from "next/og";

/** Candle-mark icon used for the favicon, touch icon and PWA icons. */
export async function renderMonogram(px: number) {
  const u = px / 28;
  const bar = (x: number, y: number, h: number, color: string) => (
    <div style={{ position: "absolute", left: x * u, top: y * u, width: 4 * u, height: h * u, background: color, borderRadius: u }} />
  );
  const wick = (x: number, y: number, h: number, color: string) => (
    <div style={{ position: "absolute", left: (x + 1.3) * u, top: y * u, width: 1.4 * u, height: h * u, background: color, borderRadius: u }} />
  );
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#101D36", borderRadius: px >= 128 ? 0 : 8 * u }}>
        {wick(7, 7, 12, "#FFDAB8")}
        {bar(7, 10, 6, "#FFDAB8")}
        {wick(15, 6, 16, "#70C8F5")}
        {bar(15, 9, 10, "#70C8F5")}
        {wick(19.5, 5, 8, "#70C8F5")}
        {bar(19.5, 7, 4, "#70C8F5")}
      </div>
    ),
    { width: px, height: px },
  );
}
