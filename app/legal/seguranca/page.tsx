import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Segurança | Clerky",
  description: "Como mantemos sua conta e dados seguros",
};

export default function SegurancaPage() {
  return (
    <PageLayout
      title="Segurança"
      description="Como mantemos sua conta e dados seguros"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          A segurança dos seus dados é nossa prioridade máxima.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Medidas de Segurança
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Criptografia end-to-end</li>
          <li>Servidores no Brasil</li>
          <li>Backups diários criptografados</li>
          <li>Autenticação de dois fatores (2FA)</li>
          <li>Monitoramento 24/7</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre segurança.
        </p>
      </div>
    </PageLayout>
  );
}

