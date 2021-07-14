import {
  CardActionArea,
  CardLayout,
  CardLayoutHeadline,
  CollectionImage,
  Image,
} from "@components/generic";
import { IImageGallery, IVideoGallery } from "@data-access";
import { formatCollectionCount } from "@utility";
import React from "react";
import { routes } from "../../shared";

export const ImageGalleriesCard = ({
  imageGalleries,
}: {
  imageGalleries: IImageGallery[];
}) => {
  return (
    <CardActionArea href={routes.allImageGalleries()}>
      <CardLayoutHeadline
        background={
          <CollectionImage
            aspectRatio={16 / 9}
            srcs={imageGalleries.map(
              (imageGallery) => imageGallery.thumbnail.url
            )}
          />
        }
        headline="See All Photos"
      />
    </CardActionArea>
  );
};

export const ImageGalleryCard = ({
  imageGallery,
}: {
  imageGallery: IImageGallery;
}) => {
  return (
    <CardActionArea href={routes.singleImageGallery(imageGallery.slug)}>
      <CardLayout
        key={imageGallery.slug}
        background={
          <Image
            aspectRatio={16 / 9}
            src={imageGallery.thumbnail.url}
            alt={imageGallery.name}
          />
        }
        title={imageGallery.name}
        subtitle={formatCollectionCount({
          singularWord: "Photo",
          count: imageGallery.imageCount,
        })}
      />
    </CardActionArea>
  );
};
