import type { ReactNode } from 'react';

interface SectionProps {
  sectionId: string;
  title: string;
  children: ReactNode;
}

export default function Section({ sectionId, title, children }: SectionProps) {
  const headingId = `${sectionId}-heading`;

  return (
    <section className="content-section" id={sectionId} aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      {children}
    </section>
  );
}
