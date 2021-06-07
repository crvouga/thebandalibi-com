import { IVideo } from "@core";
import React from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
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
    ...sizeStyles,
  };

  return isCurrentVideo && videoState.playerState === "playing" ? (
    <MdPause style={style} />
  ) : (
    <MdPlayArrow style={style} />
  );
};
