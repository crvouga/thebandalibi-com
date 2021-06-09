import { ISettings, ISettingsDataStore } from "../../interface";
import { createUrlFor, ISanityClient, ISanityImageData } from "../frameworks";

export const SettingsDataStoreSanity = (
  sanityClient: ISanityClient
): ISettingsDataStore => {
  const urlFor = createUrlFor(sanityClient);

  return {
    async get() {
      const query = `
      *[_id == "settings"] {
        band{
          name,
          description,
          contactEmailAddress,
          "logo": logo.asset->{
            url,
            metadata
          },
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

        landingPage {
          videoGalleries[]->{
            name,
            "slug": slug.current,
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

          imageGalleries[]->{
            name,
            "slug": slug.current,
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
        band: {
          name: string;
          description: string;
          contactEmailAddress: string;
          logo: ISanityImageData;
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
          videoGalleries: {
            name: string;
            slug: string;
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
