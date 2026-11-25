import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const links = [
  { label: 'Email', href: 'mailto:leilasosag@gmail.com', icon: faEnvelope },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leila-sosa-gonzalez/',
    icon: faLinkedin,
  },
  { label: 'GitHub', href: 'https://github.com/leisosag', icon: faGithub },
];

export default function ContactLinks() {
  return (
    <nav className="contact-links" aria-label="Contact links">
      {links.map(({ label, href, icon }) => (
        <a key={label} href={href} aria-label={label} title={label}>
          <FontAwesomeIcon icon={icon} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
