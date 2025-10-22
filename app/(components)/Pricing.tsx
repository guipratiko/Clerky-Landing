"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "./ui/GlassCard";

export function Pricing() {
  // TODO: Substituir por dados reais de preços
  const plans = [
    {
      name: "Starter",
      price: "R$ 197",
      period: "/mês",
      description: "Ideal para começar e validar seu projeto",
      features: [
        "2.000 mensagens/mês",
        "1 agente de IA",
        "CRM Kanban básico",
        "API & Webhooks",
        "Suporte por email",
        "Documentação completa",
      ],
      cta: "Começar agora",
      href: "https://app.clerky.com.br/register",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "R$ 497",
      period: "/mês",
      description: "Para empresas que querem escalar vendas",
      features: [
        "10.000 mensagens/mês",
        "Agentes ilimitados",
        "CRM Kanban completo",
        "Disparo em massa",
        "API & Webhooks avançados",
        "Integrações nativas",
        "Suporte prioritário",
        "Analytics avançado",
      ],
      cta: "Assinar Pro",
      href: "https://app.clerky.com.br/register",
      highlighted: true,
      badge: "Mais popular",
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      period: "",
      description: "Solução personalizada para grandes volumes",
      features: [
        "Mensagens ilimitadas",
        "Agentes ilimitados",
        "CRM personalizado",
        "Disparo em massa ilimitado",
        "API dedicada",
        "White label",
        "Gerente de contas dedicado",
        "SLA garantido",
        "Onboarding personalizado",
      ],
      cta: "Falar com vendas",
      href: "#", // TODO: Link real
      highlighted: false,
    },
  ];

  return (
    <section id="precos" className="bg-base-50 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-text-headline md:text-5xl">
            Planos para todos os tamanhos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Escolha o plano ideal para seu negócio.
          </p>
        </motion.div>

        {/* Trial Banner */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-success p-1">
            <div className="relative rounded-xl bg-white px-6 py-4 text-center">
              <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
                <div className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold text-text-headline md:text-3xl">
                    Trial de 7 dias GRÁTIS
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-text-body">
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-success" />
                    Acesso Starter
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-success" />
                    Cancele quando quiser
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl gap-8 pt-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={plan.highlighted ? "md:-mt-4" : ""}
            >
              <GlassCard
                className={`relative h-full overflow-visible ${
                  plan.highlighted
                    ? "border-2 border-primary shadow-2xl"
                    : "border border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2">
                    <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                      <Zap className="h-4 w-4" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-6 p-8">
                  {/* Plan Header */}
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-text-headline">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-text-body">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-text-headline">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-text-body">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-success" />
                        <span className="text-sm text-text-body">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full ${plan.highlighted ? "glow-primary" : ""}`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* FAQ Note */}
        <motion.p
          className="mt-12 text-center text-sm text-text-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Todas as assinaturas incluem 7 dias de teste grátis. Cancele a
          qualquer momento.
        </motion.p>
      </div>
    </section>
  );
}

