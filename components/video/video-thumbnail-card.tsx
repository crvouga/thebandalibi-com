import Card from "@material-ui/core/Card";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import { IVideo } from "../../lib/domain";
import { CardHeader } from "../@shared/card-header";
import { VideoThumbnail, VideoThumbnailSkeleton } from "./video-thumbnail";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";

type IVideoThumbnailCardProps = {
  video: IVideo;
};

export const VideoThumbnailCard = (props: IVideoThumbnailCardProps) => {
  const { video } = props;

  return (
    <Card>
      <CardHeader
        avatar={<PlayArrowIcon />}
        titleTypographyProps={{ variant: "h6", noWrap: true }}
        title={video.name}
      />

      <VideoThumbnail video={video} />
    </Card>
  );
};

export const VideoThumbnailCardSkeleton = () => {
  return (
    <Card>
      <CardHeader
        avatar={<Skeleton variant="circle" width="36px" height="36px" />}
        //@ts-ignore
        title={<Skeleton variant="text" height="2em" width="10em" />}
      />

      <VideoThumbnailSkeleton />
    </Card>
  );
};
