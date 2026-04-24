import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import logoMark from "@/assets/remonixa-logo-hero.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0b0f1a] pt-10 pb-6">
      {/* Top glow divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.24_295/0.6)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-[-80px] h-40 bg-[radial-gradient(ellipse_at_top,oklch(0.6_0.24_295/0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Brand block — centered */}
        <div className="flex flex-col items-center text-center">
          <span className="relative inline-flex h-14 w-14 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[oklch(0.6_0.24_295/0.45)] blur-lg animate-pulse" />
            <img
              src={logoMark}
              alt="Remonixa Technology logo"
              width={56}
              height={56}
              className="relative h-14 w-14 object-contain drop-shadow-[0_0_14px_oklch(0.65_0.24_295/0.7)]"
            />
          </span>

          <div className="mt-4 inline-flex items-baseline gap-1.5">
            <span className="font-bold tracking-tight text-2xl bg-gradient-to-r from-[oklch(0.85_0.18_295)] via-[oklch(0.75_0.22_285)] to-[oklch(0.7_0.22_270)] bg-clip-text text-transparent">
              Remonixa
            </span>
            <span className="font-semibold tracking-tight text-2xl text-white/90">
              Technology
            </span>
          </div>

          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Offensive security &amp; VAPT specialists. Helping businesses identify, exploit, and remediate vulnerabilities — before attackers do.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[oklch(0.6_0.24_295/0.3)] bg-[oklch(0.6_0.24_295/0.08)] px-3 py-1 text-xs text-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 text-[oklch(0.75_0.22_285)]" />
            OWASP • ISO 27001 • GDPR aligned
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Links + copyright */}
        <div className="mt-4 flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground/80 order-2 md:order-1">
            © {year} Remonixa Technology. All rights reserved.
          </p>

          <nav className="order-1 md:order-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {[
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms-and-conditions", label: "Terms & Conditions" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="footer-link relative text-muted-foreground transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
