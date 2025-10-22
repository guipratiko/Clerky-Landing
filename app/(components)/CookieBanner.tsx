"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem("clerky-cookie-consent");
    if (!cookieConsent) {
      // Mostrar banner após 1 segundo
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  const acceptAll = () => {
    localStorage.setItem("clerky-cookie-consent", "all");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("clerky-cookie-consent", "essential");
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem("clerky-cookie-consent", "none");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:bottom-4 md:left-4 md:right-auto md:max-w-md"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="glass-dark relative overflow-hidden rounded-2xl p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={rejectAll}
              className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
              aria-label="Fechar banner de cookies"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Icon */}
            <div className="mb-4 flex items-center gap-3">
              <Cookie className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold text-white">
                Cookies & Privacidade
              </h3>
            </div>

            {/* Content */}
            <p className="mb-4 text-sm text-white/80">
              Usamos cookies para melhorar sua experiência, analisar o tráfego
              e personalizar conteúdo. Seus dados são protegidos conforme a{" "}
              <Link
                href="#"
                className="text-primary underline hover:text-primary/80"
              >
                LGPD
              </Link>
              .
            </p>

            {/* Details (collapsible) */}
            {showDetails && (
              <motion.div
                className="mb-4 space-y-2 rounded-lg bg-white/5 p-3 text-xs text-white/70"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div>
                  <strong className="text-white">Cookies essenciais:</strong>{" "}
                  Necessários para funcionamento básico (autenticação, sessão).
                </div>
                <div>
                  <strong className="text-white">Cookies analíticos:</strong>{" "}
                  Coletam dados anônimos sobre uso do site (Google Analytics).
                </div>
                <div>
                  <strong className="text-white">Cookies de marketing:</strong>{" "}
                  Permitem anúncios personalizados e remarketing.
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Button
                  onClick={acceptAll}
                  className="flex-1 bg-primary text-white hover:bg-primary/90"
                  size="sm"
                >
                  Aceitar todos
                </Button>
                <Button
                  onClick={acceptEssential}
                  variant="outline"
                  className="flex-1 border-white/20 bg-transparent text-white hover:bg-white/10"
                  size="sm"
                >
                  Apenas essenciais
                </Button>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-white/60 hover:text-white/80"
              >
                {showDetails ? "Ocultar detalhes" : "Gerenciar preferências"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

