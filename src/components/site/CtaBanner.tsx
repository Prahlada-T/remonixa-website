import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass-card p-10 sm:p-16 text-center">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[140px]" />

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
              Don't wait for a breach.
              <br />
              <span className="text-gradient-primary">Secure your systems today.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Free 30-minute consultation. No commitment. We'll review your stack and identify your top risks.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_60px_-8px_var(--primary)] group"
            >
              <a href="#contact">
                Book Your Free Consultation
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
