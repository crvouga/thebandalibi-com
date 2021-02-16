import SanityClient from "@sanity/client";
import sanityJson from "../studio/sanity.json";
import { ICMS } from "./contracts";
import { socialMediaNameToSocialMediaImagePath } from "./social-media";

export const SanityCMS = (): ICMS => {
  const sanityClient = SanityClient({
    projectId: sanityJson.api.projectId,
    dataset: sanityJson.api.dataset,
    useCdn: false,
  });

  return {
    async getShowcases() {
      const query = `
        *[_type == "showcase"] {
          title,
          action,
          "image": image.asset->url,
        }`;

      type IData = {
        title: string;
        image: string;
        action: {
          title: string;
          url: string;
        };
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data.map((data) => ({
        title: data.title,
        image: data.image,
        action: {
          title: data.action.title,
          url: data.action.url,
        },
      }));
    },

    async getVideos() {
      const query = `
        *[_type == "video"] {
          name,
          url,
        }`;

      type IData = {
        name: string;
        url: string;
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data;
    },

    async getSocialMedia() {
      const query = `
      *[_type == "socialMedia"] {
        name,
        url
      }`;

      type IData = {
        name: string;
        url: string;
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data.map((data) => ({
        ...data,
        image: socialMediaNameToSocialMediaImagePath(data.name),
      }));
    },
  };
};
