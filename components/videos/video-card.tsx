import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import { IVideo } from "../../lib/contracts";
import { VideoPlayer } from "./video-player";

type IVideoCardProps = {
  video: IVideo;
};

const useStyles = makeStyles(() => ({
  root: {},
}));

export const VideoCard = (props: IVideoCardProps) => {
  const { video } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={video.name} />
      <VideoPlayer video={video} />
    </Card>
  );
};
