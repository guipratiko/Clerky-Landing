import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solução para Suporte | Clerky",
  description: "Automatize o atendimento e resolva dúvidas 24/7",
};

export default function SuportePage() {
  return (
    <PageLayout
      title="Solução para Suporte"
      description="Automatize o atendimento e resolva dúvidas 24/7"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Resolva dúvidas, faça troubleshooting e escale para humanos quando
          necessário. Suporte 24/7 sem aumentar sua equipe.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre a solução para suporte.
        </p>
      </div>
    </PageLayout>
  );
}

