import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Experience";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Experience", title: "Market understanding is built, not memorised." });
}
