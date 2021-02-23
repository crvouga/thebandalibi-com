export default {
  name: "hero",
  title: "Hero",
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
          type: "url",
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

    {
      name: "backgroundVideo",
      title: "Background Video",
      description: "Video should be square",
      type: "file",
    },
  ],
};
