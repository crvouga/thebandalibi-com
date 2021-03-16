import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { IVideo } from "../../lib/data-access";
import { CardHeader } from "../shared/card-header";
import { VideoCardSubheader } from "./video-card-subheader";
import { VideoPlayPauseIcon } from "./video-play-pause-icon";
import { VideoThumbnail, VideoThumbnailSkeleton } from "./video-thumbnail";
import { useVideoState } from "./video-state";
import { useAnimationStyles } from "../shared/use-animation-styles";
import clsx from "clsx";

export const VideoThumbnailCard = (props: { video: IVideo }) => {
  const { video } = props;

  const videoState = useVideoState();
  const animationClasses = useAnimationStyles();

  return (
    <Card>
      <CardHeader
        className={clsx({
          [animationClasses.flicker]:
            videoState.isCurrentVideo(video) && videoState.isPlaying,
        })}
        avatar={<VideoPlayPauseIcon video={video} />}
        titleTypographyProps={{
          variant: "h6",
          noWrap: true,
        }}
        title={video.name}
        subheader={<VideoCardSubheader video={video} />}
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
