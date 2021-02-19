import Button from "@material-ui/core/Button";
import Card, { CardProps } from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { IVideo } from "../../lib/contracts";
import { SEO_KEYWORD } from "../meta";
import { VideoPlayer } from "./video-player";
type IVideoCardSelectedProps = {
  video: IVideo;
  onClose: () => void;
};

const stopPropagation = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  event.stopPropagation();
};

export const VideoCardSelected = (
  props: IVideoCardSelectedProps & CardProps
) => {
  const { video, onClose, ...cardProps } = props;

  return (
    <Card {...cardProps}>
      <CardHeader
        title={video.name}
        subheader="Video"
        action={
          <IconButton
            aria-label={`close video ${SEO_KEYWORD}`}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        }
      />
      <div onClick={stopPropagation}>
        <VideoPlayer light playing video={video} />
        <CardActions>
          <Button
            startIcon={<YouTubeIcon />}
            href={video.url}
            fullWidth
            size="large"
          >
            Watch On YouTube
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
