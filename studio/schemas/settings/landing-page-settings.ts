export default {
  name: "landingPageSettings",
  title: "Landing Page Settings",
  type: "object",
  fields: [
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
      title: "Videos",
      type: "array",
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
