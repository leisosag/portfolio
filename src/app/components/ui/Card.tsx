'use client';
import * as React from 'react';
import Image from 'next/image';

interface CardProps {
  hasImage?: boolean;
  title: string;
  description: string;
  items: string[];
}

const Card = ({
  hasImage = false,
  title,
  description,
  items,
}: CardProps): React.JSX.Element => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      {!hasImage && (
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          2000 - 2000
        </header>
      )}
      <div className={`z-10 sm:col-span-6 ${hasImage && 'sm:order-2'}`}>
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-rose-300 focus-visible:text-rose-300  group/link text-base"
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
              <div className="flex items-center rounded-full bg-rose-400/10 px-3 py-1 text-xs font-medium leading-5 text-rose-300 ">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {
        hasImage && <img src="https://placehold.co/200x48" />
        // <Image
        //           src={props.imgData}
        //           alt={props.imgAlt}
        //           fill
        //           style={{
        //           objectFit: 'cover'
        //           }}
        //       />
      }
    </div>
  );
};

export default Card;
