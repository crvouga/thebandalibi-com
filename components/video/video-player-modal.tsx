import {
  Box,
  CardHeader,
  Dialog,
  IconButton,
  Paper,
  Avatar,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { MdClose, MdPause, MdPlayArrow } from "react-icons/md";
import { useStore } from "../../lib/state-store";
import { CloseIconButton } from "../@shared/close-icon-button";
import { SlideUp } from "../@shared/transitions";
import { NAV_BAR_HEIGHT } from "../app/navigation/navigation-constants";
import { VideoPlayer } from "./video-player";
import { VideoThumbnail } from "./video-thumbnail";

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
    width: "100vw",
    bottom: 0,
    [theme.breakpoints.down("xs")]: {
      bottom: NAV_BAR_HEIGHT,
    },
  },
  minimizedPaper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: theme.breakpoints.width("md"),
    margin: "auto",
  },
  minimizedThumbnail: {
    width: "100%",
    height: "100%",
  },
  minimizedContentWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(2),
    justifyContent: "space-between",
  },
}));

export const VideoPlayerCardModal = () => {
  const classes = useStyles();
  const videoState = useStore((state) => state.video);

  useEffect(() => {
    if (videoState.modalState === "open") {
      videoState.setPlayerState("playing");
    }
  }, [videoState.modalState]);

  if (!videoState.currentVideo) {
    return null;
  }

  return (
    <Dialog
      TransitionComponent={SlideUp}
      open={videoState.modalState === "open"}
      onClose={() => {
        videoState.setModalState("minimized");
      }}
      classes={{ paper: classes.paper }}
      keepMounted
    >
      {videoState.modalState !== "closed" && (
        <VideoPlayer
          playing={videoState.playerState === "playing"}
          url={videoState.currentVideo.url}
          onPlay={() => {
            videoState.setPlayerState("playing");
          }}
          onPause={() => {
            videoState.setPlayerState("paused");
          }}
          onEnded={() => {
            videoState.setPlayerState("paused");
          }}
        />
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
              videoState.setModalState("minimized");
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
    <Slide direction="up" in={videoState.modalState === "minimized"}>
      <div className={classes.minimized}>
        <Paper
          className={classes.minimizedPaper}
          onClick={() => {
            videoState.setModalState("open");
          }}
        >
          <div className={classes.minimizedContentWrapper}>
            <Box marginRight={2}>
              <Avatar variant="square">
                <VideoThumbnail
                  className={classes.minimizedThumbnail}
                  ratio={1}
                  video={videoState.currentVideo}
                />
              </Avatar>
            </Box>
            <Box flex={1}>
              <Typography variant="subtitle1" color="textPrimary" noWrap>
                {videoState.currentVideo.name}
              </Typography>

              <Typography variant="subtitle2" color="textSecondary" noWrap>
                {videoState.currentVideo.tags.map((tag) => tag.name).join(", ")}
              </Typography>
            </Box>

            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                videoState.setPlayerState(
                  videoState.playerState === "playing" ? "paused" : "playing"
                );
              }}
            >
              {videoState.playerState === "paused" ? (
                <MdPlayArrow />
              ) : (
                <MdPause />
              )}
            </IconButton>

            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                videoState.setModalState("closed");
              }}
            >
              <MdClose />
            </IconButton>
          </div>
        </Paper>
      </div>
    </Slide>
  );
};
