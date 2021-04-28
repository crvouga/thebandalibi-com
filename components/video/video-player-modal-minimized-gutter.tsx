import Collapse from "@material-ui/core/Collapse";
import React from "react";
import { Gutter } from "../app/gutter";
import { useVideoState } from "./video-state";

export const VideoPlayerModalMinimizedGutter = () => {
  const videoState = useVideoState();

  return (
    <Collapse in={videoState.modalState === "minimized"}>
      <Gutter />
    </Collapse>
  );
};
