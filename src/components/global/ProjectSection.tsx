import { getProjects } from '@/sanity/utils/sanity.query';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    <section className="max-w-6xl mx-auto lg:px-16 px-6 lg:mt-40 mt-32">
      <section className="max-w-3xl mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base leading-relaxed">
          I have worked on tons of good projects over the years, and these are
          some of the ones that I&apos;m most proud of. Some of these are open
          source, so if you see something that triggers your interest, check out
          the source code and contribute if you have ideas for improvement :)
        </p>
      </section>
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map(project => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="shadow flex items-center gap-x-4 dark:bg-[#1d1d20] bg-slate-100 border border-transparent dark:hover:border-slate-700 hover:border-slate-400 p-4 rounded-lg ease-in-out duration-300">
            <Image
              src={project.projectLogo}
              width={60}
              height={60}
              alt={project.name}
              className="dark:bg-slate-800 bg-slate-200 rounded-md"
            />
            <div>
              <h2 className="font-semibold mb-1">{project.name}</h2>
              <div className="text-sm">{project.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
}
