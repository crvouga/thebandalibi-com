import { IVideo } from "@core";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { CardHeader } from "../shared/card-header";
import { VideoThumbnail, VideoThumbnailSkeleton } from "./video-thumbnail";

export const VideoThumbnailCard = (props: { video: IVideo }) => {
  const { video } = props;

  return (
    <Box display="flex" flexDirection="column">
      <VideoThumbnail video={video} />
      <CardHeader title={video.name} titleTypographyProps={{ noWrap: true }} />
    </Box>
  );
};

export const VideoThumbnailCardSkeleton = () => {
  return (
    <Box display="flex" flexDirection="column">
      <VideoThumbnailSkeleton />
      <CardHeader
        //@ts-ignore
        title={<Skeleton variant="text" height="1.75em" width="50%" />}
      />
    </Box>
  );
};
