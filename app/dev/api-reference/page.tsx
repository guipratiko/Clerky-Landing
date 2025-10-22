import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Reference | Clerky",
  description: "Documentação completa da API REST da Clerky",
};

export default function APIReferencePage() {
  return (
    <PageLayout
      title="API Reference"
      description="Documentação completa da API REST da Clerky"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Documentação técnica completa de todos os endpoints da API REST da
          Clerky. Inclui exemplos de requisições e respostas em múltiplas
          linguagens.
        </p>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve documentação completa da API.
        </p>
      </div>
    </PageLayout>
  );
}

