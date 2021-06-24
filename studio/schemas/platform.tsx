import React from "react";
import { PlatformIcon } from "../components";

export default {
  name: "platform",
  title: "Platform",
  type: "document",
  icon: PlatformIcon,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      required: true,
    },
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare({ name }: { name?: string }) {
      return {
        title: name,
        media: <PlatformIcon platformName={name} />,
      };
    },
  },
};
