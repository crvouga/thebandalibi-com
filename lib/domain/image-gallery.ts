import { SanityClient } from "@sanity/client";
import { IImage, ISanityImageData } from "./image";

export type IImageGallery = {
  slug: string;
  name: string;
  images: IImage[];
};

export type IImageGalleryStore = {
  getAll: () => Promise<IImageGallery[]>;
  getOne: (slug: string) => Promise<IImageGallery | null>;
};

export const ImageGalleryStoreSanity = (
  sanityClient: SanityClient
): IImageGalleryStore => {
  return {
    async getAll() {
      const query = `
        *[_type == "gallery"] {
          name,
          "slug": slug.current,
          "images": images[].asset->{
            url,
            metadata
          },
        }
      `;

      type IData = {
        name: string;
        slug: string;
        images: ISanityImageData[];
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data;
    },

    async getOne(slug: string) {
      return (await this.getAll()).find((item) => item.slug === slug) ?? null;
    },
  };
};
