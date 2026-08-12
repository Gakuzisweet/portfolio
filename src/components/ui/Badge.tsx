import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border-strong bg-bg-panel px-2.5 py-1 text-mono text-xs text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
