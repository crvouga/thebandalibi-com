import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "../aspect-ratio";

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
}));

export const ImageCard = (props: { image: string }) => {
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
