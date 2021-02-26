import { SanityClient as ISanityClient } from "@sanity/client";
import { ICMS, IPlatform } from "../contracts";
import { urlFor } from "../sanity-client";

type IImageMetadateData = {
  dimensions: {
    aspectRatio: number;
    width: number;
    height: number;
  };
};

const PLATFORM_QUERY_FRAGMENT = `
  {
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
  }
`;

type IPlatformData = {
  name: string;
  url: string;
  icon: {
    url: string;
    metadata: IImageMetadateData;
  };
  logo: {
    url: string;
    metadata: IImageMetadateData;
  };
};

export const SanityCMS = (sanityClient: ISanityClient): ICMS => {
  return {
    async getLandingPage() {
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

    async getPlatforms() {
      const query = `
      *[_type == "platform"] {
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
      }`;

      type IData = IPlatformData[];

      const data = await sanityClient.fetch<IData>(query);

      const socialMedia = data.map((data) => ({
        ...data,
      }));

      return socialMedia;
    },

    async getGalleries() {
      const query = ` 
      *[_type == "gallery"] {
        _id,
        name,
        "slug": slug.current,
        "images": images[].asset->{
          url,
          metadata
        },
      }`;

      type IData = {
        _id: string;
        slug: string;
        name: string;
        images: {
          url: string;
          metadata: IImageMetadateData;
        }[];
      }[];

      const data = await sanityClient.fetch<IData>(query);

      return data.map(({ _id, ...data }) => ({
        ...data,
        id: _id,
      }));
    },

    async getReleases() {
      const query = `
       *[_type == "release"] {
          "slug": slug.current,
          title,
          url,
          releaseDate,
          "artwork": artwork.asset->url,
          "platformLinks": platformLinks[]{
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
            }
          }
        }`;

      type IData = {
        slug: string;
        title: string;
        artwork: string;
        url: string;
        releaseDate: string;
        platformLinks: {
          url: string;
          platform: IPlatformData;
        }[];
      }[];

      const data = await sanityClient.fetch<IData>(query);

      const releases = data.map((data) => ({
        ...data,
        artwork: urlFor(data.artwork).format("webp").url() ?? "",
        releaseDate: new Date(data.releaseDate).toISOString(),
      }));

      return releases;
    },
  };
};
