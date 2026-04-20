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
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] -z-10 float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            VAPT Specialists · Available 24/7
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]">
            <span className="text-gradient">Secure Your Business</span>
            <br />
            <span className="text-gradient-primary">Before Hackers Do</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advanced VAPT services to identify, exploit, and fix security vulnerabilities across
            web applications, networks, and APIs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group h-12 px-7 text-base shadow-[0_0_40px_-8px_var(--primary)] hover:shadow-[0_0_60px_-4px_var(--primary)] transition-all"
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
              className="h-12 px-7 text-base glass border-primary/30 hover:border-primary/60 hover:bg-primary/10"
            >
              <a href="#report">
                <FileSearch className="mr-2 h-4 w-4" />
                Request VAPT Report
              </a>
            </Button>
          </div>

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
