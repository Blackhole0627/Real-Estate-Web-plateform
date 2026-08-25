"use client";

import { useSyncExternalStore } from "react";

const DAYS_30 = 30 * 24 * 60 * 60 * 1000;

const subscribe = () => () => {};

/**
 * "Nuevo" chip for recently listed properties. Evaluated in the browser so it
 * expires exactly 30 days after listedAt, independent of when the site was
 * last deployed (pages are static; the server snapshot renders nothing).
 */
export default function NewBadge({
  listedAt,
  lang = "es",
}: {
  listedAt?: string;
  lang?: "es" | "en";
}) {
  const fresh = useSyncExternalStore(
    subscribe,
    () => (listedAt ? Date.now() - +new Date(listedAt) < DAYS_30 : false),
    () => false,
  );

  if (!fresh) return null;
  return <span className="p-new">{lang === "en" ? "New" : "Nuevo"}</span>;
}
