"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Shared carousel state: moves one card at a time, loops, and adapts
 * cards-per-view to the viewport (1 / 2 / 3).
 */
export function useCarousel(count: number) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const compute = () =>
      setPerView(window.innerWidth <= 640 ? 1 : window.innerWidth <= 1000 ? 2 : 3);
    compute();
    window.addEventListener("resize", compute, { passive: true });
    return () => window.removeEventListener("resize", compute);
  }, []);

  const max = Math.max(0, count - perView);
  const clamped = Math.min(index, max);

  const next = useCallback(
    () => setIndex((i) => (i >= max ? 0 : i + 1)),
    [max],
  );
  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? max : i - 1)),
    [max],
  );

  return {
    next,
    prev,
    trackStyle: {
      transform: `translateX(-${clamped * (100 / perView)}%)`,
    } as React.CSSProperties,
  };
}
