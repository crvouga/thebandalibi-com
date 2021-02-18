import Card, { CardProps } from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { IVideo } from "../../lib/contracts";
import { VideoPlayer } from "./video-player";

type IVideoCardProps = {
  video: IVideo;
};

export const VideoCard = (props: IVideoCardProps & CardProps) => {
  const { video, ...cardProps } = props;

  return (
    <Card {...cardProps}>
      <CardHeader title={video.name} />
      <VideoPlayer video={video} />
    </Card>
  );
};
