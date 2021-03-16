import React from "react";
import { AiFillTag } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdEmail, MdHome, MdImage, MdPlayArrow } from "react-icons/md";
import { IconType } from "react-icons/lib/cjs";

export * from "../platform/platform-icon";

export const REACT_ICONS_DEFAULT_STYLES = {
  width: "24px",
  height: "24px",
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
