import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Clerky",
  description: "Política de privacidade da Clerky - Como coletamos, usamos e protegemos seus dados",
};

export default function PoliticaPrivacidadePage() {
  return (
    <PageLayout
      title="Política de Privacidade"
      description="Como coletamos, usamos e protegemos seus dados pessoais"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          <strong>Última atualização:</strong> Janeiro de 2025
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          1. Introdução
        </h2>
        <p className="text-text-body">
          A Clerky (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;) está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossos serviços.
        </p>
        <p className="text-text-body">
          Ao utilizar a plataforma Clerky, você concorda com as práticas descritas nesta política. Se você não concordar com esta política, por favor, não utilize nossos serviços.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          2. Informações que Coletamos
        </h2>
        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          2.1. Informações Fornecidas por Você
        </h3>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Nome completo e informações de contato (e-mail, telefone)</li>
          <li>Informações de cadastro e perfil</li>
          <li>Dados de pagamento e faturamento</li>
          <li>Conteúdo de mensagens e comunicações</li>
          <li>Informações de integração com WhatsApp e outras plataformas</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          2.2. Informações Coletadas Automaticamente
        </h3>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Endereço IP e informações de dispositivo</li>
          <li>Dados de navegação e uso da plataforma</li>
          <li>Cookies e tecnologias similares</li>
          <li>Logs de acesso e atividades</li>
          <li>Informações de performance e métricas de uso</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          3. Como Usamos suas Informações
        </h2>
        <p className="text-text-body">
          Utilizamos suas informações pessoais para os seguintes propósitos:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Fornecer, manter e melhorar nossos serviços</li>
          <li>Processar transações e gerenciar sua conta</li>
          <li>Enviar notificações e comunicações relacionadas ao serviço</li>
          <li>Personalizar sua experiência na plataforma</li>
          <li>Detectar, prevenir e resolver problemas técnicos</li>
          <li>Cumprir obrigações legais e regulatórias</li>
          <li>Realizar análises e pesquisas para melhorar nossos serviços</li>
          <li>Enviar comunicações de marketing (com seu consentimento)</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          4. Compartilhamento de Informações
        </h2>
        <p className="text-text-body">
          Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes situações:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>Prestadores de serviços:</strong> Com empresas que nos auxiliam na operação da plataforma (hospedagem, processamento de pagamentos, etc.)</li>
          <li><strong>Obrigações legais:</strong> Quando exigido por lei, ordem judicial ou autoridade competente</li>
          <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos, propriedade ou segurança, ou de nossos usuários</li>
          <li><strong>Com seu consentimento:</strong> Em outras situações, quando você autorizar expressamente</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          5. Segurança dos Dados
        </h2>
        <p className="text-text-body">
          Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Criptografia de dados em trânsito e em repouso</li>
          <li>Controles de acesso rigorosos</li>
          <li>Monitoramento regular de segurança</li>
          <li>Backups regulares dos dados</li>
          <li>Treinamento de equipe em segurança da informação</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          6. Retenção de Dados
        </h2>
        <p className="text-text-body">
          Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Quando não houver mais necessidade de reter seus dados, eles serão excluídos de forma segura.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          7. Seus Direitos (LGPD)
        </h2>
        <p className="text-text-body">
          De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>Acesso:</strong> Solicitar informações sobre quais dados pessoais possuímos sobre você</li>
          <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
          <li><strong>Exclusão:</strong> Solicitar a exclusão de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD</li>
          <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos seus dados para outro fornecedor</li>
          <li><strong>Revogação de consentimento:</strong> Revogar seu consentimento a qualquer momento</li>
          <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em certas circunstâncias</li>
          <li><strong>Revisão de decisões automatizadas:</strong> Solicitar revisão de decisões tomadas unicamente com base em tratamento automatizado</li>
        </ul>
        <p className="mt-4 text-text-body">
          Para exercer seus direitos, entre em contato conosco através do e-mail: <strong>privacidade@clerky.com.br</strong>
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          8. Cookies e Tecnologias Similares
        </h2>
        <p className="text-text-body">
          Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          9. Transferência Internacional de Dados
        </h2>
        <p className="text-text-body">
          Seus dados podem ser processados e armazenados em servidores localizados fora do Brasil. Quando isso ocorrer, garantimos que medidas adequadas de proteção sejam implementadas para garantir a segurança e privacidade dos seus dados.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          10. Privacidade de Menores
        </h2>
        <p className="text-text-body">
          Nossos serviços são destinados a pessoas maiores de 18 anos. Não coletamos intencionalmente informações pessoais de menores de idade. Se tomarmos conhecimento de que coletamos dados de um menor, tomaremos medidas para excluir essas informações.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          11. Alterações nesta Política
        </h2>
        <p className="text-text-body">
          Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas publicando a nova política nesta página e atualizando a data de &quot;Última atualização&quot;. Recomendamos que você revise esta política regularmente.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          12. Contato
        </h2>
        <p className="text-text-body">
          Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, entre em contato conosco:
        </p>
        <div className="mt-4 rounded-lg bg-base-100 p-6 text-text-body">
          <p><strong>E-mail:</strong> privacidade@clerky.com.br</p>
          <p className="mt-2"><strong>Encarregado de Proteção de Dados (DPO):</strong> disponível através do e-mail acima</p>
        </div>

        <p className="mt-8 text-sm text-text-body">
          Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e demais legislações aplicáveis.
        </p>
      </div>
    </PageLayout>
  );
}

