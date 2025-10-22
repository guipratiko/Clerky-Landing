"use client";

import { motion } from "framer-motion";
import { Bot, Plug, Kanban, Send, FileText } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "Agentes de IA sem código",
      description:
        "Crie agentes inteligentes para vendas, atendimento, suporte e prospecção. Configure personalidades e respostas sem programar.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Plug,
      title: "Hub WhatsApp ↔ Sistemas",
      description:
        "Conecte seu WhatsApp a qualquer sistema via API ou Webhook. Integração bidirecional completa e em tempo real.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Kanban,
      title: "CRM Kanban",
      description:
        "Gerencie seus contatos e negociações com pipeline visual. Arraste, solte, adicione notas e tags em um board intuitivo.",
      gradient: "from-primary to-success",
    },
    {
      icon: Send,
      title: "Disparo em Massa",
      description:
        "Envie campanhas segmentadas com agendamento inteligente. Métricas detalhadas de entrega, leitura e respostas.",
      gradient: "from-success to-primary",
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

