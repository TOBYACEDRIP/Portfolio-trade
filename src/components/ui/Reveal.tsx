"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds — use small values (0–0.3) for gentle staggering. */
  delay?: number;
  /** Render as a different element, e.g. "li" or "section". */
  as?: "div" | "li" | "section" | "article" | "header";
};

/**
 * Subtle entrance animation: fades and rises 12px once, when scrolled into view.
 * Disabled entirely for users who prefer reduced motion.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
