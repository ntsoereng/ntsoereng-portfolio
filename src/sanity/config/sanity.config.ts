import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from '@/sanity/schemas';

export default defineConfig({
  name: 'cletus-ntsoereng-site',
  title: 'Sanity for Cletus Portfolio',

  projectId: '4ntu53yq',
  dataset: 'production',

  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
