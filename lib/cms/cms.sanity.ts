import SanityClient from "@sanity/client";
import sanityJson from "../../studio/sanity.json";
import { ICMS } from "../contracts";
import { socialMediaNameToImagePath } from "../social-media";

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
        "image": image.asset->url
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
          _id,
          name,
          url,
        }`;

      type IData = {
        _id: string;
        name: string;
        url: string;
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data.map(({ _id, ...data }) => ({
        ...data,
        id: _id,
      }));
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

      const socialMedia = data.map((data) => ({
        ...data,
        image: socialMediaNameToImagePath(data.name),
      }));

      return socialMedia;
    },

    async getGalleries() {
      const query = ` 
      *[_type == "gallery"] {
        _id,
        name,
        "images": images[].asset->url
      }`;

      type IData = {
        _id: string;
        name: string;
        images: string[];
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data.map(({ _id, ...data }) => ({
        ...data,
        id: _id,
      }));
    },
  };
};
