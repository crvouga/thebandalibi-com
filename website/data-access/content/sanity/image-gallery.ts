import { IContent } from "../interface";
import { ISanityClient } from "./sanity-client";
import { ISanityDateData, ISanityImageData } from "./sanity-client";

export const ImageGalleryContent = (
  sanityClient: ISanityClient
): IContent["imageGallery"] => {
  return {
    async getAll() {
      const query = `
        *[_type == "gallery"] {
          name,
          date,
          "slug": slug.current,
          "thumbnail": thumbnail.asset->{
            url,
            metadata
          },
          "images": images[].asset->{
            url,
            metadata
          },
          "imageCount": count(images),
        }
      `;

      type IData = {
        name: string;
        date: ISanityDateData;
        slug: string;
        thumbnail: ISanityImageData;
        images: ISanityImageData[];
        imageCount: number;
      }[];

      const results = await sanityClient.fetch<IData>(query);

      return results;
    },

    async getOne(slug: string) {
      return (await this.getAll()).find((item) => item.slug === slug) ?? null;
    },

    async getAllRelated(slug: string) {
      return (await this.getAll()).filter((item) => item.slug !== slug) ?? null;
    },
  };
};
