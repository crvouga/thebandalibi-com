export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
      required: true,
      description: "WARNING! Changing this will break the landing page!",
    },

    {
      name: "heros",
      title: "Heros",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "hero",
            },
          ],
        },
      ],
    },

    {
      name: "videos",
      type: "array",
      title: "Videos",

      of: [
        {
          type: "reference",
          to: [
            {
              type: "video",
            },
          ],
        },
      ],
    },
  ],
};
