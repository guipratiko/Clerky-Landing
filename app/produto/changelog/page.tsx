import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | Clerky",
  description: "Acompanhe todas as atualizações e novidades da plataforma",
};

export default function ChangelogPage() {
  return (
    <PageLayout
      title="Changelog"
      description="Acompanhe todas as atualizações e novidades da plataforma"
    >
      <div className="prose prose-lg max-w-none">
        <div className="space-y-8">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold text-text-headline">
              Versão 1.0.0 - Janeiro 2025
            </h3>
            <p className="text-sm text-text-body">Lançamento inicial</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-text-body">
              <li>Agentes de IA sem código</li>
              <li>CRM Kanban visual</li>
              <li>Disparo em massa</li>
              <li>API REST completa</li>
              <li>Webhooks em tempo real</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-text-body">
          Conteúdo em desenvolvimento. Em breve histórico completo de atualizações.
        </p>
      </div>
    </PageLayout>
  );
}

