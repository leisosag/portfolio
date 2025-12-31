import * as React from 'react';

interface SectionProps {
  sectionId: string;
  children?: React.ReactNode;
}

const Section = ({ sectionId, children }: SectionProps): React.JSX.Element => {
  return (
    <section
      id={sectionId}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-30 px-6"
    >
      {children}
    </section>
  );
};

export default Section;
