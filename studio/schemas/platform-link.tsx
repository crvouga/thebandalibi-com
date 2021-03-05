import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { PlatformIcon } from "../../components/platform/platform-icon";

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
    prepare({ name, url }) {
      return {
        title: name,
        subtitle: url,
        media: <PlatformIcon platform={{ name }} />,
      };
    },
  },
};
