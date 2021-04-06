import React from "react";
import { ReleaseIcon } from "../../components/shared/icons";

export default {
  name: "release",
  title: "Release",
  icon: ReleaseIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      required: true,
      options: {
        source: "title",
      },
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
      name: "platformLinks",
      title: "Platform Links",
      type: "array",
      of: [
        {
          type: "platformLink",
        },
      ],
    },

    {
      name: "artwork",
      title: "Artwork",
      type: "image",
      required: true,
    },

    {
      name: "releaseDate",
      title: "Release Date",
      type: "date",
      required: true,
    },
  ],

  preview: {
    select: {
      title: "title",
      releaseDate: "releaseDate",
      artwork: "artwork.asset.url",
    },

    prepare({
      title,
      releaseDate,
      artwork,
    }: {
      title?: string;
      releaseDate?: string;
      artwork?: string;
    }) {
      return {
        title: title,
        subtitle: releaseDate ? new Date(releaseDate).getFullYear() : undefined,
        media: <img src={artwork} />,
      };
    },
  },
};
