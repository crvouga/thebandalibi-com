import { VideoPlayerModalMaximized } from "./video-player-modal-maximized";
import { VideoPlayerModalMinimized } from "./video-player-modal-minimized";
import { VideoPlayerModalMinimizedGutter } from "./video-player-modal-minimized-gutter";

export const VideoPlayerModalAndGutter = () => {
  return (
    <>
      <VideoPlayerModalMaximized />
      <VideoPlayerModalMinimized />
      <VideoPlayerModalMinimizedGutter />
    </>
  );
};
