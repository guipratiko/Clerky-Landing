import { PageLayout } from "@/app/(components)/PageLayout";
import { Metadata } from "next";
import { XCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pagamento Cancelado | Clerky",
  description: "O pagamento foi cancelado",
};

export default function CanceladoPage() {
  return (
    <PageLayout
      title="Pagamento Cancelado"
      description="O pagamento foi cancelado"
    >
      <div className="flex flex-col items-center justify-center space-y-6 py-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
          <XCircle className="h-12 w-12 text-red-500" />
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-text-headline">
            Pagamento Cancelado
          </h2>
          <p className="text-text-body">
            O pagamento foi cancelado. Nenhuma cobrança foi realizada.
          </p>
          <p className="text-sm text-text-body">
            Se você tiver alguma dúvida ou precisar de ajuda, entre em contato conosco.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/#precos">
              Tentar Novamente
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
