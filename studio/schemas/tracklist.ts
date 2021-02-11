import { defineDocument, defineFields } from "sanity-typed-queries";
import { trackSchema } from "./track";

export const tracklistSchema = defineDocument(
  "tracklist",
  {
    title: {
      type: "string",
    },
    tracks: {
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "track",
              fields: defineFields({
                title: {
                  type: "string",
                },
              }),
            },
          ],
        },
      ],
    },
  },
  [trackSchema.track]
);

export default tracklistSchema.document;
