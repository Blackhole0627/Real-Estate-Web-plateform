import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase-server";
import ListingForm, { type ListingFormData } from "@/components/admin/ListingForm";

export default async function EditListingPage(props: {
  params: Promise<{ id: string }>;
}) {
  const db = await getServerSupabase();
  if (!db) return null;
  const {
    data: { user },
  } = await db.auth.getUser();
  if (!user) redirect("/admin/login");

  const { id } = await props.params;

  let listing: ListingFormData = {};
  if (id !== "nueva") {
    const { data } = await db.from("listings").select("*").eq("id", id).maybeSingle();
    if (!data) notFound();
    listing = data as ListingFormData;
  }

  return (
    <div>
      <div className="adm-head">
        <h1>{listing.id ? `Editar: ${listing.name}` : "Nueva propiedad"}</h1>
        <Link href="/admin/propiedades">← Volver</Link>
      </div>
      <ListingForm listing={listing} />
    </div>
  );
}
