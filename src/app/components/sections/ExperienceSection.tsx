import * as React from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const ExperienceSection = (): React.JSX.Element => {
  const cards = [
    {
      title: 'Software Engineer • Jemer',
      description:
        'Build and maintain frontend features for web and mobile applications focused on operational management and real-time tracking. Collaborate closely with cross-functional teams, including designers, backend developers, and product stakeholders, to deliver scalable, user-focused solutions. Integrate external APIs and enhance critical user flows, including onboarding processes in regulated environments.',
      time: 'may 2022 - current',
      items: ['React', 'Angular', 'Vue', 'Ionic', 'Tailwind'],
    },
    {
      title: 'Frontend Developer • Smart Safety',
      description:
        'Build and maintain a mobile application to digitize audit processes and data collection workflows. Design and implement a statistics dashboard to support data analysis and improve quality control and operational monitoring.',
      time: 'oct 2021 – may 2022',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
    },
    {
      title: 'Frontend Developer • Bigbox',
      description:
        'Contribute to frontend development for an e-commerce platform, collaborating on backend integration under the guidance of a senior developer. Focus on building user-facing features while learning to work collaboratively within a development team.',
      time: 'apr – oct 2021',
      items: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Bootstrap'],
    },
  ];
  return (
    <Section sectionId="experience">
      <div className="max-w-4xl">
        <ol className="group/list">
          {cards.map((card) => (
            <li className="mb-12">
              <Card {...card} />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default ExperienceSection;
