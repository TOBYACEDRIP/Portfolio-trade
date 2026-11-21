import { Activity, Brain, Crosshair, Droplets, Landmark, ShieldCheck, Zap, type LucideProps } from "lucide-react";
import type { LibraryCategoryId } from "@/config/library";

const icons: Record<LibraryCategoryId, React.ComponentType<LucideProps>> = {
  "market-structure": Activity,
  liquidity: Droplets,
  "points-of-interest": Crosshair,
  execution: Zap,
  fundamentals: Landmark,
  psychology: Brain,
  risk: ShieldCheck,
};

export function CategoryIcon({ id, ...props }: { id: LibraryCategoryId } & LucideProps) {
  const Icon = icons[id];
  return <Icon aria-hidden="true" {...props} />;
}
