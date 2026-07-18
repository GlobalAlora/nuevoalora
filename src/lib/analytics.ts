declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Our event names that map to one of Meta's standard events (needed for Meta's
// own optimization + standard Custom Audience building). Anything not listed
// here still reaches Meta, just as a custom event instead.
const META_STANDARD_EVENTS: Record<string, string> = {
  generate_lead: "Lead",
  chatbot_lead: "Lead",
  whatsapp_click: "Contact",
  schedule: "Schedule",
};

/** Pushes a custom event to GTM's dataLayer, GA4 and the Meta Pixel. Safe to call on the server (no-ops). */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  window.gtag?.("event", eventName, params);

  const metaEvent = META_STANDARD_EVENTS[eventName];
  if (metaEvent) window.fbq?.("track", metaEvent, params);
  else window.fbq?.("trackCustom", eventName, params);
}
