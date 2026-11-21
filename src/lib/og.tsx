import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const fontDir = path.join(process.cwd(), "src", "assets", "fonts");

async function fonts() {
  const [regular, italic] = await Promise.all([
    readFile(path.join(fontDir, "InstrumentSerif-Regular.ttf")),
    readFile(path.join(fontDir, "InstrumentSerif-Italic.ttf")),
  ]);
  return [
    { name: "Instrument Serif", data: regular, style: "normal" as const, weight: 400 as const },
    { name: "Instrument Serif", data: italic, style: "italic" as const, weight: 400 as const },
  ];
}

const GOLD = "#C6A66B";

/** Shared Open Graph card used by every route's opengraph-image. */
export async function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer?: string }) {
  const size = title.length > 60 ? 64 : title.length > 36 ? 78 : 96;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(ellipse at 15% 0%, rgba(198,166,107,0.16), transparent 55%), #0B0B0B",
          color: "#F5F5F5",
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 40 }}>
            TheToby<span style={{ fontStyle: "italic", color: GOLD }}>Ace</span>
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: GOLD, textTransform: "uppercase", fontFamily: "sans-serif" }}>
            {eyebrow}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: size, lineHeight: 1.02, letterSpacing: -1, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "sans-serif", fontSize: 22, color: "#A0A0A0" }}>
          <div style={{ display: "flex" }}>{footer ?? "Trader · Educator · Entrepreneur · Creator"}</div>
          <div style={{ display: "flex", width: 120, height: 2, background: GOLD }} />
          <div style={{ display: "flex", color: "#F5F5F5" }}>thetobyace.com</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}
