import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status do Sistema | Clerky",
  description: "Acompanhe o status e uptime da plataforma Clerky",
};

export default function StatusPage() {
  return (
    <PageLayout
      title="Status do Sistema"
      description="Acompanhe o status e uptime da plataforma Clerky"
    >
      <div className="prose prose-lg max-w-none">
        <div className="rounded-lg border-2 border-success bg-success/10 p-6 text-center">
          <p className="text-2xl font-bold text-success">
            ✓ Todos os sistemas operacionais
          </p>
          <p className="mt-2 text-text-body">99.9% de uptime nos últimos 30 dias</p>
        </div>

        <p className="mt-8 text-text-body">
          Conteúdo em desenvolvimento. Em breve página completa de status com
          histórico e métricas detalhadas.
        </p>
      </div>
    </PageLayout>
  );
}

