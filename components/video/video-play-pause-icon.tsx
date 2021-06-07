import React from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { IVideo } from "@core";
import { REACT_ICONS_DEFAULT_STYLES } from "../shared/icons";
import { useVideoState } from "../../features/content/data-access/video-state";

export const VideoPlayPauseIcon = ({
  video,
  size,
}: {
  video: IVideo;
  size?: string;
}) => {
  const videoState = useVideoState();

  const isCurrentVideo = videoState.currentVideo?.url === video.url;

  const sizeStyles = size
    ? {
        width: size,
        height: size,
      }
    : {};

  const style = {
    ...REACT_ICONS_DEFAULT_STYLES,
    ...sizeStyles,
  };

  return isCurrentVideo && videoState.playerState === "playing" ? (
    <MdPause style={style} />
  ) : (
    <MdPlayArrow style={style} />
  );
};
