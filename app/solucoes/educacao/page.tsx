import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solução para Educação | Clerky",
  description: "Melhore a comunicação com alunos e responsáveis",
};

export default function EducacaoPage() {
  return (
    <PageLayout
      title="Solução para Educação"
      description="Melhore a comunicação com alunos e responsáveis"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Automatize lembretes de aulas, tire dúvidas sobre cursos e melhore
          a comunicação com alunos.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve informações completas sobre a solução para educação.
        </p>
      </div>
    </PageLayout>
  );
}

