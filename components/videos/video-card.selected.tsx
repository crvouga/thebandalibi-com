import Card, { CardProps } from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { IVideo } from "../../lib/contracts";
import { SEO_KEYWORD } from "../meta";
import { VideoPlayer } from "./video-player";

type IVideoCardSelectedProps = {
  video: IVideo;
  onClose: () => void;
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
      <VideoPlayer playing video={video} />
    </Card>
  );
};
