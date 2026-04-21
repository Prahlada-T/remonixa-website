import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Process } from "@/components/site/Process";
import { Tools } from "@/components/site/Tools";
import { RiskScenarios } from "@/components/site/RiskScenarios";
import { ReportPreview } from "@/components/site/ReportPreview";
import { Compliance } from "@/components/site/Compliance";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { AiAssistant } from "@/components/site/AiAssistant";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Remonixa Technology — VAPT & Penetration Testing Services" },
      {
        name: "description",
        content:
          "Advanced VAPT services to identify, exploit, and fix vulnerabilities across web apps, networks, and APIs. OWASP, ISO 27001 & GDPR aligned.",
      },
      { property: "og:title", content: "Remonixa Technology — VAPT & Penetration Testing" },
      {
        property: "og:description",
        content: "Secure your business before hackers do. Manual + automated VAPT with developer-friendly reports.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <Tools />
        <RiskScenarios />
        <ReportPreview />
        <Compliance />
        <Testimonials />
        <Pricing />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <AiAssistant />
      <Toaster />
    </div>
  );
}
