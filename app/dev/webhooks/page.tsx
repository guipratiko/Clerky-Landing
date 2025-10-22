import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webhooks | Clerky",
  description: "Receba eventos em tempo real na sua aplicação",
};

export default function WebhooksPage() {
  return (
    <PageLayout
      title="Webhooks"
      description="Receba eventos em tempo real na sua aplicação"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Configure webhooks para receber notificações em tempo real sobre
          mensagens, status de envio e outros eventos da plataforma.
        </p>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve documentação completa de webhooks.
        </p>
      </div>
    </PageLayout>
  );
}

