/**
 * GTM / dataLayer helpers. Generic events only; never pass user-entered text,
 * form values, or PII. No-ops if dataLayer is unavailable.
 */
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function dataLayerEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...(params ?? {}) });
}

/** Prefer delegated clicks from `BaseLayout.astro` for tel: / mailto: links. */
export function gaPhoneClick(): void {
  dataLayerEvent("phone_click");
}

export function gaEmailClick(): void {
  dataLayerEvent("email_click");
}

export function gaGetStartedClick(): void {
  dataLayerEvent("get_started_click");
}

/** Call when a contact widget becomes visible or interactive. Never pass form fields. */
export function gaContactWidgetOpened(): void {
  dataLayerEvent("contact_widget_opened");
}

/** Call when a scheduling widget becomes visible or interactive. Never pass form fields. */
export function gaScheduleWidgetOpened(): void {
  dataLayerEvent("schedule_widget_opened");
}
