import { usePortfolioData } from '../hooks/usePortfolioData';
import ProfileCard from '../components/ProfileCard';
import Hero from '../components/Hero';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ToolsSection from '../components/ToolsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-accent" />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">
            {data?.errorMessages?.loadingTitle || 'Error loading portfolio data'}
          </h1>
          <p className="text-muted-foreground">
            {error || data?.errorMessages?.unknownError || 'Unknown error occurred'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <div className="portfolio-container lg:flex lg:gap-8 p-4 lg:p-8 max-w-7xl mx-auto">
        <aside className="lg:sticky lg:top-8 lg:h-fit">
          <ProfileCard profile={data.profile} />
        </aside>
        
        <main className="flex-1 space-y-16 mt-8 lg:mt-0">
          <Hero profile={data.profile} />
          <ExperienceSection 
            experience={data.experience} 
            sectionTitle={data.sectionTitles.experience} 
          />
          <ProjectsSection 
            projects={data.projects} 
            sectionTitle={data.sectionTitles.projects} 
          />
          <EducationSection 
            education={data.education} 
            sectionTitle={data.sectionTitles.education} 
          />
          <ToolsSection 
            skills={data.skills} 
            sectionTitle={data.sectionTitles.skills}
            skillCategoryIcons={data.skillCategoryIcons}
          />
          <ContactSection 
            social={data.social.contact} 
            sectionTitle={data.sectionTitles.contact} 
            contactForm={data.contactForm}
            socialPlatforms={data.socialPlatforms}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}
