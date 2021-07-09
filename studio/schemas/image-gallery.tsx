import { ImageIcon } from "../components";

export default {
  type: "document",
  name: "gallery",
  title: "Image Gallery",
  icon: ImageIcon,
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
      name: "date",
      title: "Date",
      type: "date",
      required: true,
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      required: true,
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
            storeOriginalFilename: true,
            // this was causing an error when uploading images
            // metadata: ["dimensions"],
          },
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
            },
          ],
        },
      ],
    },
  ],
};
