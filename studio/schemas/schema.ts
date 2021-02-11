import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import { trackSchema } from "./track";
import { tracklistSchema } from "./tracklist";
import { photoSchema } from "./photo";
import { gallerySchema } from "./gallery";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    trackSchema.document,
    tracklistSchema.document,
    photoSchema.document,
    gallerySchema.document,
  ]),
});
