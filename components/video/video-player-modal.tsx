import { VideoPlayerModalMaximized } from "./video-player-modal-maximized";
import { VideoPlayerModalMinimized } from "./video-player-modal-minimized";
import { useVideoState } from "./video-state";

export const VideoPlayerModal = () => {
  const videoState = useVideoState();

  if (!videoState.currentVideo) {
    return null;
  }

  return (
    <>
      <VideoPlayerModalMaximized currentVideo={videoState.currentVideo} />
      <VideoPlayerModalMinimized currentVideo={videoState.currentVideo} />
    </>
  );
};
