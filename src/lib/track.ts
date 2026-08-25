export const META_PIXEL_ID = "228203565063501";
export const CONSENT_KEY = "onker-cookies";

export type ConsentValue = "accepted" | "rejected" | null;

export function getConsent(): ConsentValue {
  try {
    return (localStorage.getItem(CONSENT_KEY) as ConsentValue) ?? null;
  } catch {
    return null;
  }
}

export function setConsent(value: Exclude<ConsentValue, null>) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // storage unavailable — treat as session-only choice
  }
  window.dispatchEvent(new CustomEvent("onker-consent", { detail: value }));
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Sends one Meta event through both channels: the browser Pixel and the
 * Conversions API route, sharing an eventID so Meta deduplicates them.
 * Silently does nothing without advertising-cookie consent.
 */
export function metaTrack(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (getConsent() !== "accepted") return;

  const eventId = `${event}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  window.fbq?.("track", event, data ?? {}, { eventID: eventId });
  fetch("/api/meta", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, data, eventId, url: window.location.href }),
    keepalive: true,
  }).catch(() => {});
}
