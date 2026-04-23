import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollText, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Remonixa Technology" },
      {
        name: "description",
        content:
          "Legal terms governing the use of Remonixa Technology's VAPT, penetration testing, and cybersecurity services.",
      },
      { property: "og:title", content: "Terms & Conditions — Remonixa Technology" },
      {
        property: "og:description",
        content:
          "Read the terms governing engagements, authorization, confidentiality, liability, and payment for Remonixa Technology services.",
      },
    ],
  }),
  component: TermsPage,
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

function TermsPage() {
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
            <ScrollText className="h-3.5 w-3.5 text-[oklch(0.75_0.22_285)]" />
            Legal • Terms
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Terms &amp; <span className="bg-gradient-to-r from-[oklch(0.85_0.18_295)] via-[oklch(0.75_0.22_285)] to-[oklch(0.7_0.22_270)] bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective Date: January 1, 2026 • Last Updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            These Terms &amp; Conditions ("Terms") govern your access to and use of the website, services, and deliverables provided by Remonixa Technology ("Remonixa", "we", "our", "us"). By engaging our services or using this website, you ("Client", "you") accept and agree to be legally bound by these Terms.
          </p>

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing our website, signing a Statement of Work (SOW), engagement letter, or otherwise instructing Remonixa to perform any service, you confirm that you have read, understood, and agreed to these Terms in full. If you do not agree, you must not use our services.
            </p>
          </Section>

          <Section title="2. Scope of Services">
            <p>
              Remonixa provides offensive security and assurance services including, but not limited to:
            </p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Vulnerability Assessment and Penetration Testing (VAPT) of web applications, mobile applications, APIs, networks, cloud infrastructure, and IoT systems.</li>
              <li>Source code review, configuration review, and red-team engagements.</li>
              <li>Security advisory, compliance consulting, and remediation guidance.</li>
            </ul>
            <p>The exact scope, methodology, deliverables, and timelines for each engagement are defined in a written SOW or proposal signed by both parties.</p>
          </Section>

          <Section title="3. Authorization Requirement">
            <p>
              <strong className="text-foreground">All testing is performed strictly under written authorization.</strong> The Client warrants and represents that:
            </p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>It is the lawful owner of the assets in scope, or holds explicit written authorization from the asset owner to commission testing.</li>
              <li>It will provide a signed authorization letter ("Letter of Authorization" / "Rules of Engagement") prior to commencement of any active testing.</li>
              <li>Testing of systems not owned or expressly authorized is <strong className="text-foreground">strictly prohibited</strong> and may constitute a criminal offense under the Information Technology Act, 2000 and equivalent international laws.</li>
            </ul>
          </Section>

          <Section title="4. Responsible Disclosure">
            <p>
              Remonixa adheres to a coordinated, responsible disclosure policy. Vulnerabilities discovered during engagements are communicated only to the Client through secure channels. Public disclosure is never made without the Client's express written consent and a reasonable remediation window.
            </p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>
              Penetration testing inherently carries operational risk. While Remonixa exercises industry best practices to minimize impact, the Client acknowledges and agrees that:
            </p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Remonixa shall not be liable for service degradation, downtime, data loss, or incidental damages arising during authorized testing performed in accordance with the agreed scope.</li>
              <li>The Client is responsible for taking appropriate backups and operational precautions before testing begins.</li>
              <li>To the maximum extent permitted by law, Remonixa's total aggregate liability for any claim arising out of an engagement shall not exceed the fees paid by the Client for that specific engagement.</li>
              <li>Remonixa shall not be liable for indirect, consequential, special, or punitive damages.</li>
            </ul>
          </Section>

          <Section title="6. Confidentiality">
            <p>
              All client data, scope information, findings, and deliverables are treated as strictly confidential. Remonixa personnel are bound by individual non-disclosure agreements (NDAs). Sensitive information is encrypted, access-controlled, and securely destroyed at the end of the contractual retention period. A mutual NDA is executed prior to commencement of any engagement upon request.
            </p>
          </Section>

          <Section title="7. Payment Terms">
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Fees, payment schedules, and currencies are defined in the applicable SOW or proposal.</li>
              <li>Unless otherwise agreed in writing, invoices are payable within thirty (30) days of issuance.</li>
              <li>Late payments may attract interest at 1.5% per month or the maximum rate permitted by law, whichever is lower.</li>
              <li>Taxes (including GST) are charged additionally where applicable.</li>
              <li>Final reports and deliverables may be withheld until outstanding payments are cleared.</li>
            </ul>
          </Section>

          <Section title="8. No Misuse Clause">
            <p>
              Reports, tooling, scripts, and intelligence delivered by Remonixa are intended <strong className="text-foreground">solely</strong> for the Client's defensive security improvement. They <strong className="text-foreground">must not</strong> be used to attack, compromise, or test third-party systems without authorization. Any misuse by the Client or its representatives is strictly prohibited and shall constitute a material breach of these Terms, exposing the Client to immediate termination, indemnification claims, and legal action.
            </p>
          </Section>

          <Section title="9. Intellectual Property">
            <p>
              All proprietary methodologies, frameworks, internal tools, templates, and pre-existing materials remain the exclusive intellectual property of Remonixa. Upon full payment, the Client receives a non-exclusive, perpetual license to use the engagement deliverables (reports, evidence, recommendations) internally for security improvement purposes. Redistribution, resale, or public republication requires prior written consent.
            </p>
          </Section>

          <Section title="10. Termination">
            <p>
              Either party may terminate an engagement for material breach with thirty (30) days' written notice, provided the breaching party fails to cure within that period. Remonixa may suspend or terminate services immediately upon discovery of unlawful instruction, non-payment, or unauthorized scope expansion. Fees for work performed up to termination remain payable.
            </p>
          </Section>

          <Section title="11. Governing Law & Jurisdiction">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts located in India.
            </p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>
              Remonixa reserves the right to update these Terms at any time. The "Last Updated" date above will reflect the most recent revision. Continued use of our services after such changes constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              For legal or contractual queries, contact <a className="text-[oklch(0.8_0.18_290)] hover:underline" href="mailto:legal@remonixa.tech">legal@remonixa.tech</a>.
            </p>
          </Section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
