import React from "react";
import { IVideo } from "../../lib/domain";
import { Clickable } from "../shared/clickable";
import { UniformGrid } from "../shared/uniform-grid";
import {
  VideoThumbnailCard,
  VideoThumbnailCardSkeleton,
} from "./video-thumbnail-card";

export const VideoCardGridSkeleton = ({ count }: { count: number }) => {
  return (
    <UniformGrid>
      {[...Array(count)].map((_, index) => (
        <VideoThumbnailCardSkeleton key={index} />
      ))}
    </UniformGrid>
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
    <UniformGrid>
      {videos.map((video) => (
        <Clickable
          key={video.url}
          onClick={() => {
            onClick?.(video);
          }}
        >
          <VideoThumbnailCard video={video} />
        </Clickable>
      ))}
    </UniformGrid>
  );
};
