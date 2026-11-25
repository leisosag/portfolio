'use client';

import { useEffect, useState } from 'react';
import { SECTIONS } from '@/constants/navigation';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const sections = SECTIONS.map(({ id }) => document.getElementById(id));

    function updateActiveSection() {
      const readingLine = window.innerHeight * 0.25;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const maxScroll = scrollHeight - clientHeight;
      const anchor = sections.find((section) => section && `#${section.id}` === location.hash);

      if (anchor) {
        const margin = parseFloat(getComputedStyle(anchor).scrollMarginTop);
        const anchorTop = anchor.getBoundingClientRect().top + scrollTop - margin;
        const destination = Math.max(0, Math.min(maxScroll, anchorTop));
        if (Math.abs(scrollTop - destination) <= 2) {
          setActiveSection(anchor.id);
          return;
        }
      }

      const current = sections.findLast(
        (section) => section && section.getBoundingClientRect().top <= readingLine
      );

      const atBottom = scrollTop > 0 && scrollTop >= maxScroll - 2;
      const active = atBottom ? sections.at(-1) : current;
      setActiveSection(active?.id ?? SECTIONS[0].id);
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('hashchange', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  return (
    <nav className="section-nav" aria-label="Portfolio sections">
      <ul>
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={activeSection === id ? 'location' : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
