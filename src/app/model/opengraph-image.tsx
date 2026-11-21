import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Trading framework";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Trading framework", title: "The TOBYACE Model™" });
}
