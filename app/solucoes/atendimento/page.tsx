import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solução para Atendimento | Clerky",
  description: "Melhore a experiência do cliente com atendimento inteligente",
};

export default function AtendimentoPage() {
  return (
    <PageLayout
      title="Solução para Atendimento"
      description="Melhore a experiência do cliente com atendimento inteligente"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Ofereça atendimento rápido e personalizado com agentes de IA que
          aprendem com cada interação.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre a solução para atendimento.
        </p>
      </div>
    </PageLayout>
  );
}

