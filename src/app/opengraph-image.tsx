import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Forex Trader & Technical Analyst";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Forex Trader & Technical Analyst", title: "Understanding the markets beyond the charts." });
}
