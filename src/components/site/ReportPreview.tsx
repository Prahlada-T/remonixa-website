import { CheckCircle2, AlertTriangle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import reportImg from "@/assets/report-preview.jpg";

export function ReportPreview() {
  return (
    <section id="report" className="relative py-28 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ deliverable</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Reports your team will <span className="text-gradient-primary">actually use</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Every finding is documented with exploit reproduction steps, severity scoring, and
            concrete remediation guidance.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { icon: AlertTriangle, label: "Vulnerability name & CVSS severity rating" },
              { icon: FileText, label: "Step-by-step proof of concept (POC)" },
              { icon: CheckCircle2, label: "Code-level remediation steps" },
              { icon: CheckCircle2, label: "Executive summary for stakeholders" },
            ].map((i) => (
              <div key={i.label} className="flex items-start gap-3">
                <i.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90">{i.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_-6px_var(--primary)]">
              <a href="/Remonixa_VAPT_Sample_Report.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Sample Report
              </a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Instant download • No signup required
            </p>
          </div>
        </div>

        {/* Mock report card */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10" />
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
              <div>
                <div className="text-xs font-mono text-muted-foreground">REPORT-2025-0481</div>
                <div className="font-bold text-lg mt-0.5">Penetration Test Findings</div>
              </div>
              <div className="text-xs px-3 py-1 rounded-full bg-success/15 text-success border border-success/30 font-mono">
                VERIFIED
              </div>
            </div>

            <div className="space-y-3">
              {[
                { name: "SQL Injection — /api/users", sev: "Critical", color: "destructive" },
                { name: "Stored XSS — comment field", sev: "High", color: "warning" },
                { name: "IDOR — /api/orders/{id}", sev: "High", color: "warning" },
                { name: "Verbose error messages", sev: "Low", color: "primary" },
              ].map((f) => (
                <div key={f.name} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/40 transition">
                  <div className="font-mono text-sm">{f.name}</div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border bg-${f.color}/15 text-${f.color} border-${f.color}/30`}>
                    {f.sev}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-border/50 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-2xl font-bold text-destructive">12</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Critical</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warning">28</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">High/Med</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Low/Info</div>
              </div>
            </div>

            {/* faint background image */}
            <img
              src={reportImg}
              alt=""
              loading="lazy"
              width={1280}
              height={896}
              className="absolute inset-0 -z-10 w-full h-full object-cover opacity-10 mix-blend-screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
