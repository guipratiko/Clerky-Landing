import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const asaasApiUrl = process.env.ASAAS_API_URL;
    const asaasAccessToken = process.env.ASAAS_ACCESS_TOKEN;

    if (!asaasApiUrl || !asaasAccessToken) {
      return NextResponse.json(
        { error: "Configuração da API Asaas não encontrada" },
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
            imageBase64: "kkk",
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
