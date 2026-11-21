import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Trading philosophy";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Trading philosophy", title: "The TOBYACE Method™" });
}
