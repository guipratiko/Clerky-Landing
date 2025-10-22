import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limites e Cotas | Clerky",
  description: "Entenda os limites de uso e cotas da API",
};

export default function LimitesPage() {
  return (
    <PageLayout
      title="Limites e Cotas"
      description="Entenda os limites de uso e cotas da API"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Informações sobre limites de requisições da API, cotas de mensagens
          e regras de rate limiting para cada plano.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Rate Limiting
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Starter: 100 requisições/minuto</li>
          <li>Pro: 500 requisições/minuto</li>
          <li>Enterprise: customizável</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre limites.
        </p>
      </div>
    </PageLayout>
  );
}

