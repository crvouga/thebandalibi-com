import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import hero from "./hero";
import imageGallery from "./image-gallery";
import page from "./page";
import platform from "./platform";
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
    platform,
    platformLink,
    imageGallery,
    video,
    videoGallery,
  ]),
});
