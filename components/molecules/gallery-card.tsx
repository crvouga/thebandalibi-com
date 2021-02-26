import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Image from "next/image";
import React from "react";
import { IGallery } from "../../lib/contracts";
import { AspectRatio } from "../atoms/aspect-ratio";
import { CardHeader } from "../atoms/card-header";

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
}));

export const GalleryCard = React.forwardRef(
  (
    {
      gallery,
    }: {
      gallery: IGallery;
    },
    ref
  ) => {
    const classes = useStyles();

    return (
      <Card ref={ref}>
        <CardHeader
          titleTypographyProps={{ noWrap: true }}
          title={gallery.name}
          subheader={`${gallery.images.length} Photos`}
        />

        <AspectRatio ratio={[16, 9]}>
          <Image
            className={classes.cover}
            layout="fill"
            src={gallery.images[0].url}
          />
        </AspectRatio>
      </Card>
    );
  }
);
