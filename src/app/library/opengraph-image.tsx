import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Trading Library";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Trading Library", title: "Short lessons. One concept at a time." });
}
