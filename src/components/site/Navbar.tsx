import { Button } from "@/components/ui/button";
import remonixaLogo from "@/assets/remonixa-logo.png";

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
        <a href="#top" className="flex items-center group">
          <div className="relative rounded-md bg-white px-3 py-1.5 shadow-[0_0_24px_-6px_var(--primary)] transition group-hover:shadow-[0_0_28px_-4px_var(--primary)]">
            <img
              src={remonixaLogo}
              alt="Remonixa Technology"
              className="h-8 w-auto object-contain"
            />
          </div>
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
