import {
  ISanityClient,
  ISanityDateData,
  ISanityImageData,
} from "../frameworks";
import { IImageGallery, IImageGalleryContent } from "./interface";

export const ImageGalleryContent = (
  sanityClient: ISanityClient
): IImageGalleryContent => {
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

      const imageGalleries: IImageGallery[] = results.map((result) => ({
        ...result,
        date: new Date(result.date),
      }));

      return imageGalleries;
    },

    async getOne(slug: string) {
      return (await this.getAll()).find((item) => item.slug === slug) ?? null;
    },

    async getAllRelated(slug: string) {
      return (await this.getAll()).filter((item) => item.slug !== slug) ?? null;
    },
  };
};
