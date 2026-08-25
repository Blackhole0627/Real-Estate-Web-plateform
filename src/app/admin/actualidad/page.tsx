import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase-server";

export default async function AdminArticles(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const db = await getServerSupabase();
  if (!db) return null;
  const {
    data: { user },
  } = await db.auth.getUser();
  if (!user) redirect("/admin/login");

  const { guardado } = await props.searchParams;
  const { data } = await db
    .from("articles")
    .select("id, slug, title, category, published, published_at")
    .order("published_at", { ascending: false });

  return (
    <div>
      <div className="adm-head">
        <h1>Actualidad</h1>
        <Link className="adm-btn" href="/admin/actualidad/nueva">
          + Nuevo artículo
        </Link>
      </div>
      {guardado ? <div className="adm-ok">Guardado y publicado.</div> : null}
      <table className="adm-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Visible</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(data ?? []).map((a) => (
            <tr key={a.id}>
              <td>{a.published_at}</td>
              <td>{a.title}</td>
              <td>{a.category}</td>
              <td>{a.published ? "Sí" : "No"}</td>
              <td>
                <Link href={`/admin/actualidad/${a.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {(data ?? []).length === 0 ? (
        <p className="adm-hint">
          Todavía no hay artículos en la base de datos. Si el sitio ya muestra
          artículos, falta ejecutar la migración de contenido (ver USER-TODO.md).
        </p>
      ) : null}
    </div>
  );
}
