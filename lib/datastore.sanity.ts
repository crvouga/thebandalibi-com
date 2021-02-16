import SanityClient from "@sanity/client";
import sanityJson from "../studio/sanity.json";
import { IDataStore } from "./contracts";

export const SanityDataStore = (): IDataStore => {
  const sanityClient = SanityClient({
    projectId: sanityJson.api.projectId,
    dataset: sanityJson.api.dataset,
    useCdn: false,
  });

  return {
    async getShowcase() {
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

      return {
        title: data[0].title,
        image: data[0].image,
        action: {
          title: data[0].action.title,
          url: data[0].action.url,
        },
      };
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
  };
};
