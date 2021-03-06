import { CardHeader, Dialog } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useStore } from "../../lib/state-store";
import { CloseIconButton } from "../@shared/close-icon-button";
import { SlideUp } from "../@shared/transitions";
import { NAV_BAR_HEIGHT } from "../app/navigation/navigation-constants";
import { VideoPlayer } from "./video-player";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: 0,
    width: "100%",
    maxWidth: theme.breakpoints.width("md"),
    margin: 0,
  },
  minimized: {
    zIndex: theme.zIndex.appBar,
    position: "fixed",
    top: "auto",
    width: "100%",
    maxWidth: theme.breakpoints.width("md"),
    margin: 0,
    bottom: 0,
    [theme.breakpoints.down("xs")]: {
      bottom: NAV_BAR_HEIGHT,
    },
  },
}));

export const VideoPlayerCardModal = () => {
  const classes = useStyles();
  const videoState = useStore((state) => state.video);

  if (!videoState.currentVideo) {
    return null;
  }

  return (
    <Dialog
      TransitionComponent={SlideUp}
      open={videoState.playerState === "open"}
      onClose={() => {
        videoState.setPlayerState("minimized");
      }}
      classes={{ paper: classes.paper }}
      keepMounted
    >
      {videoState.playerState !== "closed" && (
        <VideoPlayer playing url={videoState.currentVideo.url} />
      )}

      <CardHeader
        title={videoState.currentVideo.name}
        titleTypographyProps={{ variant: "subtitle1" }}
        subheader={videoState.currentVideo.tags
          .map((tag) => tag.name)
          .join(", ")}
        subheaderTypographyProps={{ variant: "subtitle2" }}
        action={
          <CloseIconButton
            onClick={() => {
              videoState.setPlayerState("minimized");
            }}
          />
        }
      />
    </Dialog>
  );
};

export const VideoPlayerCardModalMinimized = () => {
  const classes = useStyles();

  const videoState = useStore((state) => state.video);

  if (!videoState.currentVideo) {
    return null;
  }

  return (
    <Slide direction="up" in={videoState.playerState === "minimized"}>
      <Card
        className={classes.minimized}
        onClick={() => {
          videoState.setPlayerState("open");
        }}
      >
        <CardHeader
          title={videoState.currentVideo.name}
          titleTypographyProps={{ variant: "subtitle1" }}
          subheader={videoState.currentVideo.tags
            .map((tag) => tag.name)
            .join(", ")}
          subheaderTypographyProps={{ variant: "subtitle2" }}
          action={
            <CloseIconButton
              onClick={(event) => {
                event.stopPropagation();
                videoState.setPlayerState("closed");
              }}
            />
          }
        />
      </Card>
    </Slide>
  );
};
