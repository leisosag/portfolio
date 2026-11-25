import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactLinks from '@/components/ui/ContactLinks';
import { Navbar } from '@/components/ui/Navbar';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="portfolio-layout">
        <header className="sidebar">
          <div>
            <h1>Leila Sosa Gonzalez</h1>
            <p className="role">Frontend Engineer</p>
            <p className="intro">
              I build design systems and complex product interfaces with React
              and TypeScript.
            </p>
            <Navbar />
            <ContactLinks />
          </div>
          <ThemeToggle />
        </header>

        <main id="main-content" tabIndex={-1}>
          <WorkSection />
          <ExperienceSection />
          <AboutSection />
        </main>
      </div>
    </>
  );
}
