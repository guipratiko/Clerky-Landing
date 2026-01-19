"use client";

import { useEffect } from "react";

/**
 * Componente que mantém o servidor ativo fazendo requisições periódicas
 * Isso evita cold starts e mantém a conexão com APIs externas ativa
 */
export function KeepAlive() {
  useEffect(() => {
    // Intervalo de 3 minutos (180000ms) para manter o servidor aquecido
    const KEEP_ALIVE_INTERVAL = 3 * 60 * 1000; // 3 minutos
    
    // Intervalo de 5 minutos (300000ms) para testar a conexão com Asaas
    const CHECKOUT_TEST_INTERVAL = 5 * 60 * 1000; // 5 minutos
    
    console.log('[KeepAlive] Iniciando keep-alive automático');
    
    // Função para fazer ping no keep-alive
    const pingKeepAlive = async () => {
      try {
        const response = await fetch('/api/keepalive', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(`[KeepAlive] ✅ Servidor mantido ativo - ${data.timestamp}`);
        } else {
          console.warn(`[KeepAlive] ⚠️ Resposta não OK: ${response.status}`);
        }
      } catch (error) {
        console.error('[KeepAlive] ❌ Erro ao manter servidor ativo:', error);
      }
    };
    
    // Função para testar conexão com checkout
    const testCheckout = async () => {
      try {
        const response = await fetch('/api/checkout/test', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.asaasApiReachable) {
            console.log(`[KeepAlive] ✅ Teste de checkout: API acessível (Status ${data.responseStatus}) - ${data.duration}`);
          } else {
            console.warn(`[KeepAlive] ⚠️ Teste de checkout: API pode estar inacessível (Status ${data.responseStatus}) - ${data.duration}`);
          }
        } else {
          const errorData = await response.json().catch(() => ({ error: 'Erro desconhecido' }));
          console.warn(`[KeepAlive] ⚠️ Teste de checkout falhou: ${response.status}`, errorData);
        }
      } catch (error) {
        console.error('[KeepAlive] ❌ Erro ao testar checkout:', error);
      }
    };
    
    // Fazer primeiro ping imediatamente (após 10 segundos para não sobrecarregar no carregamento inicial)
    const initialTimeout = setTimeout(() => {
      pingKeepAlive();
      testCheckout();
    }, 10000); // 10 segundos após o carregamento
    
    // Configurar intervalos periódicos
    const keepAliveInterval = setInterval(pingKeepAlive, KEEP_ALIVE_INTERVAL);
    const checkoutTestInterval = setInterval(testCheckout, CHECKOUT_TEST_INTERVAL);
    
    // Cleanup ao desmontar o componente
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(keepAliveInterval);
      clearInterval(checkoutTestInterval);
      console.log('[KeepAlive] Keep-alive interrompido');
    };
  }, []);
  
  // Este componente não renderiza nada
  return null;
}
