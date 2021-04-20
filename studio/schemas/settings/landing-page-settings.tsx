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
      name: "videoGalleries",
      title: "Video Galleries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "videoGallery",
            },
          ],
        },
      ],
    },

    {
      name: "imageGalleries",
      title: "Image Galleries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "gallery",
            },
          ],
        },
      ],
    },
  ],
};
