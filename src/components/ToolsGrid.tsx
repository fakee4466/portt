import { Wrench } from "lucide-react";

interface Tool {
  name: string;
  desc: string;
  icon: string;
}

interface ToolsGridProps {
  tools: Tool[];
}

export const ToolsGrid = ({ tools }: ToolsGridProps) => {
  return (
    <section className="mb-18 animate-fade-up animate-delay-300">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
          <Wrench className="w-4 h-4 text-accent" />
        </div>
        <h2 className="font-heading font-semibold text-2xl text-text">Stakes</h2>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-card-bg border border-[hsl(var(--border))] rounded-lg p-4 hover-lift group transition-all duration-300 flex items-center gap-4"
          >
            {/* Tool Icon */}
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 bg-accent/30 rounded" />
            </div>

            {/* Tool Info */}
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-base text-text mb-1">
                {tool.name}
              </h3>
              <p className="text-sm text-text-muted">
                {tool.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};