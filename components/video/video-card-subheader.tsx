import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React from "react";
import { IVideo } from "../../lib/data-access";
import { toSubtitle } from "./video";
import { useVideoState } from "./video-state";

export const VideoCardSubheader = ({
  video,
  ...TypographyProps
}: { video: IVideo } & TypographyProps) => {
  const videoState = useVideoState();

  const isCurrentVideo = video.url === videoState.currentVideo?.url;

  const subheader = isCurrentVideo
    ? videoState.playerState === "playing"
      ? "Playing"
      : "Paused"
    : toSubtitle(video);

  return (
    <Typography color="textSecondary" noWrap {...TypographyProps}>
      {subheader}
    </Typography>
  );
};