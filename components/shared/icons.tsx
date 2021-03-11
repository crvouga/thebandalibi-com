import React from "react";
import { AiFillTag } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdEmail, MdHome, MdImage, MdPlayArrow } from "react-icons/md";
import { IconType } from "react-icons/lib/cjs";

export * from "../platform/platform-icon";

const DEFAULT_STYLE = {
  width: "24px",
  height: "24px",
};

export const ImageIcon = () => {
  return <MdImage style={DEFAULT_STYLE} />;
};

export const TagIcon = () => {
  return <AiFillTag style={DEFAULT_STYLE} />;
};

export const VideoIcon = () => {
  return <MdPlayArrow style={DEFAULT_STYLE} />;
};

export const ReleaseIcon = () => {
  return <BsMusicNoteBeamed style={DEFAULT_STYLE} />;
};

export const HomeIcon = () => {
  return <MdHome style={DEFAULT_STYLE} />;
};

export const EmailIcon: IconType = (props) => {
  return <MdEmail style={DEFAULT_STYLE} {...props} />;
};
