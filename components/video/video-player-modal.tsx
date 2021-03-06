import { Dialog, DialogProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { IVideo } from "../../lib/domain";
import { CloseIconButton } from "../@shared/close-icon-button";
import { SlideDown } from "../@shared/transitions";
import { VideoPlayerCard } from "./video-player-card";

const useStylesDialog = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    margin: 0,
  },
  paper: {
    position: "absolute",
    top: 0,
    margin: 0,
    width: "100vw",
    maxWidth: theme.breakpoints.values.md,
  },
}));

export const VideoPlayerCardModal = ({
  video,
  open,
  onClose,
  ...DialogProps
}: DialogProps & {
  video: IVideo | null;
  open: boolean;
  onClose?: () => void;
}) => {
  const classesDialog = useStylesDialog();
  return (
    <Dialog
      TransitionComponent={SlideDown}
      classes={classesDialog}
      open={open}
      onClose={onClose}
      {...DialogProps}
    >
      {video && (
        <VideoPlayerCard
          video={video}
          CardHeaderProps={{
            action: <CloseIconButton onClick={onClose} />,
          }}
        />
      )}
    </Dialog>
  );
};
