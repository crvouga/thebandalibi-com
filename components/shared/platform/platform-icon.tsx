import React from "react";
import { GiFlatPlatform } from "react-icons/gi";
import {
  SiApplemusic,
  SiInstagram,
  SiSpotify,
  SiYoutube,
  SiShazam,
  SiFacebook,
  SiTidal,
  SiTwitter,
  SiGoogle,
  SiTiktok,
  SiAmazon,
  SiPandora,
} from "react-icons/si";
import { editDistance, minimumBy } from "../../../lib/utility";

const MAX_EDIT_DISTANCE = 4;

export const IconsByKey: {
  [key: string]: (props: { className?: string }) => JSX.Element;
} = {
  google: SiGoogle,
  twitter: SiTwitter,
  tidal: SiTidal,
  facebook: SiFacebook,
  shazam: SiShazam,
  appleMusic: SiApplemusic,
  spotify: SiSpotify,
  youtube: SiYoutube,
  instagram: SiInstagram,
  tiktok: SiTiktok,
  amazon: SiAmazon,
  pandora: SiPandora,
};

export const PlatformIcon = ({
  platformName,
  className,
}: {
  className?: string;
  platformName?: string;
}) => {
  if (!platformName) {
    return <GiFlatPlatform className={className} />;
  }

  const closestKey = minimumBy(
    (key) => editDistance(platformName, key),
    Object.keys(IconsByKey)
  );

  if (
    editDistance(closestKey, platformName) < MAX_EDIT_DISTANCE &&
    closestKey in IconsByKey
  ) {
    return IconsByKey[closestKey]({ className });
  }

  return <GiFlatPlatform className={className} />;
};
