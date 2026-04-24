import { Linkedin, Twitter, Github, Instagram, Youtube, Facebook } from "lucide-react";
import logoMark from "@/assets/remonixa-logo-hero.png";

const socials = [
  {
    name: "LinkedIn",
    handle: "@remonixa-technology",
    url: "https://www.linkedin.com/company/remonixa-technology",
    icon: Linkedin,
    description: "Industry insights, threat advisories, and engineering deep-dives.",
    keywords: ["VAPT", "Cybersecurity", "OWASP", "ISO 27001"],
    color: "from-[#0A66C2] to-[#004182]",
  },
  {
    name: "Twitter / X",
    handle: "@RemonixaTech",
    url: "https://twitter.com/RemonixaTech",
    icon: Twitter,
    description: "Live CVE coverage, exploit notes, and security news in real time.",
    keywords: ["InfoSec", "CVE", "Pentest", "RedTeam"],
    color: "from-[#1d1f23] to-[#000000]",
  },
  {
    name: "GitHub",
    handle: "@remonixa",
    url: "https://github.com/remonixa",
    icon: Github,
    description: "Open-source security tooling, payloads, and recon utilities.",
    keywords: ["OpenSource", "SecTools", "Recon", "Payloads"],
    color: "from-[#2b3137] to-[#0d1117]",
  },
  {
    name: "Instagram",
    handle: "@remonixa.technology",
    url: "https://www.instagram.com/remonixa.technology",
    icon: Instagram,
    description: "Behind the scenes, team culture, and visual security tips.",
    keywords: ["Cybersecurity", "TechCulture", "Awareness"],
    color: "from-[#E1306C] to-[#833AB4]",
  },
  {
    name: "YouTube",
    handle: "@RemonixaTechnology",
    url: "https://www.youtube.com/@RemonixaTechnology",
    icon: Youtube,
    description: "VAPT walkthroughs, vulnerability demos, and tutorials.",
    keywords: ["Tutorials", "Pentest", "WebSecurity", "APISecurity"],
    color: "from-[#FF0000] to-[#990000]",
  },
  {
    name: "Facebook",
    handle: "@RemonixaTechnology",
    url: "https://www.facebook.com/RemonixaTechnology",
    icon: Facebook,
    description: "Company updates, hiring, and customer success stories.",
    keywords: ["Updates", "Careers", "CaseStudies"],
    color: "from-[#1877F2] to-[#0a4ea0]",
  },
];

export function SocialMedia() {
  return (
    <section
      id="social"
      className="relative py-20 sm:py-24 overflow-hidden bg-[#0a0518]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.6_0.24_295/0.5)] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.6_0.24_295/0.12),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-[oklch(0.75_0.22_285)] uppercase tracking-[0.2em] mb-3">
            / connect with us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Follow{" "}
            <span className="bg-gradient-to-r from-[oklch(0.85_0.18_295)] via-[oklch(0.75_0.22_285)] to-[oklch(0.7_0.22_270)] bg-clip-text text-transparent">
              Remonixa Technology
            </span>
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
            Cybersecurity research, VAPT walkthroughs, and security advisories — wherever you spend your time.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-[oklch(0.6_0.24_295/0.45)] hover:shadow-[0_20px_60px_-20px_oklch(0.6_0.24_295/0.45)]"
            >
              <div className="flex items-start gap-4">
                <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} shadow-lg shrink-0`}>
                  <s.icon className="h-5 w-5 text-white" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={logoMark}
                      alt=""
                      width={18}
                      height={18}
                      className="h-4 w-4 object-contain opacity-80"
                    />
                    <h3 className="text-base font-semibold text-white truncate">
                      Remonixa Technology
                    </h3>
                  </div>
                  <p className="mt-0.5 text-xs font-mono text-[oklch(0.75_0.22_285)]">
                    {s.name} · {s.handle}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.keywords.map((k) => (
                  <span
                    key={k}
                    className="inline-flex items-center rounded-full border border-[oklch(0.6_0.24_295/0.3)] bg-[oklch(0.6_0.24_295/0.08)] px-2 py-0.5 text-[10px] font-mono text-foreground/80"
                  >
                    #{k}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
