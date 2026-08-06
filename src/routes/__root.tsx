import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="on-ink flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="display text-7xl text-gold">404</h1>
        <h2 className="mt-6 text-sm font-light uppercase tracking-[0.3em]">Page not found</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          This path has gone quiet. Return to the sanctuary.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="border border-gold/70 px-7 py-3.5 text-[0.7rem] font-light uppercase tracking-[0.28em] transition-colors hover:bg-gold hover:text-ink"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="on-ink flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="display text-3xl">This page didn't load</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-gold/70 px-7 py-3.5 text-[0.7rem] font-light uppercase tracking-[0.28em] transition-colors hover:bg-gold hover:text-ink"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-border px-7 py-3.5 text-[0.7rem] font-light uppercase tracking-[0.28em] transition-colors hover:bg-gold hover:text-ink"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Redmint — TCM Wellness Sanctuary & Botanical Skincare" },
      {
        name: "description",
        content:
          "Redmint is a San Francisco sanctuary for Traditional Chinese Medicine, modern wellness therapies, botanical skincare, and herbal formulation.",
      },
      { name: "author", content: "Redmint" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@200..700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </QueryClientProvider>
  );
}
