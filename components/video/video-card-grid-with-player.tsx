import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { IVideo } from "../../lib/domain";
import { Clickable } from "../@shared/clickable";
import { CloseIconButton } from "../@shared/close-icon-button";
import { SlideDown } from "../@shared/transitions";
import { UniformGrid } from "../@shared/uniform-grid";
import { useBoolean } from "../@shared/use-boolean";
import { VideoPlayerCard } from "./video-player-card";
import {
  VideoThumbnailCard,
  VideoThumbnailCardSkeleton,
} from "./video-thumbnail-card";

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

export const VideoCardGridSkeleton = ({ count }: { count: number }) => {
  return (
    <UniformGrid>
      {[...Array(count)].map((_, index) => (
        <VideoThumbnailCardSkeleton key={index} />
      ))}
    </UniformGrid>
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
      <UniformGrid>
        {videos.map((video) => (
          <Clickable
            key={video.url}
            onClick={() => {
              handleVideoCardClick(video);
            }}
          >
            <VideoThumbnailCard video={video} />
          </Clickable>
        ))}
      </UniformGrid>

      <VideoPlayerCardModal
        open={isOpen.value}
        onClose={isOpen.setFalse}
        video={selected}
      />
    </React.Fragment>
  );
};
