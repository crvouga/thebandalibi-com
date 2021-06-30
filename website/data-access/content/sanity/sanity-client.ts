import DefaultSanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export type ISanityDateData = string;

export type ISanityImageData = {
  url: string;
  metadata: {
    dimensions: {
      aspectRatio: number;
      width: number;
      height: number;
    };
    palette: {
      dominant: {
        background: string;
        foreground: string;
      };
    };
  };
};

export type ISanityVideoData = {
  name: string;
  url: string;
  tags: {
    name: string;
    slug: string;
    videoCount: number;
  }[];
}[];

export type ISanityPlatformData = {
  name: string;
  url: string;
};

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
