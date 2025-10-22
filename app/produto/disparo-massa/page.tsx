import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disparo em Massa | Clerky",
  description: "Envie campanhas segmentadas com agendamento e métricas em tempo real",
};

export default function DisparoMassaPage() {
  return (
    <PageLayout
      title="Disparo em Massa"
      description="Envie campanhas segmentadas com agendamento e métricas em tempo real"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-text-body">
          Crie e envie campanhas de WhatsApp em massa com segmentação avançada,
          agendamento inteligente e controle de velocidade para evitar bloqueios.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-text-headline">
          Recursos
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text-body">
          <li>Segmentação de listas por tags e filtros</li>
          <li>Agendamento de campanhas</li>
          <li>Controle de velocidade anti-bloqueio</li>
          <li>Métricas detalhadas (entrega, leitura, resposta)</li>
          <li>Personalização de mensagens com variáveis</li>
        </ul>

        <p className="mt-6 text-text-body">
          Conteúdo em desenvolvimento. Em breve mais informações sobre disparo em massa.
        </p>
      </div>
    </PageLayout>
  );
}

