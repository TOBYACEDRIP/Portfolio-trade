import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Connect";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Connect", title: "Telegram, email and social platforms." });
}
