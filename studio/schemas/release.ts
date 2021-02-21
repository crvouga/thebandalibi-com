export default {
  name: "release",
  title: "Release",
  type: "document",
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
    {
      name: "artwork",
      title: "Artwork",
      type: "image",
      required: true,
    },
  ],
};
