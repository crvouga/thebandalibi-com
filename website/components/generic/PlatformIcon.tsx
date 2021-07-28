import React from "react";
import { GiFlatPlatform } from "react-icons/gi";
import { RiInstagramFill } from "react-icons/ri";
import {
  SiAmazon,
  SiApplemusic,
  SiFacebook,
  SiGoogle,
  SiPandora,
  SiShazam,
  SiSpotify,
  SiTidal,
  SiTiktok,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import { editDistance, minimumBy } from "@utility";

export const REACT_ICONS_DEFAULT_STYLES = {
  width: "24px",
  height: "24px",
};

const MAX_EDIT_DISTANCE = 4;

export const IconsByKey: {
  [key: string]: (props: { style?: {}; className?: string }) => JSX.Element;
} = {
  google: SiGoogle,
  twitter: SiTwitter,
  tidal: SiTidal,
  facebook: SiFacebook,
  shazam: SiShazam,
  appleMusic: SiApplemusic,
  spotify: SiSpotify,
  youtube: SiYoutube,
  instagram: RiInstagramFill,
  tiktok: SiTiktok,
  amazon: SiAmazon,
  pandora: SiPandora,
};

type IProps = {
  style?: {};
  className?: string;
  platformName?: string;
};

export const PlatformIcon = React.forwardRef<any, IProps>(
  ({ platformName, className, style, ...props }, ref) => {
    const defaultComponent = (
      <span ref={ref} {...props}>
        <GiFlatPlatform style={style} className={className} />
      </span>
    );

    if (!platformName) {
      return defaultComponent;
    }

    const closestKey = minimumBy(
      (key) => editDistance(platformName, key),
      Object.keys(IconsByKey)
    );

    if (
      editDistance(closestKey, platformName) < MAX_EDIT_DISTANCE &&
      closestKey in IconsByKey
    ) {
      return (
        <span ref={ref} {...props}>
          {IconsByKey[closestKey]({ className, style })}
        </span>
      );
    }

    return defaultComponent;
  }
);
