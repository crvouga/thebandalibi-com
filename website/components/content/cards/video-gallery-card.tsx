import { IVideoGallery } from "@data-access";
import { formatCollectionCount } from "@utility";
import { CardActionArea, CardLayout, Image } from "@components/generic";
import React from "react";
import { routes } from "../../top-level";

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
