import { ArrowRight, FileSearch, ShieldCheck, Lock, Globe, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLogo from "@/assets/remonixa-logo-hero.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-center pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-24 lg:pb-10 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.25_0.18_295/0.55),transparent_55%),radial-gradient(ellipse_at_bottom_left,oklch(0.18_0.14_280/0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070314] via-[#0a0518] to-[#050210]" />
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 right-[8%] w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full bg-[oklch(0.6_0.26_295/0.32)] -z-10 breathing-glow" />
      <div className="absolute bottom-1/4 left-[5%] w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full bg-[oklch(0.55_0.22_270/0.22)] blur-[140px] -z-10 float-slow" />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <span className="particle" style={{ left: "62%", top: "22%", width: 4, height: 4, animationDelay: "0s" }} />
        <span className="particle" style={{ left: "78%", top: "38%", width: 3, height: 3, animationDelay: "2s" }} />
        <span className="particle" style={{ left: "85%", top: "62%", width: 5, height: 5, animationDelay: "4s" }} />
        <span className="particle" style={{ left: "58%", top: "70%", width: 3, height: 3, animationDelay: "1s" }} />
        <span className="particle" style={{ left: "92%", top: "30%", width: 2, height: 2, animationDelay: "3s" }} />
        <span className="particle" style={{ left: "70%", top: "85%", width: 3, height: 3, animationDelay: "5s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-10 items-center">
          {/* LEFT — copy */}
          <div className="fade-up text-left order-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full glass text-[10px] sm:text-xs font-medium text-[oklch(0.85_0.18_295)] mb-3 sm:mb-5 border border-[oklch(0.6_0.24_295/0.35)]">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.7_0.24_295)] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[oklch(0.7_0.24_295)]" />
              </span>
              <span className="hidden sm:inline">VAPT Specialists · Available 24/7</span>
              <span className="sm:hidden">VAPT · 24/7</span>
            </div>

            <h1 className="text-[1.65rem] xs:text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tighter leading-[1.05] lg:leading-[1.05]">
              <span className="text-white">Secure Your </span>
              <span className="bg-gradient-to-r from-[oklch(0.85_0.2_295)] via-[oklch(0.78_0.22_285)] to-[oklch(0.72_0.22_270)] bg-clip-text text-transparent">
                Business
              </span>
              <br />
              <span className="text-white">Before </span>
              <span className="bg-gradient-to-r from-[oklch(0.78_0.2_270)] via-[oklch(0.74_0.24_285)] to-[oklch(0.82_0.2_295)] bg-clip-text text-transparent">
                Hackers Do
              </span>
            </h1>

            <p className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-base text-muted-foreground/90 max-w-xl leading-relaxed">
              <span className="hidden sm:inline">Advanced VAPT services to identify, exploit, and fix security vulnerabilities across web applications, networks, and APIs.</span>
              <span className="sm:hidden">Identify, exploit & fix vulnerabilities across apps, networks & APIs.</span>
            </p>

            <div className="mt-4 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="btn-gradient-glow text-white hover:text-white group h-9 sm:h-12 px-3 sm:px-7 text-xs sm:text-base border-0"
              >
                <a href="#contact">
                  <span className="hidden sm:inline">Get Free Consultation</span>
                  <span className="sm:hidden">Get Consultation</span>
                  <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-outline-glow h-9 sm:h-12 px-3 sm:px-7 text-xs sm:text-base glass border-[oklch(0.6_0.24_295/0.4)] hover:border-[oklch(0.7_0.24_295/0.7)] hover:bg-[oklch(0.6_0.24_295/0.1)]"
              >
                <a href="/Remonixa_VAPT_Sample_Report.pdf" download>
                  <FileSearch className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Download Sample Report</span>
                  <span className="sm:hidden">Sample Report</span>
                </a>
              </Button>
            </div>
            <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-muted-foreground">
              Instant download • No signup required
            </p>
          </div>

          {/* RIGHT — 3D logo art */}
          <div className="relative flex items-center justify-center fade-up order-2 min-h-[200px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[480px]" style={{ animationDelay: "0.15s" }}>
            {/* Concentric tech rings under logo */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[140px] h-[44px] sm:w-[280px] sm:h-[84px] md:w-[380px] md:h-[110px] lg:w-[460px] lg:h-[140px] pointer-events-none">
              <div className="absolute inset-0 rounded-[50%] border border-[oklch(0.7_0.22_285/0.3)]" />
              <div className="absolute inset-x-[6%] inset-y-[8%] rounded-[50%] border border-[oklch(0.7_0.22_285/0.22)]" />
              <div className="absolute inset-x-[12%] inset-y-[16%] rounded-[50%] border border-[oklch(0.7_0.22_285/0.15)]" />
              <div className="absolute inset-x-[18%] inset-y-[24%] rounded-[50%] border border-[oklch(0.7_0.22_285/0.1)]" />
            </div>

            {/* Breathing glow halo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] rounded-full bg-[oklch(0.6_0.26_295/0.45)] breathing-glow" />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] sm:w-[170px] sm:h-[170px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] rounded-full bg-[oklch(0.75_0.22_285/0.35)] breathing-glow"
              style={{ animationDelay: "1.5s" }}
            />

            {/* The logo */}
            <img
              src={heroLogo}
              alt="Remonixa Technology — secure planet shield logo"
              width={600}
              height={600}
              loading="eager"
              className="relative w-[150px] xs:w-[170px] sm:w-[280px] md:w-[360px] lg:w-[440px] xl:w-[480px] max-w-full h-auto float-slow drop-shadow-[0_12px_24px_oklch(0.5_0.24_295/0.55)] lg:drop-shadow-[0_30px_60px_oklch(0.5_0.24_295/0.55)]"
            />
          </div>
        </div>

        {/* Trust strip — Aligned with industry standards */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-[oklch(0.6_0.24_295/0.18)]">
          <p className="text-center text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground/80 mb-4 sm:mb-5">
            Aligned with industry standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-12">
            {[
              { icon: ShieldCheck, label: "OWASP Top 10" },
              { icon: Lock, label: "ISO 27001 Ready" },
              { icon: Globe, label: "GDPR Ready" },
              { icon: ShieldAlert, label: "PCI-DSS Aware" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-muted-foreground">
                <t.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[oklch(0.78_0.2_295)]" />
                <span className="text-xs sm:text-sm font-medium">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
