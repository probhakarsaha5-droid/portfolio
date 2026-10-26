import { ExternalLink, Github, Leaf } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-card">
    <div className="container mx-auto max-w-4xl">
      <p className="text-primary font-medium text-center mb-2">PORTFOLIO</p>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
        Digital Product Showcases
      </h2>

      <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
            <Leaf className="text-green-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-foreground text-lg">Plant Disease Detection System</h3>
            <span className="inline-block mt-1 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              Ongoing
            </span>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Developing an application to identify plant diseases using image processing and machine learning, aimed at helping farmers take timely and effective actions.
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/probhakarsaha5-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-xl bg-muted px-4 py-2 text-sm font-medium text-muted-foreground cursor-not-allowed"
          >
            <ExternalLink size={16} /> Live Demo (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
