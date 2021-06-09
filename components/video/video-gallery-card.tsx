import { IVideoGallery } from "@data-access";
import { CollectionCard } from "@ui";
import { formatCollectionCount, toYouTubeThumbnailUrl } from "@utility";
import React from "react";

export const VideoGalleryCard = ({
  videoGallery,
}: {
  videoGallery: IVideoGallery;
}) => {
  return (
    <CollectionCard
      srcs={videoGallery.videos.map((_) => toYouTubeThumbnailUrl(_.url))}
      title={videoGallery.name}
      subheader={formatCollectionCount({
        count: videoGallery.videoCount,
        singularWord: "Video",
      })}
      aspectRatio={16 / 9}
    />
  );
};
