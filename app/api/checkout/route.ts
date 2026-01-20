import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const asaasApiUrl = process.env.ASAAS_API_URL;
    let asaasAccessToken = process.env.ASAAS_ACCESS_TOKEN;

    // Remover aspas se existirem (Next.js pode manter as aspas do .env)
    if (asaasAccessToken) {
      asaasAccessToken = asaasAccessToken.replace(/^["']|["']$/g, "").trim();
    }

    // Adicionar $ no início se não tiver (o token do Asaas sempre começa com $)
    if (asaasAccessToken && !asaasAccessToken.startsWith('$')) {
      asaasAccessToken = '$' + asaasAccessToken;
    }

    // Debug (remover em produção)
    console.log("ASAAS_API_URL:", asaasApiUrl ? "Definido" : "Não definido");
    console.log("ASAAS_ACCESS_TOKEN raw:", process.env.ASAAS_ACCESS_TOKEN);
    console.log("ASAAS_ACCESS_TOKEN length:", process.env.ASAAS_ACCESS_TOKEN?.length || 0);
    console.log("ASAAS_ACCESS_TOKEN:", asaasAccessToken ? `Definido (${asaasAccessToken.substring(0, 20)}...)` : "Não definido");
    console.log("Todas as variáveis env ASAAS:", Object.keys(process.env).filter(k => k.includes('ASAAS')));

    if (!asaasApiUrl || !asaasAccessToken) {
      console.error("Variáveis de ambiente faltando:", {
        hasUrl: !!asaasApiUrl,
        hasToken: !!asaasAccessToken,
      });
      return NextResponse.json(
        { 
          error: "Configuração da API Asaas não encontrada",
          debug: {
            hasUrl: !!asaasApiUrl,
            hasToken: !!asaasAccessToken,
          }
        },
        { status: 500 }
      );
    }

    // Calcular próxima data de vencimento (próximo mês)
    const nextDueDate = new Date();
    nextDueDate.setMonth(nextDueDate.getMonth() + 1);
    const nextDueDateStr = nextDueDate.toISOString().split("T")[0];

    const response = await fetch(asaasApiUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        access_token: asaasAccessToken,
      },
      body: JSON.stringify({
        billingTypes: ["CREDIT_CARD"],
        chargeTypes: ["RECURRENT"],
        callback: {
          successUrl: "https://clerky.com.br/sucesso",
          cancelUrl: "https://clerky.com.br/cancelado",
          expiredUrl: "https://clerky.com.br/expirado",
        },
        items: [
          {
            externalReference: "c9b69bd4-68ac-46f7-8457-6cac8bed0ff3",
            description: "Assinatura mensal Clerky PRO",
            imageBase64: "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",
            name: "Clerky PRO",
            quantity: 1,
            value: 197,
          },
        ],
        minutesToExpire: 10,
        subscription: {
          cycle: "MONTHLY",
          nextDueDate: nextDueDateStr,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Erro na API Asaas:", errorData);
      return NextResponse.json(
        { error: "Erro ao criar checkout", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.link) {
      return NextResponse.json(
        { error: "Link de checkout não retornado pela API" },
        { status: 500 }
      );
    }

    return NextResponse.json({ link: data.link });
  } catch (error) {
    console.error("Erro ao processar checkout:", error);
    return NextResponse.json(
      {
        error: "Erro ao processar checkout",
        details: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
