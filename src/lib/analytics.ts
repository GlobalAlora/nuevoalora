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

function sendToMeta(eventName: string, params?: Record<string, unknown>): void {
  const metaEvent = META_STANDARD_EVENTS[eventName];
  if (metaEvent) window.fbq?.("track", metaEvent, params);
  else window.fbq?.("trackCustom", eventName, params);
}

/** Pushes a custom event to GTM's dataLayer, GA4 and the Meta Pixel. Safe to call on the server (no-ops). */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  // gtag/fbq load afterInteractive (deferred on purpose, so they never
  // compete with the page's own content for bandwidth/CPU on mobile — see
  // the Core Web Vitals fix this guarded against). That leaves a brief
  // window, right after hydration, where a page whose event fires
  // immediately on mount could call this before either script has loaded.
  // One retry after a beat covers that without holding up every other call.
  if (window.gtag) {
    window.gtag("event", eventName, params);
  } else {
    setTimeout(() => window.gtag?.("event", eventName, params), 400);
  }

  if (window.fbq) {
    sendToMeta(eventName, params);
  } else {
    setTimeout(() => sendToMeta(eventName, params), 400);
  }
}
