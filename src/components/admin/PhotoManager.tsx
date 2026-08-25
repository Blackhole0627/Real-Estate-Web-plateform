"use client";

import { useRef, useState } from "react";
import { uploadImage } from "@/app/admin/actions";

interface Props {
  bucket: "listings" | "news";
  folder: string;
  initialPhotos: string[];
  initialCover: string | null;
  /** Single-image mode (article covers). */
  single?: boolean;
}

/** Resizes an image in the browser to max 1600px JPEG before upload. */
async function compress(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
  const w = Math.round(bitmap.width * scale);
  const h = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, w, h);
  return new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b ?? file), "image/jpeg", 0.82),
  );
}

export default function PhotoManager({
  bucket,
  folder,
  initialPhotos,
  initialCover,
  single = false,
}: Props) {
  const [photos, setPhotos] = useState<string[]>(initialPhotos);
  const [cover, setCover] = useState<string | null>(initialCover);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setBusy(true);
    setError(null);
    try {
      const added: string[] = [];
      for (const file of Array.from(files)) {
        const blob = await compress(file);
        const fd = new FormData();
        fd.set("bucket", bucket);
        fd.set("folder", folder || "subidas");
        fd.set("file", new File([blob], "foto.jpg", { type: "image/jpeg" }));
        const res = await uploadImage(fd);
        if (res.error) throw new Error(res.error);
        if (res.url) added.push(res.url);
      }
      setPhotos((p) => (single ? added.slice(-1) : [...p, ...added]));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error subiendo la imagen.");
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const move = (i: number, d: number) => {
    setPhotos((p) => {
      const next = [...p];
      const j = i + d;
      if (j < 0 || j >= next.length) return p;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  };

  const remove = (i: number) =>
    setPhotos((p) => {
      if (cover === p[i]) setCover(null);
      return p.filter((_, k) => k !== i);
    });

  return (
    <div className="adm-photos">
      {/* Serialized state for the surrounding server-action form */}
      <input
        type="hidden"
        name={single ? "image" : "photos"}
        value={single ? (photos[0] ?? "") : JSON.stringify(photos)}
      />
      {!single ? <input type="hidden" name="cover" value={cover ?? ""} /> : null}

      <div className="adm-photo-grid">
        {photos.map((url, i) => (
          <figure key={url} className={cover === url ? "is-cover" : ""}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt={`Foto ${i + 1}`} />
            {!single ? (
              <div className="adm-photo-tools">
                <button type="button" onClick={() => move(i, -1)} title="Mover antes">
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setCover(cover === url ? null : url)}
                  title="Usar como portada"
                >
                  ★
                </button>
                <button type="button" onClick={() => remove(i)} title="Quitar">
                  ✕
                </button>
                <button type="button" onClick={() => move(i, 1)} title="Mover después">
                  →
                </button>
              </div>
            ) : (
              <div className="adm-photo-tools">
                <button type="button" onClick={() => remove(i)} title="Quitar">
                  ✕
                </button>
              </div>
            )}
          </figure>
        ))}
      </div>

      <label className="adm-upload">
        {busy
          ? "Subiendo…"
          : single
            ? "Subir imagen (horizontal, 1600×900)"
            : "Añadir fotos"}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple={!single}
          disabled={busy}
          onChange={(e) => onFiles(e.target.files)}
        />
      </label>
      {!single && photos.length > 0 ? (
        <p className="adm-hint">
          La ★ marca la portada; sin ★ se usa la primera foto.
        </p>
      ) : null}
      {error ? <div className="adm-err">{error}</div> : null}
    </div>
  );
}
