import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

/** "TA" monogram used for the favicon and touch icons. */
export async function renderMonogram(px: number) {
  const italic = await readFile(path.join(process.cwd(), "src", "assets", "fonts", "InstrumentSerif-Italic.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0B",
          borderRadius: px >= 128 ? 0 : px * 0.22,
          fontFamily: "Instrument Serif",
          fontStyle: "italic",
          fontSize: px * 0.62,
          color: "#F5F5F5",
          letterSpacing: -px * 0.02,
          paddingBottom: px * 0.04,
        }}
      >
        T<span style={{ color: "#C6A66B" }}>A</span>
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [{ name: "Instrument Serif", data: italic, style: "italic", weight: 400 }],
    },
  );
}
