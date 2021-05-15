import CardHeader from "@material-ui/core/CardHeader";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { routes } from "../../../lib/routes";
import { ButtonLink } from "../../shared/clickable";
import { CloseIconButton } from "../../shared/close-icon-button";
import { SlideUp } from "../../shared/transitions";
import { VideoPlayer } from "./video-player";
import { useVideoState } from "../video-state";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: 0,
    width: "100%",
    maxWidth: theme.breakpoints.width("md"),
    margin: 0,
  },
}));

export const VideoPlayerModalMaximized = () => {
  const classes = useStyles();
  const videoState = useVideoState();

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
            <CloseIconButton
              onClick={() => {
                videoState.closeVideo();
              }}
            />
          }
          title={videoState.currentVideo.name}
        />
      )}
      <ButtonLink
        variant="text"
        size="large"
        fullWidth
        href={routes.allVideoGalleries()}
        onClick={() => {
          videoState.setModalState("minimized");
        }}
      >
        See All Videos
      </ButtonLink>
    </Dialog>
  );
};
