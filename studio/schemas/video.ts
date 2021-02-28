export default {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          type: "slug",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};
