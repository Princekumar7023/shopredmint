import type { ReactNode } from "react";
import { Display } from "./Section";
import { InkReveal } from "./InkReveal";
import { Seal } from "./Seal";

/** Quiet page hero used on every interior page. */
export function PageHero({
  eyebrow,
  title,
  intro,
  seal = "印",
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  seal?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="on-ink relative overflow-hidden">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            width={1600}
            height={1000}
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--ink-jade),transparent_80%)]" />
        </>
      ) : null}
      <div className="relative mx-auto max-w-[104rem] px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-52 lg:px-20">
        <InkReveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow">{eyebrow}</span>
            <Seal glyph={seal} />
          </div>
          <Display level={1} className="mt-8 max-w-[15ch] text-[clamp(2.5rem,6.5vw,5.5rem)]">
            {title}
          </Display>
          {intro ? (
            <p className="measure mt-10 text-base leading-[1.9] text-muted-foreground">{intro}</p>
          ) : null}
          {children}
        </InkReveal>
      </div>
    </section>
  );
}
