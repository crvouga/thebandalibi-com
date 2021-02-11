import { defineDocument } from "sanity-typed-queries";

export const trackSchema = defineDocument("track", {
  title: {
    type: "string",
  },
});

export default trackSchema.document;
