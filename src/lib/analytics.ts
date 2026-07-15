declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Pushes a custom event to the GTM dataLayer. Safe to call on the server (no-ops). */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}
