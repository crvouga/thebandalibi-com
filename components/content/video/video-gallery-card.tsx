import { IVideoGallery } from "@data-access";
import { formatCollectionCount, toYouTubeThumbnailUrl } from "@utility";
import {
  CardActionArea,
  CardLayout,
  CollectionThumbnail,
} from "generic-components";
import React from "react";
import { routes } from "routes";

export const VideoGalleryCard = ({
  videoGallery,
}: {
  videoGallery: IVideoGallery;
}) => {
  return (
    <CardActionArea href={routes.singleVideoGallery(videoGallery.slug)}>
      <CardLayout
        background={
          <CollectionThumbnail
            aspectRatio={16 / 9}
            srcs={videoGallery.videos.map((_) => toYouTubeThumbnailUrl(_.url))}
          />
        }
        title={videoGallery.name}
        subtitle={formatCollectionCount({
          count: videoGallery.videoCount,
          singularWord: "Video",
        })}
      />
    </CardActionArea>
  );
};
