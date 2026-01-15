"use client";

import { motion } from "framer-motion";
import { Shield, FileSpreadsheet, Lock, MessageSquare, Bot, Brain, Users } from "lucide-react";
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
            O Clerky é uma plataforma de automação e gestão de comunicação que centraliza WhatsApp, Instagram e outras integrações em um único ambiente. A ferramenta atende empresas que precisam automatizar atendimento, gerenciar relacionamento com clientes e executar campanhas de comunicação em escala.
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
                  Integrações e Permissões
                </h3>
                <p className="mb-6 text-text-body">
                  O Clerky se conecta a diversos serviços para oferecer funcionalidades completas. Todas as permissões solicitadas são usadas exclusivamente para as funcionalidades descritas abaixo:
                </p>
                
                <div className="mb-6 space-y-4">
                  <div className="rounded-lg border border-border bg-base-50 p-4">
                    <div className="mb-3 flex items-start gap-3">
                      <FileSpreadsheet className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-headline">Google (Sheets e Drive)</h4>
                        <p className="mt-1 text-sm text-text-body">
                          Sincronização de dados com Google Sheets e Google Drive, funcionando como nós dentro do MindClerky para salvar leads que vêm do WhatsApp ou Typebot. Armazenamento de arquivos e documentos relacionados aos leads.
                        </p>
                        <p className="mt-2 text-xs text-text-body">
                          Revogar acesso: <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-primary underline">myaccount.google.com/permissions</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-base-50 p-4">
                    <div className="mb-3 flex items-start gap-3">
                      <MessageSquare className="mt-1 h-5 w-5 flex-shrink-0 text-pink-500" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-headline">Meta (Instagram)</h4>
                        <p className="mt-1 text-sm text-text-body">
                          Conexão de contas Instagram via OAuth Meta para automações baseadas em palavras-chave, respostas automáticas a mensagens diretas e comentários, envio de DMs e sequências de mensagens.
                        </p>
                        <p className="mt-2 text-xs text-text-body">
                          Revogar acesso: <a href="https://www.facebook.com/settings?tab=applications" target="_blank" rel="noopener noreferrer" className="text-primary underline">facebook.com/settings</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-base-50 p-4">
                    <div className="mb-3 flex items-start gap-3">
                      <Brain className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-headline">OpenAI (GPT-4, GPT-3.5)</h4>
                        <p className="mt-1 text-sm text-text-body">
                          Processamento de linguagem natural para agentes de IA, respostas automáticas com contexto, memória de conversas, transcrição de áudio e qualificação de leads.
                        </p>
                        <p className="mt-2 text-xs text-text-body">
                          Dados processados: mensagens de conversas, histórico de interações. Não armazenamos dados pessoais no OpenAI.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-base-50 p-4">
                    <div className="mb-3 flex items-start gap-3">
                      <Bot className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-headline">Typebot</h4>
                        <p className="mt-1 text-sm text-text-body">
                          Integração com chatbots externos do Typebot para processar leads e conversas, funcionando como nós dentro do MindClerky.
                        </p>
                        <p className="mt-2 text-xs text-text-body">
                          Dados compartilhados: informações de conversas e leads para processamento no Typebot.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-base-50 p-4">
                    <div className="mb-3 flex items-start gap-3">
                      <Users className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                      <div className="flex-1">
                      <h4 className="font-semibold text-text-headline">WhatsApp</h4>
                      <p className="mt-1 text-sm text-text-body">
                        Conexão de múltiplas instâncias WhatsApp, geração de QR Code, monitoramento de status, gerenciamento de grupos e envio de mensagens.
                      </p>
                        <p className="mt-2 text-xs text-text-body">
                          Dados coletados: mensagens, contatos, grupos e histórico de conversas para funcionamento do CRM e automações.
                        </p>
                      </div>
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
