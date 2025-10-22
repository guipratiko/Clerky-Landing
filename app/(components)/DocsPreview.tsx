"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Code,
  Webhook,
  Package,
  FileCode,
  Zap,
} from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function DocsPreview() {
  const docsSections = [
    {
      icon: BookOpen,
      title: "Guia Rápido",
      description: "Comece em 5 minutos. Tutorial passo a passo completo.",
      href: "#", // TODO: Link para docs reais
      color: "from-primary to-secondary",
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Documentação completa de todos os endpoints REST.",
      href: "#", // TODO: Link para docs reais
      color: "from-secondary to-primary",
    },
    {
      icon: Webhook,
      title: "Webhooks",
      description: "Receba eventos em tempo real na sua aplicação.",
      href: "#", // TODO: Link para docs reais
      color: "from-primary to-success",
    },
    {
      icon: Package,
      title: "SDKs",
      description: "Bibliotecas oficiais em JavaScript, Python, PHP e mais.",
      href: "#", // TODO: Link para docs reais
      color: "from-success to-secondary",
    },
    {
      icon: FileCode,
      title: "Exemplos",
      description: "Code snippets e projetos completos para começar rápido.",
      href: "#", // TODO: Link para docs reais
      color: "from-secondary to-success",
    },
    {
      icon: Zap,
      title: "Postman",
      description: "Coleção completa para testar todos os endpoints.",
      href: "#", // TODO: Link para docs reais
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section id="docs" className="bg-white py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-text-headline md:text-5xl">
            Documentação completa
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Tudo que você precisa para integrar: guias, APIs, SDKs e exemplos
            práticos.
          </p>
        </motion.div>

        {/* Docs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {docsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={section.href}>
                <GlassCard className="group h-full transition-all hover:shadow-xl">
                  <div
                    className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${section.color} p-3`}
                  >
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-text-headline group-hover:text-primary">
                    {section.title}
                  </h3>
                  <p className="text-text-body">{section.description}</p>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

