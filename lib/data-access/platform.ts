import { SanityClient } from "@sanity/client";

export type IPlatform = {
  name: string;
};

export type IPlatformLink = {
  platform: IPlatform;
  url: string;
};

export type IPlatformDataStore = {
  getAll: () => Promise<IPlatform[]>;
};

export type ISanityPlatformData = {
  name: string;
  url: string;
};

export const PlatformDataStoreSanity = (
  sanityClient: SanityClient
): IPlatformDataStore => {
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
