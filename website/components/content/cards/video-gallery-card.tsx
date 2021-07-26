import { CardActionArea, CardLayout, Image } from "@components/generic";
import { ROUTES } from "@config";
import { IVideoGallery } from "@data-access";
import { formatCollectionCount } from "@utility";
import React from "react";

export const VideoGalleryCard = ({
  videoGallery,
}: {
  videoGallery: IVideoGallery;
}) => {
  return (
    <CardActionArea href={ROUTES.singleVideoGallery(videoGallery.slug)}>
      <CardLayout
        background={
          <Image
            aspectRatio={16 / 9}
            src={videoGallery.thumbnail.url}
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
