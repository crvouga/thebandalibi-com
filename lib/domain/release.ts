import { SanityClient } from "@sanity/client";
import { urlFor } from "../sanity-client";
import { IPlatformLink, ISanityPlatformData } from "./platform";

export type IRelease = {
  slug: string;
  title: string;
  artwork: string;
  releaseDate: string;
  platformLinks: IPlatformLink[];
};

export type IReleaseStore = {
  getAll: () => Promise<IRelease[]>;
  getOne: (slug: string) => Promise<IRelease | null>;
};

export const ReleaseStoreSanity = (
  sanityClient: SanityClient
): IReleaseStore => {
  return {
    async getAll() {
      const query = `
       *[_type == "release"] {
          "slug": slug.current,
          title,
          url,
          releaseDate,
          "artwork": artwork.asset->url,
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
          platform: ISanityPlatformData;
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
    async getOne(slug: string) {
      const releases = await this.getAll();

      const releaseOrNull =
        releases.find((release) => release.slug === slug) ?? null;

      return releaseOrNull;
    },
  };
};
