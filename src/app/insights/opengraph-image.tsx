import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Market Insights";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Market Insights", title: "Quality analysis, not volume." });
}
