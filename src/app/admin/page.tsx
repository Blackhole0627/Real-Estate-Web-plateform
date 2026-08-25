import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase-server";

export default async function AdminHome() {
  const db = await getServerSupabase();
  if (!db) return null;
  const {
    data: { user },
  } = await db.auth.getUser();
  if (!user) redirect("/admin/login");

  const [{ count: nListings }, { count: nArticles }] = await Promise.all([
    db.from("listings").select("*", { count: "exact", head: true }),
    db.from("articles").select("*", { count: "exact", head: true }),
  ]);

  return (
    <div className="adm-dash">
      <h1>Hola 👋</h1>
      <p>¿Qué quieres gestionar hoy?</p>
      <div className="adm-cards">
        <Link href="/admin/propiedades" className="adm-card">
          <strong>{nListings ?? 0}</strong>
          <span>Propiedades</span>
        </Link>
        <Link href="/admin/actualidad" className="adm-card">
          <strong>{nArticles ?? 0}</strong>
          <span>Artículos</span>
        </Link>
      </div>
      <p className="adm-hint">
        Los cambios que guardes se publican en la página en cuestión de
        segundos. Fotos: usa imágenes horizontales; el panel las comprime
        automáticamente antes de subirlas.
      </p>
    </div>
  );
}
