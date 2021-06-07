import { IVideoDataStore } from "../../interface";
import { ISanityClient, ISanityVideoData } from "../frameworks";

export const VideoDataStoreSanity = (
  sanityClient: ISanityClient
): IVideoDataStore => {
  return {
    async getAll() {
      const query = `
      *[_type == "video"]{
        name,
        url,
        tags[]->{
          name,
          "slug": slug.current,
          "videoCount": count(*[_type == "video" && references(^._id)])
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
            "videoCount": count(*[_type == "video" && references(^._id)]),
          },
        }
      `;

      const data = await sanityClient.fetch<ISanityVideoData>(query);

      return data;
    },
  };
};
