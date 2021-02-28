import Card from "@material-ui/core/Card";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import { IVideo } from "../../lib/domain";
import { CardHeader } from "../@shared/card-header";
import { VideoThumbnail } from "./video-thumbnail";

type IVideoThumbnailCardProps = {
  video: IVideo;
};

export const VideoThumbnailCard = (props: IVideoThumbnailCardProps) => {
  const { video } = props;

  return (
    <Card>
      <CardHeader
        avatar={<PlayArrowIcon />}
        titleTypographyProps={{ noWrap: true }}
        title={video.name}
      />

      <VideoThumbnail video={video} />
    </Card>
  );
};