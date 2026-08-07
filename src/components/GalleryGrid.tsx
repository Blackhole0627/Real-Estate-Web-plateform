"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "./icons";

interface Props {
  photos: string[];
  name: string;
}

/** Photo grid where every item opens a full-screen lightbox (arrows, keyboard, swipe). */
export default function GalleryGrid({ photos, name }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const [touchX, setTouchX] = useState(0);

  const step = useCallback(
    (d: number) =>
      setOpen((o) => (o === null ? o : (o + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <>
      <div className="l-gallery">
        {photos.map((src, i) => (
          <button
            type="button"
            className="l-gph"
            key={src}
            onClick={() => setOpen(i)}
            aria-label={`Ver foto ${i + 1} de ${name} en pantalla completa`}
          >
            <Image
              src={src}
              alt={`${name} — foto ${i + 1}`}
              fill
              loading="lazy"
              sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="lbx"
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${name}`}
          onClick={() => setOpen(null)}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button
            type="button"
            className="lbx-x"
            aria-label="Cerrar"
            onClick={() => setOpen(null)}
          >
            ×
          </button>
          <button
            type="button"
            className="lbx-nav prev"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ArrowLeft />
          </button>
          <div className="lbx-img" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[open]}
              alt={`${name} — foto ${open + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <button
            type="button"
            className="lbx-nav next"
            aria-label="Foto siguiente"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ArrowRight />
          </button>
          <div className="lbx-count" aria-live="polite">
            {open + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
