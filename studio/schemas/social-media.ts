export default {
  name: "socialMedia",
  title: "Social Media",
  type: "document",
  fields: [
    {
      name: "platform",
      type: "reference",
      title: "Platform",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
