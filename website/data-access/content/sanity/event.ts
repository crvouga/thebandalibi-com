import { SanityClient } from "@sanity/client";
import { IContent } from "../interface";
import { ISanityImageData } from "./sanity-client";

type SanityEventData = {
  _id: string;
  date: string;
  name: string;
  videos: {
    name: string;
    url: string;
  }[];
  imageGalleries: {
    name: string;
    slug: string;
    thumbnail: ISanityImageData;
    images: ISanityImageData[];
    imageCount: number;
  }[];
};

export const EventContent = (sanityClient: SanityClient): IContent["event"] => {
  return {
    async getAll({ sort, slice }) {
      const slicePartial = slice
        ? `[${slice.offset}...${slice.offset + slice.limit}]`
        : "";

      const directionPartial =
        sort === "date-ascend"
          ? "date asc"
          : sort === "date-descend"
          ? "date desc"
          : "";

      const query = `
        *[_type == "event"] | order(${directionPartial}) ${slicePartial} {
          _id,
          name,
          date,
          videos[]->{
            name,
            url
          },
          imageGalleries[]->{
            name,
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
          }
        }
      `;

      type IData = SanityEventData[];

      const data = await sanityClient.fetch<IData>(query);

      const events = data.map((eventData) => ({
        ...eventData,
        eventId: eventData._id,
      }));

      return events;
    },

    async getOne({ eventId }) {
      const query = `
        *[_type == "event" && _id == '${eventId}'] {
          _id,
          name,
          date,
          videos[]->{
            name,
            url
          },
          imageGalleries[]->{
            name,
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
          }
        }
      `;

      type IData = SanityEventData[];

      const data = await sanityClient.fetch<IData>(query);

      const events = data.map((eventData) => ({
        ...eventData,
        eventId: eventData._id,
      }));

      const event = events[0];

      if (!event) {
        return null;
      }

      return {
        event,
      };
    },
  };
};
