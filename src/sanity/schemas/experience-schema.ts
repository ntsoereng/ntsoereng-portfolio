import { BiBriefcase } from 'react-icons/bi';

const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: BiBriefcase,
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'What is the name of the company at which you worked?',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'Enter the job title, e.g. Software Developer',
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
    },
    {
      name: 'url',
      title: 'Company Website',
      type: 'url',
      initialValue: 'https://',
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 3,
      description: 'Write a brief description about this role',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
  ],
};

export default experience;
