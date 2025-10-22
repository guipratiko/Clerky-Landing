import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solução para E-commerce | Clerky",
  description: "Venda mais pelo WhatsApp com automação e IA",
};

export default function EcommercePage() {
  return (
    <PageLayout
      title="Solução para E-commerce"
      description="Venda mais pelo WhatsApp com automação e IA"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Integre sua loja online com o WhatsApp. Envie notificações, tire
          dúvidas e feche vendas direto no chat.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre a solução para e-commerce.
        </p>
      </div>
    </PageLayout>
  );
}

