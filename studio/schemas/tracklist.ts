export default {
  name: "tracklist",
  title: "Tracklist",
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
      options: {
        source: "title",
      },
      required: true,
    },

    {
      name: "artwork",
      title: "Artwork",
      type: "array",
      of: [
        {
          title: "Image",
          type: "image",
        },
        {
          title: "Video",
          type: "file",
        },
      ],
    },

    {
      name: "tracks",
      title: "Tracks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              title: "Track",
              type: "track",
            },
          ],
        },
      ],
    },
  ],
};
