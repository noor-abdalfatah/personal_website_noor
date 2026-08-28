import { useState } from "react";
import { Download, Github, Instagram, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionPill } from "./Reveal";

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/placeholder" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/placeholder" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/000000000" },
  { label: "GitHub", icon: Github, href: "https://github.com/placeholder" },
  { label: "Email", icon: Mail, href: "mailto:hello@example.com" },
];

const fieldClass =
  "w-full rounded-2xl border border-input bg-card/60 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 outline-none focus:border-accent focus:glow-ring";

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      event.currentTarget?.reset?.();
      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll reply as soon as I can.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionPill>Contact Me</SectionPill>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Let&apos;s build something <span className="gradient-text">beautiful</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to internships, freelance work, and collaborations. Reach out through any
            channel below.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                title={social.label}
                className="glass-panel grid h-14 w-14 place-items-center rounded-2xl text-primary transition-all duration-300 hover:glow-ring hover:-translate-y-1 hover:scale-105"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <a
            href="/noor-abdalfatah-cv.pdf"
            download
            className="gradient-pill mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-lux transition-transform duration-300 hover:scale-105"
          >
            <Download size={16} />
            Download CV
          </a>
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="glass-panel space-y-4 rounded-3xl p-6 text-left shadow-lux md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="gradient-pill inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
