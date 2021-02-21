import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import gallery from "./gallery";
import showcase from "./showcase";
import socialMedia from "./social-media";
import video from "./video";
import release from "./release";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([showcase, socialMedia, video, gallery, release]),
});
