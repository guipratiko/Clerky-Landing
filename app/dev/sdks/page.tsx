import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDKs | Clerky",
  description: "Bibliotecas oficiais em múltiplas linguagens",
};

export default function SDKsPage() {
  return (
    <PageLayout
      title="SDKs"
      description="Bibliotecas oficiais em múltiplas linguagens"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          SDKs oficiais para facilitar a integração com a Clerky. Disponíveis
          em JavaScript, Python, PHP, Ruby e outras linguagens.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          SDKs Disponíveis
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>JavaScript / TypeScript (Node.js e Browser)</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Ruby</li>
          <li>Java</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve links para repositórios dos SDKs.
        </p>
      </div>
    </PageLayout>
  );
}

