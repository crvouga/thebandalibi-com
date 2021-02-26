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
};
