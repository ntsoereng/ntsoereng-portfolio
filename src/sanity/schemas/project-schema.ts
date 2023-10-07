// import {BiPackage} from "react-icons/bi"
import { defineField } from 'sanity';

const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  description: 'Project Schema',
  // icon: BiPackage,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the project',
    },
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: rule => rule.max(60).required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Add a custom slug for the URL or generate one from the name',
      options: { source: 'name' },
      validation: rule => rule.required(),
    }),
    {
      name: 'projectLogo',
      title: 'Project Logo',
      type: 'image',
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Provide a project URL for where this project is hosted',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Upload a cover image for this project',
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
      name: 'description',
      title: 'Project Description',
      type: 'array',
      description: 'Write a full description about this project',
      of: [{ type: 'block' }],
    },
  ],
};

export default project;
