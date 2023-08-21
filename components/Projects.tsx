import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/Data';
import Image from 'next/image';

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="bh-gray-100 max-w-[42] border border-black/5 overflow-hidden sm:pr-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li
            className="bg-black/0.7 px-3 py-1 text-[0.7] uppercase tracking-wider text-white rounded-full"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
      <Image src={imageUrl} alt="Project i work on" quality={95} />{' '}
    </section>
  );
}
