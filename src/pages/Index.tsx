import { ProfileCard } from "@/components/ProfileCard";
import { Hero } from "@/components/Hero";
import { StatsRow } from "@/components/StatsRow";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { EducationSection } from "@/components/EducationSection";
import { ToolsGrid } from "@/components/ToolsGrid";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import portfolioData from "@/data.json";

const Index = () => {
  return (
    <div className="min-h-screen bg-bg">
      {/* Two-column layout container */}
      <div className="lg:flex lg:gap-12 xl:gap-16">
        {/* Left Column - Profile Card (Sticky) */}
        <div className="lg:w-profile lg:flex-shrink-0 lg:pl-8 xl:pl-12 lg:py-10">
          <div className="lg:block hidden">
            <ProfileCard profile={portfolioData.profile} />
          </div>
          
          {/* Mobile Profile Card - Top of page */}
          <div className="lg:hidden mb-12 px-6 pt-8">
            <div className="max-w-sm mx-auto">
              <ProfileCard profile={portfolioData.profile} />
            </div>
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="flex-1 lg:pr-8 xl:pr-12 lg:py-10">
          <main className="max-w-content px-6 lg:px-0">
            <Hero profile={portfolioData.profile} />
            <StatsRow stats={portfolioData.stats} />
            <ExperienceSection experiences={portfolioData.experience} />
            <ProjectsGrid projects={portfolioData.projects} />
            <EducationSection education={portfolioData.education} />
            <ToolsGrid tools={portfolioData.tools} />
            <ContactSection contact={portfolioData.contact} />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
