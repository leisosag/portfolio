import Section from '@/components/ui/Section';

export default function AboutSection() {
  return (
    <Section sectionId="about" title="About">
      <div className="about-copy">
        <p>
          I’m a frontend engineer with over five years of professional
          experience, specializing in React and TypeScript. I’ve built and
          maintained web applications in finance, banking, and logistics, and
          have also worked with Vue and Angular.
        </p>
        <p>
          I’ve built applications from scratch and evolved existing products.
          My work has included making frontend architecture decisions, working
          with microfrontends, and helping teams use shared design systems
          through reusable components, technical documentation, and migration
          guides.
        </p>
        <p>
          I collaborate directly with UX designers, backend developers, and
          business users to understand requirements and shape solutions. I’ve
          coordinated frontend work, supported other developers, and worked
          with international teams in English (C1).
        </p>
        <p>
          I hold a degree in Architecture from the University of Buenos Aires.
          That background influences how I think about visual hierarchy and how
          components fit together. I care about making interfaces clear to use
          and the code behind them easy to maintain.
        </p>
      </div>
    </Section>
  );
}
