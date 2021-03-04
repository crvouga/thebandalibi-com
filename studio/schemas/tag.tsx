import React from "react";

export default {
  name: "tag",
  title: "Tag",
  type: "document",
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
        media: <span style={{ fontSize: "1.5em" }}>#️</span>,
      };
    },
  },
};
