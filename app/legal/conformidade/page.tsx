import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conformidade | Clerky",
  description: "Certificações e conformidades da plataforma",
};

export default function ConformidadePage() {
  return (
    <PageLayout
      title="Conformidade"
      description="Certificações e conformidades da plataforma"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Mantemos os mais altos padrões de conformidade e certificações.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Certificações e Conformidades
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>LGPD (Lei Geral de Proteção de Dados)</li>
          <li>ISO 27001 (em processo)</li>
          <li>SOC 2 Type II (em processo)</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve mais informações sobre conformidade.
        </p>
      </div>
    </PageLayout>
  );
}

