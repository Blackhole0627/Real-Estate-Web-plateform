"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase-server";

async function requireDb() {
  const db = await getServerSupabase();
  if (!db) throw new Error("Supabase no está configurado.");
  return db;
}

async function requireSession() {
  const db = await requireDb();
  const {
    data: { user },
  } = await db.auth.getUser();
  if (!user) redirect("/admin/login");
  return db;
}

export async function signIn(_prev: unknown, formData: FormData) {
  const db = await requireDb();
  const { error } = await db.auth.signInWithPassword({
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? ""),
  });
  if (error) return { error: "Correo o contraseña incorrectos." };
  redirect("/admin");
}

export async function signOut() {
  const db = await requireDb();
  await db.auth.signOut();
  redirect("/admin/login");
}

/** Revalidates every public page affected by content changes (ES + EN). */
function revalidateSite() {
  revalidatePath("/", "layout");
}

export interface ActionResult {
  error?: string;
  ok?: boolean;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function saveListing(
  _prev: unknown,
  formData: FormData,
): Promise<ActionResult> {
  const db = await requireSession();

  const id = String(formData.get("id") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  if (!name) return { error: "El nombre es obligatorio." };
  const slug = String(formData.get("slug") ?? "").trim() || slugify(name);

  const row = {
    slug,
    name,
    status: String(formData.get("status") ?? "En venta"),
    price: String(formData.get("price") ?? "").trim(),
    price_prefix: String(formData.get("price_prefix") ?? "").trim() || null,
    price_suffix: String(formData.get("price_suffix") ?? "").trim() || null,
    specs: String(formData.get("specs") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim(),
    body: String(formData.get("body") ?? ""),
    name_en: String(formData.get("name_en") ?? "").trim() || null,
    specs_en: String(formData.get("specs_en") ?? "").trim() || null,
    body_en: String(formData.get("body_en") ?? "") || null,
    photos: JSON.parse(String(formData.get("photos") ?? "[]")) as string[],
    cover: String(formData.get("cover") ?? "").trim() || null,
    listed_at: String(formData.get("listed_at") ?? "").trim() || null,
    published: formData.get("published") === "on",
    sort: Number(formData.get("sort") ?? 0) || 0,
    updated_at: new Date().toISOString(),
  };
  if (!row.price) return { error: "El precio es obligatorio." };
  if (!row.location) return { error: "La ubicación es obligatoria." };

  const q = id
    ? db.from("listings").update(row).eq("id", id)
    : db.from("listings").insert(row);
  const { error } = await q;
  if (error)
    return {
      error: error.message.includes("duplicate")
        ? `Ya existe una propiedad con el slug "${slug}".`
        : `No se pudo guardar: ${error.message}`,
    };
  revalidateSite();
  redirect("/admin/propiedades?guardado=1");
}

export async function deleteListing(formData: FormData): Promise<void> {
  const db = await requireSession();
  const id = String(formData.get("id") ?? "");
  if (id) {
    await db.from("listings").delete().eq("id", id);
    revalidateSite();
  }
  redirect("/admin/propiedades");
}

export async function saveArticle(
  _prev: unknown,
  formData: FormData,
): Promise<ActionResult> {
  const db = await requireSession();

  const id = String(formData.get("id") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  if (!title) return { error: "El título es obligatorio." };
  const slug = String(formData.get("slug") ?? "").trim() || slugify(title);

  const row = {
    slug,
    title,
    category: String(formData.get("category") ?? "Mercado"),
    body: String(formData.get("body") ?? ""),
    title_en: String(formData.get("title_en") ?? "").trim() || null,
    body_en: String(formData.get("body_en") ?? "") || null,
    image: String(formData.get("image") ?? "").trim() || null,
    published: formData.get("published") === "on",
    published_at:
      String(formData.get("published_at") ?? "").trim() ||
      new Date().toISOString().slice(0, 10),
    updated_at: new Date().toISOString(),
  };
  if (!row.body.trim()) return { error: "El contenido es obligatorio." };

  const q = id
    ? db.from("articles").update(row).eq("id", id)
    : db.from("articles").insert(row);
  const { error } = await q;
  if (error)
    return {
      error: error.message.includes("duplicate")
        ? `Ya existe un artículo con el slug "${slug}".`
        : `No se pudo guardar: ${error.message}`,
    };
  revalidateSite();
  redirect("/admin/actualidad?guardado=1");
}

export async function deleteArticle(formData: FormData): Promise<void> {
  const db = await requireSession();
  const id = String(formData.get("id") ?? "");
  if (id) {
    await db.from("articles").delete().eq("id", id);
    revalidateSite();
  }
  redirect("/admin/actualidad");
}

/**
 * Uploads one image (already resized in the browser) to a storage bucket
 * and returns its public URL.
 */
export async function uploadImage(formData: FormData): Promise<ActionResult & { url?: string }> {
  const db = await requireSession();
  const bucket = String(formData.get("bucket") ?? "listings");
  if (bucket !== "listings" && bucket !== "news")
    return { error: "Bucket inválido." };
  const folder = slugify(String(formData.get("folder") ?? "subidas")) || "subidas";
  const file = formData.get("file");
  if (!(file instanceof File)) return { error: "Archivo inválido." };
  if (file.size > 4 * 1024 * 1024)
    return { error: "La imagen supera 4 MB; usa una más liviana." };

  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;
  const { error } = await db.storage.from(bucket).upload(path, file, {
    contentType: file.type || "image/jpeg",
  });
  if (error) return { error: `No se pudo subir la imagen: ${error.message}` };
  return { ok: true, url: db.storage.from(bucket).getPublicUrl(path).data.publicUrl };
}
