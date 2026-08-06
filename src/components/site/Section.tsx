import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { InkReveal } from "./InkReveal";
import { Seal } from "./Seal";

/**
 * Asymmetric section shell: vertical eyebrow label in the left margin
 * (horizontal on mobile), generous negative space, one seal per section.
 */
export function Section({
  eyebrow,
  seal,
  id,
  children,
  tone = "paper",
  className,
}: {
  eyebrow?: string;
  seal?: string;
  id?: string;
  children: ReactNode;
  tone?: "paper" | "ink";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        tone === "ink" ? "on-ink" : "bg-background",
        "px-6 py-24 md:px-12 md:py-36 lg:px-20",
        className,
      )}
    >
      <div className="mx-auto grid w-full max-w-[104rem] gap-8 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-12">
        <div className="flex items-start gap-4 md:sticky md:top-32 md:h-fit md:justify-center">
          {eyebrow ? <span className="eyebrow-vertical">{eyebrow}</span> : <span />}
          {seal ? <Seal glyph={seal} className="md:hidden" /> : null}
        </div>
        <InkReveal className="min-w-0">{children}</InkReveal>
      </div>
      {seal ? (
        <Seal glyph={seal} className="absolute right-6 top-20 hidden md:block md:right-12 lg:right-20" />
      ) : null}
    </section>
  );
}

export function Display({
  children,
  className,
  level = 2,
}: {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
}) {
  const Tag = (`h${level}` as const) satisfies "h1" | "h2" | "h3";
  return (
    <Tag
      className={cn(
        "display",
        level === 1
          ? "text-[clamp(2.75rem,8vw,7rem)]"
          : level === 2
            ? "text-[clamp(2.25rem,5.2vw,4.5rem)]"
            : "text-[clamp(1.5rem,2.4vw,2.25rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
