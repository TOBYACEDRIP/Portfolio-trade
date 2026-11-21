import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — About";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "About", title: "Engineer by training. Trader by discipline." });
}
