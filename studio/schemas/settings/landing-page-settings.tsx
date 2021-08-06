export default {
  name: "landingPageSettings",
  title: "Landing Page Settings",
  type: "object",
  fields: [
    {
      name: "hero",
      type: "object",
      fields: [
        {
          name: "logo",
          title: "Logo",
          type: "image",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        },
        {
          name: "action",
          title: "Action",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
        {
          name: "images",
          title: "Images",
          type: "array",
          of: [
            {
              type: "image",
            },
          ],
        },
      ],
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
