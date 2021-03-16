import React from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { IVideo } from "../../lib/data-access";
import { REACT_ICONS_DEFAULT_STYLES } from "../shared/icons";
import { useVideoState } from "./video-state";

export const VideoPlayPauseIcon = ({ video }: { video: IVideo }) => {
  const videoState = useVideoState();

  const isCurrentVideo = videoState.currentVideo?.url === video.url;

  return isCurrentVideo && videoState.playerState === "playing" ? (
    <MdPause style={REACT_ICONS_DEFAULT_STYLES} />
  ) : (
    <MdPlayArrow style={REACT_ICONS_DEFAULT_STYLES} />
  );
};
