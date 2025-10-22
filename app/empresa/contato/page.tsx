import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Clerky",
  description: "Entre em contato com a equipe Clerky",
};

export default function ContatoPage() {
  return (
    <PageLayout
      title="Contato"
      description="Entre em contato com a equipe Clerky"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Tem alguma dúvida ou sugestão? Entre em contato conosco!
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Canais de Atendimento
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>WhatsApp: (62) 9355-7070</li>
          <li>Email: contato@clerky.com</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve formulário de contato completo.
        </p>
      </div>
    </PageLayout>
  );
}

