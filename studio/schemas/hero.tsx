import { RiPagesLine } from "react-icons/ri";

export default {
  name: "hero",
  title: "Hero",
  icon: RiPagesLine,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },

    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      required: true,
    },

    {
      name: "callToAction",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          required: true,
        },
        {
          name: "url",
          title: "URL",
          type: "string",
          required: true,
        },
      ],
    },

    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      required: true,
    },
  ],
};
