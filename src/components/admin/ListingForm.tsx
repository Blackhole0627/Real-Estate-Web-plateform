"use client";

import { useActionState } from "react";
import { saveListing, deleteListing, type ActionResult } from "@/app/admin/actions";
import PhotoManager from "./PhotoManager";

export interface ListingFormData {
  id?: string;
  slug?: string;
  name?: string;
  status?: string;
  price?: string;
  price_prefix?: string | null;
  price_suffix?: string | null;
  specs?: string;
  location?: string;
  body?: string;
  name_en?: string | null;
  specs_en?: string | null;
  body_en?: string | null;
  photos?: string[];
  cover?: string | null;
  listed_at?: string | null;
  published?: boolean;
  sort?: number;
}

export default function ListingForm({ listing }: { listing: ListingFormData }) {
  const [state, action, pending] = useActionState<ActionResult | null, FormData>(
    saveListing,
    null,
  );
  const l = listing;

  return (
    <form action={action} className="adm-form">
      {l.id ? <input type="hidden" name="id" value={l.id} /> : null}

      <div className="adm-grid2">
        <label>
          Nombre de la propiedad *
          <input name="name" defaultValue={l.name ?? ""} required />
        </label>
        <label>
          Ubicación *
          <input
            name="location"
            defaultValue={l.location ?? ""}
            placeholder="Sector, Ciudad"
            required
          />
        </label>
        <label>
          Estado *
          <select name="status" defaultValue={l.status ?? "En venta"}>
            <option>En venta</option>
            <option>En alquiler</option>
            <option>Obra nueva</option>
          </select>
        </label>
        <label>
          Características (una línea)
          <input
            name="specs"
            defaultValue={l.specs ?? ""}
            placeholder="3 hab · 2.5 baños · 180 m²"
          />
        </label>
        <label>
          Prefijo del precio
          <input
            name="price_prefix"
            defaultValue={l.price_prefix ?? ""}
            placeholder="Desde (opcional)"
          />
        </label>
        <label>
          Precio *
          <input
            name="price"
            defaultValue={l.price ?? ""}
            placeholder="US$ 250,000"
            required
          />
        </label>
        <label>
          Sufijo del precio
          <input
            name="price_suffix"
            defaultValue={l.price_suffix ?? ""}
            placeholder="/mes (opcional)"
          />
        </label>
        <label>
          Fecha de publicación (etiqueta Nuevo por 30 días)
          <input type="date" name="listed_at" defaultValue={l.listed_at ?? ""} />
        </label>
        <label>
          Orden en el catálogo (menor sale primero)
          <input type="number" name="sort" defaultValue={l.sort ?? 0} />
        </label>
        <label>
          Slug (URL; se genera solo si lo dejas vacío)
          <input name="slug" defaultValue={l.slug ?? ""} placeholder="villa-ejemplo" />
        </label>
      </div>

      <label className="adm-check">
        <input type="checkbox" name="published" defaultChecked={l.published ?? true} />
        Visible en la página
      </label>

      <label>
        Descripción (escribe como siempre: párrafos, líneas con «## » para
        subtítulos y «- » para listas)
        <textarea name="body" rows={14} defaultValue={l.body ?? ""} />
      </label>

      <details className="adm-en" open={Boolean(l.name_en || l.body_en)}>
        <summary>Versión en inglés (opcional — si se deja vacía, la página
        en inglés muestra el texto en español)</summary>
        <label>
          Name (EN)
          <input name="name_en" defaultValue={l.name_en ?? ""} />
        </label>
        <label>
          Specs (EN)
          <input
            name="specs_en"
            defaultValue={l.specs_en ?? ""}
            placeholder="3 beds · 2.5 baths · 180 m²"
          />
        </label>
        <label>
          Description (EN)
          <textarea name="body_en" rows={10} defaultValue={l.body_en ?? ""} />
        </label>
      </details>

      <h3>Fotos</h3>
      <PhotoManager
        bucket="listings"
        folder={l.slug ?? l.name ?? "propiedad"}
        initialPhotos={l.photos ?? []}
        initialCover={l.cover ?? null}
      />

      {state?.error ? <div className="adm-err">{state.error}</div> : null}
      <div className="adm-actions">
        <button className="adm-btn" type="submit" disabled={pending}>
          {pending ? "Guardando…" : "Guardar y publicar"}
        </button>
        {l.id ? (
          <button
            className="adm-danger"
            formAction={deleteListing}
            formNoValidate
            onClick={(e) => {
              if (!confirm("¿Eliminar esta propiedad de la página? Esta acción no se puede deshacer."))
                e.preventDefault();
            }}
          >
            Eliminar
          </button>
        ) : null}
      </div>
    </form>
  );
}
