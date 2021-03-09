import { VideoPlayerModalMaximized } from "./video-player-modal-maximized";
import { VideoPlayerModalMinimized } from "./video-player-modal-minimized";
import { useVideoState } from "./video-state";

export const VideoPlayerModal = () => {
  const { currentVideo } = useVideoState();

  if (!currentVideo) {
    return null;
  }

  return (
    <>
      <VideoPlayerModalMaximized currentVideo={currentVideo} />
      <VideoPlayerModalMinimized currentVideo={currentVideo} />
    </>
  );
};
