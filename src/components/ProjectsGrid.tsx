import { Rocket, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  pages: string;
  thumb: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

// Import the project images
import helloBotImage from "@/assets/projects/hellobot-1200.webp";
import flexisoftImage from "@/assets/projects/flexisoft-1200.webp";
import excludiaImage from "@/assets/projects/excludia-1200.webp";
import cryptoraHubImage from "@/assets/projects/cryptorahub-1200.webp";

const projectImages = {
  "src/assets/projects/hellobot-1200.webp": helloBotImage,
  "src/assets/projects/flexisoft-1200.webp": flexisoftImage,
  "src/assets/projects/excludia-1200.webp": excludiaImage,
  "src/assets/projects/cryptorahub-1200.webp": cryptoraHubImage,
};

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <section className="mb-18 animate-fade-up animate-delay-300">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
          <Rocket className="w-4 h-4 text-accent" />
        </div>
        <h2 className="font-heading font-semibold text-2xl text-text">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const imageSrc = projectImages[project.thumb as keyof typeof projectImages];
          
          return (
            <div
              key={index}
              className="group bg-card-bg border border-[hsl(var(--border))] rounded-md overflow-hidden hover-lift transition-all duration-300"
            >
              {/* Project Thumbnail */}
              <div className="relative aspect-[16/10] bg-surface overflow-hidden">
                <img
                  src={imageSrc}
                  alt={`${project.title} project thumbnail`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Hover Overlay with Action Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover-scale cursor-pointer">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-text mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-text-muted">
                  <span>{project.category}</span>
                  <span>{project.pages}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};