export default {
  name: "showcase",
  title: "Showcase",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "action",
      title: "Action",
      type: "object",
      required: true,
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
      name: "image",
      title: "Image",
      type: "image",
      required: true,
    },
    {
      name: "backgroundVideo",
      title: "Background Video",
      type: "file",
    },
  ],
};
