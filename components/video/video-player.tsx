import ReactPlayer, { YouTubePlayerProps } from "react-player/youtube";
import { AspectRatio } from "../@shared/aspect-ratio";

export const VideoPlayer = (props: YouTubePlayerProps) => {
  return (
    <AspectRatio ratio={[16, 9]}>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        config={{
          playerVars: {
            modestBranding: 1,
          },
          embedOptions: {
            modestBranding: 1,
          },
        }}
        {...props}
      />
    </AspectRatio>
  );
};
