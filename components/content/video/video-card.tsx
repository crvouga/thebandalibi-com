import { IVideo } from "@data-access";
import { toYouTubeThumbnailUrl } from "@utility";
import { CardActionArea, CardLayout, Image } from "generic-components";
import React from "react";

export const VideoCard = ({
  onClick,
  video,
}: {
  video: IVideo;
  onClick: () => void;
}) => {
  return (
    <CardActionArea onClick={onClick}>
      <CardLayout
        background={
          <Image
            alt={video.name}
            aspectRatio={16 / 9}
            src={toYouTubeThumbnailUrl(video.url)}
          />
        }
        title={video.name}
        subtitle=""
      />
    </CardActionArea>
  );
};
