import { IContent, ISettings } from "../interface";
import { createUrlFor, ISanityClient, ISanityImageData } from "./sanity-client";

export const SettingsContent = (
  sanityClient: ISanityClient
): IContent["settings"] => {
  const urlFor = createUrlFor(sanityClient);

  return {
    async get() {
      const query = `
      *[_id == "settings"] {
        commerceManagementDashboardUrl,
        contentManagementDashboardUrl,

        band{
          name,
          description,
          "electronicPressKit": electronicPressKit.asset->{
            url,
            metadata
          },
          contactEmailAddress,
          "logo": logo.asset->{
            url,
            metadata
          },
          "icon": icon.asset->{
            url,
            metadata
          },
          platformLinks[]{
            url,
            "platform": platform->{
              name,
              "appIconUrl": appIcon.asset->url,
            },
            
          },

        },

        website{
          url,
          author,
          authorUrl,
          keywords,
          "image": image.asset->url,
          "icon": icon.asset->url,
          
        },

        landingPage {
          videoGalleries[]->{
            name,
            "slug": slug.current,
            "thumbnail": thumbnail.asset->{
              url,
              metadata
            },
            videos[]->{
              name,
              url,
              tags[]->{
                name,
                "slug": slug.current,
                "videoCount": count(*[_type == "video" && references(^._id)])
              },
            },
            "videoCount": count(videos),
          },

          videos[]->{
            name,
            url,
            tags[]->{
              name,
              "slug": slug.current,
              "videoCount": count(*[_type == "video" && references(^._id)])
            },
          },

          imageGalleries[]->{
            name,
            date,
            "slug": slug.current,
            "thumbnail": thumbnail.asset->{
              url,
              metadata
            },
            "images": images[].asset->{
              url,
              metadata
            },
            "imageCount": count(images),
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
        contentManagementDashboardUrl: string;
        commerceManagementDashboardUrl: string;
        band: {
          name: string;
          description: string;
          electronicPressKit: ISanityImageData;
          contactEmailAddress: string;
          logo: ISanityImageData;
          icon: ISanityImageData;
          platformLinks: {
            url: string;
            platform: {
              name: string;
              appIconUrl: string;
            };
          }[];
        };

        website: {
          url: string;
          author: string;
          keywords: string[];
          icon: string;
          image: string;
          authorUrl: string;
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

          videoGalleries: {
            name: string;
            slug: string;
            thumbnail: ISanityImageData;
            videos: {
              name: string;
              url: string;
              tags: {
                name: string;
                slug: string;
                videoCount: number;
              }[];
            }[];
            videoCount: number;
          }[];

          imageGalleries: {
            name: string;
            slug: string;
            date: string;
            thumbnail: ISanityImageData;
            images: ISanityImageData[];
            imageCount: number;
          }[];

          heros: {
            title: string;
            subtitle: string;
            callToAction: {
              title: string;
              url: string;
            };
            mainImage: ISanityImageData;
          }[];
        };
      }[];

      const [data] = await sanityClient.fetch<IData>(query);

      const settings: ISettings = {
        ...data,

        band: {
          ...data.band,

          logo: {
            ...data.band.logo,
            url: urlFor(data.band.logo.url).format("webp").url() ?? "",
          },
        },

        landingPage: {
          ...data.landingPage,

          heros: data.landingPage.heros.map((hero) => ({
            ...hero,
            mainImage: {
              ...hero.mainImage,
              url: urlFor(hero.mainImage.url).format("webp").url() ?? "",
            },
          })),
        },
      };

      return settings;
    },
  };
};
