import HeroSvg from '@/components/global/HeroSvg';
import { getProfile } from '@/sanity/utils/sanity.query';

export default async function Home() {
  const profile = await getProfile();

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-44 mt-32 mb-16">
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
    </main>
  );
}
