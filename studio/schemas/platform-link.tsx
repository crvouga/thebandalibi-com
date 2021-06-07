import React from "react";
import { PlatformIcon } from "../../ui/components/Icons";

export default {
  name: "platformLink",
  title: "Platform Link",
  type: "object",
  icon: <PlatformIcon />,
  fields: [
    {
      name: "platform",
      title: "Platform",
      type: "reference",
      required: true,
      to: [
        {
          type: "platform",
        },
      ],
    },

    {
      name: "url",
      title: "URL",
      type: "url",
      required: true,
    },
  ],

  preview: {
    select: {
      name: "platform.name",
      url: "url",
    },
    prepare({ name, url }: { name?: string; url?: string }) {
      return {
        title: name,
        subtitle: url,
        media: <PlatformIcon platformName={name} />,
      };
    },
  },
};
