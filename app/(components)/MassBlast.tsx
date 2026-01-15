"use client";

import { motion } from "framer-motion";
import { Send, Users, Eye, MessageCircle } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { useEffect, useState } from "react";

export function MassBlast() {
  const [counts, setCounts] = useState({
    sent: 1247,
    delivered: 1198,
    read: 892,
    replied: 234,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const targets = {
      sent: 1247,
      delivered: 1198,
      read: 892,
      replied: 234,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        sent: Math.floor(targets.sent * progress),
        delivered: Math.floor(targets.delivered * progress),
        read: Math.floor(targets.read * progress),
        replied: Math.floor(targets.replied * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const metrics = [
    { icon: Send, label: "Enviadas", value: counts.sent, color: "text-primary" },
    {
      icon: Users,
      label: "Entregues",
      value: counts.delivered,
      color: "text-secondary",
    },
    { icon: Eye, label: "Lidas", value: counts.read, color: "text-success" },
    {
      icon: MessageCircle,
      label: "Respondidas",
      value: counts.replied,
      color: "text-yellow-500",
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
            Disparo em massa inteligente
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Envie campanhas segmentadas com agendamento e métricas em tempo
            real. Tudo com controle de velocidade para não ser bloqueado.
          </p>
        </motion.div>

        {/* Campaign Preview */}
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold text-text-headline">
                  Campanha: Black Friday 2026
                </h3>
                <p className="text-text-body">
                  Enviado para lista segmentada: Clientes ativos - São Paulo
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col items-center rounded-lg bg-base-50 p-4">
                      <metric.icon className={`mb-2 h-8 w-8 ${metric.color}`} />
                      <p className="mb-1 text-2xl font-bold text-text-headline">
                        {metric.value.toLocaleString('pt-BR')}
                      </p>
                      <p className="text-sm text-text-body">{metric.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="rounded-full bg-base-50 p-1">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-primary to-success"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "96%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="mt-2 text-center text-sm text-text-body">
                96% de taxa de entrega
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

