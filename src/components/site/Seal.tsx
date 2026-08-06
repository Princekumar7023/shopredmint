import { cn } from "@/lib/utils";

/**
 * The signature element: a small vermilion chop (seal stamp) that appears
 * once per major section, placed like an artist's signature beside a headline.
 */
export function Seal({ glyph = "印", className }: { glyph?: string; className?: string }) {
  return (
    <span aria-hidden="true" className={cn("seal-mark shrink-0 select-none", className)}>
      {glyph}
    </span>
  );
}
