"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Brands() {
  const brands = [
    {
      name: "CA Cursos",
      logo: "/img/CA-CURSOS-logo.png",
    },
    {
      name: "Conexão Prob",
      logo: "/img/logoConexaoProb.png",
    },
    {
      name: "Teste Match",
      logo: "/img/logoTesteMatch.png",
    },
    {
      name: "Scancal",
      logo: "/img/LogoScancal.png",
    },
    {
      name: "TokCash",
      logo: "/img/LogoTokCash.png",
    },
  ];

  return (
    <section className="border-y border-border bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          className="mb-12 text-center text-sm font-medium uppercase tracking-wider text-text-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Empresas que confiam na Clerky
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                width={180}
                height={80}
                className="h-16 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                style={{ width: 'auto', height: '4rem' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

