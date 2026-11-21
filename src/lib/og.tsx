import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const fontDir = path.join(process.cwd(), "src", "assets", "fonts");

async function fonts() {
  const [medium, bold, extra] = await Promise.all(
    ["500", "700", "800"].map((w) => readFile(path.join(fontDir, `PlusJakartaSans-${w}.ttf`))),
  );
  return [
    { name: "Jakarta", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Jakarta", data: bold, weight: 700 as const, style: "normal" as const },
    { name: "Jakarta", data: extra, weight: 800 as const, style: "normal" as const },
  ];
}

const NAVY = "#101D36";
const SKY = "#70C8F5";
const PEACH = "#FFDAB8";

/** Candle silhouette used as the right-hand illustration on every OG card. */
const candles = [
  [44, 70, 30, 1], [40, 64, 26, 0], [52, 80, 34, 1], [36, 58, 22, 0], [30, 52, 18, 0],
  [48, 76, 30, 1], [60, 92, 40, 1], [56, 86, 44, 0], [70, 104, 50, 1], [84, 120, 62, 1],
];

/** Shared Open Graph card used by every route's opengraph-image. */
export async function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer?: string }) {
  const size = title.length > 64 ? 56 : title.length > 40 ? 66 : 80;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          padding: "64px 72px",
          background: "linear-gradient(140deg, #F4F7FA 0%, #E5F3FC 60%, #d6eefc 100%)",
          color: NAVY,
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ position: "absolute", right: -80, top: -120, width: 480, height: 480, borderRadius: 999, background: "rgba(112,200,245,0.35)", filter: "blur(60px)", display: "flex" }} />
        <div style={{ position: "absolute", right: 180, bottom: -160, width: 360, height: 360, borderRadius: 999, background: "rgba(255,218,184,0.6)", filter: "blur(60px)", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 820, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: NAVY, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 5, paddingBottom: 10 }}>
              <div style={{ width: 7, height: 12, background: PEACH, borderRadius: 2, display: "flex" }} />
              <div style={{ width: 7, height: 20, background: SKY, borderRadius: 2, display: "flex" }} />
              <div style={{ width: 7, height: 26, background: SKY, borderRadius: 2, display: "flex" }} />
            </div>
            <div style={{ display: "flex", fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>
              <span>TheToby</span>
              <span style={{ color: "#1c76b3" }}>Ace</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 20, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#1c76b3" }}>{eyebrow}</div>
            <div style={{ display: "flex", marginTop: 18, fontSize: size, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2 }}>{title}</div>
          </div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 500, color: "#33435f" }}>{footer ?? "Forex Trader · Technical Analyst · thetobyace.com"}</div>
        </div>

        <div style={{ position: "absolute", right: 70, bottom: 80, display: "flex", alignItems: "flex-end", gap: 12 }}>
          {candles.map(([body, wick, offset, up], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: offset }}>
              <div style={{ width: 2, height: (wick - body) / 2, background: up ? "#2a8acb" : "#e7833c", display: "flex" }} />
              <div style={{ width: 16, height: body, background: up ? SKY : PEACH, border: `2px solid ${up ? "#2a8acb" : "#e7833c"}`, borderRadius: 3, display: "flex" }} />
              <div style={{ width: 2, height: (wick - body) / 2, background: up ? "#2a8acb" : "#e7833c", display: "flex" }} />
            </div>
          ))}
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}
