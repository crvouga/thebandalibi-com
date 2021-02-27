import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "../@shared/aspect-ratio";
import { CardHeader } from "../@shared/card-header";
import { IImageGallery } from "../../lib/domain/image-gallery";

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
}));

export const ImageGalleryCard = React.forwardRef(
  (
    {
      imageGallery,
    }: {
      imageGallery: IImageGallery;
    },
    ref
  ) => {
    const classes = useStyles();

    return (
      <Card ref={ref}>
        <CardHeader
          titleTypographyProps={{ noWrap: true }}
          title={imageGallery.name}
          subheader={`${imageGallery.images.length} Photos`}
        />

        <AspectRatio ratio={[16, 9]}>
          <Image
            className={classes.cover}
            layout="fill"
            src={imageGallery.images[0].url}
          />
        </AspectRatio>
      </Card>
    );
  }
);
