import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solução para Prospecção | Clerky",
  description: "Encontre e engaje novos clientes de forma automatizada",
};

export default function ProspeccaoPage() {
  return (
    <PageLayout
      title="Solução para Prospecção"
      description="Encontre e engaje novos clientes de forma automatizada"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Automatize a prospecção de clientes com agentes inteligentes que
          iniciam conversas e qualificam leads.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre a solução para prospecção.
        </p>
      </div>
    </PageLayout>
  );
}

