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
      name: "slug",
      title: "Slug",
      type: "slug",
      required: true,
      options: {
        source: "title",
      },
    },

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
      name: "artwork",
      title: "Artwork",
      type: "image",
      required: true,
    },

    {
      name: "releaseDate",
      title: "Release Date",
      type: "date",
      required: true,
    },
  ],
};
