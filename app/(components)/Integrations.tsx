"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Workflow, Table, MessageSquare, Bot, Brain } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function Integrations() {
  const integrations = [
    { name: "Meta (Instagram)", category: "Redes Sociais" },
    { name: "WhatsApp", category: "Mensageria" },
    { name: "OpenAI (GPT-4)", category: "IA" },
    { name: "Typebot", category: "Chatbots" },
    { name: "Google Sheets", category: "Planilhas" },
    { name: "Google Drive", category: "Armazenamento" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "SAP", category: "ERP" },
    { name: "n8n", category: "Automação" },
    { name: "Zapier", category: "Automação" },
    { name: "Make", category: "Automação" },
    { name: "Airtable", category: "Planilhas" },
    { name: "PostgreSQL", category: "Banco de Dados" },
    { name: "MongoDB", category: "Banco de Dados" },
    { name: "Shopify", category: "E-commerce" },
    { name: "WooCommerce", category: "E-commerce" },
  ];

  const categoryIcons: Record<
    string,
    React.ComponentType<{ className?: string }>
  > = {
    "Redes Sociais": MessageSquare,
    WhatsApp: MessageSquare,
    IA: Brain,
    Chatbots: Bot,
    CRM: Database,
    ERP: Cloud,
    Automação: Workflow,
    Planilhas: Table,
    Armazenamento: Cloud,
    "Banco de Dados": Database,
    "E-commerce": Cloud,
  };

  return (
    <section id="integracoes" className="bg-base-50 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-text-headline md:text-5xl">
            Conecte a qualquer sistema
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Integre com ERPs, CRMs, planilhas, automações e muito mais. Se tem
            API ou Webhook, a Clerky conecta.
          </p>
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {integrations.map((integration, index) => {
            const Icon = categoryIcons[integration.category] || Database;

            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <GlassCard className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-headline">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-text-body">
                      {integration.category}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-text-body">
            E muito mais! Qualquer sistema com API REST ou Webhook pode ser
            integrado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

