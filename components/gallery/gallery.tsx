import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Image from "next/image";
import React from "react";
import { IGallery } from "../../lib/contracts";
import { AspectRatio } from "../aspect-ratio";

type IGalleryCardProps = {
  gallery: IGallery;
};

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
}));

export const GalleryItem = (props: { image: string }) => {
  const { image } = props;
  const classes = useStyles();
  return (
    <Card>
      <AspectRatio ratio={[1, 1]}>
        <Image className={classes.cover} layout="fill" src={image} />
      </AspectRatio>
    </Card>
  );
};

export const Gallery = (props: IGalleryCardProps) => {
  const { gallery } = props;

  return (
    <div>
      {gallery.images.map((image) => (
        <div key={image}>
          <GalleryItem image={image} />
        </div>
      ))}
    </div>
  );
};
