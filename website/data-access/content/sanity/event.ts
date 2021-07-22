import { SanityClient } from "@sanity/client";
import { DateISO } from "@utility";
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
    async getAll({ inclusiveDateRange, sort, slice }) {
      const slicePartial = slice
        ? `[${slice.offset}...${slice.offset + slice.limit}]`
        : "";

      const orderPartial =
        sort === "date-ascend"
          ? "order(date asc)"
          : sort === "date-descend"
          ? "order(date desc)"
          : "";

      const selectPartial = inclusiveDateRange
        ? `_type == "event" && "${inclusiveDateRange.start}" <= date && date <= "${inclusiveDateRange.end}"`
        : `_type == "event"`;

      const query = `
        *[${selectPartial}] | ${orderPartial} ${slicePartial} {
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
  };
};
