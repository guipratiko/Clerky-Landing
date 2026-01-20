"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "./ui/GlassCard";
import { gtag_report_conversion } from "@/lib/google-ads";

export function Pricing() {
  const [isLoadingPro, setIsLoadingPro] = useState(false);
  const [proError, setProError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Limpar abort controller quando o componente desmonta
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleProCheckout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Se já está carregando, não fazer nada
    if (isLoadingPro) return;
    
    setIsLoadingPro(true);
    setProError(null);

    // Cancelar requisição anterior se existir
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Criar novo AbortController para esta requisição
    const controller = new AbortController();
    abortControllerRef.current = controller;

    // Timeout de 25 segundos no cliente
    const timeoutId = setTimeout(() => {
      if (!controller.signal.aborted) {
        controller.abort();
        console.warn("[CHECKOUT] Timeout no cliente (25s) - cancelando requisição");
        setProError("A requisição está demorando mais que o esperado. Por favor, tente novamente.");
        setIsLoadingPro(false);
      }
    }, 25000);

    try {
      console.log("[CHECKOUT] Iniciando requisição para API...");
      
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Verificar se foi cancelado
      if (controller.signal.aborted) {
        return;
      }

      const result = await response.json();
      console.log("[CHECKOUT] Resposta da API:", result);

      if (!response.ok || !result || !result.success) {
        throw new Error(result?.error || "Erro ao criar checkout");
      }

      if (!result.link) {
        throw new Error("Link de checkout não retornado");
      }

      // Rastrear conversão
      gtag_report_conversion(result.link, 197.0, "BRL");

      // Redirecionar para o checkout
      window.location.href = result.link;
    } catch (error) {
      clearTimeout(timeoutId);

      // Ignorar erros de abort
      if (error instanceof Error && error.name === 'AbortError') {
        console.log("[CHECKOUT] Requisição cancelada");
        return;
      }

      console.error("[CHECKOUT] Erro ao processar checkout:", error);
      
      let errorMessage = "Erro ao processar checkout. Tente novamente.";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setProError(errorMessage);
      setIsLoadingPro(false);
    } finally {
      // Limpar referência do controller
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
    }
  };

  const plans = [
    {
      name: "Trial",
      price: "Grátis",
      period: "por 7 dias",
      description: "Teste gratuito com recursos limitados",
      features: [
        "1 conexão WhatsApp",
        "CRM Kanban",
        "1 integração via webhook",
        "Sem disparo em massa",
        "Sem Workflow de IA",
        "Suporte por email",
      ],
      cta: "Começar trial",
      href: "https://app.clerky.com.br/signup",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "R$ 197",
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
      href: "https://wa.me/5562993557070?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20plano%20Enterprise",
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
                  {plan.name === "Pro" ? (
                    <div className="space-y-2">
                      <Button
                        onClick={handleProCheckout}
                        disabled={isLoadingPro}
                        className={`w-full ${plan.highlighted ? "glow-primary" : ""}`}
                        variant={plan.highlighted ? "default" : "outline"}
                      >
                        {isLoadingPro ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processando...
                          </>
                        ) : (
                          plan.cta
                        )}
                      </Button>
                      {proError && (
                        <p className="text-xs text-red-500">{proError}</p>
                      )}
                    </div>
                  ) : (
                    <Button
                      asChild
                      className={`w-full ${plan.highlighted ? "glow-primary" : ""}`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <Link
                        href={plan.href || "#"}
                        onClick={(e) => {
                          if (plan.name === "Trial") {
                            e.preventDefault();
                            gtag_report_conversion(
                              plan.href || "",
                              1.0,
                              "BRL"
                            );
                          }
                        }}
                      >
                        {plan.cta}
                      </Link>
                    </Button>
                  )}
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
