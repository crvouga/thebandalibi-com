import { IImageGallery } from "@data-access";
import { formatCollectionCount } from "@utility";
import {
  CardActionArea,
  CardLayout,
  CollectionThumbnail,
} from "generic-components";
import React from "react";
import { routes } from "../../../routes";

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
          <CollectionThumbnail
            aspectRatio={16 / 9}
            srcs={imageGallery.images.map((image) => image.url)}
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
