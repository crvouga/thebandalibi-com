import React from "react";
import { AiFillTag } from "react-icons/ai";

export default {
  name: "tag",
  title: "Tag",
  type: "document",
  icon: AiFillTag,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare({ name }) {
      return {
        title: name,
        media: <AiFillTag />,
      };
    },
  },
};
