import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { HeroFeatures } from "@/components/site/HeroFeatures";
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
import { VisionMission } from "@/components/site/VisionMission";
import { Footer } from "@/components/site/Footer";
import { AiAssistant } from "@/components/site/AiAssistant";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Remonixa Technology — VAPT, Penetration Testing & Cybersecurity" },
      {
        name: "description",
        content:
          "Remonixa Technology offers expert VAPT, web, network & API penetration testing. OWASP, ISO 27001 & GDPR aligned reports built for developers and CISOs.",
      },
      {
        name: "keywords",
        content:
          "VAPT services, penetration testing company, web application security, API penetration testing, network VAPT, OWASP testing, ISO 27001 audit, GDPR security, ethical hacking India, cybersecurity consulting, Remonixa Technology",
      },
      { property: "og:title", content: "Remonixa Technology — VAPT & Penetration Testing" },
      {
        property: "og:description",
        content:
          "Secure your business before hackers do. Manual + automated VAPT with developer-friendly reports and remediation guidance.",
      },
      { property: "og:image", content: "https://remonixa-technology.lovable.app/remonixa-icon.png" },
      { property: "og:url", content: "https://remonixa-technology.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://remonixa-technology.lovable.app/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <HeroFeatures />
        <Services />
        <WhyChoose />
        <VisionMission />
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
