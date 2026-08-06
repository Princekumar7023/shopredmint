import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Display } from "@/components/site/Section";
import { GoldLink } from "@/components/site/GoldButton";
import sanctuaryImg from "@/assets/sanctuary.jpg";
import barImg from "@/assets/herbal-bar.jpg";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Union Street Sanctuary | Redmint San Francisco" },
      {
        name: "description",
        content:
          "Visit the Redmint sanctuary at 1737 Union Street, San Francisco. Open daily 9am – 9pm for treatments, the herbal bar, and botanical skincare.",
      },
      { property: "og:title", content: "Redmint — Union Street Sanctuary, San Francisco" },
      { property: "og:description", content: "1737 Union Street, San Francisco. Open daily 9am – 9pm." },
    ],
  }),
  component: Locations,
});

const details = [
  ["Address", "1737 Union Street\nSan Francisco, CA 94123"],
  ["Hours", "Open daily\n9:00am – 9:00pm"],
  ["Telephone", "(415) 555-0148"],
  ["Email", "hello@redmint.com"],
  ["Getting here", "Union Street bus lines 41 and 45.\nMetered street parking on Octavia."],
  ["Walk-ins", "Herbal bar and retail, any time.\nTreatments by appointment."],
];

function Locations() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        seal="居"
        title="Union Street, San Francisco"
        intro="One sanctuary, built slowly. A herbal bar at the front, six treatment rooms behind it, and a courtyard that stays warm even when the fog doesn't lift."
        image={sanctuaryImg}
        imageAlt="The Redmint sanctuary interior with a traditional apothecary cabinet"
      />

      <Section eyebrow="Visit" seal="訪">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <Display level={2} className="max-w-[12ch]">
              Come as you are, leave lighter
            </Display>
            <p className="measure mt-8 text-base leading-[1.9] text-muted-foreground">
              Arrive ten minutes early for your first visit — there's tea, and a short intake we'd
              rather not rush. Everything else is taken care of.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <GoldLink to="/contact">Book a visit</GoldLink>
              <a
                href="https://maps.google.com/?q=1737+Union+Street+San+Francisco"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-gold/70 px-7 py-3.5 text-[0.7rem] font-light uppercase tracking-[0.28em] transition-colors duration-500 hover:bg-gold hover:text-ink"
              >
                Open map
              </a>
            </div>
          </div>

          <dl className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
            {details.map(([term, value]) => (
              <div key={term}>
                <dt className="eyebrow">{term}</dt>
                <dd className="mt-3 whitespace-pre-line text-sm leading-[1.9] text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <section className="on-ink">
        <img
          src={barImg}
          alt="The herbal bar counter with glass jars of dried herbs"
          width={1408}
          height={1008}
          loading="lazy"
          className="h-[50vh] w-full object-cover opacity-85 md:h-[70vh]"
        />
      </section>

      <Section eyebrow="What's inside" seal="間" tone="ink">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Display level={2} className="max-w-[13ch]">
            Six rooms, one apothecary
          </Display>
          <p className="text-base leading-[1.9] text-muted-foreground">
            Four treatment rooms for acupuncture and bodywork, a facial suite, a light-therapy and
            sound-pod room, and the herbal bar at the front where the whole thing began. The
            apothecary cabinet holds 108 raw herbs, restocked weekly.
          </p>
        </div>
      </Section>
    </>
  );
}
