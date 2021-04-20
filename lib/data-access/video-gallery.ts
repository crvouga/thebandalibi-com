import { SanityClient } from "@sanity/client";
import { IVideo } from "./video";

export type IVideoGallery = {
  name: string;
  slug: string;
  videos: IVideo[];
  videoCount: number;
};

export type IVideoGalleryDataStore = {
  getAll: () => Promise<IVideoGallery[]>;
  getOne: (slug: string) => Promise<IVideoGallery | null>;
  getAllRelated: (slug: string) => Promise<IVideoGallery[]>;
};

export const VideoGalleryDataStoreSanity = (
  sanityClient: SanityClient
): IVideoGalleryDataStore => {
  return {
    async getAll() {
      const query = `
      *[_type == "videoGallery"] {
        name,
        "slug": slug.current,
        videos[]->{
          name,
          url,
          tags[]->{
            name,
            "slug": slug.current,
            "videoCount": count(*[_type == "video" && references(^._id)])
          },
        },
        "videoCount": count(videos)
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
            videoCount: number;
          }[];
        }[];
        videoCount: number;
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data;
    },

    async getOne(slug: string) {
      return (await this.getAll()).find((item) => item.slug === slug) ?? null;
    },

    async getAllRelated(slug: string) {
      return (await this.getAll()).filter((item) => item.slug !== slug) ?? null;
    },
  };
};
