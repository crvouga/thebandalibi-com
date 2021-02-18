import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player/youtube";
import { IVideo } from "../../lib/contracts";

type IVideoPlayerProps = {
  video: IVideo;
};

const useStyles = makeStyles(() => ({
  wrapper: {
    position: "relative",
    paddingTop: `${(9 / 16) * 100}%`,
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
  },
}));

export const VideoPlayer = (props: IVideoPlayerProps) => {
  const { video } = props;
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <ReactPlayer
        className={classes.player}
        width="100%"
        height="100%"
        url={video.url}
      />
    </div>
  );
};
