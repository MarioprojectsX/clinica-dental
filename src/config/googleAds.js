// Google Analytics Configuration
export const GA_MEASUREMENT_ID = 'G-C0KEFB65T9';

// GA4 Event Names
export const GA_EVENTS = {
  FORM_SUBMIT: 'form_submit',
  WHATSAPP_CLICK: 'whatsapp_click',
  APPOINTMENT_PAGE_VIEW: 'appointment_page_view',
  PHONE_CLICK: 'phone_click',
  SOCIAL_CLICK: 'social_click',
  TREATMENT_VIEW: 'treatment_view',
  CTA_CLICK: 'cta_click',
  LINK_CLICK: 'link_click',
};

// Helper function to track GA4 events
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
}
