import React from "react";
import { VideoIcon } from "../../ui/components/Icons";
import { toYouTubeThumbnailUrl } from "../../utility";

export default {
  name: "video",
  title: "Video",
  type: "document",
  icon: VideoIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",

      of: [
        {
          type: "reference",
          to: [
            {
              type: "tag",
            },
          ],
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],

  preview: {
    select: {
      title: "name",
      url: "url",
    },

    prepare({ title, url }: { title?: string; url?: string }) {
      return {
        title: title,

        media:
          typeof url === "string" ? (
            <img
              style={{ objectFit: "cover" }}
              src={toYouTubeThumbnailUrl(url)}
            />
          ) : (
            <VideoIcon />
          ),
      };
    },
  },
};
