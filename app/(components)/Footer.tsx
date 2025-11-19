"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = 2025;

  const footerSections = [
    {
      title: "Produto",
      links: [
        { label: "Visão Geral", href: "/produto/visao-geral" },
        { label: "Agentes de IA", href: "/produto/agentes-ia" },
        { label: "CRM Kanban", href: "/produto/crm-kanban" },
        { label: "Disparo em Massa", href: "/produto/disparo-massa" },
        { label: "Integrações", href: "/produto/integracoes" },
        { label: "Changelog", href: "/produto/changelog" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Templates", href: "/recursos/templates" },
        { label: "Casos de Uso", href: "/recursos/casos-uso" },
        { label: "Webinar/Demos", href: "/recursos/webinars" },
      ],
    },
    {
      title: "Desenvolvedores",
      links: [
        { label: "API Reference", href: "/dev/api-reference" },
        { label: "Webhooks", href: "/dev/webhooks" },
        { label: "SDKs", href: "/dev/sdks" },
        { label: "Postman", href: "#" },
        { label: "Status", href: "/dev/status" },
        { label: "Limites & Cotas", href: "/dev/limites" },
      ],
    },
    {
      title: "Soluções",
      links: [
        { label: "Vendas", href: "/solucoes/vendas" },
        { label: "Suporte", href: "/solucoes/suporte" },
        { label: "Atendimento", href: "/solucoes/atendimento" },
        { label: "Prospecção", href: "/solucoes/prospeccao" },
        { label: "E-commerce", href: "/solucoes/ecommerce" },
        { label: "Educação", href: "/solucoes/educacao" },
        { label: "Saúde", href: "/solucoes/saude" },
        { label: "Imobiliário", href: "/solucoes/imobiliario" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre", href: "/empresa/sobre" },
        { label: "Carreiras", href: "/empresa/carreiras" },
        { label: "Imprensa", href: "/empresa/imprensa" },
        { label: "Contato", href: "/empresa/contato" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "/legal/termos" },
        { label: "Política de Privacidade", href: "/legal/politica-privacidade" },
        { label: "Privacidade do Usuário", href: "/legal/privacidade-usuario" },
        { label: "Privacidade (LGPD)", href: "/legal/privacidade" },
        { label: "Segurança", href: "/legal/seguranca" },
        { label: "Conformidade", href: "/legal/conformidade" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/clerky_ia", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-headline">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-body transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <Separator className="my-12" />

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/img/logo3.png"
                alt="Clerky Logo"
                width={96}
                height={96}
                className="h-8 w-auto"
                quality={100}
                style={{ width: 'auto', height: '2rem' }}
              />
            </Link>

            {/* Status Badge */}
            <div className="flex items-center space-x-2 rounded-full bg-success/10 px-3 py-1">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span className="text-xs font-medium text-success">
                Todos os sistemas operacionais
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Email para newsletter"
            />
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Assinar
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-text-body lg:flex-row">
          <p>© {currentYear} Clerky. Todos os direitos reservados.</p>

          <div className="flex items-center space-x-6">
            {/* Social Links */}
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="transition-colors hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}

            {/* Language Selector */}
            <select
              className="rounded-md border border-input bg-background px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Selecionar idioma"
            >
              <option value="pt-BR">🇧🇷 Português</option>
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

