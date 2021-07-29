import { IVideo } from "@data-access";
import { toYouTubeThumbnailUrl } from "@utility";
import { CardActionArea, CardLayout, Image } from "@components/generic";
import React from "react";

export const VideoCard = ({
  onClick,
  video,
  subtitle,
}: {
  video: IVideo;
  subtitle?: string;
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
        subtitle={subtitle}
      />
    </CardActionArea>
  );
};
