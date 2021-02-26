import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import gallery from "./gallery";
import hero from "./hero";
import page from "./page";
import plaform from "./plaform";
import platformLink from "./platform-link";
import release from "./release";
import socialMedia from "./social-media";
import video from "./video";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    page,
    hero,
    socialMedia,
    video,
    gallery,
    release,
    plaform,
    platformLink,
  ]),
});
