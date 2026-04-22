import { ArrowRight, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLogo from "@/assets/remonixa-logo-hero.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
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
      <div className="absolute top-1/3 right-[8%] w-[560px] h-[560px] rounded-full bg-[oklch(0.6_0.26_295/0.35)] -z-10 breathing-glow" />
      <div className="absolute bottom-1/4 left-[5%] w-[420px] h-[420px] rounded-full bg-[oklch(0.55_0.22_270/0.25)] blur-[140px] -z-10 float-slow" />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <span className="particle" style={{ left: "62%", top: "22%", width: 4, height: 4, animationDelay: "0s" }} />
        <span className="particle" style={{ left: "78%", top: "38%", width: 3, height: 3, animationDelay: "2s" }} />
        <span className="particle" style={{ left: "85%", top: "62%", width: 5, height: 5, animationDelay: "4s" }} />
        <span className="particle" style={{ left: "58%", top: "70%", width: 3, height: 3, animationDelay: "1s" }} />
        <span className="particle" style={{ left: "92%", top: "30%", width: 2, height: 2, animationDelay: "3s" }} />
        <span className="particle" style={{ left: "70%", top: "85%", width: 3, height: 3, animationDelay: "5s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT — copy */}
          <div className="fade-up text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[oklch(0.85_0.18_295)] mb-6 border border-[oklch(0.6_0.24_295/0.35)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.7_0.24_295)] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[oklch(0.7_0.24_295)]" />
              </span>
              VAPT Specialists · Available 24/7
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tighter leading-[1.02]">
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

            <p className="mt-7 text-lg text-muted-foreground/90 max-w-xl leading-relaxed">
              Advanced VAPT services to identify, exploit, and fix security
              vulnerabilities across web applications, networks, and APIs.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
                className="btn-outline-glow h-12 px-7 text-base glass border-[oklch(0.6_0.24_295/0.4)] hover:border-[oklch(0.7_0.24_295/0.7)] hover:bg-[oklch(0.6_0.24_295/0.1)]"
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
          </div>

          {/* RIGHT — 3D logo art */}
          <div className="relative flex items-center justify-center fade-up" style={{ animationDelay: "0.15s" }}>
            {/* Concentric tech rings under logo */}
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[480px] h-[140px] pointer-events-none">
              <div className="absolute inset-0 rounded-[50%] border border-[oklch(0.7_0.22_285/0.25)]" />
              <div className="absolute inset-x-8 inset-y-3 rounded-[50%] border border-[oklch(0.7_0.22_285/0.18)]" />
              <div className="absolute inset-x-16 inset-y-6 rounded-[50%] border border-[oklch(0.7_0.22_285/0.12)]" />
              <div className="absolute inset-x-24 inset-y-9 rounded-[50%] border border-[oklch(0.7_0.22_285/0.08)]" />
            </div>

            {/* Breathing glow halo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full bg-[oklch(0.6_0.26_295/0.45)] breathing-glow" />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-[oklch(0.75_0.22_285/0.35)] breathing-glow"
              style={{ animationDelay: "1.5s" }}
            />

            {/* The logo */}
            <img
              src={heroLogo}
              alt="Remonixa Technology — secure planet shield logo"
              width={520}
              height={520}
              className="relative w-[320px] sm:w-[400px] lg:w-[480px] h-auto float-slow drop-shadow-[0_30px_60px_oklch(0.5_0.24_295/0.55)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
