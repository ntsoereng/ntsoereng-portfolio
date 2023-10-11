import { PortableText } from '@portabletext/react';
import { getProfile } from '@/sanity/utils/sanity.query';
import { BiEnvelope } from 'react-icons/bi';
import Image from 'next/image';

export const revalidate = 3600;

export default async function About() {
  const profile = await getProfile();

  return (
    <main className="lg:max-w-6xl mx-auto max-w-3xl md:px-16 px-6 lg:mt-32 mt-28">
      {profile &&
        profile.map(data => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                  I&apos;m {data.fullName} and I live in {data.location}, from
                  where I work my keyboard magic!
                </h1>

                <div className="flex flex-col gap-y-3 leading-relaxed">
                  <PortableText value={data.fullBio} />
                </div>
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-slate-200 dark:bg-[#1d1d20]"
                    src={data.profileImage.image}
                    alt={data.profileImage.alt}
                    quality={100}
                    width={400}
                    height={400}
                  />
                </div>
                <ul>
                  <li>
                    <a
                      href={`mailto:${data.email}`}
                      title={`Send an email to ${data.email}`}
                      className="flex items-center gap-x-2 hover:text-firstColor duration-300">
                      <BiEnvelope className="text-lg" /> {data.email}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="font-semibold text-3xl mb-4">My Expertise</h2>
              <p className="max-w-lg">
                Over the years I have accumulated some skills in the software
                engineering discipline. Here are some of them, in no particular
                order
              </p>
              <ul className="flex flex-wrap items-center gap-3 mt-8">
                {data.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="dark:bg-[#1d1d20] bg-slate-200 border border-transparent hover:border-slate-400 dark:hover:border-slate-600 rounded-md px-2 py-1">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
    </main>
  );
}
