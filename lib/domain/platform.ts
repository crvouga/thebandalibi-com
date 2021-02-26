import { SanityClient } from "@sanity/client";

import { ISanityImageData, IImage } from "./image";

export type IPlatform = {
  name: string;
  url: string;
  icon: IImage;
  logo: IImage;
};

export type IPlatformLink = {
  platform: IPlatform;
  url: string;
};

export type IPlatformStore = {
  getAll: () => Promise<IPlatform[]>;
};

export type ISanityPlatformData = {
  name: string;
  url: string;
  icon: ISanityImageData;
  logo: ISanityImageData;
};

export const PlatformStoreSanity = (
  sanityClient: SanityClient
): IPlatformStore => {
  return {
    async getAll() {
      const query = `
      *[_type == "platform"] {
        name,
        url,
        "icon": icon.asset->{
          url,
          metadata,
        },	
        "logo": logo.asset->{
          url,
          metadata,
        },	
      }`;

      type IData = ISanityPlatformData[];

      const data = await sanityClient.fetch<IData>(query);

      const socialMedia = data.map((data) => ({
        ...data,
      }));

      return socialMedia;
    },
  };
};
