import CardActionArea from "@material-ui/core/CardActionArea";
import React from "react";
import { IVideo } from "@data-access";
import { ResponsiveUniformGrid } from "generic-components";
import {
  VideoThumbnailCard,
  VideoThumbnailCardSkeleton,
} from "./video-thumbnail-card";

export const VideoCardGridSkeleton = ({ count }: { count: number }) => {
  return (
    <ResponsiveUniformGrid>
      {[...Array(count)].map((_, index) => (
        <VideoThumbnailCardSkeleton key={index} />
      ))}
    </ResponsiveUniformGrid>
  );
};

export const VideoCardGrid = ({
  videos,
  onClick,
}: {
  videos: IVideo[];
  onClick?: (video: IVideo) => void;
}) => {
  return (
    <ResponsiveUniformGrid>
      {videos.map((video) => (
        <CardActionArea
          key={video.url}
          onClick={() => {
            onClick?.(video);
          }}
        >
          <VideoThumbnailCard video={video} />
        </CardActionArea>
      ))}
    </ResponsiveUniformGrid>
  );
};
