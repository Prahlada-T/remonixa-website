const steps = [
  { n: "01", title: "Scope Definition", desc: "Define targets, rules of engagement, timelines, and success criteria." },
  { n: "02", title: "Reconnaissance & Scanning", desc: "Passive and active enumeration to map the full attack surface." },
  { n: "03", title: "Vulnerability Identification", desc: "Combine automated tools with manual analysis to surface real risks." },
  { n: "04", title: "Exploitation", desc: "Safely demonstrate impact — chain vulnerabilities to prove business risk." },
  { n: "05", title: "Reporting", desc: "Detailed report with POCs, severity ratings, and prioritized remediation." },
  { n: "06", title: "Retesting", desc: "Verify all fixes are effective. Free of charge. As many rounds as needed." },
];

export function Process() {
  return (
    <section id="process" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ process</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            How VAPT <span className="text-gradient-primary">actually works</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A transparent, repeatable methodology — from kickoff to remediation.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden md:block" />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {steps.map((s) => (
              <div key={s.n} className="relative md:pl-20 group">
                <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 items-center justify-center rounded-2xl glass border border-primary/30 font-mono text-primary font-bold group-hover:border-primary group-hover:shadow-[0_0_24px_-4px_var(--primary)] transition">
                  {s.n}
                </div>
                <div className="md:hidden font-mono text-primary text-sm mb-2">{s.n}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
