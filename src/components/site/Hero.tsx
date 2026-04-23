import { ArrowRight, FileSearch, ShieldCheck, Lock, Globe, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLogo from "@/assets/remonixa-logo-hero.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-center pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-24 lg:pb-12 overflow-hidden"
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

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 w-full">
        {/* Mobile-first stacked / Desktop 2-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* COPY */}
          <div className="fade-up text-center lg:text-left order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[oklch(0.85_0.18_295)] mb-5 sm:mb-6 border border-[oklch(0.6_0.24_295/0.4)] shadow-[0_0_20px_oklch(0.6_0.24_295/0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.7_0.24_295)] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[oklch(0.7_0.24_295)]" />
              </span>
              <span>VAPT Specialists · 24/7 Available</span>
            </div>

            {/* Heading */}
            <h1 className="text-[2rem] xs:text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tighter leading-[1.08]">
              <span className="text-white">Secure Your </span>
              <span className="bg-gradient-to-r from-[oklch(0.85_0.2_295)] via-[oklch(0.78_0.22_285)] to-[oklch(0.72_0.22_270)] bg-clip-text text-transparent">
                Business
              </span>
              <br />
              <span className="text-white">Before </span>
              <span className="bg-gradient-to-r from-[oklch(0.78_0.2_270)] via-[oklch(0.74_0.24_285)] to-[oklch(0.82_0.2_295)] bg-clip-text text-transparent">
                Hackers
              </span>
              <span className="text-white"> Do</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-base text-muted-foreground/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Advanced VAPT services to identify, exploit, and fix security vulnerabilities across web applications, networks, and APIs.
            </p>

            {/* MOBILE-ONLY hero image (between text and buttons, like reference) */}
            <div className="lg:hidden relative flex items-center justify-center my-7 min-h-[240px] sm:min-h-[300px]">
              {/* Tech rings */}
              <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[220px] h-[60px] sm:w-[280px] sm:h-[78px] pointer-events-none">
                <div className="absolute inset-0 rounded-[50%] border border-[oklch(0.7_0.22_285/0.35)]" />
                <div className="absolute inset-x-[6%] inset-y-[8%] rounded-[50%] border border-[oklch(0.7_0.22_285/0.25)]" />
                <div className="absolute inset-x-[12%] inset-y-[16%] rounded-[50%] border border-[oklch(0.7_0.22_285/0.18)]" />
                <div className="absolute inset-x-[18%] inset-y-[24%] rounded-[50%] border border-[oklch(0.7_0.22_285/0.12)]" />
              </div>
              {/* Glow halos */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full bg-[oklch(0.6_0.26_295/0.45)] breathing-glow" />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full bg-[oklch(0.75_0.22_285/0.4)] breathing-glow"
                style={{ animationDelay: "1.5s" }}
              />
              <img
                src={heroLogo}
                alt="Remonixa Technology — secure planet shield logo"
                width={600}
                height={600}
                loading="eager"
                className="relative w-[200px] sm:w-[240px] max-w-full h-auto float-slow drop-shadow-[0_18px_36px_oklch(0.5_0.24_295/0.65)]"
              />
            </div>

            {/* Buttons — stacked on mobile, inline on desktop */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:justify-center lg:justify-start items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="btn-gradient-glow text-white hover:text-white group h-12 px-6 sm:px-7 text-sm sm:text-base border-0 rounded-xl"
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
                className="btn-outline-glow h-12 px-6 sm:px-7 text-sm sm:text-base glass border-[oklch(0.6_0.24_295/0.4)] hover:border-[oklch(0.7_0.24_295/0.7)] hover:bg-[oklch(0.6_0.24_295/0.1)] rounded-xl"
              >
                <a href="/Remonixa_VAPT_Sample_Report.pdf" download>
                  <FileSearch className="mr-2 h-4 w-4" />
                  Download Sample Report
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground/80 text-center lg:text-left">
              Instant download • No signup required
            </p>
          </div>

          {/* DESKTOP-ONLY 3D logo art */}
          <div className="hidden lg:flex relative items-center justify-center fade-up order-2 min-h-[480px]" style={{ animationDelay: "0.15s" }}>
            {/* Concentric tech rings under logo */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[460px] h-[140px] pointer-events-none">
              <div className="absolute inset-0 rounded-[50%] border border-[oklch(0.7_0.22_285/0.3)]" />
              <div className="absolute inset-x-[6%] inset-y-[8%] rounded-[50%] border border-[oklch(0.7_0.22_285/0.22)]" />
              <div className="absolute inset-x-[12%] inset-y-[16%] rounded-[50%] border border-[oklch(0.7_0.22_285/0.15)]" />
              <div className="absolute inset-x-[18%] inset-y-[24%] rounded-[50%] border border-[oklch(0.7_0.22_285/0.1)]" />
            </div>

            {/* Breathing glow halo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[oklch(0.6_0.26_295/0.45)] breathing-glow" />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-[oklch(0.75_0.22_285/0.35)] breathing-glow"
              style={{ animationDelay: "1.5s" }}
            />

            <img
              src={heroLogo}
              alt="Remonixa Technology — secure planet shield logo"
              width={600}
              height={600}
              loading="eager"
              className="relative w-[440px] xl:w-[480px] max-w-full h-auto float-slow drop-shadow-[0_30px_60px_oklch(0.5_0.24_295/0.55)]"
            />
          </div>
        </div>

        {/* Trust strip — Aligned with industry standards */}
        <div className="mt-10 sm:mt-12 lg:mt-14 pt-6 sm:pt-8 border-t border-[oklch(0.6_0.24_295/0.18)]">
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
