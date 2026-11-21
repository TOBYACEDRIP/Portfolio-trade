import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Insights";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Insights", title: "Notes on markets, business and growth." });
}
