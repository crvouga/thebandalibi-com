import { SanityClient } from "@sanity/client";

export type ITag = {
  name: string;
  slug: string;
  videoCount: number;
};

export type ITagStore = {
  getAll: () => Promise<ITag[]>;
};

export const TagDataStoreSanity = (sanityClient: SanityClient): ITagStore => {
  return {
    async getAll() {
      const query = `
      *[_type == "tag"]{
          name,
          "slug": slug.current,
          "videoCount": count(*[_type == "video" && references(^._id)])
      }
      `;

      type IData = {
        name: string;
        slug: string;
        videoCount: number;
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data;
    },
  };
};
