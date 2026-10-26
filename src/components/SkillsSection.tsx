import { Code2, FileCode, Cpu, Smartphone, Brain, Palette, Lightbulb } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code2 },
  { name: "HTML & CSS", icon: FileCode },
  { name: "C++ & Python", icon: Cpu },
  { name: "App Development", icon: Smartphone },
  { name: "DSA", icon: Brain },
  { name: "UI/UX Basics", icon: Palette },
  { name: "Problem Solving", icon: Lightbulb },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-card">
    <div className="container mx-auto max-w-4xl">
      <p className="text-primary font-medium text-center mb-2">SKILLS</p>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
        Technologies & Abilities
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="group bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <p className="font-medium text-foreground text-sm">{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
