import { SanityClient as ISanityClient } from "@sanity/client";
import { urlFor } from "../sanity-client";
import { IHero } from "./hero";
import { IVideo } from "./video";

export type ILandingPage = {
  heros: IHero[];
  videos: IVideo[];
};

export type ILandingPageStore = {
  getOne: () => Promise<ILandingPage | null>;
};

export const LandingPageStoreSanity = (
  sanityClient: ISanityClient
): ILandingPageStore => {
  return {
    async getOne() {
      const query = `
      *[_type == "page" && id == "landing-page"] {
        "videos": videos[]->{
          name,
          url
        },
        "heros": heros[]->{
          title,
          subtitle,
          callToAction,
          "mainImage": mainImage.asset->url,
          "backgroundVideo": backgroundVideo.asset->url,
        }
      }
      `;

      type IData = {
        videos: {
          name: string;
          url: string;
        }[];

        heros: {
          title: string;
          callToAction: {
            title: string;
            url: string;
          };
          mainImage: string;
        }[];
      }[];

      const data = await sanityClient.fetch<IData>(query);

      const pages = data.map((data) => ({
        videos: data.videos,
        heros: data.heros.map((heroData) => ({
          ...heroData,
          mainImage: urlFor(heroData.mainImage).format("webp").url() ?? "",
        })),
      }));

      return pages[0] ?? null;
    },
  };
};
