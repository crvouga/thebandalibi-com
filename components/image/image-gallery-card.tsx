import { IImageGallery } from "@core";
import Box from "@material-ui/core/Box";
import React from "react";
import { abbreviateNumber } from "../../lib/utility";
import { plural } from "../../lib/utility/words";
import { CardHeader } from "../shared/card-header";
import { CollectionImage } from "../shared/collection-image";

export const ImageGalleryCard = ({
  imageGallery,
}: {
  imageGallery: IImageGallery;
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <CollectionImage
        aspectRatio={16 / 9}
        images={imageGallery.images.map((image) => image.url)}
      />

      <CardHeader
        titleTypographyProps={{ noWrap: true }}
        title={imageGallery.name}
        subheader={plural({
          count: abbreviateNumber(imageGallery.imageCount),
          singularWord: "Photo",
        })}
      />
    </Box>
  );
};
