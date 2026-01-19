import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Obter token do .env - tentar múltiplas variáveis
    let accessToken = 
      process.env.ASAAS_ACCESS_TOKEN || 
      process.env.NEXT_PUBLIC_ASAAS_ACCESS_TOKEN || 
      '';
    
    // Remover "$" do início do token se presente
    if (accessToken && accessToken.startsWith('$')) {
      accessToken = accessToken.substring(1);
    }
    
    // Se ainda não tiver token, usar fallback do token de produção (sem o $)
    // Em produção, a variável deve estar configurada no servidor
    if (!accessToken) {
      // Fallback: token de produção do .env (sem o $)
      // Em produção, configure ASAAS_ACCESS_TOKEN no servidor como variável de ambiente
      const fallbackToken = 'aact_prod_000MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OmZkOTNkNzVlLWQ1ZWUtNDFkNy04OGRkLTRmYTNiYjNlODY1ODo6JGFhY2hfYzQ0MmU2MDgtOGJlYS00MGVhLWJhZTItYmI0YzNhZjZhYmUy';
      
      // Log de aviso
      console.warn('⚠️ ASAAS_ACCESS_TOKEN não encontrado nas variáveis de ambiente. Usando fallback. Configure ASAAS_ACCESS_TOKEN no servidor como variável de ambiente em runtime.');
      accessToken = fallbackToken;
    }
    
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Token de acesso não configurado. Configure ASAAS_ACCESS_TOKEN no servidor.' },
        { status: 500 }
      );
    }
    
    const apiUrl = process.env.NEXT_PUBLIC_ASAAS_API_URL || 'https://api-sandbox.asaas.com/v3/checkouts';
    
    // Calcular próxima data de vencimento (próximo mês)
    const nextDueDate = new Date();
    nextDueDate.setMonth(nextDueDate.getMonth() + 1);
    const nextDueDateStr = nextDueDate.toISOString().split('T')[0];
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'access_token': accessToken
      },
      body: JSON.stringify({
        billingTypes: ['CREDIT_CARD'],
        chargeTypes: ['RECURRENT'],
        callback: {
          successUrl: 'https://clerky.com.br/sucesso',
          cancelUrl: 'https://clerky.com.br/cancelado',
          expiredUrl: 'https://clerky.com.br/expirado'
        },
        items: [
          {
            externalReference: 'c9b69bd4-68ac-46f7-8457-6cac8bed0ff3',
            description: 'Assinatura mensal Clerky PRO',
            imageBase64: 'kkk',
            name: 'Clerky PRO',
            quantity: 1,
            value: 197
          }
        ],
        minutesToExpire: 10,
        subscription: {
          cycle: 'MONTHLY',
          nextDueDate: nextDueDateStr
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || `Erro HTTP: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    if (data.link) {
      return NextResponse.json({ link: data.link });
    } else {
      return NextResponse.json(
        { error: 'Link de checkout não retornado pela API' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erro ao criar checkout:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 }
    );
  }
}
