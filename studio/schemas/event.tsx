import React from "react";
import { EventIcon } from "../components";
import { toYouTubeThumbnailUrl } from "../utility";

export default {
  name: "event",
  title: "Event",
  icon: EventIcon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: true,
    },

    {
      name: "date",
      title: "Date",
      type: "date",
      required: true,
    },

    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "video",
            },
          ],
        },
      ],
    },

    {
      name: "imageGalleries",
      title: "Image Galleries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "gallery",
            },
          ],
        },
      ],
    },
  ],

  orderings: [
    {
      title: "Date, New",
      name: "dateDesc",
      by: [
        {
          field: "date",
          direction: "desc",
        },
      ],
    },
    {
      title: "Date, Old",
      name: "dateAsc",
      by: [
        {
          field: "date",
          direction: "asc",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "name",
      date: "date",
      firstImageGalleryThumbnailUrl: "imageGalleries.0.thumbnail.asset.url",
      firstVideoUrl: "videos.0.url",
    },

    prepare({
      title,
      date,
      firstImageGalleryThumbnailUrl,
      firstVideoUrl,
    }: {
      title?: string;
      date?: string;
      firstImageGalleryThumbnailUrl?: string;
      firstVideoUrl?: string;
    }) {
      return {
        title: title,
        subtitle: date ? new Date(date).toDateString() : undefined,
        media: firstImageGalleryThumbnailUrl ? (
          <img
            style={{ objectFit: "cover" }}
            src={firstImageGalleryThumbnailUrl}
          />
        ) : firstVideoUrl ? (
          <img
            style={{ objectFit: "cover" }}
            src={toYouTubeThumbnailUrl(firstVideoUrl)}
          />
        ) : undefined,
      };
    },
  },
};
