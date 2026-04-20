import remonixaLogo from "@/assets/remonixa-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img src={remonixaLogo} alt="Remonixa Technology logo" className="h-7 w-7 rounded-full object-contain" />
          <span className="font-display font-bold">Remonixa Technology</span>
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
