/**
 * Google Ads Conversion Tracking
 * Dispara eventos de conversão para o Google Ads e redireciona após envio
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Função para reportar conversão com callback de redirecionamento
 * @param url - URL para redirecionar após envio do evento
 * @param value - Valor da conversão (padrão: 1.0)
 * @param currency - Moeda (padrão: 'BRL')
 * @returns false para prevenir navegação padrão
 */
export function gtag_report_conversion(
  url?: string,
  value: number = 1.0,
  currency: string = 'BRL'
): boolean {
  if (typeof window === 'undefined' || !window.gtag) {
    // Se não tiver gtag, redireciona normalmente
    if (url) {
      window.location.href = url;
    }
    return false;
  }

  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  window.gtag('event', 'conversion', {
    send_to: 'AW-17651638692/-zMDCNjrkK0bEKTD-uBB',
    value: value,
    currency: currency,
    event_callback: callback,
  });

  return false;
}

/**
 * Função simples para rastrear conversão sem redirecionamento
 */
export function trackConversion(value: number = 1.0, currency: string = 'BRL') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17651638692/-zMDCNjrkK0bEKTD-uBB',
      value: value,
      currency: currency,
    });
  }
}

