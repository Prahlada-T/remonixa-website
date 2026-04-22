import { ShieldCheck, FileBadge, Globe, Award } from "lucide-react";

const items = [
  { icon: ShieldCheck, name: "OWASP Top 10", desc: "Full coverage of the OWASP Top 10 web and API risk categories." },
  { icon: Award, name: "ISO 27001", desc: "Testing methodology aligned with ISO 27001 information security controls." },
  { icon: Globe, name: "GDPR Readiness", desc: "Identify data exposure risks impacting GDPR compliance obligations." },
  { icon: FileBadge, name: "PCI-DSS Aware", desc: "Findings mapped to relevant PCI-DSS requirements where applicable." },
];

export function Compliance() {
  return (
    <section id="compliance" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ compliance</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Standards & <span className="text-gradient-primary">frameworks</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.name} className="glass-card rounded-2xl p-7 text-center">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                <it.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{it.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
