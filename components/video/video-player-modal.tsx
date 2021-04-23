import { Gutter } from "../app/navigation/gutter";
import { VideoPlayerModalMaximized } from "./video-player-modal-maximized";
import { VideoPlayerModalMinimized } from "./video-player-modal-minimized";

export const VideoPlayerModalAndGutter = () => {
  return (
    <>
      <VideoPlayerModalMaximized />
      <VideoPlayerModalMinimized />
      <Gutter />
    </>
  );
};
