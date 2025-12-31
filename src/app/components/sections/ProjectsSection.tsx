import * as React from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const ProjectsSection = (): React.JSX.Element => {
  const cards = [
    {
      title: 'developer - empresa',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt luctus ante nec imperdiet.',
      items: ['tecnologia 1', 'tecnologia 2'],
    },
    {
      title: 'developer - empresa',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt luctus ante nec imperdiet.',
      items: ['tecnologia 1', 'tecnologia 2'],
    },
    {
      title: 'developer - empresa',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt luctus ante nec imperdiet.',
      items: ['tecnologia 1', 'tecnologia 2'],
    },
  ];
  return (
    <Section sectionId="projects">
      <div className="max-w-4xl">
        <ol className="group/list">
          {cards.map(({ title, description, items }) => (
            <li className="mb-12">
              <Card
                title={title}
                description={description}
                items={items}
                hasImage
              />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default ProjectsSection;
