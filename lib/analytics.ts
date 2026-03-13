declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Push a tracking event to GTM's dataLayer.
 * GTM routes events to GA4 and any other configured tags.
 * Safe to call server-side (no-ops when window is unavailable).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  (window.dataLayer = window.dataLayer || []).push({
    event: eventName,
    ...params,
  });
}
