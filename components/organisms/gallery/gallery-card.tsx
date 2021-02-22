import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Image from "next/image";
import React from "react";
import { IGallery } from "../../../lib/contracts";
import { AspectRatio } from "../../atoms/aspect-ratio";

type IGalleryCardProps = {
  gallery: IGallery;
};

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
}));

export const GalleryCard = (props: IGalleryCardProps) => {
  const { gallery } = props;
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        title={gallery.name}
        subheader={`${gallery.images.length} Photos`}
      />

      <AspectRatio ratio={[16, 9]}>
        <Image
          className={classes.cover}
          layout="fill"
          src={gallery.images[0]}
        />
      </AspectRatio>
    </Card>
  );
};
