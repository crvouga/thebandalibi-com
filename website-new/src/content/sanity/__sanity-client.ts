import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = SanityClient({
  projectId: 'mswm483g',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-03-25',
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: string) => {
  return builder.image(source);
};
