import { Crosshair, Network, Webhook, FileText } from "lucide-react";

const features = [
  {
    icon: Crosshair,
    title: "Web Application Security",
    desc: "Identify and fix vulnerabilities in web applications.",
  },
  {
    icon: Network,
    title: "Network Security",
    desc: "Secure your infrastructure and internal networks.",
  },
  {
    icon: Webhook,
    title: "API Security",
    desc: "Protect your APIs from modern threats.",
  },
  {
    icon: FileText,
    title: "Detailed Reporting",
    desc: "Actionable insights with clear remediation steps.",
  },
];

export function HeroFeatures() {
  return (
    <section className="relative -mt-2 sm:-mt-4 lg:-mt-8 pb-10 sm:pb-14 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass-card rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:border-[oklch(0.7_0.24_295/0.5)] hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 inline-flex p-2 sm:p-2.5 rounded-xl bg-[oklch(0.6_0.24_295/0.15)] border border-[oklch(0.6_0.24_295/0.35)]">
                  <f.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[oklch(0.82_0.18_295)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
