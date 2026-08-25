import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase-server";
import ArticleForm, { type ArticleFormData } from "@/components/admin/ArticleForm";

export default async function EditArticlePage(props: {
  params: Promise<{ id: string }>;
}) {
  const db = await getServerSupabase();
  if (!db) return null;
  const {
    data: { user },
  } = await db.auth.getUser();
  if (!user) redirect("/admin/login");

  const { id } = await props.params;

  let article: ArticleFormData = {};
  if (id !== "nueva") {
    const { data } = await db.from("articles").select("*").eq("id", id).maybeSingle();
    if (!data) notFound();
    article = data as ArticleFormData;
  }

  return (
    <div>
      <div className="adm-head">
        <h1>{article.id ? "Editar artículo" : "Nuevo artículo"}</h1>
        <Link href="/admin/actualidad">← Volver</Link>
      </div>
      <ArticleForm article={article} />
    </div>
  );
}
