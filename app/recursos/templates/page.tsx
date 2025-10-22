import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates | Clerky",
  description: "Templates prontos de agentes e automações para começar rápido",
};

export default function TemplatesPage() {
  return (
    <PageLayout
      title="Templates"
      description="Templates prontos de agentes e automações para começar rápido"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Utilize nossos templates prontos para criar agentes de IA e automações
          em segundos. Personalize conforme sua necessidade e comece a usar
          imediatamente.
        </p>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve galeria completa de templates.
        </p>
      </div>
    </PageLayout>
  );
}

