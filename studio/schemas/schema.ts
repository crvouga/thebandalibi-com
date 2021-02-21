import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import gallery from "./gallery";
import page from "./page";
import release from "./release";
import socialMedia from "./social-media";
import video from "./video";
import hero from "./hero";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([page, hero, socialMedia, video, gallery, release]),
});
