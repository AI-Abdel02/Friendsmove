"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const CONSENT_KEY = "fm_cookie_consent";

/**
 * Loads GTM (and GA4 as fallback) only after the user has accepted
 * all cookies via the CookieBanner — DSGVO-compliant.
 *
 * Listens for:
 *  - "fm_consent" custom event (same-tab consent from CookieBanner)
 *  - localStorage "storage" event (cross-tab consent)
 *  - existing consent on mount (returning visitors)
 */
export default function AnalyticsScripts() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      try {
        if (localStorage.getItem(CONSENT_KEY) === "all") {
          setConsented(true);
        }
      } catch {
        // localStorage unavailable
      }
    };

    checkConsent();

    const handleConsentEvent = (e: Event) => {
      if ((e as CustomEvent).detail === "all") setConsented(true);
    };

    window.addEventListener("fm_consent", handleConsentEvent);
    window.addEventListener("storage", checkConsent);

    return () => {
      window.removeEventListener("fm_consent", handleConsentEvent);
      window.removeEventListener("storage", checkConsent);
    };
  }, []);

  if (!consented) return null;

  return (
    <>
      {/* ── Google Tag Manager ── */}
      {GTM_ID ? (
        <>
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      ) : GA_ID ? (
        /* ── GA4 direct (fallback when GTM is not configured) ── */
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
