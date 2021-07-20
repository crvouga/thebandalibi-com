import { IContent } from "../interface";
import {
  createUrlFor,
  ISanityClient,
  ISanityPlatformData,
} from "./sanity-client";

export const ReleaseContent = (
  sanityClient: ISanityClient
): IContent["release"] => {
  const urlFor = createUrlFor(sanityClient);
  return {
    async getAll() {
      const query = `
       *[_type == "release"] {
          "slug": slug.current,
          title,
          url,
          releaseDate,
          "artwork": artwork.asset->url,
          videos[]->{
            name,
            tags[]->{
              name,
              "slug": slug.current,
              "videoCount": count(*[_type == "video" && references(^._id)])
            },
            url,
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
            }
          }
        }
        `;

      type IData = {
        slug: string;
        title: string;
        artwork: string;
        url: string;
        releaseDate: string;
        videos: {
          name: string;
          url: string;
          tags: {
            name: string;
            videoCount: number;
            slug: string;
          }[];
        }[];
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
