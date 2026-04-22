import { Database, MousePointerClick, KeyRound, ServerCrash } from "lucide-react";

const risks = [
  {
    icon: Database,
    name: "SQL Injection",
    impact: "Database compromise",
    desc: "Attackers extract entire databases — customer PII, credentials, payment data.",
    severity: "Critical",
  },
  {
    icon: MousePointerClick,
    name: "Cross-Site Scripting",
    impact: "Session hijacking",
    desc: "Malicious scripts steal session tokens and impersonate logged-in users.",
    severity: "High",
  },
  {
    icon: KeyRound,
    name: "IDOR",
    impact: "Unauthorized access",
    desc: "Predictable IDs let attackers access other users' accounts and data.",
    severity: "High",
  },
  {
    icon: ServerCrash,
    name: "API Misconfigurations",
    impact: "Data exposure",
    desc: "Missing auth, verbose errors, and CORS flaws leak sensitive data publicly.",
    severity: "Critical",
  },
];

const sevColor: Record<string, string> = {
  Critical: "bg-destructive/15 text-destructive border-destructive/30",
  High: "bg-warning/15 text-warning border-warning/30",
};

export function RiskScenarios() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ real risks</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            What we find <span className="text-gradient-primary">every week</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Common vulnerabilities that cost businesses real money — and how we catch them.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {risks.map((r) => (
            <div key={r.name} className="glass-card rounded-2xl p-7 flex gap-5">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                <r.icon className="h-6 w-6 text-destructive" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg">{r.name}</h3>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${sevColor[r.severity]}`}>
                    {r.severity}
                  </span>
                </div>
                <p className="text-sm text-primary/80 font-medium mb-2">→ {r.impact}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
