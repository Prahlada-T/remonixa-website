import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Remonixa found critical IDOR issues our previous vendor missed. The remediation guidance was clear enough that our team fixed everything in a sprint.",
    name: "Priya S.",
    role: "CTO, FinTech Startup",
  },
  {
    quote: "The 72-hour turnaround was a game changer for our SOC 2 audit timeline. Professional, sharp, and zero corporate fluff.",
    name: "Marcus L.",
    role: "Head of Engineering, SaaS",
  },
  {
    quote: "Their reports are actually readable. Developers loved the POCs — we could reproduce and fix issues without back-and-forth.",
    name: "Anika R.",
    role: "Security Lead, HealthTech",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ trust</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Trusted by startups & <span className="text-gradient-primary">growing businesses</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass-card rounded-2xl p-7 flex flex-col">
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <blockquote className="text-foreground/90 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex gap-0.5 mt-5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <figcaption className="border-t border-border/50 pt-4">
                <div className="font-bold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
