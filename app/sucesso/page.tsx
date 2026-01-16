import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pagamento Realizado com Sucesso | Clerky",
  description: "Sua assinatura Clerky PRO foi ativada com sucesso",
};

export default function SucessoPage() {
  return (
    <PageLayout
      title="Pagamento Realizado com Sucesso!"
      description="Sua assinatura Clerky PRO foi ativada com sucesso"
    >
      <div className="flex flex-col items-center justify-center space-y-6 py-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 className="h-12 w-12 text-success" />
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-text-headline">
            Bem-vindo ao Clerky PRO!
          </h2>
          <p className="text-text-body">
            Sua assinatura foi ativada com sucesso. Você já pode acessar todos os recursos premium.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild className="glow-primary">
            <Link href="https://app.clerky.com.br/">
              Acessar Plataforma
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              Voltar para Home
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
