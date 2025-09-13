import { GraduationCap } from "lucide-react";

interface Education {
  title: string;
  institution: string;
  range: string;
  description: string;
}

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section className="mb-18 animate-fade-up animate-delay-300">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
          <GraduationCap className="w-4 h-4 text-accent" />
        </div>
        <h2 className="font-heading font-semibold text-2xl text-text">Education</h2>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-card-bg border border-[hsl(var(--border))] rounded-lg p-6 hover-lift group transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-[hsl(var(--divider))]">
              <div>
                <h3 className="font-heading font-semibold text-lg text-text mb-1">
                  {edu.title}
                </h3>
                <p className="text-text-muted font-medium">
                  {edu.institution}
                </p>
              </div>

              {/* Date Badge */}
              <div className="bg-badge-bg border border-[hsl(var(--border))] rounded-sm px-3 py-2 flex-shrink-0">
                <span className="text-xs font-medium text-text-muted">
                  {edu.range}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-muted leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};