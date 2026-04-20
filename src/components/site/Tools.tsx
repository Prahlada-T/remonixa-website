const tools = [
  { name: "Burp Suite", desc: "Web app testing" },
  { name: "Nmap", desc: "Network discovery" },
  { name: "Metasploit", desc: "Exploitation framework" },
  { name: "OWASP ZAP", desc: "Automated scanning" },
  { name: "Wireshark", desc: "Traffic analysis" },
  { name: "Nuclei", desc: "Vuln templates" },
  { name: "SQLMap", desc: "SQL injection" },
  { name: "Nikto", desc: "Web server scanning" },
];

export function Tools() {
  return (
    <section className="relative py-24 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ arsenal</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Industry-standard <span className="text-gradient-primary">tools & tech</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-xl p-5 text-center group cursor-default"
            >
              <div className="font-mono font-bold text-foreground group-hover:text-primary transition">
                {t.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
