import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Kanban | Clerky",
  description: "Gerencie leads e negociações com pipeline visual intuitivo",
};

export default function CRMKanbanPage() {
  return (
    <PageLayout
      title="CRM Kanban"
      description="Gerencie leads e negociações com pipeline visual intuitivo"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Organize e acompanhe todas as suas conversas e negociações em um board
          Kanban visual. Arraste cards, adicione notas e gerencie todo o pipeline
          de vendas de forma intuitiva.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Funcionalidades
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Pipeline visual com drag & drop</li>
          <li>Colunas customizáveis</li>
          <li>Notas e tags em cada card</li>
          <li>Histórico completo de conversas</li>
          <li>Filtros e busca avançada</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve mais informações sobre o CRM Kanban.
        </p>
      </div>
    </PageLayout>
  );
}

