export default {
  name: "platform",
  title: "Platform",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      required: true,
    },

    {
      name: "url",
      type: "url",
      title: "URL",
      required: true,
    },

    {
      name: "icon",
      title: "Icon",
      type: "image",
      required: true,
    },

    {
      name: "logo",
      title: "Logo",
      type: "image",
      required: true,
    },
  ],
};
