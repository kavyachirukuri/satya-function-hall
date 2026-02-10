"use client";

import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-FX4CT0Z7TV";

export default function GoogleAnalytics() {
  useEffect(() => {
    // Run only in browser
    if (typeof window === "undefined") return;

    // Load gtag.js
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Use gtag already defined by beforeInteractive script, or define if missing
    const w = window as unknown as {
      dataLayer: unknown[];
      gtag: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    if (typeof w.gtag !== "function") {
      w.gtag = function (...args: unknown[]) {
        w.dataLayer.push(args);
      };
    }

    w.gtag("js", new Date());
    w.gtag("config", GA_MEASUREMENT_ID);
  }, []);

  return null;
}
