import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "Full-Stack Developer",
  "Problem Solver",
  "App Developer",
  "CS Student",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      {/* Animated background shapes */}
      <div className="hero-bg-shapes pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left content */}
        <div className="order-2 md:order-1 space-y-6">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </span>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground font-medium text-lg mb-1">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] text-foreground">
              Probhakar
              <span className="gradient-text block">Saha</span>
            </h1>
          </div>

          <div className="animate-fade-in-up h-8" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              <span className="text-foreground">{displayed}</span>
              <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-blink align-middle" />
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Computer Science student focused on building modern, user-friendly applications with JavaScript and React Native. Creating powerful, user-centric solutions for real-world challenges.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="#projects"
              className="group relative rounded-2xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="rounded-2xl border-2 border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <span className="text-xs text-muted-foreground mr-1">Find me on</span>
            {[
              { icon: Github, href: "https://github.com/probhakarsaha5-droid", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/prabhakar-saha-08", label: "LinkedIn" },
              { icon: Mail, href: "mailto:probhakarsaha81@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Profile image */}
        <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/15 animate-spin-slow" />
            <div className="absolute -inset-12 rounded-full border border-primary/5" />

            {/* Glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 blur-3xl animate-pulse-slow" />

            {/* Image */}
            <img
              src={profileImg}
              alt="Probhakar Saha"
              width={400}
              height={400}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] object-cover shadow-2xl ring-4 ring-card"
            />

            {/* Floating badges */}
            <div className="absolute -bottom-3 -right-3 bg-card rounded-2xl px-4 py-2.5 shadow-card-hover border border-border flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <span className="text-2xl font-extrabold gradient-text">B.Tech</span>
              <span className="text-xs text-muted-foreground leading-tight">CS Student<br />2023–2027</span>
            </div>

            <div className="absolute -top-2 -left-4 bg-card rounded-2xl px-3 py-2 shadow-card-hover border border-border animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-1.5">
                <span className="text-lg">🚀</span>
                <div>
                  <p className="text-xs font-semibold text-foreground">Aspiring</p>
                  <p className="text-[10px] text-muted-foreground">Full-Stack Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
