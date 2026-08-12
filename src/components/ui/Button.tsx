import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg font-semibold hover:bg-accent-strong shadow-[0_0_0_1px_rgba(53,209,232,0.3)]",
  secondary:
    "border border-border-strong bg-bg-panel text-text hover:border-accent/60 hover:text-accent",
  ghost: "text-text-muted hover:text-accent",
};

export function Button({ children, variant = "primary", icon, className, ...rest }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-150",
        variants[variant],
        className
      )}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
}
