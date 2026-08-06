import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Display } from "@/components/site/Section";
import { GoldLink } from "@/components/site/GoldButton";
import inkImg from "@/assets/ink.jpg";
import sanctuaryImg from "@/assets/sanctuary.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story & About TCM — Redmint San Francisco" },
      {
        name: "description",
        content:
          "How Redmint began, and a plain-language introduction to Traditional Chinese Medicine: qi, pattern diagnosis, the five elements, and why treatment is seasonal.",
      },
      { property: "og:title", content: "Our Story & About TCM — Redmint" },
      {
        property: "og:description",
        content: "A San Francisco practice built on classical Chinese medicine and modern clinical rigor.",
      },
    ],
  }),
  component: About,
});

const principles = [
  {
    term: "Qi",
    detail:
      "Not a mystical substance — a way of describing function and flow. When qi moves well, tissue is nourished, sleep is deep, and the body recovers. When it stagnates, symptoms cluster.",
  },
  {
    term: "Pattern diagnosis",
    detail:
      "Two people with the same headache may receive entirely different treatments. We treat the pattern behind the symptom: what's deficient, what's stuck, what's too hot or too cold.",
  },
  {
    term: "Five elements",
    detail:
      "Wood, fire, earth, metal, water — a relational map of how organs and emotions influence one another. It's a systems model, and it holds up remarkably well.",
  },
  {
    term: "Seasonality",
    detail:
      "Treatment changes with the calendar. What supports you in the damp of a San Francisco winter is not what you need in September.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        seal="源"
        title="Begun at a kitchen table, in Cantonese"
        intro="Redmint started with our founder's grandmother — a herbalist who kept her formulas in a notebook and her scales on the kitchen table. Every autumn a different tea appeared, and nobody in that house got sick."
        image={inkImg}
        imageAlt="A soft ink diffusion on rice paper"
      />

      <Section eyebrow="The practice" seal="行">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8 text-base leading-[1.9] text-muted-foreground">
            <p>
              Decades later, that notebook became a question: why is a medicine practised by a
              quarter of the world still treated in the West as an alternative? We opened Redmint in
              San Francisco to answer it in the only way that convinces anyone — by doing the work
              well, visit after visit.
            </p>
            <p>
              Our practitioners hold state licensure and years of clinical training. Our formulas
              are third-party tested. Our treatment rooms are quiet because quiet is therapeutic,
              not because it photographs well.
            </p>
            <p>
              We are not trying to replace your physician. We are trying to be the part of your care
              that asks how you slept, and then does something about it.
            </p>
          </div>
          <blockquote className="border-l border-gold/60 pl-8 lg:self-center">
            <p className="display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.2]">
              “The superior physician treats the illness that has not yet arrived.”
            </p>
            <footer className="eyebrow mt-6">Huangdi Neijing, c. 200 BCE</footer>
          </blockquote>
        </div>
      </Section>

      <section className="on-ink">
        <img
          src={sanctuaryImg}
          alt="The Redmint sanctuary interior with its herbal apothecary cabinet"
          width={1600}
          height={1104}
          loading="lazy"
          className="h-[50vh] w-full object-cover opacity-80 md:h-[70vh]"
        />
      </section>

      <Section id="tcm" eyebrow="About TCM" seal="道" tone="ink">
        <Display level={2} className="max-w-[13ch]">
          A short, honest introduction
        </Display>
        <p className="measure mt-10 text-base leading-[1.9] text-muted-foreground">
          Traditional Chinese Medicine is a complete diagnostic system, refined across two millennia
          of clinical observation. Four ideas carry most of it.
        </p>
        <dl className="mt-20 divide-y divide-border border-y border-border">
          {principles.map((p) => (
            <div key={p.term} className="grid gap-6 py-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.5fr)] lg:gap-16">
              <dt className="display text-2xl md:text-3xl">{p.term}</dt>
              <dd className="text-base leading-[1.9] text-muted-foreground">{p.detail}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-16 flex flex-wrap gap-4">
          <GoldLink to="/services">Explore services</GoldLink>
          <GoldLink to="/herbal-bar">Visit the herbal bar</GoldLink>
        </div>
      </Section>
    </>
  );
}
