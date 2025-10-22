import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solução para Saúde | Clerky",
  description: "Automatize agendamentos e lembretes de consultas",
};

export default function SaudePage() {
  return (
    <PageLayout
      title="Solução para Saúde"
      description="Automatize agendamentos e lembretes de consultas"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Envie lembretes de consultas, confirme agendamentos e melhore a
          comunicação com pacientes.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre a solução para saúde.
        </p>
      </div>
    </PageLayout>
  );
}

