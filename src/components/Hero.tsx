import { Hand } from "lucide-react";

interface HeroData {
  titleLines: string[];
  about: string;
}

interface HeroProps {
  profile: HeroData;
}

export const Hero = ({ profile }: HeroProps) => {
  return (
    <section className="mb-18 animate-fade-up animate-delay-200">
      {/* Greeting */}
      <div className="flex items-center gap-2 mb-8">
        <Hand className="text-accent w-5 h-5" />
        <span className="text-sm text-text-muted font-medium">Say Hello</span>
      </div>

      {/* Hero Heading */}
      <div className="mb-8">
        <h1 className="font-heading font-light text-hero-xl lg:text-hero-xl md:text-hero-lg text-hero-md text-text-heading leading-tight">
          {profile.titleLines[0]}
          <br />
          <span className="font-semibold text-accent tracking-wide">
            {profile.titleLines[1]}
          </span>
          <br />
          <span className="text-location-xl lg:text-location-xl md:text-location-lg text-location-md font-normal">
            {profile.titleLines[2]}
          </span>
        </h1>
      </div>

      {/* About Paragraph */}
      <div className="max-w-2xl">
        <p className="text-base md:text-base text-sm text-text-muted leading-relaxed">
          {profile.about}
        </p>
      </div>
    </section>
  );
};