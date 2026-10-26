import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.Tech in Computer Science", school: "Sister Nivedita University, Kolkata", year: "2023–2027 (Expected)", grade: "" },
  { degree: "Higher Secondary (CBSE)", school: "Kendriya Vidyalaya", year: "2023", grade: "62%" },
  { degree: "Secondary (CBSE)", school: "Kendriya Vidyalaya", year: "2021", grade: "76%" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container mx-auto max-w-4xl">
      <p className="text-primary font-medium text-center mb-2">ABOUT ME</p>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6 text-foreground">
        Designing Solutions, Not Just Visuals
      </h2>
      <p className="text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto">
        I'm a passionate Computer Science student who loves turning ideas into elegant, functional applications. My goal is to continuously grow as a developer and contribute to projects that make a real impact.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {education.map((e) => (
          <div key={e.degree} className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
            <GraduationCap className="text-primary mb-3" size={28} />
            <h3 className="font-heading font-semibold text-foreground mb-1">{e.degree}</h3>
            <p className="text-sm text-muted-foreground">{e.school}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {e.year} {e.grade && `• ${e.grade}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
