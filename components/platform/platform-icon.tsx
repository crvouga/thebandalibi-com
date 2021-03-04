import React, { ReactNode } from "react";
import { GiFlatPlatform } from "react-icons/gi";
import {
  SiApplemusic,
  SiInstagram,
  SiSpotify,
  SiYoutube,
} from "react-icons/si";
import { editDistance, minimumBy } from "../../lib/utility";

const MAX_EDIT_DISTANCE = 4;

export const IconsByKey: {
  [key: string]: (props: { className?: string }) => JSX.Element;
} = {
  appleMusic: SiApplemusic,
  spotify: SiSpotify,
  youtube: SiYoutube,
  instagram: SiInstagram,
};

export const PlatformIcon = ({
  platform,
  className,
}: {
  className?: string;
  platform: { name: string };
}) => {
  const closestKey = minimumBy(
    (key) => editDistance(platform.name, key),
    Object.keys(IconsByKey)
  );

  const Icon = IconsByKey[closestKey];

  if (Icon && editDistance(closestKey, platform.name) < MAX_EDIT_DISTANCE) {
    return Icon({ className });
  }

  return <GiFlatPlatform className={className} />;
};
