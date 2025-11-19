import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Clerky",
  description: "Termos e condições de uso da plataforma Clerky",
};

export default function TermosPage() {
  return (
    <PageLayout
      title="Termos de Uso"
      description="Termos e condições de uso da plataforma Clerky"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          <strong>Última atualização:</strong> Janeiro de 2025
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          1. Aceitação dos Termos
        </h2>
        <p className="text-text-body">
          Estes Termos de Uso (&quot;Termos&quot;) regem o uso da plataforma Clerky (&quot;Plataforma&quot;, &quot;Serviço&quot;) operada pela Clerky (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;). Ao acessar ou utilizar a Plataforma, você (&quot;Usuário&quot;, &quot;você&quot; ou &quot;seu&quot;) concorda em ficar vinculado a estes Termos.
        </p>
        <p className="text-text-body">
          Se você não concordar com qualquer parte destes Termos, não deve utilizar a Plataforma. Estes Termos constituem um acordo legalmente vinculativo entre você e a Clerky.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          2. Definições
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li><strong>Plataforma:</strong> O serviço Clerky, incluindo website, aplicações, APIs e todos os recursos relacionados</li>
          <li><strong>Usuário:</strong> Qualquer pessoa ou entidade que acessa ou utiliza a Plataforma</li>
          <li><strong>Conta:</strong> O registro criado pelo Usuário para acessar a Plataforma</li>
          <li><strong>Conteúdo:</strong> Todas as informações, dados, mensagens, arquivos e materiais enviados ou transmitidos através da Plataforma</li>
          <li><strong>Serviços:</strong> Todos os recursos, funcionalidades e serviços oferecidos através da Plataforma</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          3. Elegibilidade e Registro
        </h2>
        <p className="text-text-body">
          Para utilizar a Plataforma, você deve:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Ter pelo menos 18 anos de idade ou ter capacidade legal para celebrar contratos</li>
          <li>Fornecer informações precisas, completas e atualizadas durante o registro</li>
          <li>Manter a segurança de sua conta e senha</li>
          <li>Ser responsável por todas as atividades que ocorram em sua conta</li>
          <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
        </ul>
        <p className="mt-4 text-text-body">
          Você pode criar apenas uma conta por pessoa ou entidade. Contas duplicadas podem ser suspensas ou encerradas.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          4. Descrição dos Serviços
        </h2>
        <p className="text-text-body">
          A Clerky oferece uma plataforma de comunicação e automação que permite:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Gerenciar comunicações via WhatsApp e outras plataformas</li>
          <li>Utilizar agentes de inteligência artificial para automação</li>
          <li>Gerenciar relacionamentos com clientes através de CRM Kanban</li>
          <li>Realizar disparos em massa de mensagens</li>
          <li>Integrar com outras plataformas através de APIs e Webhooks</li>
          <li>Acessar análises e relatórios de uso</li>
        </ul>
        <p className="mt-4 text-text-body">
          Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto dos Serviços a qualquer momento, com ou sem aviso prévio.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          5. Planos e Pagamentos
        </h2>
        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          5.1. Planos de Assinatura
        </h3>
        <p className="text-text-body">
          Oferecemos diferentes planos de assinatura com recursos e limites variados. Os detalhes de cada plano, incluindo preços, recursos e limites, estão disponíveis em nossa página de preços.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          5.2. Período de Teste
        </h3>
        <p className="text-text-body">
          Podemos oferecer um período de teste gratuito. Após o término do período de teste, sua assinatura será automaticamente convertida para o plano escolhido, a menos que você cancele antes do término do período de teste.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          5.3. Pagamentos
        </h3>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Os pagamentos são processados mensalmente ou conforme o plano escolhido</li>
          <li>Os preços estão sujeitos a alterações com aviso prévio de 30 dias</li>
          <li>Você autoriza a cobrança automática do valor da assinatura no método de pagamento cadastrado</li>
          <li>É sua responsabilidade manter as informações de pagamento atualizadas</li>
          <li>Falhas no pagamento podem resultar na suspensão ou encerramento do acesso aos Serviços</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          5.4. Reembolsos
        </h3>
        <p className="text-text-body">
          Reembolsos são tratados caso a caso. Em geral, não oferecemos reembolsos para períodos já utilizados. Reembolsos parciais podem ser considerados em circunstâncias excepcionais, a nosso exclusivo critério.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          5.5. Cancelamento
        </h3>
        <p className="text-text-body">
          Você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta. O cancelamento entrará em vigor no final do período de cobrança atual. Você continuará tendo acesso aos Serviços até o final do período já pago.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          6. Uso Aceitável
        </h2>
        <p className="text-text-body">
          Você concorda em utilizar a Plataforma apenas para fins legais e de acordo com estes Termos. Você NÃO deve:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Violar qualquer lei, regulamento ou direito de terceiros</li>
          <li>Enviar spam, mensagens não solicitadas ou conteúdo abusivo</li>
          <li>Utilizar a Plataforma para atividades fraudulentas ou enganosas</li>
          <li>Interferir ou interromper o funcionamento da Plataforma</li>
          <li>Tentar acessar áreas restritas ou contas de outros usuários</li>
          <li>Transmitir vírus, malware ou código malicioso</li>
          <li>Realizar engenharia reversa, descompilar ou desmontar a Plataforma</li>
          <li>Utilizar a Plataforma de forma que possa danificar, sobrecarregar ou prejudicar nossos servidores</li>
          <li>Violar as políticas do WhatsApp ou de outras plataformas integradas</li>
          <li>Coletar ou armazenar dados pessoais de terceiros sem consentimento adequado</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          7. Conteúdo do Usuário
        </h2>
        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          7.1. Responsabilidade pelo Conteúdo
        </h3>
        <p className="text-text-body">
          Você é exclusivamente responsável por todo o Conteúdo que enviar, transmitir ou disponibilizar através da Plataforma. Você garante que possui todos os direitos necessários sobre o Conteúdo e que ele não viola direitos de terceiros.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          7.2. Licença de Uso
        </h3>
        <p className="text-text-body">
          Ao enviar Conteúdo através da Plataforma, você nos concede uma licença não exclusiva, mundial, livre de royalties para usar, armazenar, processar e transmitir esse Conteúdo apenas para fornecer e melhorar os Serviços.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          7.3. Remoção de Conteúdo
        </h3>
        <p className="text-text-body">
          Reservamo-nos o direito de remover qualquer Conteúdo que, a nosso critério, viole estes Termos, seja ilegal ou possa nos expor a responsabilidade legal.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          8. Propriedade Intelectual
        </h2>
        <p className="text-text-body">
          A Plataforma, incluindo seu design, funcionalidades, código, marcas, logotipos e documentação, é propriedade da Clerky ou de seus licenciadores e está protegida por leis de propriedade intelectual. Você não adquire nenhum direito de propriedade sobre a Plataforma, exceto os direitos de uso expressamente concedidos nestes Termos.
        </p>
        <p className="mt-4 text-text-body">
          Você concorda em não copiar, modificar, distribuir, vender ou alugar qualquer parte da Plataforma sem nossa autorização prévia por escrito.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          9. Privacidade e Proteção de Dados
        </h2>
        <p className="text-text-body">
          O tratamento de seus dados pessoais é regido por nossa Política de Privacidade, que faz parte integrante destes Termos. Ao utilizar a Plataforma, você concorda com a coleta e uso de informações conforme descrito na Política de Privacidade.
        </p>
        <p className="mt-4 text-text-body">
          Você é responsável por garantir que possui todas as autorizações e consentimentos necessários para processar dados pessoais de terceiros através da Plataforma, em conformidade com a LGPD e demais legislações aplicáveis.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          10. Limitação de Responsabilidade
        </h2>
        <p className="text-text-body">
          NA MÁXIMA EXTENSÃO PERMITIDA POR LEI:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>A Plataforma é fornecida &quot;COMO ESTÁ&quot; e &quot;CONFORME DISPONÍVEL&quot;, sem garantias de qualquer tipo</li>
          <li>Não garantimos que a Plataforma será ininterrupta, segura, livre de erros ou atenderá às suas necessidades específicas</li>
          <li>Não seremos responsáveis por danos indiretos, incidentais, especiais, consequenciais ou punitivos</li>
          <li>Nossa responsabilidade total não excederá o valor pago por você nos últimos 12 meses</li>
          <li>Não seremos responsáveis por perda de dados, lucros, receitas ou oportunidades de negócio</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          11. Indenização
        </h2>
        <p className="text-text-body">
          Você concorda em indenizar, defender e isentar a Clerky, seus diretores, funcionários e agentes de quaisquer reivindicações, danos, obrigações, perdas, responsabilidades, custos ou dívidas, e despesas (incluindo honorários advocatícios) decorrentes de:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Seu uso da Plataforma</li>
          <li>Violação destes Termos</li>
          <li>Violação de direitos de terceiros</li>
          <li>Conteúdo que você enviar ou transmitir através da Plataforma</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          12. Suspensão e Encerramento
        </h2>
        <p className="text-text-body">
          Reservamo-nos o direito de suspender ou encerrar sua conta e acesso aos Serviços, imediatamente e sem aviso prévio, se:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Você violar estes Termos</li>
          <li>Você violar qualquer lei ou regulamento aplicável</li>
          <li>Houver suspeita de atividade fraudulenta ou abusiva</li>
          <li>Você não efetuar pagamentos devidos</li>
          <li>Por qualquer outro motivo a nosso critério razoável</li>
        </ul>
        <p className="mt-4 text-text-body">
          Após o encerramento, você não terá mais acesso à sua conta ou aos dados armazenados. Podemos, mas não temos obrigação de, reter seus dados por um período limitado após o encerramento.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          13. Modificações dos Termos
        </h2>
        <p className="text-text-body">
          Podemos modificar estes Termos a qualquer momento. Notificaremos você sobre mudanças significativas através de e-mail ou aviso na Plataforma. O uso continuado da Plataforma após as modificações constitui sua aceitação dos Termos revisados.
        </p>
        <p className="mt-4 text-text-body">
          Se você não concordar com os Termos modificados, deve encerrar sua conta e parar de usar a Plataforma.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          14. Integrações com Terceiros
        </h2>
        <p className="text-text-body">
          A Plataforma pode integrar com serviços de terceiros, incluindo WhatsApp, APIs e outras plataformas. Você é responsável por:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Cumprir os termos de uso e políticas desses serviços de terceiros</li>
          <li>Obter todas as autorizações necessárias para usar essas integrações</li>
          <li>Entender que mudanças nos serviços de terceiros podem afetar a funcionalidade da Plataforma</li>
        </ul>
        <p className="mt-4 text-text-body">
          Não somos responsáveis pelas ações, políticas ou termos de serviços de terceiros.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          15. Força Maior
        </h2>
        <p className="text-text-body">
          Não seremos responsáveis por qualquer falha ou atraso no desempenho resultante de causas além de nosso controle razoável, incluindo, mas não limitado a, desastres naturais, guerra, terrorismo, greves, falhas de infraestrutura de internet ou falhas de serviços de terceiros.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          16. Lei Aplicável e Jurisdição
        </h2>
        <p className="text-text-body">
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais competentes do Brasil.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          17. Disposições Gerais
        </h2>
        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          17.1. Acordo Completo
        </h3>
        <p className="text-text-body">
          Estes Termos, juntamente com nossa Política de Privacidade, constituem o acordo completo entre você e a Clerky em relação ao uso da Plataforma.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          17.2. Divisibilidade
        </h3>
        <p className="text-text-body">
          Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          17.3. Renúncia
        </h3>
        <p className="text-text-body">
          A falha em exercer qualquer direito ou disposição destes Termos não constituirá uma renúncia a tal direito ou disposição.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-text-headline">
          17.4. Cessão
        </h3>
        <p className="text-text-body">
          Você não pode ceder ou transferir estes Termos ou seus direitos sob estes Termos sem nossa autorização prévia por escrito. Podemos ceder estes Termos a qualquer momento sem aviso prévio.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          18. Contato
        </h2>
        <p className="text-text-body">
          Se você tiver dúvidas sobre estes Termos, entre em contato conosco:
        </p>
        <div className="mt-4 rounded-lg bg-base-100 p-6 text-text-body">
          <p><strong>E-mail:</strong> suporte@clerky.com.br</p>
          <p className="mt-2"><strong>Assuntos legais:</strong> legal@clerky.com.br</p>
        </div>

        <p className="mt-8 text-sm text-text-body">
          Ao utilizar a Plataforma Clerky, você reconhece que leu, entendeu e concorda em ficar vinculado a estes Termos de Uso.
        </p>
      </div>
    </PageLayout>
  );
}

