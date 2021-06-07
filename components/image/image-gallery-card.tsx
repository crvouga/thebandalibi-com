import { IImageGallery } from "@data-access";
import Box from "@material-ui/core/Box";
import { CardHeader, CollectionThumbnail } from "@ui";
import { abbreviateNumber, plural } from "@utility";
import React from "react";

export const ImageGalleryCard = ({
  imageGallery,
}: {
  imageGallery: IImageGallery;
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <CollectionThumbnail
        aspectRatio={16 / 9}
        srcs={imageGallery.images.map((image) => image.url)}
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
