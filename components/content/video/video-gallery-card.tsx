import { IVideoGallery } from "@data-access";
import { formatCollectionCount, toYouTubeThumbnailUrl } from "@utility";
import {
  CardActionArea,
  CardLayout,
  Image,
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
          <Image
            aspectRatio={16 / 9}
            src={toYouTubeThumbnailUrl(videoGallery.videos[0].url)}
            alt={videoGallery.videos[0].name}
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
