import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Display } from "@/components/site/Section";
import { GoldLink } from "@/components/site/GoldButton";
import skincareImg from "@/assets/skincare.jpg";
import herbalImg from "@/assets/herbal.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Botanical Skincare & Herbal Supplements | Redmint" },
      {
        name: "description",
        content:
          "Redmint botanical skincare and herbal supplements: ingredient-forward formulations rooted in Traditional Chinese Medicine and measured by modern results.",
      },
      { property: "og:title", content: "Shop Redmint — Botanical Skincare & Herbal Supplements" },
      {
        property: "og:description",
        content: "Potent botanicals, classical pairings, small-batch formulation. Shop skincare and herbal wellness.",
      },
    ],
  }),
  component: Shop,
});

// Product data is shaped for a later Shopify handle-based mapping.
type Product = {
  handle: string;
  title: string;
  subtitle: string;
  price: string;
  note: string;
};

const skincare: Product[] = [
  {
    handle: "jade-barrier-serum",
    title: "Jade Barrier Serum",
    subtitle: "Tremella + Centella",
    price: "$92",
    note: "Holds water in the skin the way tremella holds it in the mushroom — up to 500× its weight.",
  },
  {
    handle: "ginseng-renewal-oil",
    title: "Ginseng Renewal Oil",
    subtitle: "Red Ginseng + Camellia",
    price: "$78",
    note: "Warming, circulation-forward. Best worked in at night with a gua sha stone.",
  },
  {
    handle: "pearl-clarity-mask",
    title: "Pearl Clarity Mask",
    subtitle: "Pearl Powder + Licorice Root",
    price: "$64",
    note: "Brightens uneven tone over eight weeks without acid-stripping the barrier.",
  },
  {
    handle: "cloud-cleansing-balm",
    title: "Cloud Cleansing Balm",
    subtitle: "Rice Bran + Chrysanthemum",
    price: "$48",
    note: "Melts sunscreen and city air. Rinses without the tight, squeaking finish.",
  },
];

const supplements: Product[] = [
  {
    handle: "quiet-night-tincture",
    title: "Quiet Night",
    subtitle: "Suan Zao Ren + Poria",
    price: "$54",
    note: "The classical sleep pairing — settles the shen rather than sedating it.",
  },
  {
    handle: "clear-channel-tea",
    title: "Clear Channel Tea",
    subtitle: "Chrysanthemum + Goji",
    price: "$32",
    note: "A daily brew for screen-tired eyes and heat that sits in the head.",
  },
  {
    handle: "deep-root-tonic",
    title: "Deep Root Tonic",
    subtitle: "Astragalus + Codonopsis",
    price: "$68",
    note: "For the long stretch: immunity and stamina, taken through the cold months.",
  },
  {
    handle: "harmony-digestive",
    title: "Harmony Digestive",
    subtitle: "Tangerine Peel + Hawthorn",
    price: "$46",
    note: "Taken after heavy meals. Moves stagnation before it becomes a pattern.",
  },
];

function Shop() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        seal="方"
        title="Formulations you can keep at home"
        intro="Two lines, one philosophy: fewer products, higher potency, and an ingredient list you can trace back to a materia medica entry."
      />

      <Line
        eyebrow="Botanical Skincare"
        seal="膚"
        title="Botanical Skincare"
        blurb="Herbal actives at clinical concentration, formulated for barrier health first and visible results second — which is usually the fastest route to both."
        image={skincareImg}
        alt="Dark glass botanical skincare bottles with dried herbs"
        products={skincare}
      />

      <Line
        eyebrow="Herbal Wellness"
        seal="草"
        title="Herbal Supplements"
        blurb="Classical pairings prepared in small batches — tinctures, teas, and capsules built around how herbs behave together, not in isolation."
        image={herbalImg}
        alt="Traditional Chinese herbs in ceramic dishes"
        products={supplements}
        tone="ink"
        reverse
      />
    </>
  );
}

function Line({
  eyebrow,
  seal,
  title,
  blurb,
  image,
  alt,
  products,
  tone = "paper",
  reverse = false,
}: {
  eyebrow: string;
  seal: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  products: Product[];
  tone?: "paper" | "ink";
  reverse?: boolean;
}) {
  return (
    <Section eyebrow={eyebrow} seal={seal} tone={tone}>
      <div className={`grid gap-14 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <img src={image} alt={alt} width={1408} height={1008} loading="lazy" className="w-full object-cover" />
        <div>
          <Display level={2} className="max-w-[12ch]">
            {title}
          </Display>
          <p className="measure mt-8 text-base leading-[1.9] text-muted-foreground">{blurb}</p>
        </div>
      </div>

      <ul className="mt-20 divide-y divide-border border-y border-border">
        {products.map((p) => (
          <li
            key={p.handle}
            data-product-handle={p.handle}
            className="grid gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto] lg:items-center lg:gap-16"
          >
            <div>
              <h3 className="display text-2xl">{p.title}</h3>
              <span className="eyebrow mt-2 block">{p.subtitle}</span>
            </div>
            <p className="text-sm leading-[1.9] text-muted-foreground">{p.note}</p>
            <div className="flex items-center gap-8">
              <span className="display text-xl text-gold">{p.price}</span>
              <GoldLink to="/contact">Add</GoldLink>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
