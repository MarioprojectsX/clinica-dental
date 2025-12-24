// Google Analytics Configuration
export const GOOGLE_ADS_TAG_ID = 'G-C0KEFB65T9';

// Conversion Labels
export const CONVERSION_LABELS = {
  FORM_SUBMIT: 'form_submit',
  WHATSAPP_CLICK: 'whatsapp_click',
  APPOINTMENT_PAGE_VIEW: 'appointment_page_view',
  PHONE_CLICK: 'phone_click',
  SOCIAL_CLICK: 'social_click',
  TREATMENT_VIEW: 'treatment_view',
  CTA_CLICK: 'cta_click',
  LINK_CLICK: 'link_click',
};

// Helper function to track conversions
export function trackConversion(label, value = null) {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    const conversionData = {
      send_to: `${GOOGLE_ADS_TAG_ID}/${label}`,
    };

    if (value !== null) {
      conversionData.value = value;
      conversionData.currency = 'EUR';
    }

    window.gtag('event', 'conversion', conversionData);
  }
}
