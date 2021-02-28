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
          type: "reference",
          to: [
            {
              type: "tag",
            },
          ],
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
