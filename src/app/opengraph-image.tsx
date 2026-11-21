import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Trader, Entrepreneur & Creator";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Personal website", title: "Trader, Entrepreneur & Creator." });
}
