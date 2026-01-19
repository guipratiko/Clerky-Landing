"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Check, Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "./ui/GlassCard";
import { gtag_report_conversion } from "@/lib/google-ads";

export function Pricing() {
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const handleProCheckout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (loadingCheckout) {
      console.log('[FRONTEND] Checkout já em andamento, ignorando clique');
      return;
    }
    
    const requestId = `frontend_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const overallStartTime = Date.now();
    console.log(`[${new Date().toISOString()}] [${requestId}] 🚀 Iniciando processo de checkout`);
    
    setLoadingCheckout(true);
    
    const maxRetries = 2;
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      const attemptStartTime = Date.now();
      console.log(`[${new Date().toISOString()}] [${requestId}] Tentativa ${attempt + 1}/${maxRetries + 1}`);
      
      try {
        // Rastrear conversão apenas na primeira tentativa
        if (attempt === 0) {
          console.log(`[${new Date().toISOString()}] [${requestId}] 📊 Rastreando conversão no Google Ads`);
          gtag_report_conversion('', 197.0, 'BRL');
        }
        
        // Criar checkout no Asaas com timeout
        // Aumentamos para 50 segundos para dar mais tempo ao servidor (que tem maxDuration de 60s)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          console.log(`[${new Date().toISOString()}] [${requestId}] ⏱️ TIMEOUT no frontend após 50 segundos`);
          controller.abort();
        }, 50000); // 50 segundos (servidor tem 60s, mas damos margem para overhead de rede)
        
        const apiUrl = '/api/checkout';
        console.log(`[${new Date().toISOString()}] [${requestId}] 📤 Enviando requisição para ${apiUrl}`);
        console.log(`[${new Date().toISOString()}] [${requestId}] URL completa: ${window.location.origin}${apiUrl}`);
        const fetchStartTime = Date.now();
        
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            signal: controller.signal,
          });
          
          clearTimeout(timeoutId);
          const fetchDuration = Date.now() - fetchStartTime;
          console.log(`[${new Date().toISOString()}] [${requestId}] 📥 Resposta recebida em ${fetchDuration}ms - Status: ${response.status} ${response.statusText}`);
          console.log(`[${new Date().toISOString()}] [${requestId}] Headers da resposta:`, {
            'x-request-id': response.headers.get('x-request-id'),
            'content-type': response.headers.get('content-type'),
          });
          
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: 'Erro desconhecido' }));
            
            // Erro 401 (Unauthorized) - Token inválido, não tentar novamente
            if (response.status === 401) {
              console.error(`[${new Date().toISOString()}] [${requestId}] 🔐 ERRO DE AUTENTICAÇÃO: Token do Asaas inválido`);
              throw new Error('Erro de configuração do gateway de pagamento. Por favor, entre em contato com o suporte.');
            }
            
            // Se for erro 502, 503 ou 504, tentar novamente
            if ((response.status === 502 || response.status === 503 || response.status === 504) && attempt < maxRetries) {
              const waitTime = 1000 * (attempt + 1);
              console.log(`[${new Date().toISOString()}] [${requestId}] ⚠️ Erro ${response.status} detectado. Aguardando ${waitTime}ms antes de tentar novamente...`);
              await new Promise(resolve => setTimeout(resolve, waitTime));
              continue;
            }
            
            console.error(`[${new Date().toISOString()}] [${requestId}] ❌ Erro HTTP ${response.status}:`, errorData);
            throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
          }
          
          const data = await response.json();
          const attemptDuration = Date.now() - attemptStartTime;
          console.log(`[${new Date().toISOString()}] [${requestId}] ✅ Checkout criado com sucesso! ID: ${data.id || 'N/A'}`);
          console.log(`[${new Date().toISOString()}] [${requestId}] Tempo da tentativa: ${attemptDuration}ms`);
          
          if (data.link) {
            console.log(`[${new Date().toISOString()}] [${requestId}] 🔗 Redirecionando para: ${data.link}`);
            // Redirecionar para o checkout
            window.location.href = data.link;
            return; // Sucesso, sair da função
          } else {
            throw new Error('Link de checkout não encontrado na resposta');
          }
        } catch (fetchError) {
          clearTimeout(timeoutId);
          const fetchDuration = Date.now() - fetchStartTime;
          
          console.error(`[${new Date().toISOString()}] [${requestId}] ❌ Erro na requisição fetch (${fetchDuration}ms):`, {
            name: fetchError instanceof Error ? fetchError.name : 'Unknown',
            message: fetchError instanceof Error ? fetchError.message : String(fetchError),
            stack: fetchError instanceof Error ? fetchError.stack : undefined,
          });
          
          if (fetchError instanceof Error && fetchError.name === 'AbortError') {
            console.log(`[${new Date().toISOString()}] [${requestId}] ⏱️ Timeout após ${fetchDuration}ms`);
            console.log(`[${new Date().toISOString()}] [${requestId}] Possíveis causas: servidor não respondeu, proxy timeout, ou problema de rede`);
            // Timeout - tentar novamente se ainda houver tentativas
            if (attempt < maxRetries) {
              const waitTime = 1000 * (attempt + 1);
              console.log(`[${new Date().toISOString()}] [${requestId}] Aguardando ${waitTime}ms antes de tentar novamente...`);
              await new Promise(resolve => setTimeout(resolve, waitTime));
              continue;
            }
            throw new Error('A requisição demorou muito. Por favor, tente novamente.');
          }
          
          // Verificar se é erro de rede
          if (fetchError instanceof TypeError && fetchError.message.includes('fetch')) {
            console.error(`[${new Date().toISOString()}] [${requestId}] Erro de rede detectado:`, fetchError.message);
          }
          
          throw fetchError;
        }
      } catch (error) {
        const attemptDuration = Date.now() - attemptStartTime;
        lastError = error instanceof Error ? error : new Error('Erro desconhecido');
        console.error(`[${new Date().toISOString()}] [${requestId}] ❌ Erro na tentativa ${attempt + 1} (${attemptDuration}ms):`, lastError.message);
        
        // Se não for a última tentativa e for um erro que vale a pena tentar novamente
        if (attempt < maxRetries && (
          lastError.message.includes('timeout') ||
          lastError.message.includes('502') ||
          lastError.message.includes('503') ||
          lastError.message.includes('504')
        )) {
          const waitTime = 1000 * (attempt + 1);
          console.log(`[${new Date().toISOString()}] [${requestId}] ⏳ Aguardando ${waitTime}ms antes da próxima tentativa...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }
        
        // Se chegou aqui, é a última tentativa ou erro não recuperável
        break;
      }
    }
    
    // Se chegou aqui, todas as tentativas falharam
    const totalDuration = Date.now() - overallStartTime;
    console.error(`[${new Date().toISOString()}] [${requestId}] ❌ FALHA FINAL: Todas as tentativas falharam após ${totalDuration}ms`);
    console.error(`[${new Date().toISOString()}] [${requestId}] Último erro:`, lastError);
    const errorMessage = lastError?.message || 'Erro desconhecido ao processar checkout';
    alert(`Erro: ${errorMessage}\n\nPor favor, tente novamente ou entre em contato conosco se o problema persistir.`);
    setLoadingCheckout(false);
  };

  // TODO: Substituir por dados reais de preços
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
      href: "https://clerky.carrinho.app/one-checkout/ocmtb/30403256",
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
                  {plan.highlighted ? (
                    <Button
                      className="w-full glow-primary"
                      variant="default"
                      onClick={handleProCheckout}
                      disabled={loadingCheckout}
                    >
                      {loadingCheckout ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processando...
                        </>
                      ) : (
                        plan.cta
                      )}
                    </Button>
                  ) : (
                  <Button
                    asChild
                      className="w-full"
                      variant="outline"
                  >
                      <Link href={plan.href}>
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

