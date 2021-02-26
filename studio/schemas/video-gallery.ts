export default {
  name: "videoGallery",
  title: "Video Gallery",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      required: true,
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      required: true,
      type: "slug",
      options: {
        source: "name",
      },
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
