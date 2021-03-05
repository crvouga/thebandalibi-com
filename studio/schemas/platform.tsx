import React from "react";
import { GiFlatPlatform } from "react-icons/gi";
import { PlatformIcon } from "../../components/platform/platform-icon";

export default {
  name: "platform",
  title: "Platform",
  type: "document",
  icon: GiFlatPlatform,
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
    prepare({ name }: { name: string }) {
      return {
        title: name,
        media: name ? <PlatformIcon platform={{ name }} /> : undefined,
      };
    },
  },
};