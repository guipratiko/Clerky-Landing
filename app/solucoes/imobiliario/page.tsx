import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solução para Imobiliário | Clerky",
  description: "Qualifique leads e agende visitas automaticamente",
};

export default function ImobiliarioPage() {
  return (
    <PageLayout
      title="Solução para Imobiliário"
      description="Qualifique leads e agende visitas automaticamente"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Automatize o envio de imóveis, qualifique interessados e agende
          visitas pelo WhatsApp.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre a solução para imobiliário.
        </p>
      </div>
    </PageLayout>
  );
}

