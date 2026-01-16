'use client';
import * as React from 'react';
import { NavItem } from './NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const SECTIONS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

const ICONS = [
  { href: 'https://github.com/leisosag', icon: faGithub },
  {
    href: 'https://www.linkedin.com/in/leila-sosa-gonzalez/',
    icon: faLinkedin,
  },
  { href: 'mailto:leilasosag@gmail.com', icon: faEnvelope },
];

type NavProps = { isDesktop?: boolean };

export const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState('about');
  const [isOpen, setIsOpen] = React.useState(false);

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

  const Nav: React.FC<NavProps> = ({ isDesktop = false }) => (
    <nav
      className={
        isDesktop
          ? 'hidden lg:flex items-center justify-between pt-8 bg-[#121012]/90 backdrop-blur'
          : ''
      }
    >
      {isDesktop && (
        <h1 className="text-lg font-bold tracking-wide text-slate-200 mb-5">
          LSG
        </h1>
      )}
      <ul
        className={
          isDesktop
            ? 'flex gap-10 uppercase tracking-widest text-slate-400'
            : 'pb-3 uppercase tracking-widest text-slate-300'
        }
      >
        {SECTIONS.map((s) => (
          <NavItem
            key={s.href}
            href={s.href}
            label={s.label}
            active={activeSection === s.href.replace('#', '')}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </ul>
      <ul
        className={
          isDesktop
            ? 'flex items-center text-xs text-slate-400 gap-2'
            : 'flex flex-col border-t-1 pt-8 flex text-xs text-slate-400 pl-[10px]'
        }
      >
        {ICONS.map((i, idx) => (
          <li key={idx} className="mb-5">
            <a href={i.href} target="_blank" className="hover:text-burgundy">
              <FontAwesomeIcon size={isDesktop ? '2x' : 'lg'} icon={i.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 bg-[#121012] backdrop-blur flex items-center justify-between px-6 py-4 lg:hidden">
        <span className="text-sm font-bold tracking-wide text-slate-200">
          LSG
        </span>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="text-slate-200 z-50"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[58px] right-0 z-30 bg-[#121012] px-6 py-6 w-full h-full backdrop-blur lg:hidden">
          <Nav />
        </div>
      )}

      {/* Desktop Navbar */}
      <Nav isDesktop />
    </>
  );
};
