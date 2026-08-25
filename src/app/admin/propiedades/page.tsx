import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase-server";

export default async function AdminListings(props: {
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
    .from("listings")
    .select("id, slug, name, status, price, published, sort, listed_at")
    .order("sort", { ascending: true });

  return (
    <div>
      <div className="adm-head">
        <h1>Propiedades</h1>
        <Link className="adm-btn" href="/admin/propiedades/nueva">
          + Nueva propiedad
        </Link>
      </div>
      {guardado ? <div className="adm-ok">Guardado y publicado.</div> : null}
      <table className="adm-table">
        <thead>
          <tr>
            <th>Orden</th>
            <th>Propiedad</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>Visible</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(data ?? []).map((l) => (
            <tr key={l.id}>
              <td>{l.sort}</td>
              <td>{l.name}</td>
              <td>{l.status}</td>
              <td>{l.price}</td>
              <td>{l.published ? "Sí" : "No"}</td>
              <td>
                <Link href={`/admin/propiedades/${l.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {(data ?? []).length === 0 ? (
        <p className="adm-hint">
          Todavía no hay propiedades en la base de datos. Si el sitio ya
          muestra propiedades, falta ejecutar la migración de contenido
          (ver USER-TODO.md).
        </p>
      ) : null}
    </div>
  );
}
