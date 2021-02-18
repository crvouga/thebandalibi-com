import Card, { CardProps } from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import { IVideo } from "../../lib/contracts";
import { VideoThumbnail } from "./video-thumbnail";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

type IVideoCardUnselectedProps = CardProps & {
  onClick: () => void;
  video: IVideo;
};

const useStyles = makeStyles((theme) => ({
  thumbnailWrapper: {
    position: "relative",
  },
  playArrowIconWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  playArrowIcon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export const VideoCardUnselected = (props: IVideoCardUnselectedProps) => {
  const { video, onClick, ...cardProps } = props;

  const classes = useStyles();

  return (
    <CardActionArea onClick={onClick}>
      <Card {...cardProps}>
        <CardHeader title={video.name} />

        <div className={classes.thumbnailWrapper}>
          <VideoThumbnail video={video} />
          <div className={classes.playArrowIconWrapper}>
            <PlayArrowIcon className={classes.playArrowIcon} />
          </div>
        </div>
      </Card>
    </CardActionArea>
  );
};
