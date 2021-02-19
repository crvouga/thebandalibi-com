import { Card, CardHeader, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import { IVideo } from "../../lib/contracts";
import { VideoThumbnail } from "./video-thumbnail";

type IVideoCardUnselectedProps = {
  onClick: () => void;
  video: IVideo;
};

export const VideoCardUnselected = (props: IVideoCardUnselectedProps) => {
  const { video, onClick } = props;

  return (
    <Card onClick={onClick}>
      <CardHeader
        titleTypographyProps={{ noWrap: true }}
        title={video.name}
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
