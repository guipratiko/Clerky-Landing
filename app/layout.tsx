import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ConditionalLayout } from "./(components)/ConditionalLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clerky - Hub de Integração WhatsApp com IA",
  description:
    "Conecte seu WhatsApp a qualquer sistema. A Clerky é o Hub de Integração com IA: crie agentes, automatize vendas e suporte, dispare campanhas e gerencie clientes no Kanban.",
  keywords: [
    "WhatsApp",
    "API",
    "Webhook",
    "Integração",
    "IA",
    "Agente",
    "CRM",
    "Kanban",
    "Disparo em Massa",
    "Automação",
  ],
  authors: [{ name: "Clerky" }],
  creator: "Clerky",
  publisher: "Clerky",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://clerky.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clerky - Hub de Integração WhatsApp com IA",
    description:
      "Conecte seu WhatsApp a qualquer sistema via API ou Webhook. Crie agentes de IA sem código, gerencie no CRM Kanban e automatize campanhas.",
    url: "https://clerky.com.br",
    siteName: "Clerky",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Clerky - Hub de Integração WhatsApp",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clerky - Hub de Integração WhatsApp com IA",
    description:
      "Conecte seu WhatsApp a qualquer sistema via API ou Webhook. Crie agentes de IA sem código.",
    images: ["/og-image.svg"],
    creator: "@clerky_ia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "", // TODO: Adicionar Google Search Console verification
    // yandex: "", // TODO: Adicionar Yandex verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clerky",
    url: "https://clerky.com.br",
    logo: "https://clerky.com.br/img/logo3.png",
    description:
      "Hub de Integração WhatsApp com IA, API e Webhook. CRM Kanban e Disparo em Massa.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["pt-BR", "en", "es"],
    },
    sameAs: [
      "https://instagram.com/clerky_ia",
      "https://youtube.com/@clerky",
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Clerky Hub de Integração",
    description:
      "Plataforma de integração WhatsApp com IA, permitindo criar agentes inteligentes, CRM Kanban e disparo em massa sem código.",
    brand: {
      "@type": "Brand",
      name: "Clerky",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/img copy/favicon.png" type="image/png" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
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
        
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
