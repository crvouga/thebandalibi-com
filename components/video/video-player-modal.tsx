import { CardHeader, Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { IVideo } from "../../lib/domain";
import { CloseIconButton } from "../@shared/close-icon-button";
import { SlideDown } from "../@shared/transitions";
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

export const VideoPlayerCardModal = ({
  video,
  open,
  onClose,
}: {
  video: IVideo;
  open: boolean;
  onClose?: () => void;
}) => {
  const classes = useStyles();

  return (
    <Dialog
      TransitionComponent={SlideDown}
      open={open}
      onClose={onClose}
      classes={{ paper: classes.paper }}
    >
      <VideoPlayer playing url={video.url} />

      <CardHeader
        title={video.name}
        subheader={video.tags.map((tag) => tag.name).join(", ")}
        action={<CloseIconButton onClick={onClose} />}
      />
    </Dialog>
  );
};
