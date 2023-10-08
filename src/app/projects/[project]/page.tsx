import { getSingleProject } from '@/sanity/utils/sanity.query';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// import fallbackImage from '/project/project-cover.png';

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || 'fallback project image',
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getSingleProject(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-6 lg:mt-40 mt-32">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>
          <a
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="dark:bg-[#1d1d20] bg-slate-200 mb-4 border border-transparent hover:border-slate-400 dark:hover:border-slate-600 rounded-md px-4 py-2">
            View Project &rarr;
          </a>
        </div>

        <Image
          src={project.coverImage?.image || '/project/project-cover.png'}
          width={900}
          height={320}
          alt={project.coverImage?.alt || project.name}
          className="rounded-xl border border-slate-300 dark:border-slate-400"
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7">
          <PortableText value={project.description} />
        </div>
        <div className="mt-20 flex items-center justify-start">
          <Link
            href="/projects"
            className="text-sm font-semibold rounded-md px-4 py-2 hover:bg-firstColor dark:hover:bg-firstColor duration-300 bg-slate-500 dark:bg-slate-600 text-slate-100">
            &larr; &nbsp; Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
