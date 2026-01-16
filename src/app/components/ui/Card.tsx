'use client';
import * as React from 'react';
import Image from 'next/image';

type CardImage = {
  src: string;
  alt: string;
};

interface CardProps {
  title: string;
  description: string;
  time?: string;
  items: string[];
  image?: CardImage;
}

const Card = ({
  title,
  description,
  time,
  items,
  image,
}: CardProps): React.JSX.Element => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {/* lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#1E1A1D]/50"></div>
      {time && (
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          {time}
        </header>
      )}
      <div className={`z-10 sm:col-span-6 ${image && 'sm:order-2'}`}>
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-burgundy/90 focus-visible:text-burgundy/90 group/link text-base"
              href="https://tailwindcss.com/docs/colors"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{title}</span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        <ul className="mt-2 flex flex-wrap">
          {items.map((item) => (
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-lg bg-burgundy/15 px-3 py-1 text-xs font-medium leading-5 text-burgundy/90">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {image && (
        <div className="relative z-10 h-[125px] w-[188px] overflow-hidden rounded-md sm:col-span-2 mt-4">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
