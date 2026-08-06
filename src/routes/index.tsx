import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Display } from "@/components/site/Section";
import { InkReveal } from "@/components/site/InkReveal";
import { Seal } from "@/components/site/Seal";
import { GoldLink } from "@/components/site/GoldButton";
import heroImg from "@/assets/hero.jpg";
import sanctuaryImg from "@/assets/sanctuary.jpg";
import skincareImg from "@/assets/skincare.jpg";
import herbalImg from "@/assets/herbal.jpg";
import holisticImg from "@/assets/holistic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Redmint — Ancient Wisdom, Modern Wellness | San Francisco" },
      {
        name: "description",
        content:
          "A San Francisco sanctuary where Traditional Chinese Medicine meets modern wellness. Acupuncture, massage, facials, light therapy, botanical skincare and herbal formulation.",
      },
      { property: "og:title", content: "Redmint — Ancient Wisdom, Modern Wellness | San Francisco" },
      {
        property: "og:description",
        content:
          "A San Francisco sanctuary where Traditional Chinese Medicine meets modern wellness. Acupuncture, massage, facials, light therapy, botanical skincare and herbal formulation.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="on-ink relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="A quiet treatment room at the Redmint sanctuary, lit by candlelight"
          width={1920}
          height={1200}
          className="absolute inset-0 size-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--ink-jade),transparent_70%)]" />
        <div className="relative mx-auto w-full max-w-[104rem] px-6 pb-24 pt-40 md:px-12 lg:px-20">
          <InkReveal>
            <span className="eyebrow">San Francisco · Est. Traditional Chinese Medicine</span>
            <div className="mt-8 flex items-start gap-6">
              <Display level={1} className="max-w-[16ch]">
                Ancient wisdom,
                <br />
                <em className="italic">modern</em> wellness
              </Display>
              <Seal glyph="紅" className="mt-4 hidden md:block" />
            </div>
            <p className="measure mt-10 text-base leading-relaxed text-muted-foreground">
              Five thousand years of practice, held to today's evidence. Treatments, formulations,
              and rituals that restore balance from the inside out.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <GoldLink to="/services">Explore Services</GoldLink>
              <GoldLink to="/shop">Shop Skincare</GoldLink>
            </div>
          </InkReveal>
        </div>
      </section>

      {/* Manifesto — quiet, text only, liu bai */}
      <Section eyebrow="Leaving White" seal="靜">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Display level={2} className="max-w-[14ch]">
            A doctor's precision. A painter's restraint.
          </Display>
          <div className="space-y-8 self-end text-base leading-[1.9] text-muted-foreground">
            <p>
              Redmint began with a simple observation: healing rarely arrives in a rush. It comes
              through attention — to the pulse, to the season, to what the body has been asking for
              all along.
            </p>
            <p>
              Our practitioners are trained in classical Chinese medicine and fluent in modern
              clinical science. Our formulations are built from time-tested botanicals and measured
              against contemporary standards. Nothing here is decorative.
            </p>
            <Link to="/about" className="link-quiet inline-block text-[0.68rem] uppercase tracking-[0.28em] text-gold">
              Our story
            </Link>
          </div>
        </div>
      </Section>

      {/* Wellness Sanctuaries — full bleed */}
      <FullBleed
        eyebrow="Wellness Sanctuaries"
        seal="居"
        image={sanctuaryImg}
        alt="Interior of the Redmint sanctuary with a traditional herbal apothecary cabinet"
        title="A room that lowers your shoulders"
        body="Our San Francisco sanctuary was built around the apothecary — 108 drawers of raw herbs, a tea counter, and treatment rooms kept deliberately quiet. Bespoke services, unhurried appointments, open daily."
        cta={{ to: "/locations", label: "Visit us" }}
      />

      {/* Botanical Skincare */}
      <Section eyebrow="Botanical Skincare" seal="膚">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <Display level={2} className="max-w-[13ch]">
              Herbs that answer to results
            </Display>
            <p className="measure mt-10 text-base leading-[1.9] text-muted-foreground">
              Ginseng, tremella, licorice root, pearl. Each formula begins in the classical
              materia medica and is then held to clinical measures — barrier repair, pigment,
              inflammation, hydration. Potent actives, no theater.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <GoldLink to="/shop">Shop skincare</GoldLink>
            </div>
          </div>
          <img
            src={skincareImg}
            alt="Dark glass botanical skincare bottles on warm stone with dried herbs"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </Section>

      {/* Herbal Wellness — full bleed */}
      <FullBleed
        eyebrow="Herbal Wellness"
        seal="草"
        image={herbalImg}
        alt="Traditional Chinese herbs arranged in ceramic dishes on dark stone"
        title="Centuries of formulation, weighed by hand"
        body="Our supplement line follows classical pairings — herbs that work in concert rather than isolation. Sourced traceably, tested for purity, and blended in small batches for sleep, digestion, energy, and calm."
        cta={{ to: "/shop", label: "Shop herbal wellness" }}
        reverse
      />

      {/* Holistic Care */}
      <Section eyebrow="Holistic Care" seal="醫">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <img
            src={holisticImg}
            alt="A practitioner's hands during a therapeutic massage"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover"
          />
          <div>
            <Display level={2} className="max-w-[14ch]">
              Preventative first, restorative always
            </Display>
            <p className="measure mt-10 text-base leading-[1.9] text-muted-foreground">
              Acupuncture, massage therapy, and skincare facials — alongside LED light therapy,
              sound meditation, and PEMF frequency work. We treat the pattern, not only the
              symptom, and we tell you what we're doing and why.
            </p>
            <div className="mt-12">
              <GoldLink to="/services">All services</GoldLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Location strip */}
      <section className="on-ink px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <InkReveal className="mx-auto max-w-[104rem]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <span className="eyebrow">San Francisco, CA</span>
              <Display level={2} className="mt-8 max-w-[12ch]">
                Open daily, 9am – 9pm
              </Display>
              <p className="measure mt-8 text-base leading-relaxed text-muted-foreground">
                1737 Union Street, San Francisco, CA 94123. Walk in for the herbal bar, book ahead
                for treatments.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <GoldLink to="/locations">Locations</GoldLink>
              <GoldLink to="/contact">Book a visit</GoldLink>
            </div>
          </div>
        </InkReveal>
      </section>
    </>
  );
}

function FullBleed({
  eyebrow,
  seal,
  image,
  alt,
  title,
  body,
  cta,
  reverse = false,
}: {
  eyebrow: string;
  seal: string;
  image: string;
  alt: string;
  title: string;
  body: string;
  cta: { to: string; label: string };
  reverse?: boolean;
}) {
  return (
    <section className="on-ink relative">
      <InkReveal className="relative">
        <img
          src={image}
          alt={alt}
          width={1600}
          height={1104}
          loading="lazy"
          className="h-[70vh] w-full object-cover opacity-80 md:h-[86vh]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--ink-jade),transparent_85%)] opacity-90" />
        <div
          className={`absolute inset-0 flex items-end px-6 py-16 md:items-center md:px-12 lg:px-20 ${
            reverse ? "md:justify-end" : ""
          }`}
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <span className="eyebrow">{eyebrow}</span>
              <Seal glyph={seal} />
            </div>
            <Display level={2} className="mt-6">
              {title}
            </Display>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">{body}</p>
            <div className="mt-10">
              <GoldLink to={cta.to as never}>{cta.label}</GoldLink>
            </div>
          </div>
        </div>
      </InkReveal>
    </section>
  );
}
