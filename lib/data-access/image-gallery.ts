import { SanityClient } from "@sanity/client";
import { IImage, ISanityImageData } from "./image";

export type IImageGallery = {
  slug: string;
  name: string;
  images: IImage[];
  imageCount: number;
};

export type IImageGalleryDataStore = {
  getAll: () => Promise<IImageGallery[]>;
  getOne: (slug: string) => Promise<IImageGallery | null>;
  getAllRelated: (slug: string) => Promise<IImageGallery[]>;
};

export const ImageGalleryDataStoreSanity = (
  sanityClient: SanityClient
): IImageGalleryDataStore => {
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
          "imageCount": count(images),
        }
      `;

      type IData = {
        name: string;
        slug: string;
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
