import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Display } from "@/components/site/Section";
import { GoldLink } from "@/components/site/GoldButton";
import holisticImg from "@/assets/holistic.jpg";
import modernImg from "@/assets/modern-wellness.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Acupuncture, Massage, Facials & Modern Wellness | Redmint" },
      {
        name: "description",
        content:
          "Two tracks of care at Redmint San Francisco: holistic wellness (acupuncture, massage therapy, skincare facials) and modern wellness (LED light therapy, sound meditation, PEMF).",
      },
      { property: "og:title", content: "Services at Redmint — Holistic & Modern Wellness" },
      {
        property: "og:description",
        content: "Acupuncture, massage, facials, LED light therapy, sound meditation and PEMF in San Francisco.",
      },
    ],
  }),
  component: Services,
});

const holistic = [
  {
    name: "Acupuncture",
    time: "60 / 90 min",
    body: "Pattern-based diagnosis followed by fine-needle treatment. Used for pain, cycle regulation, digestion, sleep, stress, and fertility support.",
    benefits: ["Regulates qi and circulation", "Reduces inflammation and pain", "Supports sleep and cycle health"],
  },
  {
    name: "Massage Therapy",
    time: "60 / 90 min",
    body: "Tui na and deep-tissue work along the meridians. Releases held tension at the fascia rather than chasing surface soreness.",
    benefits: ["Releases deep-seated tension", "Improves lymphatic flow", "Calms the nervous system"],
  },
  {
    name: "Skincare Facials",
    time: "75 min",
    body: "Gua sha sculpting, herbal steam, and our botanical actives — a facial designed around your constitution, not a fixed protocol.",
    benefits: ["Lifts and sculpts", "Clears congestion", "Restores barrier function"],
  },
];

const modern = [
  {
    name: "LED Full-Body Light Therapy",
    time: "20 min",
    body: "Red and near-infrared wavelengths across the whole body to support mitochondrial energy, recovery, and skin renewal.",
    benefits: ["Speeds muscle recovery", "Stimulates collagen", "Elevates daytime energy"],
  },
  {
    name: "Sound Meditation Pod",
    time: "30 min",
    body: "An enclosed vibro-acoustic pod that carries low-frequency sound through the body — meditation without the effort of meditating.",
    benefits: ["Drops the body into rest", "Eases mental noise", "Deepens sleep that night"],
  },
  {
    name: "PEMF Frequency Mat",
    time: "30 min",
    body: "Pulsed electromagnetic field therapy tuned to low frequencies, used alongside acupuncture for circulation and cellular recovery.",
    benefits: ["Improves microcirculation", "Reduces stiffness", "Supports recovery between visits"],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        seal="療"
        title="Two ways in. One practice."
        intro="Every visit begins with a short consultation — pulse, tongue, history, and what you actually want to feel. From there, care runs along two tracks that are often combined in the same appointment."
        image={holisticImg}
        imageAlt="Hands performing therapeutic bodywork"
      />

      <Track
        id="holistic"
        eyebrow="Holistic Wellness"
        seal="經"
        title="Classical care, delivered slowly"
        items={holistic}
      />

      <section className="on-ink relative">
        <img
          src={modernImg}
          alt="A guest resting under red LED light therapy panels"
          width={1408}
          height={1008}
          loading="lazy"
          className="h-[52vh] w-full object-cover opacity-70 md:h-[68vh]"
        />
      </section>

      <Track
        id="modern"
        eyebrow="Modern Wellness"
        seal="新"
        title="Technology, used sparingly and on purpose"
        items={modern}
        tone="ink"
      />
    </>
  );
}

function Track({
  id,
  eyebrow,
  seal,
  title,
  items,
  tone = "paper",
}: {
  id: string;
  eyebrow: string;
  seal: string;
  title: string;
  items: typeof holistic;
  tone?: "paper" | "ink";
}) {
  return (
    <Section id={id} eyebrow={eyebrow} seal={seal} tone={tone}>
      <Display level={2} className="max-w-[16ch]">
        {title}
      </Display>
      <ul className="mt-20 divide-y divide-border border-y border-border">
        {items.map((s) => (
          <li key={s.name} className="grid gap-8 py-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_auto] lg:gap-16">
            <div>
              <h3 className="display text-2xl md:text-3xl">{s.name}</h3>
              <span className="eyebrow mt-3 block">{s.time}</span>
            </div>
            <div>
              <p className="text-base leading-[1.9] text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 bg-gold" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:self-center">
              <GoldLink to="/contact">Book</GoldLink>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
