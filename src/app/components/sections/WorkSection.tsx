import Section from '@/components/ui/Section';

const projects = [
  {
    title: 'Design System & Investment Funds Platform',
    summary:
      'I evolved a shared React component library and built interfaces for an investment funds platform.',
    technologies: ['React', 'TypeScript', 'Storybook', 'TanStack Table'],
    details: [
      {
        title: 'Component library',
        description:
          'I worked with UX to refactor existing components and build new ones, documented their usage in Storybook, and wrote migration guides to help other developers adopt updates.',
      },
      {
        title: 'Investment platform',
        description:
          'I built interfaces for the platform from scratch and used TanStack Table to support dynamic filters, sorting, pagination, and configurable columns.',
      },
    ],
  },
  {
    title: 'Workforce Management Platform',
    summary:
      'I extended a React app for a US client, working across the frontend and its AWS integrations.',
    technologies: ['React', 'TypeScript', 'AWS Amplify', 'AWS Lambda'],
    details: [
      {
        title: 'AWS integrations',
        description:
          'I built Lambda functions for email and scheduled tasks and implemented PDF generation.',
      },
      {
        title: 'Client collaboration',
        description:
          'I took part in planning and progress meetings conducted entirely in English.',
      },
    ],
  },
  {
    title: 'Real-time Logistics Platform',
    summary:
      'I owned the frontend architecture and built a web app for managing deliveries and tracking vehicles.',
    technologies: ['Angular', 'Ionic', 'Google Maps API', 'WebSockets'],
    details: [
      {
        title: 'Role-based workflows',
        description:
          'As the sole frontend developer, I built interfaces from scratch for administrators, drivers, and customers. I implemented a mobile-first web experience with dedicated desktop views for administrators.',
      },
      {
        title: 'Live vehicle tracking',
        description:
          'I integrated Google Maps with WebSocket updates so users could track vehicles in real time.',
      },
    ],
  },
  {
    title: 'Banking Onboarding & Compliance',
    summary:
      'I helped bring an email-based compliance process into a banking onboarding platform.',
    technologies: ['Vue 2', 'Microfrontends'],
    details: [
      {
        title: 'Document review',
        description:
          'I worked with business users, UX, and backend developers to bring PDF review, section comments, and notifications into the platform.',
      },
      {
        title: 'Microfrontend delivery',
        description:
          'I was responsible for the frontend and coordinated one developer in a microfrontend setup with a shared component library and independent deployments.',
      },
    ],
  },
];

export default function WorkSection() {
  return (
    <Section sectionId="work" title="Selected Work">
      <ul className="work-list">
        {projects.map(({ title, summary, technologies, details }) => (
          <li key={title}>
            <article className="project-card">
              <div>
                <h3>{title}</h3>
                <p className="project-summary">{summary}</p>
                <ul className="technology-list" aria-label="Technologies">
                  {technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <details className="project-details">
                <summary aria-label={`Case study details for ${title}`}>
                  <span className="case-toggle-icon" aria-hidden="true" />
                  Case study details
                </summary>
                <div className="case-details-copy">
                  {details.map(({ title, description }) => (
                    <div key={title}>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  ))}
                </div>
              </details>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
