import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Uso | Clerky",
  description: "Veja como empresas usam a Clerky em diferentes cenários",
};

export default function CasosUsoPage() {
  return (
    <PageLayout
      title="Casos de Uso"
      description="Veja como empresas usam a Clerky em diferentes cenários"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Descubra casos reais de empresas que transformaram seus resultados
          usando a Clerky em diferentes segmentos e aplicações.
        </p>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve cases completos de clientes.
        </p>
      </div>
    </PageLayout>
  );
}

