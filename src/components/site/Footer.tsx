import remonixaLogo from "@/assets/remonixa-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src={remonixaLogo} alt="Remonixa Technology" className="h-10 w-auto object-contain" />
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Remonixa Technology. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">Privacy</a>
          <a href="#" className="hover:text-foreground transition">Terms</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
