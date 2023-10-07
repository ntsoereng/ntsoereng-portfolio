import { groq } from 'next-sanity';
import client from '../config/sanity.client';
import { ProfileType } from '@/types';

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

