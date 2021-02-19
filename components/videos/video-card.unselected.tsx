import {
  Card,
  CardHeader,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import { IVideo } from "../../lib/contracts";
import { VideoThumbnail } from "./video-thumbnail";

type IVideoCardUnselectedProps = {
  onClick: () => void;
  video: IVideo;
};

const useStylesCardHeader = makeStyles(() => ({
  root: {
    overflow: "hidden",
  },
  content: {
    overflow: "hidden",
  },
}));

export const VideoCardUnselected = (props: IVideoCardUnselectedProps) => {
  const { video, onClick } = props;

  const classesCardHeader = useStylesCardHeader();

  return (
    <Card onClick={onClick}>
      <CardHeader
        classes={classesCardHeader}
        title={
          <Typography variant="h5" noWrap>
            {video.name}
          </Typography>
        }
        subheader="Video"
        action={
          <IconButton aria-label="play the band Alibi video">
            <PlayArrowIcon />
          </IconButton>
        }
      />

      <VideoThumbnail video={video} />
    </Card>
  );
};
