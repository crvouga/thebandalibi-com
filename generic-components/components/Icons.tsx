import React from "react";
import { AiFillTag } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { GiFlatPlatform } from "react-icons/gi";
import { IconType } from "react-icons/lib/cjs";
import { MdEmail, MdHome, MdImage, MdPlayArrow, MdStore } from "react-icons/md";
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
import { editDistance, minimumBy } from "../../utility";

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

export const PlatformIcon = ({
  platformName,
  className,
  style,
}: {
  style?: {};
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
    return IconsByKey[closestKey]({ className, style });
  }

  return <GiFlatPlatform style={style} className={className} />;
};

export const ImageIcon = () => {
  return <MdImage style={REACT_ICONS_DEFAULT_STYLES} />;
};

export const TagIcon = () => {
  return <AiFillTag style={REACT_ICONS_DEFAULT_STYLES} />;
};

export const VideoIcon = () => {
  return <MdPlayArrow style={REACT_ICONS_DEFAULT_STYLES} />;
};

export const ReleaseIcon = () => {
  return <BsMusicNoteBeamed style={REACT_ICONS_DEFAULT_STYLES} />;
};

export const HomeIcon = () => {
  return <MdHome style={REACT_ICONS_DEFAULT_STYLES} />;
};

export const EmailIcon: IconType = (props) => {
  return <MdEmail style={REACT_ICONS_DEFAULT_STYLES} {...props} />;
};

export const StoreIcon: IconType = (props) => {
  return <MdStore style={REACT_ICONS_DEFAULT_STYLES} {...props} />;
};
