import { getProjects } from '@/sanity/utils/sanity.query';

export default async function Project() {
  const projects = await getProjects();

  return (
    <main className="max-w-6xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base leading-relaxed"></p>
      </section>
    </main>
  );
}
