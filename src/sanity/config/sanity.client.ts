import { createClient, ClientConfig } from 'next-sanity';

const config: ClientConfig = {
  projectId: '4ntu53yq',
  dataset: 'production',
  apiVersion: '2023-10-07',
  useCdn: false,
};

const client = createClient(config);

export default client;
