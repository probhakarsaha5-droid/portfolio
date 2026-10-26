import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_93mn91h";
const EMAILJS_TEMPLATE_ID = "template_3u1tj8c";
const EMAILJS_PUBLIC_KEY = "zXoS-yzmKftW2vb7c";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, EMAILJS_PUBLIC_KEY);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary font-medium text-center mb-2">CONTACT</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, project discussions, or just to say hello!
            </p>
            {[
              { icon: Mail, label: "probhakarsaha81@gmail.com", href: "mailto:probhakarsaha81@gmail.com" },
              { icon: Phone, label: "9064136935", href: "tel:9064136935" },
              { icon: MapPin, label: "Action Area 1, Kolkata – 700102", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <c.icon className="text-primary" size={18} />
                </div>
                <span className="text-sm text-foreground">{c.label}</span>
              </a>
            ))}

            <div className="flex gap-3 pt-4">
              <a
                href="https://www.linkedin.com/in/prabhakar-saha-08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/probhakarsaha5-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 shadow-card space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Your Email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {sending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
