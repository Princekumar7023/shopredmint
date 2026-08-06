import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Display } from "@/components/site/Section";
import { GoldLink } from "@/components/site/GoldButton";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — Water, Earth & Fire Tiers | Redmint" },
      {
        name: "description",
        content:
          "Redmint membership: monthly credit toward any service, member savings on treatments and products, and complimentary modern-wellness sessions each month.",
      },
      { property: "og:title", content: "Redmint Membership" },
      {
        property: "og:description",
        content: "Three tiers of ongoing care in San Francisco. Full credit toward services, member pricing at the herbal bar.",
      },
    ],
  }),
  component: Membership,
});

const tiers = [
  {
    element: "Water",
    glyph: "水",
    price: "$160",
    lead: "For a steady monthly reset.",
    perks: [
      "Full monthly fee credited toward any service",
      "5% off all services, every visit",
      "10% off all retail wellness products",
      "One complimentary modern-wellness session per month",
      "Member pricing at the Herbal Bar",
    ],
  },
  {
    element: "Earth",
    glyph: "土",
    price: "$280",
    lead: "For consistent, seasonal care.",
    perks: [
      "Everything in Water",
      "8% off all services, every visit",
      "10% off all retail wellness products",
      "Two complimentary modern-wellness sessions per month",
      "Priority booking on evenings and weekends",
    ],
  },
  {
    element: "Fire",
    glyph: "火",
    price: "$395",
    lead: "For a whole-practice commitment.",
    perks: [
      "Everything in Earth",
      "10% off all services, every visit",
      "10% off all retail wellness products",
      "Three complimentary modern-wellness sessions per month",
      "Annual custom herbal formulation review",
    ],
  },
];

const terms = [
  ["Monthly billing", "Fees are charged on the 1st of each month and credited in full toward services of your choice."],
  ["Initial commitment", "The first six months of membership are non-cancellable and non-refundable."],
  ["Account credits", "Unused fees bank as account credits, redeemable for services and products at any Redmint sanctuary."],
  ["Auto-renewal", "After six months, membership renews monthly until we receive written notice at least 15 days before the next billing date."],
  ["Wellness technology", "Complimentary tech credits are non-transferable, carry no cash value, and expire at the end of each month."],
  ["Exclusivity", "Member benefits are non-transferable and cannot be combined with other discounts or offers."],
];

function Membership() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        seal="約"
        title="Care that compounds"
        intro="Chinese medicine rewards regularity — the second visit does more than the first, and the sixth does more than the second. Membership makes that rhythm the default, with your fee credited in full toward whatever you choose."
      >
        <div className="mt-12">
          <GoldLink to="/contact">Speak with us</GoldLink>
        </div>
      </PageHero>

      <Section eyebrow="Tiers" seal="階">
        <Display level={2} className="max-w-[13ch]">
          Three elements, three depths
        </Display>
        <div className="mt-20 divide-y divide-border border-y border-border">
          {tiers.map((t) => (
            <article
              key={t.element}
              className="grid gap-10 py-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_auto] lg:gap-16"
            >
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="display text-4xl">{t.element}</span>
                  <span className="display text-2xl text-gold">{t.glyph}</span>
                </div>
                <span className="eyebrow mt-4 block">{t.price} / month</span>
                <p className="mt-4 text-sm text-muted-foreground">{t.lead}</p>
              </div>
              <ul className="space-y-3">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 bg-gold" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="lg:self-center">
                <GoldLink to="/contact">Sign up</GoldLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Terms & Conditions" seal="律" tone="ink">
        <Display level={2} className="max-w-[14ch]">
          The fine print, plainly
        </Display>
        <dl className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {terms.map(([term, detail]) => (
            <div key={term}>
              <dt className="eyebrow">{term}</dt>
              <dd className="mt-3 text-sm leading-[1.9] text-muted-foreground">{detail}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
