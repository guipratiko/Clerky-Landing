import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solução para Vendas | Clerky",
  description: "Automatize e escale seu processo de vendas pelo WhatsApp",
};

export default function VendasPage() {
  return (
    <PageLayout
      title="Solução para Vendas"
      description="Automatize e escale seu processo de vendas pelo WhatsApp"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Qualifique leads, apresente produtos e feche mais vendas com agentes de
          IA treinados especificamente para conversão.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre a solução para vendas.
        </p>
      </div>
    </PageLayout>
  );
}

