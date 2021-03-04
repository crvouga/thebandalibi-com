import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { PlatformMedia } from "./platform";

export default {
  name: "platformLink",
  title: "Platform Link",
  type: "object",
  icon: AiOutlineLink,
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
    prepare({ name, url }) {
      return {
        title: name,
        subtitle: new URL(url).hostname,
        media: <PlatformMedia platformName={name} />,
      };
    },
  },
};
