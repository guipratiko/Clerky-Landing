import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visão Geral do Produto | Clerky",
  description: "Conheça todas as funcionalidades e recursos da plataforma Clerky",
};

export default function VisaoGeralPage() {
  return (
    <PageLayout
      title="Visão Geral do Produto"
      description="Conheça todas as funcionalidades e recursos da plataforma Clerky"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          A Clerky é a plataforma completa para integração do WhatsApp com seus
          sistemas. Com recursos poderosos de IA, automação e gerenciamento,
          transforme o WhatsApp no seu principal canal de vendas e atendimento.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Principais Recursos
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Agentes de IA personalizáveis sem código</li>
          <li>CRM Kanban visual e intuitivo</li>
          <li>Disparo em massa com segmentação</li>
          <li>Integrações via API e Webhooks</li>
          <li>Documentação completa e SDKs</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve mais informações sobre o produto.
        </p>
      </div>
    </PageLayout>
  );
}

