import { IImageGalleryContentDataStore } from "../../interface";
import { ISanityClient, ISanityImageData } from "../frameworks";

export const ImageGalleryContentDataStoreSanity = (
  sanityClient: ISanityClient
): IImageGalleryContentDataStore => {
  return {
    async getAll() {
      const query = `
        *[_type == "gallery"] {
          name,
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
        slug: string;
        thumbnail: ISanityImageData;
        images: ISanityImageData[];
        imageCount: number;
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
