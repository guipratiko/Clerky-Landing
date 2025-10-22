"use client";

import { SmoothScroll } from "./(components)/ui/SmoothScroll";
import { Hero } from "./(components)/Hero";
import { Brands } from "./(components)/Brands";
import { Features } from "./(components)/Features";
import { HowItWorks } from "./(components)/HowItWorks";
import { Integrations } from "./(components)/Integrations";
import { AIAgent } from "./(components)/AIAgent";
import { CRMKanban } from "./(components)/CRMKanban";
import { MassBlast } from "./(components)/MassBlast";
import { APIWebhook } from "./(components)/APIWebhook";
import { DocsPreview } from "./(components)/DocsPreview";
import { Pricing } from "./(components)/Pricing";
import { Testimonials } from "./(components)/Testimonials";
import { FAQ } from "./(components)/FAQ";
import { CTA } from "./(components)/CTA";
import { CookieBanner } from "./(components)/CookieBanner";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Hero Section */}
      <Hero enableParticles={true} />

      {/* Brands/Social Proof */}
      <Brands />

      {/* Features Overview */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Integrations */}
      <Integrations />

      {/* AI Agent Demo */}
      <AIAgent />

      {/* CRM Kanban */}
      <CRMKanban />

      {/* Mass Blast */}
      <MassBlast />

      {/* API & Webhooks */}
      <APIWebhook />

      {/* Docs Preview */}
      <DocsPreview />

      {/* Pricing */}
      <Pricing />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <CTA />

      {/* Cookie Banner (LGPD) */}
      <CookieBanner />
    </SmoothScroll>
  );
}
