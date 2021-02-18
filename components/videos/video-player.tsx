import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player/youtube";
import { IVideo } from "../../lib/contracts";
import { AspectRatio } from "../aspect-ratio";

type IVideoPlayerProps = {
  video: IVideo;
};

export const VideoPlayer = (props: IVideoPlayerProps) => {
  const { video } = props;

  return (
    <AspectRatio ratio={[16, 9]}>
      <ReactPlayer width="100%" height="100%" url={video.url} />
    </AspectRatio>
  );
};
