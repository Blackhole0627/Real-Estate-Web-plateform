"use client";

import { useActionState } from "react";
import { saveArticle, deleteArticle, type ActionResult } from "@/app/admin/actions";
import PhotoManager from "./PhotoManager";

export interface ArticleFormData {
  id?: string;
  slug?: string;
  title?: string;
  category?: string;
  body?: string;
  title_en?: string | null;
  body_en?: string | null;
  image?: string | null;
  published?: boolean;
  published_at?: string;
}

const CATEGORIES = [
  "Mercado",
  "Inversión",
  "Finanzas",
  "Economía",
  "Legal",
  "Guías",
  "Tendencias",
];

export default function ArticleForm({ article }: { article: ArticleFormData }) {
  const [state, action, pending] = useActionState<ActionResult | null, FormData>(
    saveArticle,
    null,
  );
  const a = article;

  return (
    <form action={action} className="adm-form">
      {a.id ? <input type="hidden" name="id" value={a.id} /> : null}

      <label>
        Título *
        <input name="title" defaultValue={a.title ?? ""} required />
      </label>

      <div className="adm-grid2">
        <label>
          Categoría
          <select name="category" defaultValue={a.category ?? "Mercado"}>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          Fecha
          <input
            type="date"
            name="published_at"
            defaultValue={a.published_at ?? ""}
          />
        </label>
        <label>
          Slug (URL; se genera solo si lo dejas vacío)
          <input name="slug" defaultValue={a.slug ?? ""} />
        </label>
      </div>

      <label className="adm-check">
        <input type="checkbox" name="published" defaultChecked={a.published ?? true} />
        Visible en la página
      </label>

      <label>
        Contenido * (el primer párrafo funciona como resumen; escribe párrafos
        normales, subtítulos en su propia línea y listas con «* »)
        <textarea name="body" rows={18} defaultValue={a.body ?? ""} required />
      </label>

      <details className="adm-en" open={Boolean(a.title_en || a.body_en)}>
        <summary>Versión en inglés (opcional — si se deja vacía, la página en
        inglés muestra el artículo en español)</summary>
        <label>
          Title (EN)
          <input name="title_en" defaultValue={a.title_en ?? ""} />
        </label>
        <label>
          Content (EN)
          <textarea name="body_en" rows={12} defaultValue={a.body_en ?? ""} />
        </label>
      </details>

      <h3>Imagen de portada (1600×900)</h3>
      <PhotoManager
        bucket="news"
        folder={a.slug ?? a.title ?? "articulo"}
        initialPhotos={a.image ? [a.image] : []}
        initialCover={null}
        single
      />

      {state?.error ? <div className="adm-err">{state.error}</div> : null}
      <div className="adm-actions">
        <button className="adm-btn" type="submit" disabled={pending}>
          {pending ? "Guardando…" : "Guardar y publicar"}
        </button>
        {a.id ? (
          <button
            className="adm-danger"
            formAction={deleteArticle}
            formNoValidate
            onClick={(e) => {
              if (!confirm("¿Eliminar este artículo? Esta acción no se puede deshacer."))
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
