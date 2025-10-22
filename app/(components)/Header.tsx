"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Produto", href: "#produto" },
    { label: "Recursos", href: "#recursos" },
    { label: "Integrações", href: "#integracoes" },
    { label: "Preços", href: "#precos" },
    { label: "Documentação", href: "#docs" },
    { label: "Status", href: "#" },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass border-b border-white/20 shadow-lg"
          : "border-b border-transparent bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo3.png"
            alt="Clerky Logo"
            width={120}
            height={120}
            className="h-10 w-auto"
            priority
            quality={100}
            style={{ width: 'auto', height: '2.5rem' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-body transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center space-x-4 lg:flex">
          <Button variant="ghost" asChild>
            <Link href="https://app.clerky.com.br/">Entrar</Link>
          </Button>
          <Button asChild className="glow-primary">
            <Link href="https://app.clerky.com.br/register">Começar agora</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://wa.me/5562993557070?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Clerky" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="glass border-t border-white/20 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-text-body transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="ghost" asChild className="w-full">
                  <Link href="https://app.clerky.com.br/">Entrar</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="https://app.clerky.com.br/register">Começar agora</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="https://wa.me/5562993557070?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Clerky" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

