import Typography from "@material-ui/core/Typography";
import { IVideo } from "../lib/contracts";

type IVideoProps = {
  video: IVideo;
};

const Video = (props: IVideoProps) => {
  const { video } = props;
  return <div>{JSON.stringify(video, null, 2)}</div>;
};

type IVideosProps = {
  videos: IVideo[];
};

export const Videos = (props: IVideosProps) => {
  const { videos } = props;
  return (
    <div>
      <Typography variant="h1" color="initial">
        Videos
      </Typography>
      {videos.map((video) => (
        <Video key={video.url} video={video} />
      ))}
    </div>
  );
};
