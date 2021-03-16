import ReactPlayer from "react-player/youtube";
import { IVideo } from "../../lib/data-access";
import { AspectRatio } from "../shared/aspect-ratio";
import { useVideoState } from "./video-state";

/* 

docs: https://www.npmjs.com/package/react-player

*/

export const VideoPlayer = ({ currentVideo }: { currentVideo: IVideo }) => {
  const videoState = useVideoState();

  return (
    <AspectRatio ratio={[16, 9]}>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing={videoState.playerState === "playing"}
        url={currentVideo.url}
        onPlay={() => {
          videoState.setPlayerState("playing");
        }}
        onPause={() => {
          videoState.setPlayerState("paused");
        }}
        onEnded={() => {
          videoState.setPlayerState("paused");
        }}
        config={{
          onUnstarted: () => {
            videoState.setPlayerState("paused");
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
