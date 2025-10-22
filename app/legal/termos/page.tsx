import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Clerky",
  description: "Termos e condições de uso da plataforma Clerky",
};

export default function TermosPage() {
  return (
    <PageLayout
      title="Termos de Uso"
      description="Termos e condições de uso da plataforma Clerky"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Última atualização: Janeiro de 2025
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          1. Aceitação dos Termos
        </h2>
        <p className="text-text-body">
          Ao utilizar a plataforma Clerky, você concorda com estes Termos de Uso.
        </p>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve termos completos.
        </p>
      </div>
    </PageLayout>
  );
}

