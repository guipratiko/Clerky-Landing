"use client";

import { motion } from "framer-motion";
import { Shield, FileSpreadsheet, FolderOpen, Lock } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import Link from "next/link";

export function GoogleIntegration() {
  return (
    <section id="sobre-o-aplicativo" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold text-text-headline md:text-4xl">
            Sobre o aplicativo
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-body">
            A Clerky é uma plataforma de CRM e automação para WhatsApp, que ajuda empresas a gerenciar contatos, disparos em massa, workflows e atendimento com inteligência artificial.
          </p>
        </motion.div>

        {/* Google Integration Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-8 md:p-12">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-4 text-2xl font-semibold text-text-headline">
                  Conexão com Google
                </h3>
                <p className="mb-4 text-text-body">
                  Nosso aplicativo se conecta à sua conta Google para sincronizar dados com Google Sheets e Google Drive, funcionando como nós dentro do MindClerky para salvar leads que vêm do WhatsApp ou Typebot.
                </p>
                <p className="mb-6 text-text-body">
                  As permissões solicitadas são usadas exclusivamente para:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <FileSpreadsheet className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold text-text-headline">Google Sheets</h4>
                      <p className="text-sm text-text-body">
                        Salvar e sincronizar leads automaticamente em planilhas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FolderOpen className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold text-text-headline">Google Drive</h4>
                      <p className="text-sm text-text-body">
                        Armazenar arquivos e documentos relacionados aos leads
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-lg bg-base-50 p-4">
                  <div className="flex items-start gap-3">
                    <Lock className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                      <p className="text-sm font-semibold text-text-headline">
                        Proteção de dados
                      </p>
                      <p className="mt-1 text-sm text-text-body">
                        Não vendemos nem compartilhamos seus dados com terceiros sem consentimento. 
                        Você pode revogar o acesso a qualquer momento em{" "}
                        <a
                          href="https://myaccount.google.com/permissions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline hover:text-primary/80"
                        >
                          myaccount.google.com/permissions
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm md:justify-start">
                  <Link
                    href="/legal/politica-privacidade"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Política de Privacidade
                  </Link>
                  <span className="text-text-body">•</span>
                  <Link
                    href="/legal/termos"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Termos de Uso
                  </Link>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
