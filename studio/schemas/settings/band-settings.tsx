export default {
  name: "bandSettings",
  title: "Band Settings",
  type: "object",
  fields: [
    {
      name: "platformLinks",
      title: "Platform Links",
      type: "array",
      of: [
        {
          type: "platformLink",
        },
      ],
    },

    {
      name: "description",
      title: "Band Description",
      type: "text",
    },

    {
      name: "name",
      title: "Band Name",
      type: "string",
    },
  ],
};
