import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade (LGPD) | Clerky",
  description: "Como tratamos e protegemos seus dados pessoais",
};

export default function PrivacidadePage() {
  return (
    <PageLayout
      title="Política de Privacidade (LGPD)"
      description="Como tratamos e protegemos seus dados pessoais"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Última atualização: Janeiro de 2025
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Conformidade com a LGPD
        </h2>
        <p className="text-text-body">
          A Clerky está em total conformidade com a Lei Geral de Proteção de
          Dados (LGPD - Lei 13.709/2018). Respeitamos sua privacidade e
          protegemos seus dados.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Seus Direitos
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Acesso aos seus dados</li>
          <li>Correção de dados incompletos ou incorretos</li>
          <li>Exclusão dos seus dados</li>
          <li>Portabilidade dos dados</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve política completa de privacidade.
        </p>
      </div>
    </PageLayout>
  );
}

