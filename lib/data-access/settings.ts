import { SanityClient as ISanityClient } from "@sanity/client";
import { urlFor } from "../sanity/sanity-client";
import { IHero } from "./hero";
import { ISanityImageData } from "./image";
import { IPlatformLink } from "./platform";
import { IVideo } from "./video";

type IBandSettings = {
  name: string;
  description: string;
  platformLinks: IPlatformLink[];
  logo: string;
  contactEmailAddress: string;
};

type IWebsiteSettings = {
  image: string;
  icon: string;
  url: string;
  author: string;
  authorLink: string;
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

export type ISettingsDataStore = {
  get: () => Promise<ISettings>;
};

export const SettingsDataStoreSanity = (
  sanityClient: ISanityClient
): ISettingsDataStore => {
  return {
    async get() {
      const query = `
      *[_id == "settings"] {
        band{
          name,
          description,
          contactEmailAddress,
          "logo": logo.asset->url,
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
          authorLink,
          keywords,
          "image": image.asset->url,
          "icon": icon.asset->url,
          
        },

        landingPage{
          videos[]->{
            name,
            tags[]->{
              name,
              "slug": slug.current,
              "videoCount": count(*[_type == "video" && references(^._id)])
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
            "backgroundImage": backgroundImage.asset->{
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
          contactEmailAddress: string;
          logo: string;
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
          authorLink: string;
        };

        landingPage: {
          videos: {
            name: string;
            url: string;
            tags: {
              name: string;
              slug: string;
              videoCount: number;
            }[];
          }[];

          heros: {
            title: string;
            callToAction: {
              title: string;
              url: string;
            };
            mainImage: ISanityImageData;
            backgroundImage: ISanityImageData;
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
            backgroundImage: {
              ...data.backgroundImage,
              url: urlFor(data.backgroundImage.url).format("webp").url() ?? "",
            },
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
