import { VideoGalleryIcon } from "../components";

export default {
  type: "document",
  name: "videoGallery",
  title: "Video Gallery",
  icon: VideoGalleryIcon,
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
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
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
  ],
};
