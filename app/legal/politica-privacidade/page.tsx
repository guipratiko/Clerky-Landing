import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Clerky",
  description: "Política de privacidade do aplicativo Clerky - Como coletamos, usamos e protegemos seus dados",
};

export default function PoliticaPrivacidadePage() {
  return (
    <PageLayout
      title="Política de Privacidade"
      description="Como coletamos, usamos, armazenamos e protegemos suas informações"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          <strong>Última atualização:</strong> 28 de Novembro de 2025
        </p>

        <p className="mt-4 text-text-body">
          Esta Política de Privacidade descreve como o aplicativo Clerky coleta, usa, armazena e protege suas informações. Ao utilizar o Clerky, você concorda com estas práticas.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          1. Informações que Coletamos
        </h2>
        <p className="text-text-body">
          Coletamos apenas informações necessárias para o funcionamento correto do aplicativo e dos serviços.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          1.1. Informações fornecidas pelo usuário
        </h3>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Nome</li>
          <li>E-mail</li>
          <li>Telefone (quando informado)</li>
          <li>Dados de login (e-mail e senha)</li>
          <li>Informações relacionadas ao uso da assinatura Clerky PRO</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          1.2. Dados coletados automaticamente
        </h3>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Identificadores do dispositivo (ID do dispositivo, modelo, versão do sistema)</li>
          <li>Logs de uso e estatísticas</li>
          <li>Endereço IP</li>
          <li>Eventos técnicos (erros, travamentos, desempenho)</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          1.3. Dados do WhatsApp
        </h3>
        <p className="text-text-body">
          Quando você conecta instâncias WhatsApp, coletamos:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Mensagens enviadas e recebidas</li>
          <li>Contatos e informações de perfil</li>
          <li>Dados de grupos WhatsApp (participantes, administradores, histórico)</li>
          <li>Status de conexão e QR Codes</li>
          <li>Histórico de conversas</li>
        </ul>
        <p className="mt-4 text-text-body">
          <strong>Como utilizamos:</strong> Esses dados são usados para gerenciar múltiplas instâncias WhatsApp, operar o CRM Kanban, executar disparos em massa, gerenciar grupos e fornecer automações. Os dados são armazenados em nossos servidores seguros e criptografados.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          1.4. Dados do Meta/Instagram
        </h3>
        <p className="text-text-body">
          Quando você autoriza a conexão com sua conta Instagram via OAuth Meta, coletamos:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Informações básicas do perfil Instagram</li>
          <li>Mensagens diretas (DMs) recebidas e enviadas</li>
          <li>Comentários em posts (quando autorizado)</li>
          <li>Interações e engajamento</li>
        </ul>
        <p className="mt-4 text-text-body">
          <strong>Como utilizamos:</strong> Esses dados são usados para automações do Insta-Clerky, incluindo respostas automáticas a DMs e comentários, envio de sequências de mensagens e geração de relatórios. Os dados são processados de acordo com as políticas do Meta.
        </p>
        <p className="mt-4 text-text-body">
          <strong>Revogação de acesso:</strong> Você pode revogar o acesso ao Instagram a qualquer momento através de{" "}
          <a
            href="https://www.facebook.com/settings?tab=applications"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 hover:text-brand-400 underline"
          >
            facebook.com/settings
          </a>
          .
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          1.5. Dados do Google (Google Sheets e Google Drive)
        </h3>
        <p className="text-text-body">
          Quando você autoriza a conexão com sua conta Google, solicitamos acesso aos seguintes serviços:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>Google Sheets:</strong> Para salvar e sincronizar leads automaticamente em planilhas</li>
          <li><strong>Google Drive:</strong> Para armazenar arquivos e documentos relacionados aos leads</li>
        </ul>
        <p className="mt-4 text-text-body">
          <strong>Como utilizamos esses dados:</strong>
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Os dados do Google Sheets e Google Drive funcionam como nós dentro do MindClerky para salvar leads que vêm do WhatsApp ou Typebot</li>
          <li>As permissões são usadas exclusivamente para sincronizar e armazenar leads e informações relacionadas</li>
          <li>Não acessamos, lemos ou modificamos outros arquivos ou planilhas que não sejam relacionados ao uso do Clerky</li>
          <li>Não vendemos, compartilhamos ou comercializamos dados do Google com terceiros</li>
        </ul>
        <p className="mt-4 text-text-body">
          <strong>Armazenamento:</strong> Os dados sincronizados com Google Sheets e Google Drive são armazenados nos servidores do Google, seguindo as políticas de segurança e privacidade do Google. O Clerky mantém apenas referências e metadados necessários para o funcionamento da integração.
        </p>
        <p className="mt-4 text-text-body">
          <strong>Revogação de acesso:</strong> Você pode revogar o acesso à sua conta Google a qualquer momento através de{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 hover:text-brand-400 underline"
          >
            myaccount.google.com/permissions
          </a>
          . Ao revogar o acesso, a sincronização automática será interrompida, mas os dados já sincronizados permanecerão nos seus arquivos do Google.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          1.6. Dados do OpenAI
        </h3>
        <p className="text-text-body">
          Quando você utiliza agentes de IA do Clerky, enviamos dados para processamento no OpenAI:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Mensagens de conversas para processamento de linguagem natural</li>
          <li>Contexto de conversas para respostas inteligentes</li>
          <li>Áudios para transcrição (quando aplicável)</li>
        </ul>
        <p className="mt-4 text-text-body">
          <strong>Como utilizamos:</strong> Os dados são enviados ao OpenAI (GPT-4, GPT-3.5) exclusivamente para processamento de IA e geração de respostas. Não armazenamos dados pessoais no OpenAI. O processamento segue as políticas de privacidade do OpenAI.
        </p>
        <p className="mt-4 text-text-body">
          <strong>Retenção:</strong> O OpenAI pode reter dados temporariamente para melhorar seus modelos, conforme sua política. Você pode revisar a política do OpenAI em{" "}
          <a
            href="https://openai.com/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 hover:text-brand-400 underline"
          >
            openai.com/policies/privacy-policy
          </a>
          .
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          1.7. Dados do Typebot
        </h3>
        <p className="text-text-body">
          Quando você integra chatbots do Typebot com o Clerky:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Dados de conversas são compartilhados com o Typebot para processamento</li>
          <li>Leads e informações coletadas pelo Typebot são sincronizados com o Clerky</li>
        </ul>
        <p className="mt-4 text-text-body">
          <strong>Como utilizamos:</strong> O Typebot funciona como um nó dentro do MindClerky para processar leads e conversas. Os dados compartilhados são limitados ao necessário para o funcionamento da integração.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          1.8. Dados de aplicativos móveis (iOS e Android)
        </h3>
        <p className="text-text-body">
          Quando você utiliza os aplicativos móveis do Clerky:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Identificadores do dispositivo (ID do dispositivo, modelo, versão do sistema operacional)</li>
          <li>Dados de autenticação biométrica (Face ID/Touch ID) - processados localmente, não enviados aos nossos servidores</li>
          <li>Logs de uso e estatísticas</li>
          <li>Notificações push (quando autorizado)</li>
        </ul>
        <p className="mt-4 text-text-body">
          <strong>Como utilizamos:</strong> Esses dados são usados para autenticação segura, melhorar a experiência do app e enviar notificações importantes. A autenticação biométrica é processada exclusivamente no dispositivo.
        </p>
        <p className="mt-4 text-text-body">
          <strong>Armazenamento:</strong> Dados de aplicativos móveis são armazenados em nossos servidores seguros. Dados biométricos nunca saem do dispositivo.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          1.9. Informações de pagamento
        </h3>
        <p className="text-text-body">
          Compras e assinaturas são processadas exclusivamente pela App Store. O Clerky não coleta, processa ou armazena dados de cartão de crédito.
        </p>
        <p className="mt-4 text-text-body">
          Recebemos apenas informações externas da Apple relacionadas ao status de assinatura, como:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Status da compra</li>
          <li>Tipo de plano</li>
          <li>Data de renovação/cancelamento</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          2. Como Utilizamos as Informações
        </h2>
        <p className="text-text-body">
          Utilizamos seus dados para:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Criar e gerenciar sua conta</li>
          <li>Processar e validar sua assinatura Clerky PRO</li>
          <li>Fornecer acesso a recursos premium</li>
          <li>Sincronizar leads do WhatsApp, Instagram e Typebot com Google Sheets e Google Drive</li>
          <li>Processar mensagens com OpenAI para respostas automáticas inteligentes</li>
          <li>Gerenciar múltiplas instâncias WhatsApp e grupos</li>
          <li>Automatizar respostas no Instagram (DMs e comentários)</li>
          <li>Executar workflows visuais (MindClerky) com integrações</li>
          <li>Fornecer acesso através de aplicativos móveis iOS e Android</li>
          <li>Enviar notificações importantes sobre sua conta</li>
          <li>Melhorar o desempenho e a experiência do app</li>
          <li>Garantir a segurança e prevenir fraudes</li>
          <li>Oferecer suporte ao usuário</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          3. Compartilhamento de Informações
        </h2>
        <p className="text-text-body">
          O Clerky não vende, não compartilha e não comercializa suas informações pessoais.
        </p>
        <p className="mt-4 text-text-body">
          Podemos compartilhar dados apenas em situações específicas:
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          3.1. Fornecedores de tecnologia
        </h3>
        <p className="text-text-body">
          Serviços essenciais como servidores, hospedagem, banco de dados ou análise de desempenho.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          3.2. Requisitos legais
        </h3>
        <p className="text-text-body">
          Se exigido por lei, decisão judicial ou autoridade competente.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          4. Armazenamento e Segurança
        </h2>
        <p className="text-text-body">
          Adotamos medidas de segurança técnicas e organizacionais para proteger seus dados, incluindo:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Criptografia</li>
          <li>Controle de acesso</li>
          <li>Monitoramento</li>
          <li>Armazenamento seguro em servidores protegidos</li>
        </ul>
        <p className="mt-4 text-text-body">
          Seus dados são mantidos apenas pelo tempo necessário para cumprir os propósitos desta Política.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          5. Seus Direitos
        </h2>
        <p className="text-text-body">
          Você pode:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Acessar suas informações</li>
          <li>Atualizar seus dados</li>
          <li>Solicitar exclusão da sua conta</li>
          <li>Revogar permissões concedidas:
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Google: <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-400 underline">myaccount.google.com/permissions</a></li>
              <li>Meta/Instagram: <a href="https://www.facebook.com/settings?tab=applications" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-400 underline">facebook.com/settings</a></li>
              <li>WhatsApp: desconectando instâncias no Clerky ou através das configurações da conta</li>
            </ul>
          </li>
          <li>Solicitar esclarecimentos sobre o uso dos seus dados</li>
        </ul>
        <p className="mt-4 text-text-body">
          Para isso, entre em contato pelo e-mail:
        </p>
        <div className="mt-4 rounded-lg bg-base-100 p-6 text-text-body">
          <p>📧 <strong>suporte@clerky.com.br</strong></p>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          6. Dados de Assinaturas e Compras (In-App Purchases)
        </h2>
        <p className="text-text-body">
          Para assinaturas:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>iOS:</strong> A Apple gerencia as cobranças, cancelamentos e reembolsos. O Clerky não tem acesso a dados financeiros sensíveis. O status da assinatura é verificado por recibos fornecidos pela Apple.</li>
          <li><strong>Android:</strong> O Google Play gerencia as cobranças, cancelamentos e reembolsos. O Clerky não tem acesso a dados financeiros sensíveis. O status da assinatura é verificado através do Google Play Billing.</li>
        </ul>
        <p className="mt-4 text-text-body">
          Mais detalhes podem ser conferidos nas políticas:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-400 underline">Política de Privacidade da Apple</a></li>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-400 underline">Política de Privacidade do Google</a></li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          7. Cookies e Tecnologias Semelhantes
        </h2>
        <p className="text-text-body">
          O Clerky pode utilizar tecnologias de identificação e análise para medir uso e desempenho. Nenhuma dessas tecnologias coleta dados financeiros ou sensíveis.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          8. Privacidade de Crianças
        </h2>
        <p className="text-text-body">
          O Clerky não é destinado a menores de 13 anos. Não coletamos intencionalmente dados de crianças. Se informações forem identificadas como pertencentes a menores, elas serão removidas imediatamente.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          9. Transferência Internacional de Dados
        </h2>
        <p className="text-text-body">
          Os dados podem ser armazenados ou processados em datacenters localizados em outros países. Essas transferências seguem normas de segurança e proteção equivalentes.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          10. Alterações nesta Política
        </h2>
        <p className="text-text-body">
          Podemos atualizar esta Política periodicamente. A versão mais recente estará sempre disponível no app e/ou site.
        </p>
        <p className="mt-4 text-text-body">
          O uso contínuo do Clerky após atualizações significa que você concorda com as alterações.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          11. Contato
        </h2>
        <p className="text-text-body">
          Em caso de dúvidas sobre privacidade, entre em contato:
        </p>
        <div className="mt-4 rounded-lg bg-base-100 p-6 text-text-body">
          <p>📧 <strong>suporte@clerky.com.br</strong></p>
        </div>
      </div>
    </PageLayout>
  );
}
