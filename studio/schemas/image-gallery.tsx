import React from "react";
import { MdPhotoLibrary } from "react-icons/md";

export default {
  type: "document",
  name: "gallery",
  title: "Image Gallery",
  icon: MdPhotoLibrary,
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

  preview: {
    select: {
      name: "name",
      image1: "images.0.asset.url", // <- authors.0 is a reference to author, and the preview component will automatically resolve the reference and return the name
      image2: "images.1.asset.url",
      image3: "images.2.asset.url",
      image4: "images.3.asset.url",
    },

    prepare({ name, image1, image2, image3, image4 }) {
      const images = [image1, image2, image3, image4];

      return {
        title: name,
        media: (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              height: "100%",
              width: "100%",
            }}
          >
            {images.slice(0, 4).map((image) => (
              <img
                style={{
                  objectFit: "cover",
                  width: "50%",
                  height: "50%",
                }}
                key={image}
                src={image}
              />
            ))}
          </div>
        ),
      };
    },
  },
};
