"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  poster: string;
}

/**
 * Progressive-enhancement hero video.
 * Loads ONLY when: viewport >900px, no prefers-reduced-motion,
 * no Save-Data, and the hero is actually visible.
 * On mobile the element renders nothing at all — zero bytes downloaded.
 */
export default function HeroVideo({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    type ConnectionInfo = { saveData?: boolean };
    const conn: ConnectionInfo =
      (navigator as Navigator & { connection?: ConnectionInfo }).connection ??
      {};
    const blocked =
      window.innerWidth <= 900 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      conn.saveData === true;
    if (blocked) return;

    let io: IntersectionObserver | undefined;
    const boot = () => {
      v.src = src;
      v.load();
      v.addEventListener(
        "canplay",
        () => {
          v.play().catch(() => {});
          v.classList.add("on");
        },
        { once: true },
      );
    };

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            io?.disconnect();
            boot();
          }
        },
        { threshold: 0.1 },
      );
      io.observe(v);
    } else {
      boot();
    }
    return () => io?.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className="hv"
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
    />
  );
}
