import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carreiras | Clerky",
  description: "Junte-se ao time da Clerky",
};

export default function CarreirasPage() {
  return (
    <PageLayout
      title="Carreiras"
      description="Junte-se ao time da Clerky"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Estamos sempre em busca de talentos apaixonados por tecnologia e
          inovação. Venha fazer parte do nosso time!
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve vagas disponíveis.
        </p>
      </div>
    </PageLayout>
  );
}

