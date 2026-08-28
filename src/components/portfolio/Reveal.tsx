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
    <span className="gradient-pill inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold tracking-wide uppercase shadow-lux">
      {children}
    </span>
  );
}
