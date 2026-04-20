import { Cpu, Target, FileCode2, Zap, RefreshCcw, Users } from "lucide-react";

const usps = [
  { icon: Cpu, title: "Manual + Automated Testing", desc: "Tool-driven coverage paired with human creativity to find what scanners miss." },
  { icon: Target, title: "Real-world Attack Simulation", desc: "We think and act like attackers — chaining vulnerabilities, not just listing them." },
  { icon: FileCode2, title: "Developer-friendly Reports", desc: "Clear POCs, code-level fixes, and risk ratings your engineers will actually use." },
  { icon: Zap, title: "Fast Turnaround", desc: "Initial findings in 48–72 hours. No drawn-out engagements, no surprise delays." },
  { icon: RefreshCcw, title: "Free Retesting", desc: "Once you fix the issues, we re-verify them at no additional cost. Period." },
  { icon: Users, title: "Dedicated Specialists", desc: "Direct line to certified pentesters — no junior handoffs or ticket queues." },
];

export function WhyChoose() {
  return (
    <section className="relative py-28 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ why remonixa</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Built for teams that ship <span className="text-gradient-primary">secure software</span>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40">
          {usps.map((u) => (
            <div key={u.title} className="bg-background p-8 hover:bg-surface transition-colors group">
              <u.icon className="h-7 w-7 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">{u.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
