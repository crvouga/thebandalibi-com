import ReactPlayer from "react-player/youtube";
import { IVideo } from "@data-access";
import { AspectRatio } from "@ui";
import { useVideoState } from "../../../features/content/data-access/video-state";

/* 

docs: https://www.npmjs.com/package/react-player

*/

export const VideoPlayer = ({ currentVideo }: { currentVideo?: IVideo }) => {
  const {
    playerState,
    setPlayerState,
    setProgress,
    setDurationSeconds,
  } = useVideoState();

  return (
    <AspectRatio ratio={[16, 9]}>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing={playerState === "playing"}
        url={currentVideo?.url}
        onDuration={(durationSeconds) => {
          setDurationSeconds(durationSeconds);
        }}
        onProgress={(progress) => {
          setProgress(progress);
        }}
        onPlay={() => {
          setPlayerState("playing");
        }}
        onPause={() => {
          setPlayerState("paused");
        }}
        onEnded={() => {
          setPlayerState("paused");
        }}
        config={{
          onUnstarted: () => {
            setPlayerState("paused");
          },
          playerVars: {
            autoplay: 1,
            modestBranding: 1,
          },
        }}
      />
    </AspectRatio>
  );
};
