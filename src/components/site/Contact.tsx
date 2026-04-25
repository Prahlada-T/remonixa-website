import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const EMAILJS_SERVICE_ID = "service_d0ng3rj";
const EMAILJS_PUBLIC_KEY = "tHxbSlXGKCFiE0EnK";
const EMAILJS_ADMIN_TEMPLATE_ID = "template_dfhpwn7";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_7up5tjh";
const RATE_LIMIT_KEY = "remonixa_contact_submissions";
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

const sanitize = (v: string) => v.replace(/[<>]/g, "");

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

function getRecentSubmissions(): number[] {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw) as number[];
    const cutoff = Date.now() - RATE_LIMIT_WINDOW_MS;
    return Array.isArray(arr) ? arr.filter((t) => typeof t === "number" && t > cutoff) : [];
  } catch {
    return [];
  }
}

function recordSubmission() {
  const recent = getRecentSubmissions();
  recent.push(Date.now());
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
}

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — bots tend to fill every field. Silently block.
    if ((formData.get("website") as string)?.trim()) {
      toast.success("Request sent successfully. We will contact you within 24 hours.");
      form.reset();
      return;
    }

    const raw = Object.fromEntries(formData);
    const data = {
      name: sanitize(String(raw.name ?? "")),
      email: sanitize(String(raw.email ?? "")),
      company: sanitize(String(raw.company ?? "")),
      message: sanitize(String(raw.message ?? "")),
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    const recent = getRecentSubmissions();
    if (recent.length >= RATE_LIMIT_MAX) {
      toast.error("Too many attempts. Please try again later.");
      return;
    }

    const { name, email, company, message } = result.data;
    const templateParams = {
      name,
      email,
      company: company || "—",
      message,
      to_email: "remonixanotify@gmail.com",
      reply_to: email,
    };

    setSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      recordSubmission();
      toast.success("Request sent successfully. We will contact you within 24 hours.");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24">
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
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Acme Inc." maxLength={100} className="bg-background/50 border-border/60" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your scope: web apps, APIs, network size, timeline, compliance needs..."
              rows={5}
              maxLength={1000}
              required
              className="bg-background/50 border-border/60 resize-none"
            />
          </div>

          {/* Honeypot — hidden from real users */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />

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
