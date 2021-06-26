import { IVideoGalleryContent } from "./interface";
import { ISanityClient, ISanityImageData } from "./sanity";

export const VideoGalleryContent = (
  sanityClient: ISanityClient
): IVideoGalleryContent => {
  return {
    async getAll() {
      const query = `
      *[_type == "videoGallery"] {
        name,
        "slug": slug.current,
        "thumbnail": thumbnail.asset->{
          url,
          metadata
        },
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
        thumbnail: ISanityImageData;
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
