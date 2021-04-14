import React from "react";
import { ImageIcon } from "../../components/shared/icons";

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

  preview: {
    select: {
      name: "name",
      image1: "images.0.asset.url",
      image2: "images.1.asset.url",
      image3: "images.2.asset.url",
      image4: "images.3.asset.url",
    },

    prepare({
      name,
      image1,
      image2,
      image3,
      image4,
    }: {
      name?: string;
      image1?: string;
      image2?: string;
      image3?: string;
      image4?: string;
    }) {
      const images = [image1, image2, image3, image4].filter(
        (image) => typeof image === "string"
      );

      if (images.length < 4) {
        return {
          title: name,
          media: <ImageIcon />,
        };
      }

      const media = (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            width: "100%",
          }}
        >
          {images.map((image) => (
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
      );

      return {
        title: name,
        media: media,
      };
    },
  },
};
