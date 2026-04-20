import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import remonixaLogo from "@/assets/remonixa-logo-round.png";

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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#020617]/80 border-b border-white/5">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-3 sm:gap-4"
          aria-label="Remonixa Technology"
        >
          {/* Circular logo */}
          <div className="relative shrink-0">
            <div
              className="absolute inset-0 rounded-full bg-[#1e90ff]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <img
              src={remonixaLogo}
              alt="Remonixa Technology logo"
              className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover drop-shadow-[0_4px_12px_rgba(2,6,23,0.6)] transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>

          {/* Wordmark bar */}
          <div className="relative flex flex-col justify-center rounded-lg px-3 sm:px-4 py-1.5 bg-gradient-to-r from-[#020617] via-[#050d1f] to-[#020617] border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <span className="font-semibold tracking-tight text-lg sm:text-xl leading-none bg-gradient-to-r from-[#7dd3fc] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
              Remonixa
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] font-medium tracking-[0.28em] text-slate-400 leading-none">
              TECHNOLOGY
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_24px_-4px_var(--primary)]"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground/80 hover:text-foreground hover:bg-white/5 transition"
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
