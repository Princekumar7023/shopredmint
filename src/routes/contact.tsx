import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Section, Display } from "@/components/site/Section";
import { GoldButton } from "@/components/site/GoldButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — Redmint San Francisco" },
      {
        name: "description",
        content:
          "Book a treatment or ask a question. Redmint, 1737 Union Street, San Francisco. Open daily 9am – 9pm.",
      },
      { property: "og:title", content: "Contact Redmint" },
      { property: "og:description", content: "Book a treatment or reach the Redmint team in San Francisco." },
    ],
  }),
  component: Contact,
});

const field =
  "w-full border-b border-input bg-transparent py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-gold transition-colors";

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thank you — we'll be in touch within one business day.");
    }, 500);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        seal="信"
        title="Write to us"
        intro="For bookings, membership questions, or anything you'd like to ask before your first visit. We answer within one business day."
      />

      <Section eyebrow="Enquiries" seal="問">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <form onSubmit={onSubmit} className="space-y-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Your name" className={`${field} mt-3`} />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={`${field} mt-3`}
                />
              </div>
            </div>
            <div>
              <label htmlFor="topic" className="eyebrow">
                Topic
              </label>
              <select id="topic" name="topic" className={`${field} mt-3`}>
                <option>Book a treatment</option>
                <option>Membership</option>
                <option>Herbal bar consultation</option>
                <option>Products & orders</option>
                <option>Something else</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="eyebrow">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="How can we help?"
                className={`${field} mt-3 resize-none`}
              />
            </div>
            <GoldButton type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send"}
            </GoldButton>
          </form>

          <div className="space-y-10">
            <div>
              <h2 className="eyebrow">Sanctuary</h2>
              <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">
                1737 Union Street
                <br />
                San Francisco, CA 94123
                <br />
                Open daily 9am – 9pm
              </p>
            </div>
            <div>
              <h2 className="eyebrow">Direct</h2>
              <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">
                (415) 555-0148
                <br />
                hello@redmint.com
              </p>
            </div>
            <Display level={3} className="max-w-[16ch] pt-6">
              We read every message ourselves.
            </Display>
          </div>
        </div>
      </Section>
    </>
  );
}
