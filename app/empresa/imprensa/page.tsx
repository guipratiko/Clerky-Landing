import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprensa | Clerky",
  description: "Kit de imprensa e assessoria de comunicação",
};

export default function ImprensaPage() {
  return (
    <PageLayout
      title="Imprensa"
      description="Kit de imprensa e assessoria de comunicação"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Materiais para imprensa, logos e informações para assessoria de
          comunicação.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve kit de imprensa completo.
        </p>
      </div>
    </PageLayout>
  );
}

