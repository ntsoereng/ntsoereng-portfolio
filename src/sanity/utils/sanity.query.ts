import { groq } from 'next-sanity';
import client from '../config/sanity.client';
import { ExperienceType, PageType, ProfileType, ProjectType } from '@/types';

export async function getProfile(): Promise<ProfileType[]> {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

export async function getPages(): Promise<PageType[]> {
  return client.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
}

export async function getExperience(): Promise<ExperienceType[]> {
  return client.fetch(
    groq`*[_type == "experience"]{
      _id,
      companyName,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate
    }`
  );
}

export async function getProjects(): Promise<ProjectType[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "projectLogo": projectLogo.asset->url,
    }`
  );
}

export async function getSingleProject(slug: string): Promise<ProjectType> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage {alt, "image":asset->url},
      tagline,
      description
    }`,
    { slug }
  );
}
