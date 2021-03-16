import { VideoPlayerModalMaximized } from "./video-player-modal-maximized";
import { VideoPlayerModalMinimized } from "./video-player-modal-minimized";

export const VideoPlayerModal = () => {
  return (
    <>
      <VideoPlayerModalMaximized />
      <VideoPlayerModalMinimized />
    </>
  );
};
