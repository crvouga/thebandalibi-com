import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import clsx from "clsx";
import React from "react";
import { IVideo } from "@core";
import { CardHeader } from "../shared/card-header";
import { useAnimationStyles } from "../shared/use-animation-styles";
// import { VideoCardSubheader } from "./video-card-subheader";
import { useVideoState } from "./video-state";
import { VideoThumbnail, VideoThumbnailSkeleton } from "./video-thumbnail";

export const VideoThumbnailCard = (props: { video: IVideo }) => {
  const { video } = props;

  const videoState = useVideoState();
  const animationClasses = useAnimationStyles();

  return (
    <Card>
      <VideoThumbnail video={video} />
      <CardHeader
        className={clsx({
          [animationClasses.flicker]:
            videoState.isCurrentVideo(video) && videoState.isPlaying,
        })}
        title={video.name}
        titleTypographyProps={{ noWrap: true }}
        // subheader={<VideoCardSubheader video={video} />}
      />
    </Card>
  );
};

export const VideoThumbnailCardSkeleton = () => {
  return (
    <Card>
      <VideoThumbnailSkeleton />
      <CardHeader
        //@ts-ignore
        title={<Skeleton variant="text" height="1.75em" width="50%" />}
        // subheader={<Skeleton variant="text" height="1em" width="75%" />}
      />
    </Card>
  );
};
