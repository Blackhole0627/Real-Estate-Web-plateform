import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getServerSupabase } from "@/lib/supabase-server";
import { signOut } from "./actions";

export const metadata: Metadata = {
  title: "Panel de administración",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const db = await getServerSupabase();

  if (!db) {
    return (
      <main className="adm-gate">
        <div>
          <h1>Panel no disponible</h1>
          <p>
            La base de datos aún no está configurada. Completa los pasos de
            USER-TODO.md (crear el proyecto de Supabase y definir las variables
            de entorno) y vuelve a desplegar.
          </p>
        </div>
      </main>
    );
  }

  const {
    data: { user },
  } = await db.auth.getUser();

  return (
    <div className="adm">
      {user ? (
        <header className="adm-top">
          <Link href="/admin" className="adm-brand">
            <Image
              src="/assets/logo-black.png"
              alt="Onker Home"
              width={84}
              height={36}
            />
            <span>Panel</span>
          </Link>
          <nav>
            <Link href="/admin/propiedades">Propiedades</Link>
            <Link href="/admin/actualidad">Actualidad</Link>
            <Link href="/" target="_blank" rel="noopener">
              Ver la página
            </Link>
          </nav>
          <form action={signOut}>
            <button className="adm-out" type="submit">
              Salir
            </button>
          </form>
        </header>
      ) : null}
      <main className="adm-main">{children}</main>
    </div>
  );
}
