import Section from '@/components/ui/Section';

const projects = [
  {
    title: 'Design System & Investment Funds Platform',
    summary:
      'I evolved a shared React component library and built interfaces for an investment funds platform.',
    technologies: [
      'React',
      'TypeScript',
      'Storybook',
      'TanStack Table',
      'TanStack Query',
      'Tailwind CSS',
      'Radix UI',
      'Zustand',
      'Pendo',
    ],
    details: [
      {
        title: 'Design system ownership',
        description:
          'I was responsible for the evolution and maintenance of a shared React component library that grew to 71 reusable components and was adopted across multiple projects. I collaborated directly with UX to refine existing components and build new ones.',
      },
      {
        title: 'Documentation & adoption',
        description:
          'I documented components in Storybook, wrote migration guides, and supported developers integrating the library into their applications.',
      },
      {
        title: 'Investment platform',
        description:
          'I built module interfaces from scratch, including advanced data tables with dynamic filters, sorting, pagination, column reordering, and visibility settings.',
      },
      {
        title: 'Product analytics',
        description:
          'I integrated Pendo tracking to capture user interactions across the platform and its data tables.',
      },
    ],
  },
  {
    title: 'Workforce Management Platform',
    summary:
      'I extended a React app for a US client, working across the frontend and its AWS integrations.',
    technologies: [
      'React',
      'TypeScript',
      'AWS Amplify Gen 2',
      'Lambda',
      'DynamoDB',
      'S3',
    ],
    details: [
      {
        title: 'Application development',
        description:
          'I maintained and extended an existing React application for workforce management, contributing new features and resolving issues across the frontend and its cloud integrations.',
      },
      {
        title: 'AWS & serverless integrations',
        description:
          'I worked with AWS Amplify Gen 2, DynamoDB, and S3, developed Lambda functions for email notifications and scheduled tasks, and implemented PDF generation.',
      },
      {
        title: 'International collaboration',
        description:
          'I participated in regular planning and progress meetings conducted entirely in English, collaborating with the development team on requirements and implementation.',
      },
    ],
  },
  {
    title: 'Real-time Logistics Platform',
    summary:
      'I owned the frontend architecture and built a web app for managing deliveries and tracking vehicles.',
    technologies: [
      'Angular',
      'TypeScript',
      'Ionic',
      'RxJS',
      'Google Maps API',
      'WebSockets',
    ],
    details: [
      {
        title: 'Frontend architecture',
        description:
          'As the sole frontend developer, I defined the technology stack, application structure, and frontend architecture, building the platform from scratch in collaboration with a backend developer.',
      },
      {
        title: 'Role-based workflows',
        description:
          'I developed dedicated interfaces for administrators, drivers, and customers, supporting order management, delivery workflows, and shipment tracking through a mobile-first web experience.',
      },
      {
        title: 'Real-time vehicle tracking',
        description:
          'I integrated Google Maps with WebSocket updates to display live vehicle locations and enable customers to track their deliveries in real time.',
      },
    ],
  },
  {
    title: 'Banking Onboarding & Compliance',
    summary:
      'I helped bring an email-based compliance process into a banking onboarding platform.',
    technologies: [
      'Vue 2',
      'JavaScript',
      'Vuex',
      'Bootstrap',
      'Microfrontends',
    ],
    details: [
      {
        title: 'Business process digitalization',
        description:
          'I helped transform a previously manual, email-based compliance process into an integrated digital workflow within an existing banking onboarding platform.',
      },
      {
        title: 'Requirements & collaboration',
        description:
          'I worked directly with compliance users, UX designers, and backend developers to understand requirements, evaluate technical feasibility, and implement document review, section-level comments, and notifications.',
      },
      {
        title: 'Microfrontend architecture',
        description:
          'I worked within a microfrontend architecture with independent repositories and deployments, supported by a shared component library.',
      },
      {
        title: 'Frontend ownership',
        description:
          'I took responsibility for frontend development, coordinated another developer, and participated in production deployments and maintenance activities.',
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
                  {technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
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
