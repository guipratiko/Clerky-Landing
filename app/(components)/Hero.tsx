"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Zap, Webhook, Kanban, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Particles } from "./ui/Particles";
import { CursorSpotlight } from "./ui/CursorSpotlight";
import { gtag_report_conversion } from "@/lib/google-ads";

interface HeroProps {
  enableParticles?: boolean;
}

export function Hero({ enableParticles = true }: HeroProps) {
  const badges = [
    { icon: Zap, label: "IA sem código" },
    { icon: Webhook, label: "API & Webhook" },
    { icon: Kanban, label: "CRM Kanban" },
    { icon: Send, label: "Disparo em Massa" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-base-50 to-white pt-24">
      {/* Background Effects */}
      <Particles enabled={enableParticles} particleCount={50} />
      <CursorSpotlight />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <motion.h1
            className="gradient-text mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Conecte seu WhatsApp
            <br />
            a qualquer sistema.
            <br />
            <span className="text-text-headline">Sem código.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-8 max-w-3xl text-lg text-text-body md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Clerky é o Hub de Integração com IA: crie agentes, automatize
            vendas e suporte, dispare campanhas e gerencie clientes no Kanban.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mb-12 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              asChild 
              className="glow-primary text-base"
            >
              <Link 
                href="https://app.clerky.com.br/signup"
                onClick={(e) => {
                  e.preventDefault();
                  gtag_report_conversion('https://app.clerky.com.br/signup', 1.0, 'BRL');
                }}
              >
                Começar agora
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link href="#integracoes">Ver integrações</Link>
            </Button>
          </motion.div>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="flex items-center gap-2 px-4 py-2 text-sm"
                >
                  <badge.icon className="h-4 w-4" />
                  {badge.label}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.5 },
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }}
          >
            <ChevronDown className="h-8 w-8 text-text-body" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

