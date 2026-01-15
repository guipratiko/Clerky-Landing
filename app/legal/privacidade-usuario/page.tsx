import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade do Usuário | Clerky",
  description: "Informações sobre privacidade e proteção de dados dos usuários da Clerky",
};

export default function PrivacidadeUsuarioPage() {
  return (
    <PageLayout
      title="Privacidade do Usuário"
      description="Como protegemos e respeitamos a privacidade dos usuários da plataforma"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          <strong>Última atualização:</strong> Janeiro de 2026
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Compromisso com sua Privacidade
        </h2>
        <p className="text-text-body">
          Na Clerky, a privacidade e segurança dos dados dos nossos usuários são prioridades fundamentais. Esta página explica como tratamos as informações dos usuários finais que interagem com nossos clientes através da plataforma.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Dados dos Usuários Finais
        </h2>
        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          O que coletamos
        </h3>
        <p className="text-text-body">
          Quando nossos clientes utilizam a Clerky para se comunicar com seus usuários finais (através do WhatsApp ou outras plataformas), podemos processar as seguintes informações:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Número de telefone e identificadores de contato</li>
          <li>Conteúdo das mensagens trocadas</li>
          <li>Dados de interação e comportamento</li>
          <li>Informações fornecidas voluntariamente pelo usuário</li>
          <li>Metadados de comunicação (horários, status de entrega, etc.)</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          Finalidade do tratamento
        </h3>
        <p className="text-text-body">
          Os dados dos usuários finais são processados exclusivamente para:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Permitir a comunicação entre nossos clientes e seus usuários</li>
          <li>Fornecer funcionalidades da plataforma (CRM, automações, etc.)</li>
          <li>Garantir a segurança e integridade das comunicações</li>
          <li>Cumprir obrigações legais e regulatórias</li>
          <li>Melhorar a qualidade dos serviços oferecidos</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Responsabilidade pelo Tratamento
        </h2>
        <p className="text-text-body">
          A Clerky atua como <strong>operadora de dados</strong> (processador) em relação aos dados dos usuários finais. Isso significa que:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Processamos os dados conforme as instruções de nossos clientes (controladores)</li>
          <li>Não utilizamos os dados para fins próprios além do necessário para prestar o serviço</li>
          <li>Implementamos medidas de segurança adequadas para proteger os dados</li>
          <li>Respeitamos as configurações de privacidade definidas pelos nossos clientes</li>
        </ul>
        <p className="mt-4 text-text-body">
          Nossos clientes são responsáveis por obter os consentimentos necessários e informar seus usuários finais sobre o tratamento de dados.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Segurança e Proteção
        </h2>
        <p className="text-text-body">
          Implementamos rigorosas medidas de segurança para proteger os dados dos usuários:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>Criptografia:</strong> Todos os dados são criptografados em trânsito (TLS/SSL) e em repouso</li>
          <li><strong>Controles de acesso:</strong> Acesso restrito apenas a pessoal autorizado e treinado</li>
          <li><strong>Monitoramento:</strong> Monitoramento contínuo de segurança e detecção de ameaças</li>
          <li><strong>Backups seguros:</strong> Backups regulares com criptografia</li>
          <li><strong>Conformidade:</strong> Seguimos padrões internacionais de segurança da informação</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Direitos dos Usuários Finais
        </h2>
        <p className="text-text-body">
          Os usuários finais têm os seguintes direitos em relação aos seus dados pessoais:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>Acesso:</strong> Solicitar informações sobre quais dados estão sendo processados</li>
          <li><strong>Correção:</strong> Solicitar correção de dados incorretos ou desatualizados</li>
          <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados pessoais</li>
          <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados</li>
          <li><strong>Revogação:</strong> Revogar consentimento para tratamento de dados</li>
          <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em certas circunstâncias</li>
        </ul>
        <p className="mt-4 text-text-body">
          Para exercer esses direitos, os usuários finais devem entrar em contato diretamente com o cliente da Clerky que está processando seus dados, ou conosco através do e-mail: <strong>privacidade@clerky.com.br</strong>
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Retenção de Dados
        </h2>
        <p className="text-text-body">
          Os dados dos usuários finais são mantidos apenas pelo tempo necessário para:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Cumprir os propósitos para os quais foram coletados</li>
          <li>Atender a obrigações legais e regulatórias</li>
          <li>Resolver disputas e fazer cumprir acordos</li>
        </ul>
        <p className="mt-4 text-text-body">
          Quando os dados não forem mais necessários, serão excluídos de forma segura e permanente.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Compartilhamento de Dados
        </h2>
        <p className="text-text-body">
          Os dados dos usuários finais podem ser compartilhados apenas nas seguintes situações:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>Com o cliente:</strong> Os dados são acessíveis pelo cliente que utiliza a plataforma</li>
          <li><strong>Prestadores de serviços:</strong> Com empresas que nos auxiliam na operação (sempre com contratos de proteção de dados)</li>
          <li><strong>Obrigações legais:</strong> Quando exigido por lei ou ordem judicial</li>
          <li><strong>Com consentimento:</strong> Quando autorizado pelo usuário ou pelo cliente</li>
        </ul>
        <p className="mt-4 text-text-body">
          <strong>Nunca vendemos ou alugamos dados de usuários finais para terceiros.</strong>
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Integração com WhatsApp
        </h2>
        <p className="text-text-body">
          Quando utilizamos o WhatsApp para comunicação, respeitamos:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>As políticas de privacidade e termos de uso do WhatsApp</li>
          <li>As diretrizes da Meta para uso da API do WhatsApp Business</li>
          <li>As configurações de privacidade definidas pelos usuários no WhatsApp</li>
          <li>As preferências de comunicação dos usuários (opt-out, bloqueios, etc.)</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Conformidade com LGPD
        </h2>
        <p className="text-text-body">
          Estamos em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018):
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Tratamos dados apenas com base legal adequada</li>
          <li>Respeitamos os princípios da LGPD (finalidade, adequação, necessidade, etc.)</li>
          <li>Mantemos registro das atividades de tratamento</li>
          <li>Realizamos avaliações de impacto à proteção de dados quando necessário</li>
          <li>Notificamos incidentes de segurança conforme exigido pela lei</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Privacidade por Design
        </h2>
        <p className="text-text-body">
          A privacidade está incorporada em todos os aspectos da nossa plataforma:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Coletamos apenas os dados estritamente necessários</li>
          <li>Minimizamos o acesso aos dados pessoais</li>
          <li>Implementamos controles de privacidade por padrão</li>
          <li>Oferecemos transparência sobre o uso dos dados</li>
          <li>Facilitamos o exercício dos direitos dos usuários</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Contato e Dúvidas
        </h2>
        <p className="text-text-body">
          Se você é um usuário final e tem dúvidas sobre como seus dados são tratados pela Clerky, ou deseja exercer seus direitos, entre em contato:
        </p>
        <div className="mt-4 rounded-lg bg-base-100 p-6 text-text-body">
          <p><strong>E-mail:</strong> privacidade@clerky.com.br</p>
          <p className="mt-2"><strong>Encarregado de Proteção de Dados (DPO):</strong> disponível através do e-mail acima</p>
          <p className="mt-2">
            <strong>Observação:</strong> Se você interage com um cliente da Clerky, também pode entrar em contato diretamente com esse cliente para questões relacionadas aos seus dados.
          </p>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Alterações
        </h2>
        <p className="text-text-body">
          Podemos atualizar esta página periodicamente para refletir mudanças em nossas práticas ou na legislação. Recomendamos que você revise esta página regularmente. A data da última atualização está indicada no topo desta página.
        </p>

        <p className="mt-8 text-sm text-text-body">
          Esta página complementa nossa Política de Privacidade geral e está em conformidade com a LGPD e demais legislações aplicáveis.
        </p>
      </div>
    </PageLayout>
  );
}

