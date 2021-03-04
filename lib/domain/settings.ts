import { SanityClient as ISanityClient } from "@sanity/client";
import { urlFor } from "../sanity-client";
import { IHero } from "./hero";
import { ISanityImageData } from "./image";
import { IPlatformLink } from "./platform";
import { IVideo } from "./video";

type IBandSettings = {
  name: string;
  description: string;
  platformLinks: IPlatformLink[];
};

type IWebsiteSettings = {
  image: string;
  icon: string;
  url: string;
  author: string;
  keywords: string[];
};

type ILandingPageSettingd = {
  heros: IHero[];
  videos: IVideo[];
};

export type ISettings = {
  band: IBandSettings;
  website: IWebsiteSettings;
  landingPage: ILandingPageSettingd;
};

export type ISettingsStore = {
  get: () => Promise<ISettings>;
};

export const SettingsDataStoreSanity = (
  sanityClient: ISanityClient
): ISettingsStore => {
  return {
    async get() {
      const query = `
      *[_type == "settings"] {
        band{
          name,
          description,
          platformLinks[]{
            url,
            "platform": platform->{
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

            },
            
          },

        },

        website{
          url,
          author,
          keywords,
          "image": image.asset->url,
          "icon": icon.asset->url,
        },

        landingPage{
          videos[]->{
            name,
            tags[]->{
              name,
              slug,
            },
            url,
          },
          
          heros[]->{
            title,
            subtitle,
            callToAction,
            "mainImage": mainImage.asset->{
              url,
              metadata,
            },
          },

        },
      }
      `;

      type IData = {
        band: {
          name: string;
          description: string;
          platformLinks: {
            url: string;
            platform: {
              name: string;
              url: string;
              icon: ISanityImageData;
              logo: ISanityImageData;
            };
          }[];
        };

        website: {
          url: string;
          author: string;
          keywords: string[];
          icon: string;
          image: string;
        };

        landingPage: {
          videos: {
            name: string;
            url: string;
            tags: {
              name: string;
              slug: string;
            }[];
          }[];

          heros: {
            title: string;
            callToAction: {
              title: string;
              url: string;
            };
            mainImage: ISanityImageData;
          }[];
        };
      }[];

      const [data] = await sanityClient.fetch<IData>(query);

      const settings = {
        ...data,
        landingPage: {
          videos: data.landingPage.videos,
          heros: data.landingPage.heros.map((data) => ({
            ...data,
            mainImage: {
              ...data.mainImage,
              url: urlFor(data.mainImage.url).format("webp").url() ?? "",
            },
          })),
        },
      };

      return settings;
    },
  };
};
