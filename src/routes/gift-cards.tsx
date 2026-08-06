import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Display } from "@/components/site/Section";
import { GoldLink } from "@/components/site/GoldButton";

export const Route = createFileRoute("/gift-cards")({
  head: () => ({
    meta: [
      { title: "Gift Cards — Redmint San Francisco" },
      {
        name: "description",
        content:
          "Redmint gift cards for treatments, botanical skincare, and herbal formulation. Digital or hand-stamped card, redeemable at our San Francisco sanctuary.",
      },
      { property: "og:title", content: "Redmint Gift Cards" },
      { property: "og:description", content: "Give an hour of quiet. Redeemable for any Redmint service or product." },
    ],
  }),
  component: GiftCards,
});

const amounts = ["$75", "$150", "$250", "$400"];

function GiftCards() {
  return (
    <>
      <PageHero
        eyebrow="Gift Cards"
        seal="贈"
        title="Give an hour of quiet"
        intro="Redeemable against any treatment, product, or herbal blend. Delivered digitally, or hand-stamped on rice paper if you'd like to collect it in person."
      />

      <Section eyebrow="Amounts" seal="值">
        <Display level={2} className="max-w-[13ch]">
          Choose a value
        </Display>
        <ul className="mt-16 divide-y divide-border border-y border-border">
          {amounts.map((a) => (
            <li key={a} className="flex flex-wrap items-center justify-between gap-6 py-8">
              <span className="display text-3xl">{a}</span>
              <GoldLink to="/contact">Purchase</GoldLink>
            </li>
          ))}
        </ul>
        <p className="measure mt-12 text-sm leading-[1.9] text-muted-foreground">
          Gift cards never expire and can be split across multiple visits. For corporate or
          bulk orders, write to us and we'll arrange it.
        </p>
      </Section>
    </>
  );
}
