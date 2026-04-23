import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMark from "@/assets/remonixa-logo-hero.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Compliance", href: "#compliance" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#070314]/80 border-b border-white/5">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-center md:justify-between px-4 sm:px-6">
        {/* Brand — logo mark + wordmark (centered on mobile, left on desktop) */}
        <a
          href="#top"
          className="group inline-flex items-center gap-3 leading-none transition-opacity duration-300 hover:opacity-90"
          aria-label="Remonixa Technology"
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[oklch(0.6_0.24_295/0.35)] blur-md" />
            <img
              src={logoMark}
              alt=""
              width={40}
              height={40}
              className="relative h-10 w-10 object-contain drop-shadow-[0_0_10px_oklch(0.65_0.24_295/0.6)]"
            />
          </span>
          <span className="inline-flex items-baseline gap-1.5">
            <span className="font-bold tracking-tight text-lg sm:text-xl leading-none bg-gradient-to-r from-[oklch(0.85_0.18_295)] via-[oklch(0.75_0.22_285)] to-[oklch(0.7_0.22_270)] bg-clip-text text-transparent">
              Remonixa
            </span>
            <span className="font-semibold tracking-tight text-lg sm:text-xl leading-none text-white">
              Technology
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="btn-gradient-glow text-white hover:text-white border-0"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile toggle — absolute right */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground/80 hover:text-foreground hover:bg-white/5 transition"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#020617]/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                Get Started
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
