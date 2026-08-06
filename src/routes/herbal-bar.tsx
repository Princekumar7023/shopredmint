import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Display } from "@/components/site/Section";
import { GoldLink } from "@/components/site/GoldButton";
import barImg from "@/assets/herbal-bar.jpg";

export const Route = createFileRoute("/herbal-bar")({
  head: () => ({
    meta: [
      { title: "Herbal Bar — Custom TCM Formulation | Redmint San Francisco" },
      {
        name: "description",
        content:
          "Sit with a herbalist at the Redmint Herbal Bar in San Francisco. A short consultation, then a blend weighed and mixed for you on the spot.",
      },
      { property: "og:title", content: "The Redmint Herbal Bar" },
      {
        property: "og:description",
        content: "Consultation and custom herbal blending, weighed by hand at our San Francisco counter.",
      },
    ],
  }),
  component: HerbalBar,
});

const steps = [
  {
    title: "Sit down",
    body: "No appointment needed. You take a stool at the counter and tell a herbalist how the last few weeks have felt — sleep, energy, digestion, mood, cycle.",
  },
  {
    title: "The read",
    body: "A brief pulse and tongue reading. It takes four minutes and tells us more about pattern and season than a questionnaire would.",
  },
  {
    title: "The blend",
    body: "Herbs are weighed on a brass scale and combined in front of you — typically six to twelve, balanced so the strong ones are tempered by the gentle ones.",
  },
  {
    title: "Take it home",
    body: "Loose blend, tea bags, or a decoction we prepare for you. We write down what's in it and why, and adjust it on your next visit.",
  },
];

function HerbalBar() {
  return (
    <>
      <PageHero
        eyebrow="Herbal Bar"
        seal="草"
        title="Your blend, weighed in front of you"
        intro="A working herbal counter inside the sanctuary — part apothecary, part tea house. Walk in, sit down, and leave with something made for this particular week of your life."
        image={barImg}
        imageAlt="A herbalist weighing dried herbs on a brass scale at the herbal bar"
      />

      <Section eyebrow="How it works" seal="程">
        <Display level={2} className="max-w-[14ch]">
          Four unhurried steps
        </Display>
        <ol className="mt-20 divide-y divide-border border-y border-border">
          {steps.map((s) => (
            <li key={s.title} className="grid gap-6 py-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.5fr)] lg:gap-16">
              <h3 className="display text-2xl md:text-3xl">{s.title}</h3>
              <p className="text-base leading-[1.9] text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="At the counter" seal="茶" tone="ink">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <Display level={2} className="max-w-[13ch]">
              Also poured by the cup
            </Display>
            <p className="measure mt-8 text-base leading-[1.9] text-muted-foreground">
              Seasonal tonics, warming decoctions in winter, cooling chrysanthemum through the
              summer fog. Members receive counter pricing on every blend and brew.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <GoldLink to="/locations">Find the bar</GoldLink>
              <GoldLink to="/membership">Member pricing</GoldLink>
            </div>
          </div>
          <blockquote className="border-l border-gold/60 pl-8">
            <p className="display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25]">
              “A formula is a conversation between herbs. Our job is to keep it civil.”
            </p>
            <footer className="eyebrow mt-6">Redmint herbalists</footer>
          </blockquote>
        </div>
      </Section>
    </>
  );
}
