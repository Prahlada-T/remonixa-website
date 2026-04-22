import { Globe2, Network, Code2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Web Application VAPT",
    desc: "Deep-dive testing for OWASP Top 10, business logic flaws, authentication bypasses, and zero-day risks across modern web stacks.",
    points: ["SQLi, XSS, CSRF, SSRF", "Auth & session testing", "Business logic abuse"],
  },
  {
    icon: Network,
    title: "Network VAPT",
    desc: "Internal & external penetration testing to expose misconfigurations, weak services, and lateral movement paths in your infrastructure.",
    points: ["Internal & external scans", "Privilege escalation", "Firewall & VPN review"],
  },
  {
    icon: Code2,
    title: "API Security Testing",
    desc: "Comprehensive testing for REST and GraphQL APIs — broken auth, BOLA/IDOR, rate limiting, and data exposure.",
    points: ["REST & GraphQL", "Token & JWT analysis", "Rate-limit & abuse testing"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ services</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Three core pillars of <span className="text-gradient-primary">offensive security</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Focused expertise where it matters most. We don't spread thin — we go deep.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="glass-card rounded-2xl p-8 group relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />

              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>

                <ul className="space-y-2 border-t border-border/50 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      <span className="text-foreground/80">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
