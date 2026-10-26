import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <p className="text-primary font-medium text-center mb-2">EXPERIENCE</p>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
        My Journey So Far
      </h2>

      <div className="bg-card rounded-2xl p-8 shadow-card">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Briefcase className="text-primary" size={22} />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground text-lg">Fresher / Student Developer</h3>
            <p className="text-sm text-primary font-medium mb-3">Currently Pursuing B.Tech</p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                Focused on building user-friendly web and mobile applications
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                Continuously improving development and problem-solving skills
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                Working on real-world projects using modern technologies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
