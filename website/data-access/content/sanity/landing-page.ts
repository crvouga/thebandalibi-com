import { IContent, ILandingPage } from "../interface";
import { createUrlFor, ISanityClient, ISanityImageData } from "./sanity-client";

export const LandingPageContent = (
  sanityClient: ISanityClient
): IContent["landingPage"] => {
  const urlFor = createUrlFor(sanityClient);

  return {
    async get() {
      const query = `
      *[_id == "settings"] {
        landingPage {
          hero {
            title,
            subtitle,
            action {
              title,
              url
            },
            "logo": logo.asset->{
              url,
              metadata
            },
            "images": images[].asset->{
              url,
              metadata
            },
          },
        },
      }
      `;

      type IData = {
        landingPage: {
          hero: {
            logo: ISanityImageData;
            title: string;
            subtitle: string;
            action: {
              title: string;
              url: string;
            };
            images: ISanityImageData[];
          };
        };
      }[];

      const [data] = await sanityClient.fetch<IData>(query);

      const landingPage: ILandingPage = {
        ...data.landingPage,
        hero: {
          ...data.landingPage.hero,
          logo: {
            ...data.landingPage.hero.logo,
            url:
              urlFor(data.landingPage.hero.logo.url).format("webp").url() ?? "",
          },
          images: data.landingPage.hero.images.map((image) => ({
            ...image,
            url: urlFor(image.url).format("webp").url() ?? "",
          })),
        },
      };

      return landingPage;
    },
  };
};
