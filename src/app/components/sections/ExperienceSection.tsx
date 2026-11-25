import Section from '@/components/ui/Section';

const roles = [
  {
    company: 'Jemer',
    role: 'Software Engineer',
    dates: 'May 2022 – Present',
    description:
      'Build and maintain frontend features across financial, workforce, logistics, and banking products.',
  },
  {
    company: 'Smart Safety',
    role: 'Frontend Developer',
    dates: 'Oct 2021 – May 2022',
    description:
      'Built dashboards and data visualizations for an audit platform in the food production industry.',
  },
  {
    company: 'Bigbox',
    role: 'Frontend Developer',
    dates: 'Apr 2021 – Oct 2021',
    description: 'Developed frontend features for an e-commerce platform using Vue.',
  },
];

export default function ExperienceSection() {
  return (
    <Section sectionId="experience" title="Experience">
      <ol className="experience-list">
        {roles.map(({ company, role, dates, description }) => (
          <li className="experience-entry" key={company}>
            <p className="experience-date">{dates}</p>
            <div>
              <h3>{company} <span>· {role}</span></h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
