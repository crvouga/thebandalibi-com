import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import gallery from "./gallery";
import hero from "./hero";
import page from "./page";
import plaform from "./plaform";
import platformLink from "./platform-link";
import release from "./release";
import video from "./video";
import videoGallery from "./video-gallery";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    page,
    hero,
    release,
    plaform,
    platformLink,
    gallery,
    video,
    videoGallery,
  ]),
});
