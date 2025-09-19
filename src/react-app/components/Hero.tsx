import { Hand } from 'lucide-react';
import { PortfolioData } from '../../shared/types';
import TypingAnimation from './TypingAnimation';
import { useScrollReveal } from '../hooks/useAnimations';

interface HeroProps {
  profile: PortfolioData['profile'];
}

interface StatsRowProps {
  stats: { value: string; label: string; }[];
}

const StatsRow = ({ stats }: StatsRowProps) => {
  return (
    <div className="stats-row">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const Hero = ({ profile }: HeroProps) => {
  const heroRef = useScrollReveal();

  // Mock stats - in real app these would come from data
  const stats = [
    { value: "30+", label: "Completed Projects" },
    { value: "8+", label: "Years of Experience" },
    { value: "36+", label: "Happy Clients" },
    { value: "10+", label: "Awards Received" }
  ];

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-greeting">
          <Hand size={20} className="wave-icon" />
          <span>{profile.greeting}</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">{`I'm ${profile.name},`}</span>
          <span className="title-line title-accent">
            <TypingAnimation
              words={profile.typingWords}
            />
          </span>
          <span className="title-line">{profile.passionStatement}</span>
        </h1>

        <p className="hero-description">{profile.about}</p>
        
        <StatsRow stats={stats} />
      </div>
    </section>
  );
};

export default Hero;
