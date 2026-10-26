import { Monitor, Layout, Server, Palette, Database } from "lucide-react";

const services = [
  { icon: Monitor, title: "Web Design", desc: "Creating visually appealing and intuitive web layouts with modern design principles." },
  { icon: Layout, title: "Front-End Development", desc: "Building responsive, interactive interfaces using React, HTML, CSS and JavaScript." },
  { icon: Server, title: "Back-End Development", desc: "Developing server-side logic and APIs to power robust web applications." },
  { icon: Palette, title: "UI/UX Design", desc: "Designing user-centered interfaces that are both beautiful and functional." },
  { icon: Database, title: "Data Entry", desc: "Accurate and efficient data management and entry services." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <p className="text-primary font-medium text-center mb-2">SERVICES</p>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
        Expertise Services! Let's check it out
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        Here are some of the services I offer to help bring your ideas to life.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors mb-4">
              <s.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
