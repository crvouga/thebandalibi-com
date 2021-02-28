import { SanityClient } from "@sanity/client";
import { IVideo } from "./video";

export type IVideoGallery = {
  name: string;
  slug: string;
  videos: IVideo[];
};

export type IVideoGalleryStore = {
  getAll: () => Promise<IVideoGallery[]>;
  getOne: (slug: string) => Promise<IVideoGallery | null>;
};

export const VideoGalleryStoreSanity = (
  sanityClient: SanityClient
): IVideoGalleryStore => {
  return {
    async getAll() {
      const query = `
        *[_type == "videoGallery"] {
          name,
          "slug": slug.current,
          "videos": videos[]->{
            name,
            url,
            tags,
          }
        }
      `;

      type IData = {
        name: string;
        slug: string;
        videos: {
          name: string;
          url: string;
          tags: {
            name: string;
            slug: string;
          }[];
        }[];
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data;
    },

    async getOne(slug: string) {
      const videoGalleries = await this.getAll();

      const videoGalleryOrNull =
        videoGalleries.find((videoGallery) => videoGallery.slug === slug) ??
        null;

      return videoGalleryOrNull;
    },
  };
};
