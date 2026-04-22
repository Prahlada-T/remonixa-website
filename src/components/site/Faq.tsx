import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a typical VAPT engagement take?",
    a: "Most web application or API assessments take 5–10 business days from kickoff to final report. Network engagements vary based on scope. Initial findings are usually shared within 48–72 hours.",
  },
  {
    q: "Will testing impact our live production systems?",
    a: "We can test on staging or production based on your preference. For production, we use safe, non-destructive techniques and coordinate maintenance windows. Denial-of-service testing is never performed without explicit consent.",
  },
  {
    q: "How is the final report delivered?",
    a: "Encrypted PDF reports are delivered via secure channel within 2 business days of testing completion. Reports include an executive summary, technical findings with POCs, severity ratings, and remediation guidance.",
  },
  {
    q: "Do you offer free retesting after fixes?",
    a: "Yes. Every engagement includes free retesting to verify your fixes are effective. We'll confirm each finding is properly remediated and update the report accordingly.",
  },
  {
    q: "What information do you need to get started?",
    a: "Just the scope (URLs, IPs, API endpoints), preferred timing, and any access credentials needed. We'll send an NDA and rules-of-engagement document before kickoff.",
  },
  {
    q: "Are your findings mapped to compliance frameworks?",
    a: "Yes. Findings are mapped to OWASP Top 10, CWE, and CVSS by default. We can also map to ISO 27001, PCI-DSS, or GDPR requirements on request.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 bg-surface/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ faq</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Frequently asked <span className="text-gradient-primary">questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-xl px-6 border-border/40"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
