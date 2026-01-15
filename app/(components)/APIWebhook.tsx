"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "@/components/ui/button";

export function APIWebhook() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const examples = [
    {
      title: "POST /messages/send",
      language: "curl",
      code: `curl -X POST https://api.clerky.com/v1/messages/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "5562912345678",
    "message": "Olá! Sua integração está funcionando!",
    "type": "text"
  }'`,
    },
    {
      title: "Webhook Payload",
      language: "json",
      code: `{
  "event": "message.received",
  "timestamp": "2026-01-15T10:30:00Z",
  "data": {
    "messageId": "msg_abc123xyz",
    "from": "5562987654321",
    "to": "5562912345678",
    "type": "text",
    "content": "Quero saber mais sobre o produto",
    "isFromMe": false
  }
}`,
    },
    {
      title: "Response",
      language: "json",
      code: `{
  "success": true,
  "messageId": "msg_abc123xyz",
  "status": "sent",
  "timestamp": "2026-01-15T10:30:01Z",
  "queuePosition": null
}`,
    },
  ];

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="bg-base-50 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-text-headline md:text-5xl">
            API & Webhooks poderosos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Integração completa com REST API e Webhooks em tempo real. Exemplos
            práticos e documentação detalhada.
          </p>
        </motion.div>

        {/* Code Examples */}
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              {examples.map((example, index) => (
                <TabsTrigger key={index} value={index.toString()}>
                  {example.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {examples.map((example, index) => (
              <TabsContent key={index} value={index.toString()}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard className="relative p-0">
                    <div className="flex items-center justify-between border-b border-border bg-base-50/50 px-6 py-3">
                      <h3 className="text-sm font-semibold text-text-headline">
                        {example.title}
                      </h3>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopy(example.code, index)}
                        className="gap-2"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copiar
                          </>
                        )}
                      </Button>
                    </div>
                    <pre className="overflow-x-auto p-6">
                      <code className="text-sm text-text-body">
                        {example.code}
                      </code>
                    </pre>
                  </GlassCard>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

