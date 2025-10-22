"use client";

import { cn } from "@/lib/utils";

interface GlowProps {
  children: React.ReactNode;
  variant?: "subtle" | "medium" | "strong";
  color?: "primary" | "secondary" | "success";
  className?: string;
}

export function Glow({
  children,
  variant = "medium",
  color = "primary",
  className,
}: GlowProps) {
  const glowClasses = {
    subtle: "shadow-sm",
    medium: "shadow-md",
    strong: "shadow-lg",
  };

  const colorClasses = {
    primary: "glow-primary",
    secondary: "glow-secondary",
    success: "glow-success",
  };

  return (
    <div
      className={cn(
        "transition-shadow duration-300",
        glowClasses[variant],
        colorClasses[color],
        className
      )}
    >
      {children}
    </div>
  );
}

