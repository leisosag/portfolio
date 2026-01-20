'use client';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SECTIONS } from '@/constants/navigation';

const SOCIAL_LINKS = [
  { href: 'https://github.com/leisosag', icon: faGithub, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/leila-sosa-gonzalez/',
    icon: faLinkedin,
    label: 'LinkedIn',
  },
  { href: 'mailto:leilasosag@gmail.com', icon: faEnvelope, label: 'Email' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState('about');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Glass Effect - Desktop & Mobile */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-main/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-lg font-bold tracking-wide text-text-secondary">
            LSG
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {SECTIONS.map((section) => (
              <li key={section.href}>
                <a
                  href={section.href}
                  className={`flex items-center gap-2 text-sm uppercase font-semibold tracking-widest transition-colors hover:text-accent-primary ${
                    activeSection === section.href.replace('#', '')
                      ? 'text-accent-primary'
                      : 'text-text-secondary'
                  }`}
                >
                  <span
                    className={`h-1 w-1 rounded-full transition-all ${
                      activeSection === section.href.replace('#', '')
                        ? 'w-8 bg-accent-primary'
                        : 'bg-text-secondary'
                    }`}
                  />
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <ul className="hidden lg:flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden text-text-secondary text-xl"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-bg-main/95 backdrop-blur-2xl pt-20 px-6">
            {/* Mobile Navigation */}
            <ul className="space-y-6 mb-12">
              {SECTIONS.map((section) => (
                <li key={section.href}>
                  <a
                    href={section.href}
                    onClick={handleNavClick}
                    className={`flex items-center gap-3 text-sm font-semibold tracking-widest transition-colors ${
                      activeSection === section.href.replace('#', '')
                        ? 'text-accent-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    <span
                      className={`h-1 w-1 rounded-full transition-all ${
                        activeSection === section.href.replace('#', '')
                          ? 'w-8 bg-accent-primary'
                          : 'bg-text-secondary'
                      }`}
                    />
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Social Icons */}
            <div className="border-t border-slate-800 pt-8">
              <ul className="space-y-6">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      <FontAwesomeIcon icon={link.icon} className="w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
