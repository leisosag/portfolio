import * as React from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const ProjectsSection = (): React.JSX.Element => {
  const cards = [
    {
      title: 'Sinergia',
      description:
        'Espacio de coworking multidiciplinario enfocado a carreras de diseño.',
      items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: { src: '/images/sinergia.png', alt: 'Sinergia' },
    },
    {
      title: 'Pokedex',
      description: 'Buscador de pokemons desarrollado en React',
      items: ['JavaScript', 'React', 'Bootstrap', 'PokeAPI'],
      image: { src: '/images/pokedex.png', alt: 'Pokedex' },
    },
    {
      title: 'MovieDB',
      description:
        'Buscador de peliculas en VueJs. Listados por género, populares y similares.',
      items: ['JavaScript', 'Vue', 'Bootstrap', 'The MovieDB API'],
      image: { src: '/images/moviedb.png', alt: 'MovieDB' },
    },
    {
      title: 'Bityuya',
      description: 'Cotizador de criptomonedas (en desarrollo)',
      items: ['JavaScript', 'React', 'Bootstrap', 'CryptoCompare API'],
      image: { src: '/images/bityuya.png', alt: 'Bityuya' },
    },
  ];
  return (
    <Section sectionId="projects">
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

export default ProjectsSection;
