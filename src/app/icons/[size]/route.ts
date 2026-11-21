import { renderMonogram } from "@/lib/monogram";

const sizes = ["192", "512"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return sizes.map((size) => ({ size }));
}

/** PWA manifest icons: /icons/192 and /icons/512 */
export async function GET(_req: Request, { params }: { params: Promise<{ size: string }> }) {
  const { size } = await params;
  return renderMonogram(Number(size));
}
