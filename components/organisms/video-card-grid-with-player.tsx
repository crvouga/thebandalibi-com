import React, { useState } from "react";
import { IVideo } from "../../lib/contracts";
import { useBoolean } from "../atoms/use-boolean";
import { VideoCardGrid } from "./video-card-grid";
import { VideoPlayerCardModal } from "./video-player-card-modal";

export const VideoCardGridWithPlayer = ({ videos }: { videos: IVideo[] }) => {
  const [selected, setSelected] = useState(videos[0]);

  const isOpen = useBoolean(false);

  const handleVideoCardClick = (video: IVideo) => {
    isOpen.setTrue();
    setSelected(video);
  };

  return (
    <React.Fragment>
      <VideoCardGrid videos={videos} onClick={handleVideoCardClick} />
      <VideoPlayerCardModal
        open={isOpen.value}
        onClose={isOpen.setFalse}
        video={selected}
      />
    </React.Fragment>
  );
};
