import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { IVideo } from "../../lib/domain";
import { Clickable } from "../atoms/clickable";
import { CloseIconButton } from "../atoms/close-icon-button";
import { SlideDown } from "../atoms/transitions";
import { useBoolean } from "../atoms/use-boolean";
import { VideoPlayerCard } from "../molecules/video-player-card";
import { VideoThumbnailCard } from "../molecules/video-thumbnail-card";
import { ItemGrid } from "./item-grid";

const useStylesDialog = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: 0,
    width: "100vw",
    margin: 0,
    maxWidth: theme.breakpoints.values.md,
  },
}));

const VideoPlayerCardModal = ({
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
      TransitionComponent={SlideDown}
      classes={classesDialog}
      open={open}
      onClose={onClose}
      keepMounted
    >
      <VideoPlayerCard
        playing={open}
        video={video}
        CardHeaderProps={{
          action: <CloseIconButton onClick={onClose} />,
        }}
      />
    </Dialog>
  );
};

export const VideoCardGridWithPlayer = ({ videos }: { videos: IVideo[] }) => {
  const [selected, setSelected] = useState(videos[0]);

  const isOpen = useBoolean(false);

  const handleVideoCardClick = (video: IVideo) => {
    isOpen.setTrue();
    setSelected(video);
  };

  return (
    <React.Fragment>
      <ItemGrid
        items={videos}
        getItemKey={(video) => video.url}
        renderItem={(video) => (
          <Clickable
            onClick={() => {
              handleVideoCardClick(video);
            }}
          >
            <VideoThumbnailCard video={video} />
          </Clickable>
        )}
      />

      <VideoPlayerCardModal
        open={isOpen.value}
        onClose={isOpen.setFalse}
        video={selected}
      />
    </React.Fragment>
  );
};
