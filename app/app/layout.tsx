import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Newsletter | Clerky",
  description: "Fique por dentro das últimas atualizações, recursos e ofertas especiais do Clerky",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17651638692"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17651638692');
        `}
      </Script>
      {children}
    </>
  );
}



