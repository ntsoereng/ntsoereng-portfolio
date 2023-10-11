import { getExperience } from '@/sanity/utils/sanity.query';
import Image from 'next/image';

export default async function Experience() {
  const experience = await getExperience();

  return (
    <section className="mt-32 max-w-6xl mx-auto lg:px-16 px-6">
      <div className="mb-16">
        <h2 className="font-semibold text-3xl sm:text-5xl mb-2">
          My Professional Journey
        </h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {experience.map(data => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] dark:before:bg-slate-800 before:bg-slate-300">
            <a
              href={data.url}
              title={data.companyName}
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative">
              <Image
                src={data.logo}
                className="object-cover"
                alt={`${data.companyName} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold">{data.companyName}</h3>
              <p className="text-slate-600 dark:text-slate-300">
                {data.jobTitle}
              </p>
              <small className="text-sm text-slate-400 dark:text-slate-600 mt-2 tracking-widest uppercase">
                {data.startDate.toString()} &mdash;{' '}
                {data.endDate ? data.endDate.toString() : 'PRESENT'}
              </small>
              <p className="text-base my-4">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
