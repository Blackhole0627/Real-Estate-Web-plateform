"use client";

import { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { getConsent, metaTrack, META_PIXEL_ID } from "@/lib/track";

type FbqFn = ((...args: unknown[]) => void) & {
  queue?: unknown[];
  callMethod?: (...args: unknown[]) => void;
  version?: string;
  loaded?: boolean;
};

function loadPixel() {
  if (window.fbq) return;
  const fbq: FbqFn = (...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue?.push(args);
  };
  fbq.queue = [];
  fbq.version = "2.0";
  fbq.loaded = true;
  window.fbq = fbq;
  (window as unknown as { _fbq?: unknown })._fbq = fbq;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  fbq("init", META_PIXEL_ID);
}

const subscribe = (cb: () => void) => {
  window.addEventListener("onker-consent", cb);
  return () => window.removeEventListener("onker-consent", cb);
};

/**
 * Consent-gated Meta Pixel: loads only after the visitor accepts
 * advertising cookies, fires PageView per route, and captures Contact
 * events (WhatsApp / phone / email clicks) globally via delegation.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const ready = useSyncExternalStore(
    subscribe,
    () => getConsent() === "accepted",
    () => false,
  );

  useEffect(() => {
    if (ready) loadPixel();
  }, [ready]);

  useEffect(() => {
    if (ready) metaTrack("PageView");
  }, [ready, pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (href.includes("wa.me/")) {
        metaTrack("Contact", { contact_method: "whatsapp" });
      } else if (href.startsWith("tel:")) {
        metaTrack("Contact", { contact_method: "phone" });
      } else if (href.startsWith("mailto:")) {
        metaTrack("Contact", { contact_method: "email" });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
