import { IPlatformContent } from "./interface";
import { ISanityClient, ISanityPlatformData } from "../frameworks";

export const PlatformContent = (
  sanityClient: ISanityClient
): IPlatformContent => {
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
