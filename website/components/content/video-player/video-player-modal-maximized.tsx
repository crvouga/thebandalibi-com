import { CloseIconButton, SlideUp } from "@components/generic";
import { useVideoPlayerState } from "@data-access";
import { useTheme } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { VideoPlayer } from "./video-player";

export const VideoPlayerModal = () => {
  const theme = useTheme();
  const videoState = useVideoPlayerState();

  return (
    <Dialog
      TransitionComponent={SlideUp}
      open={videoState.modalState === "opened"}
      onClose={() => {
        videoState.setModalState("minimized");
      }}
      sx={{
        position: "absolute",
        top: 0,
        width: "100%",
        maxWidth: theme.breakpoints.values.md,
        margin: 0,
      }}
      keepMounted //so video can play when minimized
    >
      <VideoPlayer currentVideo={videoState.currentVideo} />

      {videoState.currentVideo && (
        <CardHeader
          action={
            <CloseIconButton
              onClick={() => {
                videoState.closeVideo();
              }}
            />
          }
          title={videoState.currentVideo.name}
        />
      )}
    </Dialog>
  );
};
