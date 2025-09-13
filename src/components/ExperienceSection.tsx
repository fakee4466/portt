import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  range: string;
  logo: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section className="mb-18 animate-fade-up animate-delay-300">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
          <Briefcase className="w-4 h-4 text-accent" />
        </div>
        <h2 className="font-heading font-semibold text-2xl text-text">Experience</h2>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-card-bg border border-[hsl(var(--border))] rounded-lg p-6 hover-lift group transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-[hsl(var(--divider))]">
              <div className="flex items-start gap-4">
                {/* Company Logo Placeholder */}
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-accent/20 rounded" />
                </div>
                
                {/* Title & Company */}
                <div>
                  <h3 className="font-heading font-semibold text-lg text-text mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-text-muted font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Date Badge */}
              <div className="bg-badge-bg border border-[hsl(var(--border))] rounded-sm px-3 py-2 flex-shrink-0">
                <span className="text-xs font-medium text-text-muted">
                  {exp.range}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-muted leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};