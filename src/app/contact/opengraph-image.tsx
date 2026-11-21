import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Contact";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Contact", title: "Let's talk." });
}
