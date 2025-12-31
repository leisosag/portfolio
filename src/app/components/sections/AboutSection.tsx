import * as React from 'react';
import Section from '@/components/ui/Section';

const AboutSection = (): React.JSX.Element => {
  return (
    <Section sectionId="about">
      <div className="max-w-4xl py-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200">
          Hi, I'm Leila
        </h1>

        <p className="mt-4 leading-normal">
          I'm a frontend developer with 5+ years of experience, focused on //
          building clean, structured, and maintainable interfaces.
        </p>

        <p className="mt-4 leading-normal">
          I care deeply about clarity — in code, design, and collaboration.
        </p>

        <p className="mt-1 leading-normal">
          I enjoy working on products where details matter.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
