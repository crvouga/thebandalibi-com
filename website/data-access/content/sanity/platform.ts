import { IContent } from "../interface";
import { ISanityClient, ISanityPlatformData } from "./sanity-client";

export const PlatformContent = (
  sanityClient: ISanityClient
): IContent["platform"] => {
  return {
    async getAll() {
      const query = `
      *[_type == "platform"] {
        name,
        url,
        "appIconUrl": appIcon.asset->url,	
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
