import Button, { ButtonProps } from "@material-ui/core/Button";
import Card, { CardProps } from "@material-ui/core/Card";
import CardHeader, { CardHeaderProps } from "@material-ui/core/CardHeader";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { IVideo } from "../../lib/domain";
import { VideoPlayer } from "./video-player";
import { TagChipGroup } from "../tag/tag-chip";

export const WatchOnYotubeButton = (props: ButtonProps) => {
  return (
    <Button startIcon={<YouTubeIcon />} fullWidth size="large" {...props}>
      Watch On YouTube
    </Button>
  );
};

export const VideoPlayerCard = (
  props: CardProps & {
    video: IVideo;
    CardHeaderProps?: CardHeaderProps;
  }
) => {
  const { video, CardHeaderProps, ...CardProps } = props;

  return (
    <Card {...CardProps}>
      <VideoPlayer playing video={video} />
      <CardHeader
        title={video.name}
        titleTypographyProps={{ gutterBottom: true }}
        subheader={<TagChipGroup wrap tags={video.tags} />}
        {...CardHeaderProps}
      />
    </Card>
  );
};
