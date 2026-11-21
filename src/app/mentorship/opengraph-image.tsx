import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Mentorship";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Mentorship", title: "The Liquidity Room & Private Mentorship." });
}
