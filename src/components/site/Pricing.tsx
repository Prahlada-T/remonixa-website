import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    tag: "For early-stage startups",
    price: "Custom",
    features: [
      "1 web application or API",
      "OWASP Top 10 coverage",
      "Automated + manual testing",
      "Detailed report with POCs",
      "1 round of free retesting",
    ],
  },
  {
    name: "Advanced",
    tag: "For growing teams",
    price: "Custom",
    featured: true,
    features: [
      "Up to 3 assets (web/API/network)",
      "Deep manual penetration testing",
      "Business logic & auth testing",
      "Executive + technical reports",
      "2 rounds of free retesting",
      "Dedicated security consultant",
    ],
  },
  {
    name: "Enterprise",
    tag: "For regulated industries",
    price: "Custom",
    features: [
      "Unlimited assets in scope",
      "Red-team style engagements",
      "Compliance-mapped findings",
      "Quarterly retesting included",
      "On-call security advisory",
      "Custom SLAs available",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Custom pricing, <span className="text-gradient-primary">scoped to fit</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Every engagement is unique. Tell us your scope, get a transparent quote within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glass-card rounded-2xl p-8 relative ${
                p.featured ? "border-primary/50 shadow-[0_0_60px_-12px_var(--primary)]" : ""
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.tag}</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gradient-primary">{p.price}</div>
                <div className="text-xs text-muted-foreground mt-1">scope-based quote</div>
              </div>
              <Button
                asChild
                className={`w-full mb-6 ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                <a href="#contact">Request Quote</a>
              </Button>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
