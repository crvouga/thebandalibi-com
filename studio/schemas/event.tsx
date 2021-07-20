import { EventIcon } from "../components";

export default {
  name: "event",
  title: "Event",
  icon: EventIcon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: true,
    },

    {
      name: "datetime",
      title: "Date Time",
      type: "datetime",
      required: true,
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
