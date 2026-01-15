"use client";

import { motion } from "framer-motion";
import { Bot, Plug, Kanban, Send, FileText, Instagram, Workflow, Users, Smartphone } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "Agentes de IA sem código",
      description:
        "Integração com OpenAI (GPT-4, GPT-3.5). Respostas automáticas com contexto, memória de conversas, transcrição de áudio e qualificação de leads.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Plug,
      title: "Múltiplas instâncias WhatsApp",
      description:
        "Conexão de múltiplas contas WhatsApp. Geração de QR Code, monitoramento de status em tempo real e configuração de webhooks.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Instagram,
      title: "Automações para Instagram",
      description:
        "Conexão via OAuth Meta. Automações baseadas em palavras-chave, respostas automáticas a DMs e comentários, sequências de mensagens e relatórios.",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: Kanban,
      title: "CRM Kanban integrado",
      description:
        "Organização de contatos em colunas personalizáveis, histórico de conversas, envio de mensagens (texto, mídia, áudio, arquivos), busca e filtros.",
      gradient: "from-primary to-success",
    },
    {
      icon: Send,
      title: "Disparo em massa",
      description:
        "Templates personalizáveis, agendamento, controle de velocidade, validação de contatos, exclusão automática e relatórios detalhados.",
      gradient: "from-success to-primary",
    },
    {
      icon: Workflow,
      title: "Workflows visuais (MindClerky)",
      description:
        "Editor visual de fluxos, nós condicionais, integração com Typebot e Google Sheets, processamento com OpenAI e webhooks personalizados.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Users,
      title: "Gerenciador de grupos WhatsApp",
      description:
        "Visualização e criação de grupos, edição de informações, configuração de permissões, códigos de convite, mensagens automáticas e histórico.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Smartphone,
      title: "Apps iOS e Android nativos",
      description:
        "Aplicativos nativos com autenticação biométrica (Face ID/Touch ID), acesso às funcionalidades principais e sincronização em tempo real.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Documentação completa",
      description:
        "APIs REST, Webhooks, SDKs em múltiplas linguagens, exemplos práticos e coleção Postman. Tudo que você precisa para integrar.",
      gradient: "from-secondary to-success",
    },
  ];

  return (
    <section id="recursos" className="bg-base-50 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-text-headline md:text-5xl">
            Tudo que você precisa
            <br />
            em uma única plataforma
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Do primeiro contato à conversão, gerencie toda jornada do cliente
            com inteligência artificial.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div
                  className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.gradient} p-3`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-text-headline">
                  {feature.title}
                </h3>
                <p className="text-text-body">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

