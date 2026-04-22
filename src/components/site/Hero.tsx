import { ArrowRight, FileSearch, ShieldCheck, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-cyber.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 grid-bg" />
        {/* Soft noise + vignette for premium depth */}
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 vignette" />
        {/* Concentric tech rings centered behind headline area */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] tech-rings opacity-60" />
      </div>

      {/* Breathing glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[520px] h-[520px] rounded-full bg-primary/25 -z-10 breathing-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-accent/20 blur-[120px] -z-10 float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[oklch(0.7_0.22_280/0.18)] -z-10 breathing-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <span className="particle" style={{ left: "18%", top: "32%", width: 4, height: 4, animationDelay: "0s" }} />
        <span className="particle" style={{ left: "78%", top: "28%", width: 3, height: 3, animationDelay: "2s" }} />
        <span className="particle" style={{ left: "62%", top: "62%", width: 5, height: 5, animationDelay: "4s" }} />
        <span className="particle" style={{ left: "28%", top: "70%", width: 3, height: 3, animationDelay: "1s" }} />
        <span className="particle" style={{ left: "88%", top: "55%", width: 4, height: 4, animationDelay: "3s" }} />
        <span className="particle" style={{ left: "10%", top: "50%", width: 2, height: 2, animationDelay: "5s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            VAPT Specialists · Available 24/7
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.04] [text-shadow:0_2px_40px_oklch(0_0_0/0.4)]">
            <span className="text-white">Secure Your </span>
            <span className="bg-gradient-to-r from-[oklch(0.85_0.18_280)] via-[oklch(0.78_0.2_260)] to-[oklch(0.78_0.18_220)] bg-clip-text text-transparent">Business</span>
            <br />
            <span className="text-white">Before </span>
            <span className="bg-gradient-to-r from-[oklch(0.78_0.18_220)] via-[oklch(0.72_0.22_240)] to-[oklch(0.78_0.2_280)] bg-clip-text text-transparent">Hackers</span>
            <span className="text-white"> Do</span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Advanced VAPT services to identify, exploit, and fix security vulnerabilities across
            web applications, networks, and APIs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-gradient-glow text-white hover:text-white group h-12 px-7 text-base border-0"
            >
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-outline-glow h-12 px-7 text-base glass border-primary/30 hover:border-primary/70 hover:bg-primary/10"
            >
              <a href="/Remonixa_VAPT_Sample_Report.pdf" download>
                <FileSearch className="mr-2 h-4 w-4" />
                Download Sample Report
              </a>
            </Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Instant download • No signup required
          </p>

          {/* Trust badges */}
          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Aligned with industry standards
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {[
                { icon: ShieldCheck, label: "OWASP Top 10" },
                { icon: Lock, label: "ISO 27001 Ready" },
                { icon: Globe, label: "GDPR Ready" },
                { icon: ShieldCheck, label: "PCI-DSS Aware" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground/80 hover:text-foreground transition-colors">
                  <b.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
