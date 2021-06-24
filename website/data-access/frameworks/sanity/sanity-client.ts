import DefaultSanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const SanityClient = () => {
  return DefaultSanityClient({
    projectId: "mswm483g",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-03-25",
  });
};

export type ISanityClient = ReturnType<typeof SanityClient>;

export const createUrlFor = (sanityClient: ISanityClient) => {
  const builder = imageUrlBuilder(sanityClient);

  return (source: string) => {
    return builder.image(source);
  };
};
