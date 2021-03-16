import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { IVideo } from "../../lib/data-access";
import { CardHeader } from "../shared/card-header";
import { VideoIcon } from "../shared/icons";
import { toSubtitle } from "./video";
import { VideoThumbnail, VideoThumbnailSkeleton } from "./video-thumbnail";

export const VideoThumbnailCard = (props: { video: IVideo }) => {
  const { video } = props;

  return (
    <Card>
      <CardHeader
        avatar={<VideoIcon />}
        titleTypographyProps={{
          variant: "h6",
          noWrap: true,
        }}
        title={video.name}
        subheaderTypographyProps={{ noWrap: true }}
        subheader={toSubtitle(video)}
      />

      <VideoThumbnail video={video} />
    </Card>
  );
};

export const VideoThumbnailCardSkeleton = () => {
  return (
    <Card>
      <CardHeader
        avatar={<Skeleton variant="circle" height="32px" width="32px" />}
        //@ts-ignore
        title={<Skeleton variant="text" height="2.5em" width="50%" />}
        subheader={<Skeleton variant="text" height="1.25em" width="75%" />}
      />

      <VideoThumbnailSkeleton />
    </Card>
  );
};
