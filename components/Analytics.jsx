import { useEffect } from "react";
import Script from "next/script";

export default function Analytics()  {
  const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  useEffect(() => {
    if (!analyticsId) {
      console.warn("Google Analytics ID não configurado.");
      return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", analyticsId);
  }, [analyticsId]);

  return (
    <>
      {analyticsId && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
};



