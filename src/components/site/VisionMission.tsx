import { Eye, Target, Sparkles } from "lucide-react";

const items = [
  {
    icon: Eye,
    label: "Our Vision",
    title: "A safer digital world for every business",
    desc: "To become the most trusted offensive security partner for modern businesses — making world-class VAPT accessible, transparent, and actionable for teams of every size.",
    accent: "from-[oklch(0.85_0.18_295)] to-[oklch(0.7_0.22_270)]",
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Find vulnerabilities before attackers do",
    desc: "We combine manual expertise with automated depth to uncover real-world risks across web, network, and API surfaces — and deliver remediation guidance your engineers can ship today.",
    accent: "from-[oklch(0.78_0.2_290)] to-[oklch(0.6_0.22_265)]",
  },
  {
    icon: Sparkles,
    label: "Our Theme",
    title: "Security that empowers, not slows you down",
    desc: "We believe security should accelerate innovation. Every engagement is built on clarity, integrity, and respect for your roadmap — strict on findings, simple in delivery.",
    accent: "from-[oklch(0.8_0.18_300)] to-[oklch(0.65_0.22_280)]",
  },
];

export function VisionMission() {
  return (
    <section
      id="vision"
      className="relative py-20 sm:py-24 overflow-hidden bg-[#070314]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.24_295/0.15),transparent_60%)]" />
        <div className="absolute inset-0 noise-overlay opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-[oklch(0.75_0.22_285)] uppercase tracking-[0.2em] mb-3">
            / who we are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Vision, Mission &amp;{" "}
            <span className="bg-gradient-to-r from-[oklch(0.85_0.18_295)] via-[oklch(0.75_0.22_285)] to-[oklch(0.7_0.22_270)] bg-clip-text text-transparent">
              Theme
            </span>
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
            The principles that shape every engagement, every report, and every recommendation we deliver.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.label}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-7 transition-all hover:-translate-y-1 hover:border-[oklch(0.6_0.24_295/0.45)] hover:bg-white/[0.04] hover:shadow-[0_20px_60px_-20px_oklch(0.6_0.24_295/0.45)]"
            >
              <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-[oklch(0.7_0.24_295/0.5)] to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${it.accent} shadow-[0_8px_30px_-8px_oklch(0.6_0.24_295/0.6)]`}
              >
                <it.icon className="h-5 w-5 text-white" />
              </div>

              <p className="mt-5 text-[11px] font-mono uppercase tracking-[0.18em] text-[oklch(0.75_0.22_285)]">
                {it.label}
              </p>
              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white leading-snug">
                {it.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
