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
  title: "Clerky - Plataforma de Automação e Gestão de Comunicação Multicanal",
  description:
    "O Clerky é uma plataforma de automação e gestão de comunicação que centraliza WhatsApp, Instagram e outras integrações. Automatize atendimento, gerencie relacionamento com clientes e execute campanhas em escala.",
  keywords: [
    "WhatsApp",
    "Instagram",
    "Automação",
    "Comunicação Multicanal",
    "CRM",
    "Kanban",
    "IA",
    "Agente de IA",
    "OpenAI",
    "GPT-4",
    "Disparo em Massa",
    "Workflows",
    "MindClerky",
    "Typebot",
    "Meta",
    "API",
    "Webhook",
    "Integração",
    "Apps Móveis",
    "iOS",
    "Android",
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
    title: "Clerky - Plataforma de Automação e Gestão de Comunicação Multicanal",
    description:
      "Centralize WhatsApp, Instagram e outras integrações. Automatize atendimento com IA, gerencie no CRM Kanban, dispare campanhas e execute workflows visuais.",
    url: "https://clerky.com.br",
    siteName: "Clerky",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Clerky - Plataforma de Automação e Gestão de Comunicação Multicanal",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clerky - Plataforma de Automação e Gestão de Comunicação Multicanal",
    description:
      "Centralize WhatsApp, Instagram e outras integrações. Automatize atendimento com IA, CRM Kanban e workflows visuais.",
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
  icons: {
    icon: [
      { url: "/img/favicon.png", type: "image/png" },
      { url: "/img/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/img/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/img/favicon.png", type: "image/png" },
    ],
    shortcut: "/img/favicon.png",
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
      "Plataforma de automação e gestão de comunicação multicanal. Centraliza WhatsApp, Instagram e outras integrações. CRM Kanban, agentes de IA, workflows visuais e apps móveis.",
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
    name: "Clerky",
    description:
      "Plataforma de automação e gestão de comunicação multicanal que centraliza WhatsApp, Instagram e outras integrações. Inclui agentes de IA, CRM Kanban, workflows visuais (MindClerky), disparo em massa, gerenciamento de grupos e apps móveis nativos.",
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
