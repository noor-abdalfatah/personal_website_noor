import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function SectionPill({ children }: { children: ReactNode }) {
  return (
    <span className="gradient-pill inline-flex items-center rounded-full border border-white/20 px-7 py-2.5 text-sm font-bold tracking-widest uppercase shadow-lux">
      {children}
    </span>
  );
}
