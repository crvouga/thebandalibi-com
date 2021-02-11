import { defineDocument, defineFields } from "sanity-typed-queries";
import { photoSchema } from "./photo";

export const gallerySchema = defineDocument(
  "gallery",
  {
    tracks: {
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "photo",
              fields: defineFields({
                image: {
                  type: "image",
                },
              }),
            },
          ],
        },
      ],
    },
  },
  [photoSchema.photo]
);
