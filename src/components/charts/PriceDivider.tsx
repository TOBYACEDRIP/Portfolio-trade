"use client";

import { motion } from "framer-motion";

/** Animated section divider — a price line that draws itself on scroll. */
export function PriceDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="h-8 w-full">
        <line x1="0" x2="1200" y1="20" y2="20" stroke="#101D36" strokeOpacity="0.08" />
        <motion.path
          d="M0 26 L120 22 L180 30 L260 14 L330 24 L420 18 L470 32 L560 8 L640 20 L720 16 L790 28 L880 12 L960 22 L1040 18 L1100 26 L1200 10"
          fill="none"
          stroke="#70C8F5"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.circle
          cx="560"
          cy="8"
          r="3.5"
          fill="#e7833c"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        />
      </svg>
    </div>
  );
}
