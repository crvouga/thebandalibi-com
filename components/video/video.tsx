import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import React from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { IVideo } from "../../lib/domain";
import { IPlayerState } from "./video-state";

export const TogglePlayerButton = ({
  playerState,
  ...props
}: {
  playerState: IPlayerState;
} & IconButtonProps) => {
  return (
    <IconButton aria-label="play pause toggle button" {...props}>
      {playerState === "paused" ? <MdPlayArrow /> : <MdPause />}
    </IconButton>
  );
};

export const toSubtitle = (video?: IVideo) =>
  video?.tags.map((tag) => tag.name).join(", ") ?? "";
