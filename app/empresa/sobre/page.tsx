import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Clerky | Clerky",
  description: "Conheça a história e missão da Clerky",
};

export default function SobrePage() {
  return (
    <PageLayout
      title="Sobre a Clerky"
      description="Conheça a história e missão da Clerky"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          A Clerky nasceu para transformar a forma como empresas se comunicam
          com seus clientes através do WhatsApp. Nossa missão é democratizar
          o acesso à automação e inteligência artificial.
        </p>
        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve mais informações sobre a empresa.
        </p>
      </div>
    </PageLayout>
  );
}

