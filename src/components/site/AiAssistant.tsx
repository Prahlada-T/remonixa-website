import { useEffect, useRef, useState, type ReactNode } from "react";
import { MessageCircle, X, Send, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EMAILJS_SERVICE_ID = "service_d0ng3rj";
const EMAILJS_PUBLIC_KEY = "tHxbSlXGKCFiE0EnK";
const EMAILJS_ADMIN_TEMPLATE_ID = "template_dfhpwn7";

type Msg = {
  id: string;
  role: "bot" | "user";
  content: string;
  quickReplies?: string[];
  expertForm?: boolean;
};

const WELCOME: Msg = {
  id: "welcome",
  role: "bot",
  content:
    "Hi, I'm your Remonixa AI Security Assistant 👋\n\nI'm here to help you with cybersecurity, VAPT services, and any questions you have. Feel free to ask anything — I'll guide you step by step.",
  quickReplies: ["Get VAPT Info", "Pricing Details", "Download Sample Report", "Talk to Expert"],
};

function generateReply(input: string): { content: string; quickReplies?: string[] } {
  const t = input.toLowerCase().trim();

  // Sample report
  if (/(sample|download|report|pdf)/.test(t)) {
    return {
      content:
        "Of course! You can download our sample VAPT report instantly — no signup required.\n\n👉 Click here: [Download Sample Report](/Remonixa_VAPT_Sample_Report.pdf)\n\nWould you like a quick walkthrough of what's inside?",
      quickReplies: ["What's inside the report?", "Talk to Expert"],
    };
  }

  // Pricing
  if (/(price|pricing|cost|quote|budget|how much)/.test(t)) {
    return {
      content:
        "Great question! Our VAPT pricing depends on scope and complexity. Here's a quick overview:\n\n• **Starter** — Small web apps & APIs\n• **Business** — Multi-app + network testing\n• **Enterprise** — Full-stack, compliance-ready\n\nWould you like a tailored quote for your project?",
      quickReplies: ["Get a Custom Quote", "Talk to Expert"],
    };
  }

  // VAPT info / services
  if (/(vapt|pentest|penetration|service|what do you|offer)/.test(t)) {
    return {
      content:
        "Got it! Here's what we offer at Remonixa:\n\n• **Web Application VAPT** — OWASP Top 10 + business logic\n• **API Security Testing** — REST, GraphQL, auth flaws\n• **Network Penetration Testing** — Internal & external\n• **Mobile App VAPT** — Android & iOS\n\nWhich one are you most interested in?",
      quickReplies: ["Web App VAPT", "API Security", "Network Pentest", "Pricing Details"],
    };
  }

  if (/(web|website|webapp)/.test(t)) {
    return {
      content:
        "For **Web Application VAPT**, we combine manual testing with automated scans to find:\n\n• Injection flaws (SQLi, XSS)\n• Broken authentication\n• Business logic vulnerabilities\n• Misconfigurations\n\nYou'll get a detailed report with remediation steps. Want to see a sample?",
      quickReplies: ["Download Sample Report", "Talk to Expert"],
    };
  }

  if (/(api|graphql|rest)/.test(t)) {
    return {
      content:
        "Our **API Security Testing** covers:\n\n• Authentication & token security\n• Authorization (BOLA / IDOR)\n• Rate limiting & input validation\n• OWASP API Top 10\n\nWould you like more details or a sample report?",
      quickReplies: ["Download Sample Report", "Pricing Details"],
    };
  }

  if (/(network|firewall|infrastructure|server)/.test(t)) {
    return {
      content:
        "Our **Network Penetration Testing** identifies:\n\n• Open ports & misconfigured services\n• Weak credentials & privilege escalation\n• Lateral movement risks\n• Patch & firmware gaps\n\nWant a tailored scope for your environment?",
      quickReplies: ["Talk to Expert", "Pricing Details"],
    };
  }

  if (/(process|how|step|methodology|work)/.test(t)) {
    return {
      content:
        "Here's how we work — simple and transparent:\n\n1. **Scoping** — We understand your environment\n2. **Testing** — Manual + automated VAPT\n3. **Reporting** — Detailed findings + remediation\n4. **Re-test** — Validate the fixes\n\nWould you like to start with a free consultation?",
      quickReplies: ["Talk to Expert", "Download Sample Report"],
    };
  }

  if (/(compliance|iso|gdpr|pci|hipaa|standard)/.test(t)) {
    return {
      content:
        "We align with industry standards including **OWASP, ISO 27001, GDPR, and PCI-DSS**. Our reports are designed to support your audits and compliance requirements.\n\nWant to discuss your specific compliance needs?",
      quickReplies: ["Talk to Expert"],
    };
  }

  if (/(hi|hello|hey|good (morning|evening|afternoon))/.test(t)) {
    return {
      content: "Hello! 👋 Glad you're here. How can I help you today?",
      quickReplies: ["Get VAPT Info", "Pricing Details", "Download Sample Report"],
    };
  }

  if (/(thank|thanks|appreciate)/.test(t)) {
    return {
      content: "You're very welcome! 😊 Is there anything else I can help you with?",
      quickReplies: ["Talk to Expert", "Pricing Details"],
    };
  }

  return {
    content:
      "Got it, I understand what you're looking for. Let me help you with that. Could you tell me a bit more — are you interested in our services, pricing, or speaking to an expert?",
    quickReplies: ["Get VAPT Info", "Pricing Details", "Talk to Expert"],
  };
}

function renderContent(text: string) {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1] && match[2]) {
      parts.push(
        <a
          key={key++}
          href={match[2]}
          download={match[2].endsWith(".pdf") ? true : undefined}
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          {match[1]}
        </a>,
      );
    } else if (match[3]) {
      parts.push(
        <strong key={key++} className="font-semibold text-foreground">
          {match[3]}
        </strong>,
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

const EXPERT_PROMPT =
  "I'd be happy to connect you with our security expert. Could you please share your name and email?";

const EXPERT_SUCCESS =
  "Thank you for reaching out to Remonixa Technology.\n\nYour request has been successfully received and shared with our security team.\n\nOne of our experts will review your requirements and get in touch with you within 24 to 48 hours.\n\nIf your request is urgent, you can reply directly to our email for faster assistance.\n\nWe appreciate your interest in our services.";

function ExpertForm({
  onSubmit,
  submitting,
  submitted,
}: {
  onSubmit: (name: string, email: string) => void;
  submitting: boolean;
  submitted: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (submitted) return null;

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    const n = name.trim();
    const em = email.trim();
    if (!n) return setError("Please enter your name.");
    if (!/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(em)) return setError("Please enter a valid email.");
    setError("");
    onSubmit(n, em);
  };

  return (
    <form onSubmit={handle} className="mt-3 space-y-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        maxLength={100}
        disabled={submitting}
        className="w-full bg-background/80 border border-border/60 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/60 placeholder:text-muted-foreground disabled:opacity-60"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        maxLength={255}
        disabled={submitting}
        className="w-full bg-background/80 border border-border/60 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/60 placeholder:text-muted-foreground disabled:opacity-60"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
      <Button
        type="submit"
        disabled={submitting}
        className="w-full h-9 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending…
          </>
        ) : (
          "Connect with Expert"
        )}
      </Button>
      <p className="text-[11px] text-muted-foreground text-center">
        🔒 Your information is safe and confidential.
      </p>
    </form>
  );
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [leadPrompted, setLeadPrompted] = useState(false);
  const [expertSubmitting, setExpertSubmitting] = useState(false);
  const [expertSubmitted, setExpertSubmitted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open, expertSubmitting]);

  const userMsgCount = messages.filter((m) => m.role === "user").length;

  const triggerExpertFlow = () => {
    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), role: "user", content: "Talk to Expert" },
    ]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "bot",
          content: EXPERT_PROMPT,
          expertForm: true,
        },
      ]);
      setTyping(false);
    }, 600);
  };

  const submitExpert = async (name: string, email: string) => {
    if (expertSubmitting || expertSubmitted) return;
    setExpertSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        {
          name,
          email,
          company: "—",
          website: "—",
          message: "Lead from AI Security Assistant — user requested to talk to an expert.",
          source: "Website AI Chatbot",
          to_email: "remonixanotify@gmail.com",
          reply_to: email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setExpertSubmitted(true);
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "user",
          content: `${name} • ${email}`,
        },
        {
          id: crypto.randomUUID(),
          role: "bot",
          content: EXPERT_SUCCESS,
          quickReplies: ["Download Sample Report", "Pricing Details"],
        },
      ]);
    } catch (err) {
      console.error("Expert lead send failed:", err);
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "bot",
          content:
            "Sorry, we couldn't send your request right now. Please try again, or email us directly at remonixanotify@gmail.com.",
        },
      ]);
    } finally {
      setExpertSubmitting(false);
    }
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", content: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = generateReply(trimmed);
      const botMsg: Msg = {
        id: crypto.randomUUID(),
        role: "bot",
        content: reply.content,
        quickReplies: reply.quickReplies,
      };
      setMessages((m) => [...m, botMsg]);
      setTyping(false);

      if (!leadPrompted && userMsgCount + 1 >= 2 && !/expert|contact|consult|talk/i.test(trimmed)) {
        setTimeout(() => {
          setMessages((m) => [
            ...m,
            {
              id: crypto.randomUUID(),
              role: "bot",
              content:
                "Would you like our team to assist you further? I can arrange a quick consultation.",
              quickReplies: ["Talk to Expert", "Maybe later"],
            },
          ]);
          setLeadPrompted(true);
        }, 900);
      }
    }, 600 + Math.random() * 400);
  };

  const handleQuickReply = (q: string) => {
    if (q === "Download Sample Report") {
      const a = document.createElement("a");
      a.href = "/Remonixa_VAPT_Sample_Report.pdf";
      a.download = "Remonixa_VAPT_Sample_Report.pdf";
      a.click();
      send("Download Sample Report");
      return;
    }
    if (q === "Talk to Expert" || q === "Yes, contact me") {
      triggerExpertFlow();
      return;
    }
    send(q);
  };

  return (
    <>
      <button
        aria-label="Open AI Security Assistant"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_-4px_var(--primary)] hover:scale-105 transition-transform flex items-center justify-center",
          open && "rotate-90",
        )}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[560px] max-h-[calc(100vh-8rem)] rounded-2xl border border-primary/20 bg-background/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="relative h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-success border-2 border-background" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-sm flex items-center gap-1.5">
              Remonixa AI Security Assistant
              <Sparkles className="h-3 w-3 text-primary" />
            </div>
            <div className="text-[11px] text-muted-foreground">Online • Replies instantly</div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.map((m) => (
            <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-wrap leading-relaxed",
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted/60 text-foreground rounded-bl-sm border border-border/40",
                )}
              >
                {renderContent(m.content)}
                {m.role === "bot" && m.expertForm && (
                  <ExpertForm
                    onSubmit={submitExpert}
                    submitting={expertSubmitting}
                    submitted={expertSubmitted}
                  />
                )}
                {m.role === "bot" && m.quickReplies && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {m.quickReplies.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleQuickReply(q)}
                        className="text-xs px-2.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-muted/60 border border-border/40 rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="border-t border-border/50 p-3 flex items-center gap-2 bg-background/80"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about security…"
            className="flex-1 bg-muted/40 border border-border/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/60 placeholder:text-muted-foreground"
          />
          <Button
            type="submit"
            size="icon"
            className="rounded-full h-9 w-9 bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </>
  );
}
