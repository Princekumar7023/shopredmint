import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Seal } from "./Seal";

const columns = [
  {
    title: "Visit",
    links: [
      { to: "/locations", label: "Locations" },
      { to: "/services", label: "Services" },
      { to: "/herbal-bar", label: "Herbal Bar" },
      { to: "/membership", label: "Membership" },
    ],
  },
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Products" },
      { to: "/shop", label: "Botanical Skincare" },
      { to: "/shop", label: "Herbal Supplements" },
      { to: "/gift-cards", label: "Gift Cards" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/about", label: "About TCM" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setEmail("");
    toast.success("Welcome. Look for our first letter soon.");
  };

  return (
    <footer className="on-ink px-6 pb-12 pt-24 md:px-12 md:pt-32 lg:px-20">
      <div className="mx-auto max-w-[104rem]">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <div className="flex items-center gap-5">
              <span className="display text-3xl text-gold">redmint</span>
              <Seal glyph="紅" />
            </div>
            <p className="measure mt-8 text-sm leading-relaxed text-muted-foreground">
              Stay close to the practice. Seasonal herbal guidance, new formulations, and
              sanctuary invitations — a few times a year, never more.
            </p>
            <form onSubmit={onSubmit} className="mt-8 flex max-w-md items-center gap-4 border-b border-input pb-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-transparent text-sm placeholder:text-muted-foreground/70 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 text-[0.65rem] font-light uppercase tracking-[0.28em] text-gold link-quiet"
              >
                Sign up
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow">{col.title}</h3>
                <ul className="mt-6 space-y-3">
                  {col.links.map((l) => (
                    <li key={`${col.title}-${l.label}`}>
                      <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-gold">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-rule mt-20" />
        <div className="mt-6 flex flex-col gap-3 text-[0.65rem] font-light uppercase tracking-[0.24em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Redmint — San Francisco</span>
          <span>Open daily 9am – 9pm</span>
        </div>
      </div>
    </footer>
  );
}
