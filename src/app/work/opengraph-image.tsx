import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — My work";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "My work", title: "Selected work." });
}
