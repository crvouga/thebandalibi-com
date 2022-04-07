import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = SanityClient({
  projectId: 'mswm483g',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-03-25',
});

export const createUrlFor = () => {
  const builder = imageUrlBuilder(sanityClient);

  return (source: string) => {
    return builder.image(source);
  };
};
