import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/shop", label: "Shop" },
  { to: "/herbal-bar", label: "Herbal Bar" },
  { to: "/membership", label: "Membership" },
  { to: "/about", label: "About" },
  { to: "/locations", label: "Locations" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-700",
        scrolled ? "on-ink border-b border-border/60" : "text-paper",
      )}
    >
      <div className="mx-auto grid max-w-[104rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:px-12 lg:px-20">
        <div className="flex min-w-0 items-center gap-10">
          <Link to="/" className="display shrink-0 text-2xl tracking-tight text-gold">
            redmint
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-quiet text-[0.68rem] font-light uppercase tracking-[0.26em]"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-6">
          <Link
            to="/contact"
            className="hidden text-[0.68rem] font-light uppercase tracking-[0.26em] link-quiet md:inline"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="on-ink border-t border-border/60 lg:hidden">
          <nav className="mx-auto flex max-w-[104rem] flex-col gap-1 px-6 py-6 md:px-12">
            {[...nav, { to: "/gift-cards", label: "Gift Cards" }, { to: "/contact", label: "Contact" }].map(
              (item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[0.72rem] font-light uppercase tracking-[0.26em]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
