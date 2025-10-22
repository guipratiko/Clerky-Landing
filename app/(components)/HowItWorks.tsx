"use client";

import { motion } from "framer-motion";
import { Smartphone, Bot, Plug, TrendingUp } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Smartphone,
      title: "Conecte seu WhatsApp",
      description:
        "Escaneie o QR Code e vincule sua conta em segundos. Totalmente seguro e criptografado.",
    },
    {
      number: 2,
      icon: Bot,
      title: "Escolha ou crie seu agente de IA",
      description:
        "Selecione uma persona pronta (vendedor, suporte, secretária) ou customize do zero.",
    },
    {
      number: 3,
      icon: Plug,
      title: "Integre com seu sistema",
      description:
        "Configure APIs e Webhooks para conectar com CRM, ERP, planilhas ou qualquer ferramenta.",
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Acompanhe e escale",
      description:
        "Monitore conversas no CRM Kanban, dispare campanhas e analise métricas em tempo real.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-text-headline md:text-5xl">
            Como funciona
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Configure sua automação em minutos e comece a vender com IA hoje
            mesmo.
          </p>
        </motion.div>

        {/* Steps - Mobile and Tablet */}
        <div className="space-y-8 lg:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <GlassCard className="p-6">
                  <span className="mb-2 inline-block text-sm font-semibold text-primary">
                    Passo {step.number}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold text-text-headline">
                    {step.title}
                  </h3>
                  <p className="text-text-body">{step.description}</p>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Steps - Desktop with alternating layout */}
        <div className="relative hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-success" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative grid grid-cols-2 items-center gap-8"
                >
                  {isLeft ? (
                    <>
                      {/* Content Left */}
                      <div className="flex justify-end">
                        <div className="max-w-md">
                          <GlassCard className="p-6 text-right">
                            <span className="mb-2 inline-block text-sm font-semibold text-primary">
                              Passo {step.number}
                            </span>
                            <h3 className="mb-2 text-xl font-semibold text-text-headline">
                              {step.title}
                            </h3>
                            <p className="text-text-body">{step.description}</p>
                          </GlassCard>
                        </div>
                      </div>
                      {/* Icon Center */}
                      <div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-xl">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      {/* Empty Right */}
                      <div />
                    </>
                  ) : (
                    <>
                      {/* Empty Left */}
                      <div />
                      {/* Icon Center */}
                      <div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-xl">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      {/* Content Right */}
                      <div className="flex justify-start">
                        <div className="max-w-md">
                          <GlassCard className="p-6 text-left">
                            <span className="mb-2 inline-block text-sm font-semibold text-primary">
                              Passo {step.number}
                            </span>
                            <h3 className="mb-2 text-xl font-semibold text-text-headline">
                              {step.title}
                            </h3>
                            <p className="text-text-body">{step.description}</p>
                          </GlassCard>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
