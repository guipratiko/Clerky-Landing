import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentes de IA | Clerky",
  description: "Crie agentes inteligentes para vendas, suporte e atendimento sem código",
};

export default function AgentesIAPage() {
  return (
    <PageLayout
      title="Agentes de IA"
      description="Crie agentes inteligentes para vendas, suporte e atendimento sem código"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Configure agentes de IA personalizados para automatizar conversas no
          WhatsApp. Escolha entre vendedor, suporte, secretária ou prospectador
          - tudo sem programar.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Tipos de Agentes
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>Vendedor:</strong> Qualifica leads e fecha vendas</li>
          <li><strong>Suporte:</strong> Resolve dúvidas e problemas técnicos</li>
          <li><strong>Secretária:</strong> Agenda reuniões e organiza compromissos</li>
          <li><strong>Prospectador:</strong> Busca e engaja novos clientes</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve mais informações sobre agentes de IA.
        </p>
      </div>
    </PageLayout>
  );
}

