import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars e Demos | Clerky",
  description: "Participe de webinars e veja demos ao vivo da plataforma",
};

export default function WebinarsPage() {
  return (
    <PageLayout
      title="Webinars e Demos"
      description="Participe de webinars e veja demos ao vivo da plataforma"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Participe de nossas sessões ao vivo para aprender a usar todos os
          recursos da Clerky e tirar suas dúvidas em tempo real.
        </p>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve agenda de webinars e demos.
        </p>
      </div>
    </PageLayout>
  );
}

