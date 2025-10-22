import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrações | Clerky",
  description: "Conecte o WhatsApp com qualquer sistema via API ou Webhook",
};

export default function IntegracoesPage() {
  return (
    <PageLayout
      title="Integrações"
      description="Conecte o WhatsApp com qualquer sistema via API ou Webhook"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Integre o Clerky com seus sistemas existentes através de APIs REST e
          Webhooks. Conecte com CRMs, ERPs, planilhas e qualquer ferramenta que
          você já usa.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Integrações Nativas
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Salesforce e HubSpot (CRM)</li>
          <li>n8n, Zapier e Make (Automação)</li>
          <li>Google Sheets e Airtable (Planilhas)</li>
          <li>PostgreSQL e MongoDB (Banco de Dados)</li>
          <li>Shopify e WooCommerce (E-commerce)</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve mais informações sobre integrações.
        </p>
      </div>
    </PageLayout>
  );
}

