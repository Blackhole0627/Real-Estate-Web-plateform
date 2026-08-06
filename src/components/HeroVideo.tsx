"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  poster: string;
}

/**
 * Progressive-enhancement hero video (Christie's-style behavior):
 * the poster photo always paints first; the video loads on ALL
 * viewports — including mobile — once the hero is visible, then
 * fades in. Users on Save-Data, very slow connections, or with
 * prefers-reduced-motion keep the photo only.
 */
export default function HeroVideo({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    type ConnectionInfo = { saveData?: boolean; effectiveType?: string };
    const conn: ConnectionInfo =
      (navigator as Navigator & { connection?: ConnectionInfo }).connection ??
      {};
    const blocked =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      conn.saveData === true ||
      conn.effectiveType === "slow-2g" ||
      conn.effectiveType === "2g";
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
