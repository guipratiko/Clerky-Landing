"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { User } from "lucide-react";

export function CRMKanban() {
  const columns = [
    {
      title: "Novos Leads",
      color: "from-blue-500 to-blue-600",
      cards: [
        { name: "João Silva", company: "Tech Corp", value: "R$ 5.000" },
        { name: "Maria Santos", company: "StartUp XYZ", value: "R$ 8.000" },
      ],
    },
    {
      title: "Em Negociação",
      color: "from-yellow-500 to-yellow-600",
      cards: [
        { name: "Pedro Costa", company: "Agência ABC", value: "R$ 12.000" },
        { name: "Ana Lima", company: "E-commerce Plus", value: "R$ 15.000" },
      ],
    },
    {
      title: "Fechados",
      color: "from-green-500 to-green-600",
      cards: [
        { name: "Carlos Rocha", company: "Mega Store", value: "R$ 20.000" },
      ],
    },
  ];

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
            CRM Kanban visual e intuitivo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Gerencie todo o pipeline de vendas. Arraste cards, adicione notas,
            tags e acompanhe cada negociação.
          </p>
        </motion.div>

        {/* Kanban Board */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: columnIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-4">
                  {/* Column Header */}
                  <div
                    className={`rounded-lg bg-gradient-to-r ${column.color} p-4 text-center shadow-lg`}
                  >
                    <h3 className="font-semibold text-white">
                      {column.title}
                    </h3>
                  </div>

                  {/* Cards */}
                  <div className="space-y-3">
                    {column.cards.map((card, cardIndex) => (
                      <motion.div
                        key={card.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: columnIndex * 0.2 + cardIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="cursor-grab active:cursor-grabbing"
                      >
                        <GlassCard className="p-4">
                          <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-text-headline">
                                {card.name}
                              </h4>
                              <p className="text-xs text-text-body">
                                {card.company}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-success">
                              {card.value}
                            </span>
                            <span className="text-xs text-text-body">
                              Hoje
                            </span>
                          </div>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

