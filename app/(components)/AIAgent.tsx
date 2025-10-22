"use client";

import { motion } from "framer-motion";
import { Bot, User, Headphones, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassCard } from "./ui/GlassCard";

export function AIAgent() {
  const agents = [
    {
      id: "vendedor",
      name: "Vendedor",
      icon: TrendingUp,
      description: "Qualifica leads, apresenta produtos e fecha vendas",
      dialog: [
        { role: "bot", message: "Olá! Como posso ajudar você hoje?" },
        {
          role: "user",
          message: "Quero saber mais sobre o plano Pro",
        },
        {
          role: "bot",
          message:
            "Ótimo! O Plano Pro inclui 10.000 mensagens/mês, agentes ilimitados e CRM Kanban. Posso te enviar uma demonstração?",
        },
        { role: "user", message: "Sim, por favor!" },
        {
          role: "bot",
          message:
            "Perfeito! Vou agendar uma demo para amanhã às 14h. Confirma?",
        },
      ],
    },
    {
      id: "suporte",
      name: "Suporte",
      icon: Headphones,
      description: "Resolve dúvidas, troubleshooting e escala para humanos",
      dialog: [
        { role: "bot", message: "Oi! Em que posso ajudar?" },
        {
          role: "user",
          message: "Minha integração parou de funcionar",
        },
        {
          role: "bot",
          message:
            "Entendo. Vou verificar o status da sua integração. Pode me passar seu ID de conta?",
        },
        { role: "user", message: "CLK123456" },
        {
          role: "bot",
          message:
            "Encontrei o problema! A API key expirou. Vou gerar uma nova para você. Pronto! Pode testar novamente.",
        },
      ],
    },
    {
      id: "secretaria",
      name: "Secretária",
      icon: User,
      description: "Agenda reuniões, organiza compromissos e filtra contatos",
      dialog: [
        { role: "bot", message: "Bom dia! Posso agendar algo para você?" },
        {
          role: "user",
          message: "Preciso marcar uma reunião com o time de vendas",
        },
        {
          role: "bot",
          message:
            "Claro! Tenho disponibilidade amanhã às 10h ou 15h. Qual prefere?",
        },
        { role: "user", message: "10h está ótimo" },
        {
          role: "bot",
          message:
            "Agendado! Reunião marcada para amanhã às 10h. Vou enviar o link do Meet.",
        },
      ],
    },
    {
      id: "prospector",
      name: "Prospectador",
      icon: Bot,
      description: "Busca clientes em potencial e inicia conversas",
      dialog: [
        {
          role: "bot",
          message:
            "Olá! Vi que você demonstrou interesse em automação de WhatsApp. Posso te mostrar como a Clerky pode ajudar?",
        },
        {
          role: "user",
          message: "Sim, estou procurando uma solução para meu e-commerce",
        },
        {
          role: "bot",
          message:
            "Perfeito! Temos cases de e-commerce com aumento de 40% nas vendas. Quer ver um exemplo?",
        },
        { role: "user", message: "Quero sim!" },
        {
          role: "bot",
          message: "Vou te enviar um vídeo de 3 min mostrando o sistema...",
        },
      ],
    },
  ];

  // Estado removido - não usado no componente

  return (
    <section id="agente-ia" className="bg-white py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-text-headline md:text-5xl">
            Agentes de IA para cada necessidade
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Configure a personalidade, respostas e comportamento do seu agente.
            Tudo sem código.
          </p>
        </motion.div>

        {/* Agent Selector */}
        <div className="mx-auto max-w-5xl">
          <Tabs
            defaultValue={agents[0].id}
          >
            <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-4">
              {agents.map((agent) => (
                <TabsTrigger
                  key={agent.id}
                  value={agent.id}
                  className="flex items-center gap-2"
                >
                  <agent.icon className="h-4 w-4" />
                  {agent.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {agents.map((agent) => (
              <TabsContent key={agent.id} value={agent.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard className="p-8">
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <agent.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-headline">
                          {agent.name}
                        </h3>
                        <p className="text-text-body">{agent.description}</p>
                      </div>
                    </div>

                    {/* Dialog Preview */}
                    <div className="space-y-4 rounded-xl bg-base-50 p-6">
                      {agent.dialog.map((message, index) => (
                        <motion.div
                          key={index}
                          className={`flex ${message.role === "bot" ? "justify-start" : "justify-end"}`}
                          initial={{ opacity: 0, x: message.role === "bot" ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                              message.role === "bot"
                                ? "bg-white text-text-body shadow-sm"
                                : "bg-primary text-white"
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

