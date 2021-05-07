import { SanityClient } from "@sanity/client";
import { ITagDataStore } from "../../interface";

export const TagDataStoreSanity = (
  sanityClient: SanityClient
): ITagDataStore => {
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
