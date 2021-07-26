import { CardActionArea, CardLayout, Image } from "@components/generic";
import { IImageGallery } from "@data-access";
import { formatCollectionCount } from "@utility";
import React from "react";
import { ROUTES } from "@config";

export const ImageGalleryCard = ({
  imageGallery,
}: {
  imageGallery: IImageGallery;
}) => {
  return (
    <CardActionArea href={ROUTES.singleImageGallery(imageGallery.slug)}>
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
