import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Contact as ContactSection } from "@/components/site/Contact";
import { ArrowLeft, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Remonixa Technology" },
      {
        name: "description",
        content:
          "Get in touch with Remonixa Technology for VAPT, penetration testing, and cybersecurity consulting. We respond within one business day.",
      },
      { property: "og:title", content: "Contact — Remonixa Technology" },
      {
        property: "og:description",
        content:
          "Reach our security team for engagements, partnerships, or responsible disclosure.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="relative pt-32 pb-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,oklch(0.6_0.24_295/0.18),transparent_70%)]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[oklch(0.6_0.24_295/0.3)] bg-[oklch(0.6_0.24_295/0.08)] px-3 py-1 text-xs text-foreground/80">
            <Mail className="h-3.5 w-3.5 text-[oklch(0.75_0.22_285)]" />
            We respond within 1 business day
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Talk to our{" "}
            <span className="bg-gradient-to-r from-[oklch(0.85_0.18_295)] via-[oklch(0.75_0.22_285)] to-[oklch(0.7_0.22_270)] bg-clip-text text-transparent">
              security team
            </span>
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Tell us about your environment, scope, and timeline. We'll come back with a proposal, indicative pricing, and an engagement plan.
          </p>
        </div>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
