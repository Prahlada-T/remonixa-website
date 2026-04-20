import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(2000),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Request received. We'll be in touch within 24 hours.");
      form.reset();
      setSubmitting(false);
    }, 800);
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">/ contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let's secure <span className="text-gradient-primary">your stack</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell us about your environment. We'll respond within 24 hours with next steps and a custom quote.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, label: "remonixanotify@gmail.com" },
              { icon: Phone, label: "+91 63050 19607" },
              { icon: MapPin, label: "Remote · Global engagements" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg glass flex items-center justify-center">
                  <c.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground/90">{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" placeholder="Jane Doe" maxLength={100} required className="bg-background/50 border-border/60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" placeholder="jane@company.com" maxLength={255} required className="bg-background/50 border-border/60" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" placeholder="Acme Inc." maxLength={100} className="bg-background/50 border-border/60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" name="website" placeholder="https://acme.com" maxLength={255} className="bg-background/50 border-border/60" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your scope: web apps, APIs, network size, timeline, compliance needs..."
              rows={5}
              maxLength={2000}
              required
              className="bg-background/50 border-border/60 resize-none"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_-6px_var(--primary)] h-12"
          >
            {submitting ? "Sending..." : (
              <>
                Send Request <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            🔒 Your information is encrypted and never shared. We respond within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}
