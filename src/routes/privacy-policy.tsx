import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Remonixa Technology" },
      {
        name: "description",
        content:
          "How Remonixa Technology collects, uses, stores, and protects your data. GDPR & ISO 27001 aligned privacy practices.",
      },
      { property: "og:title", content: "Privacy Policy — Remonixa Technology" },
      {
        property: "og:description",
        content:
          "Read Remonixa Technology's privacy policy covering data collection, security, retention, user rights, and compliance.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="relative pt-32 pb-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,oklch(0.6_0.24_295/0.18),transparent_70%)]" />

        <article className="relative mx-auto max-w-3xl px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[oklch(0.6_0.24_295/0.3)] bg-[oklch(0.6_0.24_295/0.08)] px-3 py-1 text-xs text-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 text-[oklch(0.75_0.22_285)]" />
            Legal • Privacy
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Privacy <span className="bg-gradient-to-r from-[oklch(0.85_0.18_295)] via-[oklch(0.75_0.22_285)] to-[oklch(0.7_0.22_270)] bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective Date: January 1, 2026 • Last Updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Remonixa Technology ("Remonixa", "we", "our", or "us") is committed to protecting the privacy and security of every individual and organization that interacts with our cybersecurity, VAPT, and consulting services. This Privacy Policy explains what information we collect, how we use it, how we secure it, and the rights you have over it. By using our website or services, you agree to the practices described below.
          </p>

          <Section title="1. Information We Collect">
            <p>We collect only the information necessary to deliver, secure, and improve our services. This includes:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li><strong className="text-foreground">Identity &amp; contact data</strong> — name, business email, phone number, company name, job title.</li>
              <li><strong className="text-foreground">Technical data</strong> — IP address, browser type, operating system, device identifiers, referring URLs, and pages visited.</li>
              <li><strong className="text-foreground">Engagement data</strong> — scope documents, authorization letters, target assets (URLs, IP ranges, APIs) provided by clients for testing.</li>
              <li><strong className="text-foreground">Communication data</strong> — messages, support tickets, and meeting notes exchanged with our team.</li>
              <li><strong className="text-foreground">Log data</strong> — server logs, security event logs, and audit trails generated during engagement delivery.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc space-y-1.5 pl-6">
              <li>To deliver contracted security testing, consulting, and reporting services.</li>
              <li>To perform vulnerability analysis, threat modeling, and remediation guidance.</li>
              <li>To communicate about engagements, proposals, invoices, and product updates.</li>
              <li>To improve our methodologies, tooling, and service quality.</li>
              <li>To comply with legal, regulatory, and contractual obligations.</li>
            </ul>
          </Section>

          <Section title="3. Data Security">
            <p>
              Security is the core of our business. All client data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Findings, reports, and evidence are stored in access-controlled, hardened environments. Access is restricted on a strict need-to-know basis, enforced by multi-factor authentication, role-based access control, and continuous monitoring.
            </p>
          </Section>

          <Section title="4. No Unauthorized Sharing">
            <p>
              We <strong className="text-foreground">do not sell, rent, or trade</strong> your personal or organizational data. Information is shared only with authorized client representatives, and — where strictly required — with regulators, auditors, or law enforcement under valid legal process.
            </p>
          </Section>

          <Section title="5. Cookies & Tracking">
            <p>
              Our website uses essential cookies for session management and analytics cookies (where consented) to understand usage patterns. You can disable non-essential cookies through your browser settings without affecting core site functionality.
            </p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>
              We may use carefully vetted third-party providers for hosting, email delivery, analytics, and payment processing. These providers are bound by confidentiality and data protection agreements and process data only on our documented instructions.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              Engagement data, reports, and supporting evidence are retained for the duration required by contract and applicable law — typically 12 months after engagement closure — after which data is securely destroyed using NIST 800-88 aligned sanitization procedures, unless longer retention is required for legal or regulatory reasons.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <ul className="list-disc space-y-1.5 pl-6">
              <li><strong className="text-foreground">Access</strong> — request a copy of personal data we hold about you.</li>
              <li><strong className="text-foreground">Rectification</strong> — request correction of inaccurate or incomplete data.</li>
              <li><strong className="text-foreground">Erasure</strong> — request deletion of your personal data, subject to legal retention requirements.</li>
              <li><strong className="text-foreground">Restriction &amp; objection</strong> — limit or object to certain processing activities.</li>
              <li><strong className="text-foreground">Portability</strong> — receive your data in a structured, machine-readable format.</li>
            </ul>
            <p>To exercise any right, email us at <a className="text-[oklch(0.8_0.18_290)] hover:underline" href="mailto:privacy@remonixa.tech">privacy@remonixa.tech</a>. We respond within 30 days.</p>
          </Section>

          <Section title="9. Compliance">
            <p>
              Our privacy practices are aligned with the EU General Data Protection Regulation (GDPR), the Information Technology Act, 2000 (India), the Digital Personal Data Protection Act, 2023, and ISO/IEC 27001:2022 information security management practices.
            </p>
          </Section>

          <Section title="10. Updates to This Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in technology, regulation, or our services. The "Last Updated" date above will indicate the most recent revision. Material changes will be communicated to active clients in writing.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              For privacy-related questions, requests, or complaints, contact our Data Protection Officer at <a className="text-[oklch(0.8_0.18_290)] hover:underline" href="mailto:privacy@remonixa.tech">privacy@remonixa.tech</a>.
            </p>
          </Section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
