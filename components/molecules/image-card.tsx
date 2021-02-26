import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "../atoms/aspect-ratio";
import { SEO_KEYWORD } from "./meta";
import { IImage } from "../../lib/contracts";

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
}));

export const ImageCard = (props: { image: IImage }) => {
  const { image } = props;
  const classes = useStyles();
  return (
    <Card>
      <AspectRatio ratio={[1, 1]}>
        <Image
          className={classes.cover}
          layout="fill"
          src={image.url}
          alt={SEO_KEYWORD}
        />
      </AspectRatio>
    </Card>
  );
};
