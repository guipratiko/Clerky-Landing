import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";
import { Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Link de Pagamento Expirado | Clerky",
  description: "O link de pagamento expirou",
};

export default function ExpiradoPage() {
  return (
    <PageLayout
      title="Link de Pagamento Expirado"
      description="O link de pagamento expirou"
    >
      <div className="flex flex-col items-center justify-center space-y-6 py-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10">
          <Clock className="h-12 w-12 text-yellow-500" />
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-text-headline">
            Link Expirado
          </h2>
          <p className="text-text-body">
            O link de pagamento expirou. Por favor, gere um novo link para continuar com a assinatura.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/#precos">
              Gerar Novo Link
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
