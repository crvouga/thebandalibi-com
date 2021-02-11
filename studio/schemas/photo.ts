import { defineDocument } from "sanity-typed-queries";

export const photoSchema = defineDocument("photo", {
  image: {
    type: "image",
  },
});
