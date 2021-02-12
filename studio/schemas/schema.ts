import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import track from "./track";
import tracklist from "./tracklist";
import youtubeEmbed from "./youtube-embed";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([track, tracklist, youtubeEmbed]),
});
