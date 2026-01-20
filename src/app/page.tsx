'use client';
import * as React from 'react';
import { useNavigationStore } from './stores/navigationStore';
import { SECTIONS } from './constants/navigation';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function Home() {
  const { setActive } = useNavigationStore();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    SECTIONS.forEach((s) => {
      const section = document.getElementById(s.label.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}
