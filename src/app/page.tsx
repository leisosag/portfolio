import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactLinks from '@/components/ui/ContactLinks';
import { Navbar } from '@/components/ui/Navbar';
import ThemeToggle from '@/components/ui/ThemeToggle';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className={`portfolio-layout ${styles.layout}`}>
        <header className="sidebar">
          <div className={styles.sidebarIntro}>
            <h1 className={styles.name}>Leila Sosa Gonzalez</h1>
            <p className="role">Frontend Engineer</p>
            <p className={`intro ${styles.bio}`}>
              5+ years of experience building design systems and complex product
              interfaces with React and TypeScript.
            </p>
            <p className={`intro ${styles.bio}`}>Based in Argentina.</p>
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
