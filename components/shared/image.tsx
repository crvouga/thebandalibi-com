import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import NextImage from "next/image";
import React from "react";
import { IImage } from "@core";
import { AspectRatio } from "./aspect-ratio";
import { useBoolean } from "./use-boolean";

const useStyles = makeStyles(() => ({
  aspectRatio: {
    position: "relative",
    width: "100%",
  },
  wrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  skeleton: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
  },
}));

export const Image = (props: { image: IImage; alt: string }) => {
  const { image, alt } = props;

  const classes = useStyles();

  return (
    <AspectRatio
      className={classes.aspectRatio}
      ratio={image.metadata.dimensions.aspectRatio}
    >
      <NextImage layout="fill" src={image.url} alt={alt} />
    </AspectRatio>
  );
};

export const ImageCard = ({
  src,
  ratio,
  alt,
}: {
  ratio: number;
  src: string;
  alt: string;
}) => {
  return (
    <Card>
      <AspectRatio ratio={ratio}>
        <NextImage objectFit="cover" layout="fill" src={src} alt={alt} />
      </AspectRatio>
    </Card>
  );
};

export const ImageWithLoader = (props: { src: string; alt: string }) => {
  const { src, alt } = props;

  const isLoaded = useBoolean(false);
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <NextImage layout="fill" src={src} alt={alt} onLoad={isLoaded.setTrue} />
      {!isLoaded.value && (
        <Skeleton animation="wave" variant="rect" width="100%" height="100%" />
      )}
    </div>
  );
};
