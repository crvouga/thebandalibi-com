import React from "react";
import { MdVideoLibrary } from "react-icons/md";
import { toYouTubeThumbnailUrl } from "../../lib/utility/youtube";

export default {
  name: "video",
  title: "Video",
  type: "document",
  icon: MdVideoLibrary,
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

    prepare({ title, url }) {
      return {
        title: title,
        subtitle: new URL(url).hostname,
        media: (
          <img
            style={{ objectFit: "cover" }}
            src={toYouTubeThumbnailUrl(url)}
          />
        ),
      };
    },
  },
};
