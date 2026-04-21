export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#top" className="inline-flex items-center gap-2 leading-none" aria-label="Remonixa Technology">
          <span className="font-bold tracking-tight text-lg leading-none bg-gradient-to-r from-[#7dd3fc] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
            Remonixa
          </span>
          <span className="font-medium text-lg leading-none tracking-[0.18em] text-slate-300/90">
            TECHNOLOGY
          </span>
        </a>
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
