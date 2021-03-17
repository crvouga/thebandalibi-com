import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { CloseIconButton } from "../shared/close-icon-button";
import { SlideUp } from "../shared/transitions";
import { TagChipGroup } from "../tag/tag-chip";
import { VideoPlayer } from "./video-player";
import { useVideoState } from "./video-state";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: 0,
    width: "100%",
    maxWidth: theme.breakpoints.width("md"),
    margin: 0,
  },

  cardHeader: {
    padding: theme.spacing(2),
  },
  cardHeaderMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
        <div className={classes.cardHeader}>
          <div className={classes.cardHeaderMain}>
            <Typography variant="h6" color="initial">
              {videoState.currentVideo.name}
            </Typography>
            <CloseIconButton
              onClick={() => {
                videoState.closeVideo();
              }}
            />
          </div>

          <TagChipGroup
            tags={videoState.currentVideo.tags}
            onClick={(tag) => {
              videoState.openTag(tag);
            }}
            ChipProps={{ size: "small" }}
          />
        </div>
      )}
    </Dialog>
  );
};
