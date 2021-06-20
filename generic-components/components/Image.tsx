import { makeStyles } from "@material-ui/core";
import { AspectRatio } from "generic-components";
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
  priority = false,
}: {
  aspectRatio: number;
  src: string;
  alt: string;
  priority?: boolean;
}) => {
  const classes = useStyles();

  return (
    <AspectRatio className={classes.aspectRatio} ratio={aspectRatio}>
      <NextImage
        priority={priority}
        objectFit="cover"
        layout="fill"
        src={src}
        alt={alt}
      />
    </AspectRatio>
  );
};
