/**
 * GA4 helpers — generic events only; never pass user-entered text, form values, or PII.
 * The tag loads from `BaseLayout.astro`; these no-op if `gtag` is absent.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtagEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}

/** Prefer delegated clicks from `BaseLayout.astro` for tel: / mailto: links. */
export function gaPhoneClick(): void {
  gtagEvent("phone_click");
}

export function gaEmailClick(): void {
  gtagEvent("email_click");
}

export function gaGetStartedClick(): void {
  gtagEvent("get_started_click");
}

/** Call when a contact widget becomes visible or interactive — never pass form fields. */
export function gaContactWidgetOpened(): void {
  gtagEvent("contact_widget_opened");
}

/** Call when a scheduling widget becomes visible or interactive — never pass form fields. */
export function gaScheduleWidgetOpened(): void {
  gtagEvent("schedule_widget_opened");
}
