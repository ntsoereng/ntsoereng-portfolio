import { defineField } from 'sanity';
import { BiUser } from 'react-icons/bi';

const profile = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon: BiUser,
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'In one short sentence, what do you do?',
      validation: rule => rule.required().max(50),
    }),
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'Upload a profile picture',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 4,
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'fullBio',
      title: 'Full Bio',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'resumeURL',
      title: 'Upload Resume',
      type: 'file',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      description: 'Add your social media links here',
      fields: [
        {
          name: 'github',
          title: 'Github URL',
          type: 'url',
          initialValue: 'https://github.com/',
        },
        {
          name: 'x',
          title: 'X (Twitter) URL',
          type: 'url',
          initialValue: 'https://x.com/',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
          initialValue: 'https://linkedin.com/in/',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
          initialValue: 'https://instagram.com/',
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      descriptions: 'Add a list of skills',
      of: [{ type: 'string' }],
    },
  ],
};

export default profile;
