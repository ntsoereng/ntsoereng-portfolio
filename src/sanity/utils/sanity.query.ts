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
