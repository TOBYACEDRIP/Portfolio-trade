"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Measures the rendered width of a chart container so the SVG can be drawn in
 * real pixels. Annotation text then stays legible on phones instead of being
 * scaled down with the whole drawing.
 */
export function useChartWidth<T extends HTMLElement>(fallback: number, min: number, max: number) {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(fallback);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(Math.round(Math.min(max, Math.max(min, el.clientWidth))));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [min, max]);

  return { ref, width };
}
