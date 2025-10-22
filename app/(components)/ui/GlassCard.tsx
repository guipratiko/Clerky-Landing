"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  tilt = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        hover && "hover:shadow-xl",
        className
      )}
      whileHover={
        tilt
          ? {
              scale: 1.02,
              rotateX: 5,
              rotateY: 5,
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {children}
    </motion.div>
  );
}

