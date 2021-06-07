import { makeStyles } from "@material-ui/core";
import { AspectRatio } from "@ui";
import NextImage from "next/image";
import React from "react";

const useStyles = makeStyles(() => ({
  aspectRatio: {
    position: "relative",
    width: "100%",
  },
}));

export const Image = ({
  src,
  alt,
  aspectRatio,
}: {
  aspectRatio: number;
  src: string;
  alt: string;
}) => {
  const classes = useStyles();

  return (
    <AspectRatio className={classes.aspectRatio} ratio={aspectRatio}>
      <NextImage layout="fill" src={src} alt={alt} />
    </AspectRatio>
  );
};
