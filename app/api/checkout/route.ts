import { NextRequest, NextResponse } from "next/server";
import { getProductImageBase64 } from "@/lib/mongodb";

export const dynamic = 'force-dynamic';
export const maxDuration = 30; // Timeout máximo de 30 segundos

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  console.log("[CHECKOUT API] Requisição recebida:", new Date().toISOString());
  
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

    if (!asaasApiUrl || !asaasAccessToken) {
      console.error("[CHECKOUT API] Variáveis de ambiente faltando:", {
        hasUrl: !!asaasApiUrl,
        hasToken: !!asaasAccessToken,
      });
      return NextResponse.json(
        {
          success: false,
          error: "Configuração da API Asaas não encontrada",
        },
        { status: 500 }
      );
    }

    // Buscar base64 do MongoDB
    console.log("[CHECKOUT API] Buscando imagem do MongoDB...");
    const imageBase64 = await getProductImageBase64();
    
    if (!imageBase64) {
      console.error("[CHECKOUT API] Imagem não encontrada no MongoDB");
      return NextResponse.json(
        {
          success: false,
          error: "Imagem do produto não encontrada no banco de dados",
        },
        { status: 500 }
      );
    }

    // Calcular próxima data de vencimento (próximo mês)
    const nextDueDate = new Date();
    nextDueDate.setMonth(nextDueDate.getMonth() + 1);
    const nextDueDateStr = nextDueDate.toISOString().split("T")[0];

    console.log("[CHECKOUT API] Preparando requisição para Asaas...");
    const requestBody = {
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
          imageBase64: imageBase64,
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
    };

    console.log("[CHECKOUT API] Enviando requisição para Asaas...", asaasApiUrl);
    const fetchStartTime = Date.now();

    // Timeout de 20 segundos para evitar requisições penduradas
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 20000);

    let response: Response;
    try {
      response = await fetch(asaasApiUrl, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          access_token: asaasAccessToken,
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal,
      });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        console.error("[CHECKOUT API] Requisição cancelada por timeout (20s)");
        return NextResponse.json(
          {
            success: false,
            error: "A requisição demorou muito para responder. Por favor, tente novamente.",
          },
          { status: 408 }
        );
      }
      throw fetchError;
    }

    clearTimeout(timeoutId);
    const fetchDuration = Date.now() - fetchStartTime;
    console.log(`[CHECKOUT API] Resposta recebida da Asaas em ${fetchDuration}ms`);

    if (!response.ok) {
      let errorMessage = "Erro ao criar checkout";
      
      // Ler o body como texto primeiro (só pode ser lido uma vez)
      const errorText = await response.text();
      console.error("[CHECKOUT API] Erro na API Asaas:", response.status, errorText);
      
      // Tentar parsear como JSON
      try {
        const errorData = JSON.parse(errorText);
        
        // Extrair mensagem de erro do Asaas
        if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
          const firstError = errorData.errors[0];
          errorMessage = firstError.description || firstError.message || errorMessage;
        } else if (errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (parseError) {
        // Se não for JSON, usar o texto como mensagem
        if (errorText && errorText.trim()) {
          errorMessage = errorText;
        }
      }
      
      const totalDuration = Date.now() - startTime;
      console.log(`[CHECKOUT API] Total: ${totalDuration}ms`);
      return NextResponse.json(
        {
          success: false,
          error: errorMessage,
        },
        { status: response.status || 500 }
      );
    }

    const data = await response.json();
    const totalDuration = Date.now() - startTime;
    console.log(`[CHECKOUT API] Sucesso! Total: ${totalDuration}ms`);

    if (!data.link || typeof data.link !== 'string') {
      console.error("[CHECKOUT API] Link não encontrado na resposta:", data);
      return NextResponse.json(
        {
          success: false,
          error: "Link de checkout não retornado pela API",
        },
        { status: 500 }
      );
    }

    const result = {
      success: true,
      link: String(data.link),
    };
    
    console.log("[CHECKOUT API] Retornando resultado:", { success: result.success, linkLength: result.link.length });
    return NextResponse.json(result);
  } catch (error) {
    const totalDuration = Date.now() - startTime;
    console.error(`[CHECKOUT API] Erro geral após ${totalDuration}ms:`, error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Erro ao processar checkout",
      },
      { status: 500 }
    );
  }
}
