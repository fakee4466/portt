import profileImage from "@/assets/profile-600.webp";

export const Footer = () => {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-8 mt-18">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent/20 rounded" />
          <span>Built in Framer</span>
        </div>

        {/* Center */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[hsl(var(--border))]">
            <img 
              src={profileImage}
              alt="John Anderson signature"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium">John Anderson</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <span>Created by</span>
          <span className="text-accent font-medium">FramerGeeks</span>
        </div>
      </div>
    </footer>
  );
};