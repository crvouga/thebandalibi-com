import Card from "@material-ui/core/Card";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { IVideo } from "../../lib/domain";
import { CardHeader } from "../@shared/card-header";
import { VideoThumbnail, VideoThumbnailSkeleton } from "./video-thumbnail";
import { Paper, useTheme } from "@material-ui/core";

export const VideoThumbnailCard = (props: { video: IVideo }) => {
  const { video } = props;

  return (
    <Card>
      <CardHeader
        avatar={<PlayArrowIcon />}
        titleTypographyProps={{
          variant: "h6",
          gutterBottom: true,
          noWrap: true,
        }}
        title={video.name}
      />

      <VideoThumbnail video={video} />
    </Card>
  );
};

export const VideoThumbnailCardSkeleton = () => {
  const theme = useTheme();
  return (
    <Card style={{ backgroundColor: "transparent" }}>
      <CardHeader
        style={{ backgroundColor: theme.palette.background.paper }}
        avatar={<Skeleton variant="circle" height="32px" width="32px" />}
        //@ts-ignore
        title={<Skeleton variant="text" height="2.5em" width="12em" />}
      />

      <VideoThumbnailSkeleton />
    </Card>
  );
};
