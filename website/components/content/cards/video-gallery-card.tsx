import {
  CardActionArea,
  CardLayout,
  CardLayoutHeadline,
  CollectionImage,
  Image,
} from "@components/generic";
import { IVideoGallery } from "@data-access";
import { formatCollectionCount } from "@utility";
import React from "react";
import { routes } from "../../shared";

export const VideoGalleriesCard = ({
  videoGalleries,
}: {
  videoGalleries: IVideoGallery[];
}) => {
  return (
    <CardActionArea href={routes.allVideoGalleries()}>
      <CardLayoutHeadline
        background={
          <CollectionImage
            aspectRatio={16 / 9}
            srcs={videoGalleries.map(
              (videoGallery) => videoGallery.thumbnail.url
            )}
          />
        }
        headline="See All Videos"
      />
    </CardActionArea>
  );
};

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
