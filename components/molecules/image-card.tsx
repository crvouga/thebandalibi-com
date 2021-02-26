import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Image from "next/image";
import React from "react";
import { IImage } from "../../lib/contracts";
import { AspectRatio } from "../atoms/aspect-ratio";
import { SEO_KEYWORD } from "./meta";

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
}));

export const ImageCard = ({ image }: { image: IImage }) => {
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
