import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Display } from "@/components/site/Section";
import { GoldLink } from "@/components/site/GoldButton";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Work at Redmint | San Francisco" },
      {
        name: "description",
        content:
          "Open roles at Redmint San Francisco: licensed acupuncturists, massage therapists, estheticians, and herbal bar hosts.",
      },
      { property: "og:title", content: "Careers at Redmint" },
      { property: "og:description", content: "Join a San Francisco practice built on classical Chinese medicine." },
    ],
  }),
  component: Careers,
});

const roles = [
  { title: "Licensed Acupuncturist", type: "Full-time · San Francisco" },
  { title: "Massage Therapist (CMT)", type: "Full-time / Part-time · San Francisco" },
  { title: "Esthetician, Facial Suite", type: "Full-time · San Francisco" },
  { title: "Herbal Bar Host", type: "Part-time · San Francisco" },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        seal="人"
        title="Practise somewhere unhurried"
        intro="We staff for depth rather than volume: longer appointments, fewer of them, and time built into the day for study. If that's the practice you've been looking for, we'd like to meet."
      />

      <Section eyebrow="Open roles" seal="職">
        <Display level={2} className="max-w-[12ch]">
          Currently hiring
        </Display>
        <ul className="mt-16 divide-y divide-border border-y border-border">
          {roles.map((r) => (
            <li key={r.title} className="flex flex-wrap items-center justify-between gap-6 py-9">
              <div>
                <h3 className="display text-2xl">{r.title}</h3>
                <span className="eyebrow mt-2 block">{r.type}</span>
              </div>
              <GoldLink to="/contact">Apply</GoldLink>
            </li>
          ))}
        </ul>
        <p className="measure mt-12 text-sm leading-[1.9] text-muted-foreground">
          Don't see your role? Write to us anyway — we keep a short list and revisit it each season.
        </p>
      </Section>
    </>
  );
}
