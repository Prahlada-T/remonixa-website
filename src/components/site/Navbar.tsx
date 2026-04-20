import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Compliance", href: "#compliance" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative">
            <Shield className="h-6 w-6 text-primary" strokeWidth={2.2} />
            <div className="absolute inset-0 blur-md bg-primary/40 group-hover:bg-primary/70 transition" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Remonixa<span className="text-primary">.</span>
          </span>
        </a>

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

        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_24px_-4px_var(--primary)]">
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </header>
  );
}
