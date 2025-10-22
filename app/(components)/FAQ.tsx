"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

const faqs = [
    {
      question: "A Clerky está em conformidade com a LGPD?",
      answer:
        "Sim! A Clerky está 100% em conformidade com a LGPD (Lei Geral de Proteção de Dados). Todos os dados são criptografados, armazenados em servidores no Brasil, e você tem controle total sobre a coleta, uso e exclusão de informações. Oferecemos DPA (Data Processing Agreement) para clientes Enterprise.",
    },
    {
      question: "Existem limites de disparo em massa?",
      answer:
        "Sim, para proteger sua conta de bloqueios pelo WhatsApp, implementamos limites de velocidade inteligentes. O Plano Starter permite até 500 mensagens/hora, o Pro até 2.000/hora, e o Enterprise tem limites customizados. Nosso sistema também pausa automaticamente se detectar risco de bloqueio.",
    },
    {
      question: "Como funciona o setup do agente de IA?",
      answer:
        "É muito simples! Você escolhe uma persona (vendedor, suporte, etc.), personaliza as respostas base, define o tom de voz e pronto. Não precisa programar nada. O agente aprende com as conversas e você pode ajustar as respostas a qualquer momento pelo painel. Também oferecemos templates prontos para começar em minutos.",
    },
    {
      question: "Quais integrações são suportadas?",
      answer:
        "A Clerky se conecta a qualquer sistema que tenha API REST ou aceite Webhooks. Oferecemos integrações nativas com Salesforce, HubSpot, n8n, Zapier, Make, Google Sheets e mais. Para sistemas customizados, nossa API REST completa permite integração total. Também disponibilizamos SDKs em JavaScript, Python, PHP e outras linguagens.",
    },
    {
      question: "Como é o suporte?",
      answer:
        "Oferecemos suporte por email para todos os planos (resposta em até 24h). Clientes Pro têm suporte prioritário (resposta em até 4h). Clientes Enterprise têm um gerente de contas dedicado disponível via WhatsApp/Slack. Toda documentação, guias e vídeos estão disponíveis 24/7 no nosso portal.",
    },
    {
      question: "Posso testar antes de assinar?",
      answer:
        "Com certeza! Todos os planos incluem 14 dias de teste grátis, sem exigir cartão de crédito. Durante o trial, você tem acesso completo a todos os recursos do plano escolhido. Se não gostar, basta cancelar antes do fim do período e não será cobrado nada.",
    },
    {
      question: "O que acontece se eu ultrapassar meu limite de mensagens?",
      answer:
        "Você será notificado quando atingir 80% e 100% do seu limite. Ao ultrapassar, o envio de novas mensagens é pausado até o próximo ciclo de cobrança. Você pode fazer upgrade do plano a qualquer momento para continuar enviando imediatamente, e o valor é proporcional aos dias restantes.",
    },
    {
      question: "Os dados ficam em servidores no Brasil?",
      answer:
        "Sim! Toda a infraestrutura da Clerky está hospedada em servidores no Brasil (AWS São Paulo), garantindo baixa latência e conformidade total com regulamentações locais. Fazemos backups diários criptografados e mantemos redundância em múltiplas zonas de disponibilidade.",
    },
];

export function FAQ() {
  // Schema.org FAQPage
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-base-50 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-text-headline md:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Tire suas dúvidas sobre a plataforma, privacidade e integrações.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-text-headline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-body">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

