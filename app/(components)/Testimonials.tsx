"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function Testimonials() {
  // TODO: Substituir por depoimentos reais
  const testimonials = [
    {
      name: "João Silva",
      role: "CEO",
      company: "Tech Startup",
      avatar: "JS",
      rating: 5,
      quote:
        "A Clerky revolucionou nosso atendimento. Aumentamos em 40% as vendas apenas automatizando o primeiro contato com IA.",
    },
    {
      name: "Maria Santos",
      role: "Head de Marketing",
      company: "E-commerce Brasil",
      avatar: "MS",
      rating: 5,
      quote:
        "Disparo em massa sem bloqueios e CRM integrado. Ferramenta completa que substituiu 3 ferramentas que usávamos antes.",
    },
    {
      name: "Pedro Costa",
      role: "Diretor Comercial",
      company: "Agência Digital",
      avatar: "PC",
      rating: 5,
      quote:
        "A API é muito bem documentada. Integramos com nosso sistema em menos de 2 horas. Suporte excepcional!",
    },
    {
      name: "Ana Lima",
      role: "Founder",
      company: "SaaS Company",
      avatar: "AL",
      rating: 5,
      quote:
        "Usamos para onboarding de clientes. O agente de IA responde 80% das dúvidas automaticamente. Game changer!",
    },
    {
      name: "Carlos Rocha",
      role: "CTO",
      company: "FinTech",
      avatar: "CR",
      rating: 5,
      quote:
        "Webhooks em tempo real funcionam perfeitamente. A confiabilidade da entrega é impressionante. 99.9% uptime.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-text-headline md:text-5xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Empresas de todos os tamanhos confiam na Clerky para automatizar
            WhatsApp.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="flex h-full flex-col p-6">
                {/* Quote Icon */}
                <Quote className="mb-4 h-8 w-8 text-primary/30" />

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 flex-1 text-text-body">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-text-headline">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-text-body">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

