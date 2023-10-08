import Experience from '@/components/global/Experience';
import HeroSvg from '@/components/global/HeroSvg';
import ProjectSection from '@/components/global/ProjectSection';
import { getProfile, getProjects } from '@/sanity/utils/sanity.query';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const profile = await getProfile();
  const projects = await getProjects();

  return (
    <main>
      <section className="max-w-6xl mx-auto lg:px-16 px-6">
        <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-44 mt-32 mb-12">
          {profile &&
            profile.map(data => (
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.headline}
                </h1>
                <p className="text-base leading-relaxed">{data.shortBio}</p>
                <ul className="flex items-center gap-x-4 my-10">
                  {Object.entries(data.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <a
                          href={value}
                          rel="noreferer noopener"
                          className="font-semibold flex items-center gap-x-3 rounded mb-5 px-2 py-1 hover:bg-firstColor hover:text-white duration-300">
                          {key[0].toLocaleUpperCase() +
                            key.toLocaleLowerCase().slice(1)}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          <HeroSvg />
        </section>
      </section>
      <Experience />
      <ProjectSection />
    </main>
  );
}
