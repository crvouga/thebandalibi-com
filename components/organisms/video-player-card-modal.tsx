import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IVideo } from "../../lib/contracts";
import { CloseIconButton } from "../atoms/close-icon-button";
import { SlideUp } from "../atoms/transitions";
import { VideoPlayerCard } from "../molecules/video-player-card";

const useStylesDialog = makeStyles((theme) => ({
  root: {},
  paper: {
    position: "absolute",
    top: 0,
    width: "100vw",
    margin: 0,
    maxWidth: theme.breakpoints.values.md,
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
  const classesDialog = useStylesDialog();
  return (
    <Dialog
      TransitionComponent={SlideUp}
      classes={classesDialog}
      open={open}
      onClose={onClose}
    >
      <VideoPlayerCard
        video={video}
        CardHeaderProps={{
          action: <CloseIconButton onClick={onClose} />,
        }}
      />
    </Dialog>
  );
};
