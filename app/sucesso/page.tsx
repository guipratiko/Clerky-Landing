import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";
import { CheckCircle2, Mail, MessageSquare, Key } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/app/(components)/ui/GlassCard";

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
      <div className="space-y-8 py-12">
        {/* Success Message */}
        <div className="flex flex-col items-center justify-center space-y-6">
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
        </div>

        {/* Pré-cadastro Information */}
        <GlassCard className="p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-headline">
              Pré-cadastro e Acesso
            </h3>
          </div>

          <div className="space-y-4 text-text-body">
            <p>
              Você receberá um <strong>email</strong> e uma <strong>mensagem de texto (SMS)</strong> com os dados fornecidos no ato da compra.
            </p>
            
            <div className="space-y-3 rounded-lg bg-base-100 p-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-text-headline">Email de Login</p>
                  <p className="text-sm">
                    O email fornecido durante a compra será seu email de login na plataforma.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageSquare className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-text-headline">Definição de Senha</p>
                  <p className="text-sm">
                    No email recebido, você encontrará um link para definir sua senha de acesso.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm text-text-body">
                <strong>Importante:</strong> Verifique sua caixa de entrada e spam. O email pode levar alguns minutos para chegar. Se não receber em até 30 minutos, entre em contato conosco.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
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
