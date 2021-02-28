import { SanityClient } from "@sanity/client";

export type ITag = {
  name: string;
  slug: string;
};

export type ITagStore = {
  getAll: () => Promise<ITag[]>;
};

export const TagStoreSanity = (sanityClient: SanityClient): ITagStore => {
  return {
    async getAll() {
      const query = `
      *[_type == "tag"]{
        name,
        "slug": slug.current
      }
      `;

      type IData = {
        name: string;
        slug: string;
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data;
    },
  };
};
