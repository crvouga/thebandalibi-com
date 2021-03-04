import React from "react";
import { GiFlatPlatform } from "react-icons/gi";
import {
  SiApplemusic,
  SiSpotify,
  SiYoutube,
  SiInstagram,
} from "react-icons/si";
import { minimumBy, editDistance } from "../../lib/utility";

const MAX_EDIT_DISTANCE = 5;

export const iconsByKey = {
  appleMusic: SiApplemusic,
  spotify: SiSpotify,
  youtube: SiYoutube,
  instagram: SiInstagram,
};

export const PlatformMedia = ({ platformName }: { platformName: string }) => {
  const closestKey = minimumBy(
    (key) => editDistance(platformName, key),
    Object.keys(iconsByKey)
  );

  if (editDistance(closestKey, platformName) > MAX_EDIT_DISTANCE) {
    return <GiFlatPlatform />;
  }

  return iconsByKey[closestKey]();
};

export default {
  name: "platform",
  title: "Platform",
  type: "document",
  icon: GiFlatPlatform,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      required: true,
    },
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare({ name }) {
      return {
        title: name,
        media: <PlatformMedia platformName={name} />,
      };
    },
  },
};
