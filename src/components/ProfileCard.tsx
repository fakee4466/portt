import { Download, Mail, Instagram, Twitter, Youtube, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-600.webp";

interface ProfileData {
  name: string;
  status: string;
  photo: string;
  social: Array<{
    name: string;
    url: string;
    aria: string;
  }>;
  cvUrl: string;
}

interface ProfileCardProps {
  profile: ProfileData;
}

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  dribbble: Dribbble,
  behance: Dribbble, // Using Dribbble icon as fallback for Behance
};

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <aside className="w-profile min-w-profile max-w-profile sticky top-10 animate-fade-up">
      <div className="bg-card-bg border border-[hsl(var(--border))] rounded-2xl p-5 shadow-card backdrop-blur-sm">
        {/* Profile Image */}
        <div className="relative mb-5">
          <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-b from-white/5 to-black/10">
            <img 
              src={profileImage}
              alt={`Portrait of ${profile.name}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-badge-bg border border-[hsl(var(--border))] rounded-sm px-3 py-2 mb-4">
          <div className="w-2 h-2 bg-accent-dot rounded-full animate-pulse" />
          <span className="text-sm text-text">{profile.status}</span>
        </div>

        {/* Name */}
        <h2 className="font-heading font-bold text-profile-name text-text-heading mb-6">
          {profile.name}
        </h2>

        {/* Social Links */}
        <div className="flex gap-3 mb-8">
          {profile.social.map((social, index) => {
            const IconComponent = socialIcons[social.name as keyof typeof socialIcons];
            return (
              <a
                key={index}
                href={social.url}
                aria-label={social.aria}
                className="w-10 h-10 bg-pill-bg border border-[hsl(var(--border))] rounded-lg flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/5 transition-all duration-300 hover-scale"
              >
                <IconComponent size={18} />
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1 bg-pill-bg border-[hsl(var(--border))] text-text hover:bg-surface hover:text-text"
          >
            <Download size={16} className="mr-2" />
            Download CV
          </Button>
          <Button 
            className="flex-1 bg-accent hover:bg-accent/90 text-black font-medium"
          >
            <Mail size={16} className="mr-2" />
            Contact Me
          </Button>
        </div>
      </div>
    </aside>
  );
};