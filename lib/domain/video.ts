import { SanityClient } from "@sanity/client";
import { ITag } from "./tag";

export type IVideo = {
  name: string;
  tags: ITag[];
  url: string;
};

export type IVideoStore = {
  getAll: () => Promise<IVideo[]>;
  getAllByTagSlug: (tagSlug: string) => Promise<IVideo[]>;
};

type ISanityVideoData = {
  name: string;
  url: string;
  tags: {
    name: string;
    slug: string;
  }[];
}[];

export const VideoStoreSanity = (sanityClient: SanityClient): IVideoStore => {
  return {
    async getAll() {
      const query = `
      *[_type == "video"]{
        name,
        url,
        tags[]->{
          name,
          "slug": slug.current,
        },
      }
      `;

      const data = await sanityClient.fetch<ISanityVideoData>(query);

      return data;
    },

    async getAllByTagSlug(tagSlug: string) {
      const query = `
        *[
          _type == "video" && 
          "${tagSlug}" in tags[]->slug.current
        ]{
          name,
          url,
          tags[]->{
            name,
            "slug": slug.current,
          },
        }
      `;

      const data = await sanityClient.fetch<ISanityVideoData>(query);

      return data;
    },
  };
};
