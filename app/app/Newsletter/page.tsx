"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Tipos
type NewsletterType = "news" | "promotion";

interface NewsletterItem {
  id: string;
  type: NewsletterType;
  title: string;
  description: string;
  fullContent: string;
  imageUrl?: string;
  publishedAt: string;
  expiresAt?: string;
  isActive: boolean;
  priority: number;
  tags: string[];
}

// Dados fake
const fakeNewsletterData: NewsletterItem[] = [
  {
    id: "1",
    type: "news",
    title: "Novo Agente de IA com GPT-4 Turbo",
    description: "Agora você pode criar agentes ainda mais inteligentes com a integração do GPT-4 Turbo. Melhore a qualidade das respostas e reduza custos em até 30%.",
    fullContent: "Conteúdo completo da novidade sobre GPT-4 Turbo...",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    publishedAt: "2025-01-15T10:00:00Z",
    isActive: true,
    priority: 10,
    tags: ["IA", "GPT-4", "Novidade"]
  },
  {
    id: "2",
    type: "promotion",
    title: "Black Friday: 50% OFF no Plano Pro",
    description: "Aproveite nosso maior desconto do ano! Assine o plano Pro com 50% de desconto nos primeiros 6 meses. Válido até 30/01/2025.",
    fullContent: "Detalhes completos da promoção Black Friday...",
    imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=400&fit=crop",
    publishedAt: "2025-01-10T08:00:00Z",
    expiresAt: "2025-01-30T23:59:59Z",
    isActive: true,
    priority: 9,
    tags: ["Promoção", "Desconto", "Plano Pro"]
  },
  {
    id: "3",
    type: "news",
    title: "Integração com Shopify agora disponível",
    description: "Conecte seu WhatsApp diretamente com sua loja Shopify. Receba pedidos, atualize status e envie notificações automaticamente.",
    fullContent: "Conteúdo completo sobre integração Shopify...",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    publishedAt: "2025-01-12T14:00:00Z",
    isActive: true,
    priority: 8,
    tags: ["Integração", "E-commerce", "Shopify"]
  },
  {
    id: "4",
    type: "promotion",
    title: "Ganhe 3 meses grátis ao indicar um amigo",
    description: "Indique a Clerky para um amigo e ganhe 3 meses grátis no seu plano atual. Seu amigo também ganha 1 mês grátis!",
    fullContent: "Detalhes do programa de indicação...",
    publishedAt: "2025-01-08T09:00:00Z",
    isActive: true,
    priority: 7,
    tags: ["Indicação", "Bônus", "Gratuito"]
  },
  {
    id: "5",
    type: "news",
    title: "Dashboard Analytics com métricas em tempo real",
    description: "Acompanhe o desempenho dos seus agentes, campanhas e conversas com nosso novo dashboard de analytics em tempo real.",
    fullContent: "Conteúdo sobre o novo dashboard...",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    publishedAt: "2025-01-14T11:00:00Z",
    isActive: true,
    priority: 8,
    tags: ["Dashboard", "Analytics", "Métricas"]
  },
  {
    id: "6",
    type: "promotion",
    title: "Plano Starter: Primeiro mês por apenas R$ 29",
    description: "Teste o Clerky sem compromisso! Primeiro mês do plano Starter por apenas R$ 29. Sem fidelidade, cancele quando quiser.",
    fullContent: "Detalhes da promoção do plano Starter...",
    publishedAt: "2025-01-05T10:00:00Z",
    expiresAt: "2025-02-05T23:59:59Z",
    isActive: true,
    priority: 6,
    tags: ["Promoção", "Starter", "Oferta"]
  },
  {
    id: "7",
    type: "news",
    title: "API v2.0 com novos endpoints e melhorias",
    description: "Nossa API foi completamente reformulada! Novos endpoints, melhor documentação, rate limits mais generosos e suporte a webhooks avançados.",
    fullContent: "Conteúdo sobre a nova versão da API...",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    publishedAt: "2025-01-11T16:00:00Z",
    isActive: true,
    priority: 9,
    tags: ["API", "Desenvolvimento", "Webhooks"]
  },
  {
    id: "8",
    type: "news",
    title: "Suporte a múltiplos idiomas nos agentes",
    description: "Agora seus agentes podem conversar em português, inglês, espanhol e mais 10 idiomas. Configure o idioma por agente ou deixe detectar automaticamente.",
    fullContent: "Conteúdo sobre suporte multilíngue...",
    publishedAt: "2025-01-09T13:00:00Z",
    isActive: true,
    priority: 7,
    tags: ["Idiomas", "Internacionalização", "Agentes"]
  },
  {
    id: "9",
    type: "promotion",
    title: "Webinar gratuito: Como aumentar vendas com WhatsApp",
    description: "Participe do nosso webinar gratuito e aprenda estratégias comprovadas para aumentar suas vendas usando WhatsApp e IA. Certificado incluso!",
    fullContent: "Detalhes do webinar...",
    publishedAt: "2025-01-07T12:00:00Z",
    expiresAt: "2025-01-25T23:59:59Z",
    isActive: true,
    priority: 8,
    tags: ["Webinar", "Educação", "Vendas"]
  },
  {
    id: "10",
    type: "news",
    title: "CRM Kanban com drag and drop aprimorado",
    description: "Melhorias significativas no CRM Kanban: drag and drop mais fluido, filtros avançados, busca inteligente e visualizações personalizadas.",
    fullContent: "Conteúdo sobre melhorias no CRM...",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    publishedAt: "2025-01-13T15:00:00Z",
    isActive: true,
    priority: 7,
    tags: ["CRM", "Kanban", "Melhorias"]
  },
  {
    id: "11",
    type: "news",
    title: "Integração com Google Sheets e Excel",
    description: "Sincronize seus contatos e dados diretamente com Google Sheets e Excel. Exporte relatórios automaticamente e mantenha tudo organizado.",
    fullContent: "Conteúdo sobre integração com planilhas...",
    publishedAt: "2025-01-06T10:00:00Z",
    isActive: true,
    priority: 6,
    tags: ["Integração", "Planilhas", "Automação"]
  },
  {
    id: "12",
    type: "promotion",
    title: "Freelancers: 40% OFF no plano Business",
    description: "Oferta especial para freelancers e profissionais autônomos. Ganhe 40% de desconto no plano Business. Use o cupom: FREELANCER2025",
    fullContent: "Detalhes da promoção para freelancers...",
    publishedAt: "2025-01-04T09:00:00Z",
    expiresAt: "2025-02-28T23:59:59Z",
    isActive: true,
    priority: 5,
    tags: ["Promoção", "Freelancers", "Business"]
  }
];

// Função para formatar data
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

// Função para verificar se promoção está expirada
function isExpired(expiresAt?: string): boolean {
  if (!expiresAt) return false;
  return new Date(expiresAt) < new Date();
}

export default function NewsletterPage() {
  const [filter, setFilter] = useState<"all" | "news" | "promotion">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrar e ordenar dados
  const filteredData = useMemo(() => {
    const filtered = fakeNewsletterData.filter(item => {
      // Filtrar por tipo
      if (filter !== "all" && item.type !== filter) return false;
      
      // Filtrar por busca
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDescription = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDescription && !matchesTags) return false;
      }
      
      // Filtrar apenas ativos e não expirados
      if (!item.isActive) return false;
      if (item.type === "promotion" && isExpired(item.expiresAt)) return false;
      
      return true;
    });

    // Ordenar por prioridade (maior primeiro) e depois por data (mais recente primeiro)
    return filtered.sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [filter, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-[1200px] px-4 py-8 md:px-6 lg:px-8">
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Novidades e Promoções
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Fique por dentro das últimas atualizações, recursos e ofertas especiais do Clerky
          </p>
        </motion.div>

        {/* Barra de Busca */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por título, descrição ou tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-10 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-3"
        >
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className="transition-all"
          >
            Todas ({fakeNewsletterData.length})
          </Button>
          <Button
            variant={filter === "news" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("news")}
            className="transition-all"
          >
            Novidades ({fakeNewsletterData.filter(item => item.type === "news").length})
          </Button>
          <Button
            variant={filter === "promotion" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("promotion")}
            className="transition-all"
          >
            Promoções ({fakeNewsletterData.filter(item => item.type === "promotion").length})
          </Button>
        </motion.div>

        {/* Grid de Cards */}
        {filteredData.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % 6) }}
              >
                <Card className="group flex h-full min-h-[300px] flex-col transition-all duration-200 hover:shadow-lg">
                  {/* Badge de Tipo */}
                  <div className="relative">
                    {item.imageUrl && (
                      <div className="relative h-[200px] w-full overflow-hidden rounded-t-xl">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          unoptimized
                        />
                        <div className="absolute right-3 top-3">
                          <Badge
                            variant={item.type === "news" ? "default" : "secondary"}
                            className={cn(
                              item.type === "news"
                                ? "bg-primary text-primary-foreground"
                                : "bg-orange-500 text-white dark:bg-orange-600"
                            )}
                          >
                            {item.type === "news" ? "Novidade" : "Promoção"}
                          </Badge>
                        </div>
                      </div>
                    )}
                    {!item.imageUrl && (
                      <div className="px-6 pt-6">
                        <Badge
                          variant={item.type === "news" ? "default" : "secondary"}
                          className={cn(
                            item.type === "news"
                              ? "bg-primary text-primary-foreground"
                              : "bg-orange-500 text-white dark:bg-orange-600"
                          )}
                        >
                          {item.type === "news" ? "Novidade" : "Promoção"}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="flex-1">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(item.publishedAt)}</span>
                      {item.expiresAt && (
                        <>
                          <span>•</span>
                          <span>Válido até {formatDate(item.expiresAt)}</span>
                        </>
                      )}
                    </div>
                    <CardTitle className="line-clamp-2 text-xl font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardDescription className="line-clamp-3 text-sm text-muted-foreground md:line-clamp-2">
                      {item.description}
                    </CardDescription>
                    
                    {/* Tags */}
                    {item.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            <Tag className="mr-1 h-2.5 w-2.5" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link href={`#${item.id}`} aria-label={`Ler mais sobre ${item.title}`}>
                        Ler mais
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="text-muted-foreground text-lg">
              Nenhum item encontrado com os filtros selecionados.
            </p>
          </motion.div>
        )}

        {/* Paginação (opcional - para quando houver mais de 12 itens) */}
        {filteredData.length > 12 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 flex justify-center gap-2"
          >
            <Button variant="outline" size="sm">
              Anterior
            </Button>
            <Button variant="outline" size="sm">
              Próxima
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

