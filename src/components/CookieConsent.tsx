"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getConsent, setConsent } from "@/lib/track";

const TEXT = {
  es: {
    body: "Usamos cookies publicitarias para medir nuestras campañas y mostrarte propiedades relevantes. Puedes aceptarlas o rechazarlas; la página funciona igual en ambos casos.",
    accept: "Aceptar",
    reject: "Rechazar",
    policy: "Política de privacidad",
  },
  en: {
    body: "We use advertising cookies to measure our campaigns and show you relevant properties. You can accept or decline them; the site works the same either way.",
    accept: "Accept",
    reject: "Decline",
    policy: "Privacy policy",
  },
};

const subscribe = (cb: () => void) => {
  window.addEventListener("onker-consent", cb);
  return () => window.removeEventListener("onker-consent", cb);
};

export default function CookieConsent() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(
    subscribe,
    () => getConsent(),
    () => "rejected" as const, // hidden during SSR/hydration
  );
  const t = TEXT[pathname?.startsWith("/en") ? "en" : "es"];

  // Only ask once, and never interrupt the admin.
  if (consent !== null || pathname?.startsWith("/admin")) return null;

  return (
    <div className="cc" role="dialog" aria-live="polite">
      <p>
        {t.body} <Link href="/politica-de-privacidad">{t.policy}</Link>
      </p>
      <div className="cc-actions">
        <button className="cc-accept" onClick={() => setConsent("accepted")}>
          {t.accept}
        </button>
        <button className="cc-reject" onClick={() => setConsent("rejected")}>
          {t.reject}
        </button>
      </div>
    </div>
  );
}
