//@ts-ignore
import schemaTypes from "all:part:@sanity/base/schema-type";
//@ts-ignore
import createSchema from "part:@sanity/base/schema-creator";
import event from "./event";
import hero from "./hero";
import imageGallery from "./image-gallery";
import platform from "./platform";
import platformLink from "./platform-link";
import release from "./release";
import bandSettings from "./settings/band-settings";
import landingPageSettings from "./settings/landing-page-settings";
import settings from "./settings/settings";
import websiteSettings from "./settings/website-settings";
import tag from "./tag";
import video from "./video";
import videoGallery from "./video-gallery";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    settings,
    bandSettings,
    websiteSettings,
    landingPageSettings,
    event,
    release,
    hero,
    imageGallery,
    video,
    videoGallery,
    tag,
    platform,
    platformLink,
  ]),
});
