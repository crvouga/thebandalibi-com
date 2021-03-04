import React from "react";

export default {
  name: "platformLink",
  title: "Platform Link",
  type: "object",
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
        media: <span style={{ fontSize: "1.5em" }}>🔗</span>,
      };
    },
  },
};
