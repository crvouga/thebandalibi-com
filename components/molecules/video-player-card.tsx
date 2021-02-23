import Button from "@material-ui/core/Button";
import Card, { CardProps } from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader, { CardHeaderProps } from "@material-ui/core/CardHeader";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { IVideo } from "../../lib/contracts";
import { VideoPlayer } from "../atoms/video-player";

type IVideoPlayerCardProps = CardProps & {
  video: IVideo;
  CardHeaderProps?: CardHeaderProps;
};

const stopPropagation = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  event.stopPropagation();
};

export const VideoPlayerCard = (props: IVideoPlayerCardProps) => {
  const { video, CardHeaderProps, ...CardProps } = props;

  return (
    <Card {...CardProps}>
      <CardHeader title={video.name} subheader="Video" {...CardHeaderProps} />
      <div onClick={stopPropagation}>
        <VideoPlayer light playing video={video} />
        <CardActions>
          <Button
            startIcon={<YouTubeIcon />}
            href={video.url}
            fullWidth
            size="large"
            // variant="contained"
          >
            Watch On YouTube
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
