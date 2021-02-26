import { SanityClient as ISanityClient } from "@sanity/client";
import { ICMS } from "../contracts";

type IImageMetadateData = {
  dimensions: {
    aspectRatio: number;
    width: number;
    height: number;
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
          subtitle?: string;
          backgroundVideo?: string;
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
        heros: data.heros,
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

    async getSocialMedia() {
      const query = `
      *[_type == "socialMedia"] {
        name,
        url,
        "image": image.asset->url
      }`;

      type IData = {
        name: string;
        url: string;
        image: string;
      }[];

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

    async getGallery(slug: string) {
      const query = ` 
      *[_type == "gallery" && slug.current == "${slug}"] {
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
          metadata: {
            dimensions: {
              aspectRatio: number;
              width: number;
              height: number;
            };
          };
        }[];
      }[];

      const data = await sanityClient.fetch<IData>(query);

      const galleries = data.map(({ _id, ...data }) => ({
        ...data,
        id: _id,
      }));

      return galleries[0] ?? null;
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
          platform: {
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
        }[];
      }[];

      const data = await sanityClient.fetch<IData>(query);

      const releases = data.map(({ releaseDate, ...data }) => ({
        ...data,
        releaseDate: new Date(releaseDate).toISOString(),
      }));

      return releases;
    },
  };
};
