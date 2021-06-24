import { SanityClient } from "@sanity/client";
import { ITagContent } from "./interface";

export const TagContent = (sanityClient: SanityClient): ITagContent => {
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
