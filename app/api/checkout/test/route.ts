import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const maxDuration = 10; // Timeout menor para teste

export async function GET() {
  const requestId = `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const startTime = Date.now();
  
  console.log(`[${new Date().toISOString()}] [${requestId}] 🧪 Teste de conexão com Asaas API`);
  
  try {
    const accessToken = process.env.ASAAS_ACCESS_TOKEN || '$aact_hmlg_000MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OjMwNGQzNjc2LWExNzYtNDA2ZS04M2FjLWVhNmQzODg2NjBkYzo6JGFhY2hfYjUxMGM0ZDUtOTMwMS00MmZlLTlkMzctMDk3MDhhZmUzMzE0';
    const apiUrl = process.env.ASAAS_API_URL || 'https://api-sandbox.asaas.com/v3/checkouts';
    
    // Criar AbortController para timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      console.log(`[${new Date().toISOString()}] [${requestId}] ⚠️ TIMEOUT no teste`);
      controller.abort();
    }, 8000); // 8 segundos para teste
    
    // Fazer uma requisição simples para verificar conectividade
    // Não vamos criar um checkout real, apenas testar a conexão
    const response = await fetch(apiUrl, {
      method: 'OPTIONS', // Usar OPTIONS para não criar nada
      headers: {
        'accept': 'application/json',
        'access_token': accessToken,
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    const duration = Date.now() - startTime;
    
    console.log(`[${new Date().toISOString()}] [${requestId}] ✅ Teste concluído em ${duration}ms - Status: ${response.status}`);
    
    return NextResponse.json(
      {
        status: 'ok',
        asaasApiReachable: response.status < 500,
        responseStatus: response.status,
        duration: `${duration}ms`,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[${new Date().toISOString()}] [${requestId}] ❌ Erro no teste:`, error);
    
    return NextResponse.json(
      {
        status: 'error',
        asaasApiReachable: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
        duration: `${duration}ms`,
        timestamp: new Date().toISOString(),
      },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
