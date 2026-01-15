"use client";

import { useState, useEffect } from "react";
import { PageLayout } from "@/app/(components)/PageLayout";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle2, XCircle, Clock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/app/(components)/ui/GlassCard";

interface ServiceStatus {
  name: string;
  status: "online" | "offline";
  version?: string;
  message?: string;
  responseTime?: number;
  timestamp?: string;
}

interface StatusData {
  timestamp: string;
  services: {
    backend?: ServiceStatus;
    dispatchClerky?: ServiceStatus;
    mindClerky?: ServiceStatus;
    instaClerky?: ServiceStatus;
    grupoClerky?: ServiceStatus;
  };
}

interface StatusResponse {
  status: string;
  data: StatusData;
}

export default function StatusPage() {
  const [statusData, setStatusData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchStatus = async (showRefreshing = false) => {
    try {
      if (showRefreshing) setIsRefreshing(true);
      setError(null);
      
      const response = await fetch("https://back.clerky.com.br/api/public/status");
      
      if (!response.ok) {
        throw new Error("Erro ao buscar status");
      }
      
      const data: StatusResponse[] = await response.json();
      
      if (data && data.length > 0 && data[0].data) {
        setStatusData(data[0].data);
        setLastUpdate(new Date());
      } else {
        throw new Error("Formato de dados inválido");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
      setStatusData(null);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    
    // Atualização automática a cada 30 segundos
    const interval = setInterval(() => {
      fetchStatus();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const getServiceStatus = (service: ServiceStatus | undefined) => {
    if (!service) return null;
    
    const isOnline = service.status === "online";
    
    return (
      <motion.div
        key={service.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <GlassCard className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-3">
                {isOnline ? (
                  <CheckCircle2 className="h-6 w-6 text-success" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500" />
                )}
                <h3 className="text-xl font-semibold text-text-headline">
                  {service.name}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    isOnline
                      ? "bg-success/10 text-success"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
              
              {service.message && (
                <p className="mb-2 text-text-body">{service.message}</p>
              )}
              
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {service.version && (
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-text-body" />
                    <span className="text-text-body">
                      Versão: <strong>{service.version}</strong>
                    </span>
                  </div>
                )}
                {service.responseTime !== undefined && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-text-body" />
                    <span className="text-text-body">
                      Tempo de resposta: <strong>{service.responseTime}ms</strong>
                    </span>
                  </div>
                )}
                {service.timestamp && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-text-body" />
                    <span className="text-text-body">
                      {new Date(service.timestamp).toLocaleString("pt-BR")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    );
  };

  const allServices = statusData?.services
    ? [
        statusData.services.backend,
        statusData.services.dispatchClerky,
        statusData.services.mindClerky,
        statusData.services.instaClerky,
        statusData.services.grupoClerky,
      ].filter(Boolean) as ServiceStatus[]
    : [];

  const allOnline = allServices.every((s) => s.status === "online");
  const anyOffline = allServices.some((s) => s.status === "offline");

  return (
    <PageLayout
      title="Status do Sistema"
      description="Acompanhe o status e disponibilidade dos serviços da plataforma Clerky"
    >
      <div className="space-y-6">
        {/* Status Geral */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard
            className={`p-6 ${
              allOnline
                ? "border-2 border-success bg-success/10"
                : anyOffline
                ? "border-2 border-red-500 bg-red-500/10"
                : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-text-headline">
                  Status Geral
                </h2>
                {loading ? (
                  <p className="text-text-body">Carregando...</p>
                ) : error ? (
                  <p className="text-red-500">Erro ao carregar status</p>
                ) : allOnline ? (
                  <p className="text-lg font-semibold text-success">
                    ✓ Todos os sistemas operacionais
                  </p>
                ) : (
                  <p className="text-lg font-semibold text-red-500">
                    ⚠ Alguns sistemas estão offline
                  </p>
                )}
              </div>
              <Button
                variant="outline"
                onClick={() => fetchStatus(true)}
                disabled={isRefreshing}
                className="gap-2"
              >
                <RefreshCw
                  className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
                />
                Atualizar
              </Button>
            </div>
            {lastUpdate && (
              <p className="mt-4 text-sm text-text-body">
                Última atualização: {lastUpdate.toLocaleString("pt-BR")}
              </p>
            )}
          </GlassCard>
        </motion.div>

        {/* Erro */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border-2 border-red-500 bg-red-500/10 p-6"
          >
            <p className="font-semibold text-red-500">Erro: {error}</p>
            <Button
              variant="outline"
              onClick={() => fetchStatus(true)}
              className="mt-4"
            >
              Tentar novamente
            </Button>
          </motion.div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-3 text-text-body">Carregando status...</p>
          </div>
        )}

        {/* Serviços */}
        {!loading && !error && statusData && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-headline">
              Serviços
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {allServices.map((service) => getServiceStatus(service))}
            </div>
          </div>
        )}

        {/* Informação adicional */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-lg bg-base-100 p-6"
          >
            <p className="text-sm text-text-body">
              <strong>Nota:</strong> Esta página atualiza automaticamente a cada
              30 segundos. Os tempos de resposta são medidos em milissegundos
              (ms).
            </p>
          </motion.div>
        )}
      </div>
    </PageLayout>
  );
}

