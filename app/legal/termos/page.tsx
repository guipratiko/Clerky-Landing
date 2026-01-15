import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Clerky PRO",
  description: "Termos e condições de uso da assinatura Clerky PRO",
};

export default function TermosPage() {
  return (
    <PageLayout
      title="Termos de Uso – Clerky PRO"
      description="Termos e condições de uso da assinatura Clerky PRO"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          <strong>Última atualização:</strong> 28 de Novembro de 2025
        </p>

        <p className="mt-4 text-text-body">
          Bem-vindo ao Clerky. Estes Termos de Uso (&quot;Termos&quot;) regulam o uso da assinatura Clerky PRO, disponibilizada dentro do aplicativo.
        </p>
        <p className="mt-4 text-text-body">
          Ao adquirir ou utilizar o Clerky PRO, você concorda com estes Termos.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          1. Descrição da Plataforma e Assinatura
        </h2>
        <p className="text-text-body">
          O Clerky é uma plataforma de automação e gestão de comunicação multicanal que centraliza WhatsApp, Instagram e outras integrações. O Clerky PRO é um plano de assinatura com validade de 1 (um) mês, que concede acesso a recursos premium, incluindo:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Gerenciamento de múltiplas instâncias WhatsApp</li>
          <li>Automações para Instagram (Insta-Clerky) via OAuth Meta</li>
          <li>Agentes de IA com integração OpenAI (GPT-4, GPT-3.5)</li>
          <li>CRM Kanban integrado com histórico de conversas</li>
          <li>Sistema de disparos em massa com templates e agendamento</li>
          <li>Workflows visuais (MindClerky) com editor de fluxos</li>
          <li>Gerenciador de grupos WhatsApp</li>
          <li>Integrações com Google Sheets, Google Drive, Typebot e outros</li>
          <li>Acesso a aplicativos móveis nativos (iOS e Android)</li>
          <li>API REST e Webhooks para integrações externas</li>
          <li>Suporte aprimorado</li>
        </ul>
        <p className="mt-4 text-text-body">
          Os benefícios podem variar a qualquer momento, mediante atualização do aplicativo ou dos Termos.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          2. Renovação Automática
        </h2>
        <p className="text-text-body">
          A assinatura é mensal e renovada automaticamente ao final de cada período, a menos que você cancele com antecedência mínima permitida pela plataforma de compra.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>iOS:</strong> A cobrança será feita diretamente pela App Store na sua conta Apple ID</li>
          <li><strong>Android:</strong> A cobrança será feita diretamente pelo Google Play na sua conta Google</li>
          <li>O valor pode variar conforme região, moeda e impostos aplicáveis</li>
          <li>Você será cobrado pelo período seguinte automaticamente, salvo cancelamento manual</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          3. Cancelamento da Assinatura
        </h2>
        <p className="text-text-body">
          Você pode cancelar a qualquer momento:
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-semibold text-text-headline">Para iOS:</p>
            <ol className="mt-2 list-decimal space-y-2 pl-6 text-text-body">
              <li>Abra <strong>Ajustes</strong> no seu dispositivo Apple</li>
              <li>Toque em <strong>Apple ID</strong> &gt; <strong>Assinaturas</strong></li>
              <li>Selecione <strong>Clerky PRO</strong></li>
              <li>Toque em <strong>Cancelar Assinatura</strong></li>
            </ol>
          </div>
          <div>
            <p className="font-semibold text-text-headline">Para Android:</p>
            <ol className="mt-2 list-decimal space-y-2 pl-6 text-text-body">
              <li>Abra o <strong>Google Play Store</strong></li>
              <li>Toque no menu (três linhas) &gt; <strong>Assinaturas</strong></li>
              <li>Selecione <strong>Clerky PRO</strong></li>
              <li>Toque em <strong>Cancelar assinatura</strong></li>
            </ol>
          </div>
        </div>
        <p className="mt-4 text-text-body">
          Cancelamentos feitos após a cobrança mantêm o acesso até o fim do período vigente.
        </p>
        <p className="mt-4 text-text-body">
          O Clerky não realiza cancelamentos ou reembolsos diretamente — tudo é administrado pela App Store (iOS) ou Google Play (Android).
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          4. Testes, Ofertas e Promoções
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Se houver período de teste, este será convertido automaticamente em assinatura mensal, salvo se cancelado antes do fim do teste</li>
          <li>Promoções podem ser suspensas ou alteradas sem aviso prévio</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          5. Política de Privacidade
        </h2>
        <p className="text-text-body">
          O uso do Clerky e do Clerky PRO está sujeito à nossa Política de Privacidade, disponível em:
        </p>
        <div className="mt-4 rounded-lg bg-base-100 p-6 text-text-body">
          <p>
            👉{" "}
            <a
              href="/legal/politica-privacidade"
              className="text-brand-500 hover:text-brand-400 underline"
            >
              https://clerky.com.br/legal/politica-privacidade
            </a>
          </p>
        </div>
        <p className="mt-4 text-text-body">
          A política explica como coletamos, usamos e protegemos seus dados.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          6. Conteúdo e Funcionamento do Serviço
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>A assinatura dá acesso a recursos digitais, cujo desempenho depende de conexão à internet</li>
          <li>Recursos, melhorias e funcionalidades podem ser alterados, removidos ou adicionados</li>
          <li>O Clerky pode suspender o acesso em casos de fraude, violação dos Termos ou uso indevido</li>
          <li>O uso de integrações com terceiros (Meta, Google, OpenAI, Typebot, WhatsApp) está sujeito às políticas e termos de uso desses serviços</li>
          <li>Você é responsável por manter as permissões e conexões ativas para o funcionamento das integrações</li>
          <li>O Clerky não se responsabiliza por interrupções ou mudanças nos serviços de terceiros integrados</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          6.1. Integrações com Terceiros
        </h2>
        <p className="text-text-body">
          O Clerky utiliza integrações com os seguintes serviços:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>Meta/Instagram:</strong> Conexão via OAuth para automações. Você concorda com os Termos de Serviço do Meta ao usar funcionalidades do Instagram.</li>
          <li><strong>Google (Sheets e Drive):</strong> Sincronização de dados. Você concorda com os Termos de Serviço do Google.</li>
          <li><strong>OpenAI:</strong> Processamento de IA. Você concorda com os Termos de Uso do OpenAI.</li>
          <li><strong>Typebot:</strong> Integração de chatbots. Você concorda com os Termos de Serviço do Typebot.</li>
          <li><strong>WhatsApp:</strong> Conexão de instâncias WhatsApp. Você concorda com os Termos de Serviço do WhatsApp.</li>
        </ul>
        <p className="mt-4 text-text-body">
          O Clerky não se responsabiliza por mudanças, interrupções ou problemas nos serviços de terceiros. Você pode revogar o acesso a qualquer integração a qualquer momento.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          7. Responsabilidades do Usuário
        </h2>
        <p className="text-text-body">
          Você concorda em:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Não usar o Clerky para fins ilegais ou violar termos de serviços de terceiros (WhatsApp, Instagram, etc.)</li>
          <li>Não usar o Clerky para enviar spam, mensagens não solicitadas ou conteúdo inadequado</li>
          <li>Não tentar burlar sistemas, limites ou controles do app</li>
          <li>Manter suas credenciais seguras e não compartilhar acesso com terceiros</li>
          <li>Respeitar limites de uso e políticas de rate limiting para evitar bloqueios</li>
          <li>Usar as integrações de forma responsável e de acordo com as políticas dos serviços integrados</li>
          <li>Manter backups de dados importantes, pois o Clerky não se responsabiliza por perda de dados</li>
        </ul>
        <p className="mt-4 text-text-body">
          Você é responsável por:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Sua conta Apple ID (iOS) ou conta Google (Android) e pelas assinaturas vinculadas</li>
          <li>Suas contas WhatsApp, Instagram e outras integradas ao Clerky</li>
          <li>O conteúdo das mensagens enviadas através da plataforma</li>
          <li>O cumprimento de regulamentações aplicáveis (LGPD, termos de serviços de terceiros, etc.)</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          8. Limitações de Responsabilidade
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>O Clerky é fornecido &quot;no estado em que se encontra&quot;</li>
          <li>Não garantimos disponibilidade contínua ou ausência de falhas temporárias</li>
        </ul>
        <p className="mt-4 text-text-body">
          Em nenhuma hipótese seremos responsáveis por:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Perdas financeiras</li>
          <li>Perda de dados</li>
          <li>Danos indiretos decorrentes do uso do serviço</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          9. Alterações nos Termos
        </h2>
        <p className="text-text-body">
          Podemos atualizar estes Termos a qualquer momento. As versões atualizadas estarão disponíveis no aplicativo e/ou no site.
        </p>
        <p className="mt-4 text-text-body">
          A continuidade no uso do Clerky PRO após alterações constitui aceitação dos novos Termos.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          10. Contato
        </h2>
        <p className="text-text-body">
          Para dúvidas sobre o Clerky PRO, entre em contato:
        </p>
        <div className="mt-4 rounded-lg bg-base-100 p-6 text-text-body">
          <p>📧 <strong>suporte@clerky.com.br</strong></p>
        </div>
      </div>
    </PageLayout>
  );
}








