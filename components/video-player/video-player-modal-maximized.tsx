import CardHeader from "@material-ui/core/CardHeader";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { CloseButton, SlideUp } from "generic-components";
import React from "react";
import { useVideoPlayerState } from "@data-access";
import { VideoPlayer } from "./video-player";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: 0,
    width: "100%",
    maxWidth: theme.breakpoints.width("md"),
    margin: 0,
  },
}));

export const VideoPlayerModal = () => {
  const classes = useStyles();
  const videoState = useVideoPlayerState();

  return (
    <Dialog
      TransitionComponent={SlideUp}
      open={videoState.modalState === "opened"}
      onClose={() => {
        videoState.setModalState("minimized");
      }}
      classes={{ paper: classes.paper }}
      keepMounted //so video can play when minimized
    >
      <VideoPlayer currentVideo={videoState.currentVideo} />

      {videoState.currentVideo && (
        <CardHeader
          action={
            <CloseButton
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
