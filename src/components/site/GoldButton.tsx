import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center border border-gold/70 px-7 py-3.5 text-[0.7rem] font-light uppercase tracking-[0.28em] text-current transition-colors duration-500 hover:bg-gold hover:text-ink focus-visible:bg-gold focus-visible:text-ink";

export function GoldLink({
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { children: ReactNode }) {
  return (
    <Link className={cn(base, className)} {...props}>
      {children}
    </Link>
  );
}

export function GoldButton({
  className,
  children,
  ...props
}: ComponentProps<"button"> & { children: ReactNode }) {
  return (
    <button className={cn(base, className)} {...props}>
      {children}
    </button>
  );
}
