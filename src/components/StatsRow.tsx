import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsRowProps {
  stats: Stat[];
}

export const StatsRow = ({ stats }: StatsRowProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="mb-18 animate-fade-up animate-delay-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center"
            style={{
              animationDelay: isVisible ? `${index * 0.1}s` : '0s'
            }}
          >
            <div className="font-heading font-semibold text-stats lg:text-stats md:text-stats-sm text-xl text-text mb-1">
              {isVisible ? stat.value : '0'}
            </div>
            <div className="text-sm text-text-muted font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};