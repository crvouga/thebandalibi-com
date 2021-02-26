export default {
  name: "gallery",
  title: "Image Gallery",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      required: true,
      options: {
        source: "name",
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          name: "image",
          title: "Image",
          options: {
            metadata: ["dimensions"],
          },
        },
      ],
    },
  ],
};
