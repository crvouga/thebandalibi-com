import React from "react";
import { AiFillTag } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdHome, MdImage, MdPlayArrow } from "react-icons/md";

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
